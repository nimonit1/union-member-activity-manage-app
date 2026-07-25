/**
 * Google Drive API 連携ユーティリティ
 */

// OAuth Client ID はビルド時に環境変数（VITE_GOOGLE_CLIENT_ID）から埋め込む。
// ローカル開発: .env.local に設定 / CI: GitHub Actions の Secrets から注入。
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const SCOPES = 'https://www.googleapis.com/auth/drive.appdata';

if (!CLIENT_ID) {
    console.error(
        'VITE_GOOGLE_CLIENT_ID が設定されていません。.env.local を作成し、Google Cloud Console で取得した OAuth Client ID を設定してください。'
    );
}

let tokenClient: any = null;
let accessToken: string | null = null;
// モジュールロード時に Promise を生成し、resolve 関数を外部に保持する
// SyncStatus が App より先にマウントされても waitForInit() が正しく待機できる
let resolveInit!: () => void;
const initPromise: Promise<void> = new Promise<void>((resolve) => {
    resolveInit = resolve;
});

export const googleDrive = {
    /**
     * Google Identity Services の初期化
     */
    init: () => {
        console.log('Google Drive Sync: Initializing version 1.0.8...');
        // キャッシュされたトークンの復元（同期処理）
        // localStorage を使用: iOSのホーム画面PWAはプロセス終了時にsessionStorageが失われるため
        const cachedToken = localStorage.getItem('google_access_token');
        if (cachedToken) {
            accessToken = cachedToken;
            console.log('Google Drive Sync: Restored token from local storage.');
        }

        const checkGsi = setInterval(() => {
            if (window.google) {
                clearInterval(checkGsi);
                tokenClient = window.google.accounts.oauth2.initTokenClient({
                    client_id: CLIENT_ID,
                    scope: SCOPES,
                    callback: (tokenResponse: any) => {
                        if (tokenResponse.error !== undefined) {
                            throw tokenResponse;
                        }
                        accessToken = tokenResponse.access_token;
                        localStorage.setItem('google_access_token', accessToken || '');
                    },
                });
                // tokenClient のセットアップ完了でモジュールレベルの Promise を解決する
                resolveInit();
            }
        }, 100);

        return initPromise;
    },

    /**
     * GIS の初期化完了を待機する
     * initPromise はモジュールロード時に生成済みなので常に有効な Promise を返す
     */
    waitForInit: (): Promise<void> => initPromise,

    /**
     * ログイン（アクセストークンの取得）
     * prompt: '' は Google が状況に応じて自動判断する設定。既に許可済みのユーザーには
     * 同意画面をスキップして即座にトークンを発行し、未許可のユーザーには同意画面を表示する。
     */
    signIn: () => {
        return new Promise<void>((resolve, reject) => {
            if (!tokenClient) {
                reject(new Error('Google Drive API not initialized'));
                return;
            }
            tokenClient.callback = (response: any) => {
                if (response.error) {
                    reject(response);
                } else {
                    accessToken = response.access_token;
                    localStorage.setItem('google_access_token', accessToken || '');
                    resolve();
                }
            };
            tokenClient.requestAccessToken({ prompt: '' });
        });
    },

    /**
     * ログアウト
     */
    signOut: () => {
        if (accessToken) {
            window.google.accounts.oauth2.revoke(accessToken, () => {
                accessToken = null;
                localStorage.removeItem('google_access_token');
            });
        } else {
            localStorage.removeItem('google_access_token');
        }
    },

    /**
     * 認証済みかどうか
     */
    isAuthenticated: () => {
        return accessToken !== null;
    },

    /**
     * JSONレスポンスの安全なパース
     */
    safeParseJson: async (response: Response) => {
        const text = await response.text();
        if (!text || text.trim() === '') return { files: [] }; // 検索等のため空配列を返す
        try {
            return JSON.parse(text);
        } catch (e) {
            console.error('JSON parse error:', e, 'Content:', text);
            return null;
        }
    },

    /**
     * AppDataFolder 内のファイルを検索、なければ作成
     */
    getOrCreateFile: async (fileName: string) => {
        if (!accessToken) throw new Error('Not authenticated');

        // ファイル検索
        const searchResponse = await fetch(
            `https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=name='${fileName}'`,
            {
                headers: { Authorization: `Bearer ${accessToken}` }
            }
        );

        if (!searchResponse.ok) {
            const errorText = await searchResponse.text();
            console.error('Search API Error:', errorText);
            throw new Error(`Search failed: ${searchResponse.status}`);
        }

        const searchData = await googleDrive.safeParseJson(searchResponse);

        if (searchData && searchData.files && searchData.files.length > 0) {
            return searchData.files[0].id;
        }

        // なければ作成
        const createResponse = await fetch('https://www.googleapis.com/drive/v3/files', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: fileName,
                parents: ['appDataFolder'],
            }),
        });

        if (!createResponse.ok) {
            const errorText = await createResponse.text();
            console.error('Create File API Error:', errorText);
            throw new Error(`Create failed: ${createResponse.status}`);
        }

        const createData = await googleDrive.safeParseJson(createResponse);
        return createData?.id;
    },

    /**
     * ファイル内容の読み込み
     * 空ファイル（初回作成直後など）は null を返して初回アップロードに進む
     */
    getFileContent: async (fileId: string) => {
        if (!accessToken) throw new Error('Not authenticated');

        const response = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        if (!response.ok) {
            if (response.status === 404) return null;
            const errorText = await response.text();
            console.error('Get Content API Error:', errorText);
            throw new Error(`Failed to fetch file content: ${response.status}`);
        }

        const text = await response.text();
        // 空ファイル（初回作成直後）は null を返して uploadToCloud() に進む
        // safeParseJson の { files: [] } フォールバックは検索API向けのため使用しない
        if (!text || text.trim() === '') return null;
        try {
            return JSON.parse(text);
        } catch (e) {
            console.error('JSON parse error in getFileContent:', e, 'Content:', text);
            return null;
        }
    },

    /**
     * ファイルのメタデータ取得（更新日時など）
     */
    getFileMetadata: async (fileId: string) => {
        if (!accessToken) throw new Error('Not authenticated');

        const response = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=id,name,modifiedTime`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        if (!response.ok) {
            throw new Error(`Metadata fetch failed: ${response.status}`);
        }

        return await googleDrive.safeParseJson(response);
    },

    /**
     * ファイルの更新
     */
    updateFileContent: async (fileId: string, content: any) => {
        if (!accessToken) throw new Error('Not authenticated');

        try {
            const response = await fetch(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(content),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Update Content API Error:', errorText, 'Status:', response.status);
                throw new Error(`Update failed: ${response.status} - ${errorText}`);
            }

            return await googleDrive.safeParseJson(response);
        } catch (error) {
            console.error('Network error during updateFileContent:', error);
            throw error;
        }
    }
};

// 型定義の拡張
declare global {
    interface Window {
        google: any;
    }
}
