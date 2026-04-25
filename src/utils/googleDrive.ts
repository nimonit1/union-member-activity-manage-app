/**
 * Google Drive API 連携ユーティリティ
 */

const CLIENT_ID = '541237405602-df30i3dm5eje25fl2thhhghp25erv2s6.apps.googleusercontent.com';
const SCOPES = 'https://www.googleapis.com/auth/drive.appdata';

let tokenClient: any = null;
let accessToken: string | null = null;

export const googleDrive = {
    /**
     * Google Identity Services の初期化
     */
    init: () => {
        console.log('Google Drive Sync: Initializing version 1.0.6...');
        // キャッシュされたトークンの復元
        const cachedToken = sessionStorage.getItem('google_access_token');
        if (cachedToken) {
            accessToken = cachedToken;
            console.log('Google Drive Sync: Restored token from session storage.');
        }

        return new Promise<void>((resolve) => {
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
                            sessionStorage.setItem('google_access_token', accessToken || '');
                            resolve();
                        },
                    });
                    // 初期化完了を通知（トークン復元済みでも初期化は必要）
                    resolve();
                }
            }, 100);
        });
    },

    /**
     * ログイン（アクセストークンの取得）
     * @param silent サイレントモード（プロンプトを出さない）
     */
    signIn: (silent = false) => {
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
                    sessionStorage.setItem('google_access_token', accessToken || '');
                    resolve();
                }
            };
            tokenClient.requestAccessToken({ prompt: silent ? '' : 'consent' });
        });
    },

    /**
     * ログアウト
     */
    signOut: () => {
        if (accessToken) {
            window.google.accounts.oauth2.revoke(accessToken, () => {
                accessToken = null;
                sessionStorage.removeItem('google_access_token');
            });
        } else {
            sessionStorage.removeItem('google_access_token');
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

        return await googleDrive.safeParseJson(response);
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
