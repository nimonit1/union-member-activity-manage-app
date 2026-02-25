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
                            resolve();
                        },
                    });
                    resolve();
                }
            }, 100);
        });
    },

    /**
     * ログイン（アクセストークンの取得）
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
                    resolve();
                }
            };
            tokenClient.requestAccessToken({ prompt: 'consent' });
        });
    },

    /**
     * ログアウト
     */
    signOut: () => {
        if (accessToken) {
            window.google.accounts.oauth2.revoke(accessToken, () => {
                accessToken = null;
            });
        }
    },

    /**
     * 認証済みかどうか
     */
    isAuthenticated: () => {
        return accessToken !== null;
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

        const searchData = await searchResponse.json();

        if (searchData.files && searchData.files.length > 0) {
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
        const createData = await createResponse.json();
        return createData.id;
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

        const text = await response.text();
        if (!text || text.trim() === '') {
            return null; // 空のファイルの場合は null を返す
        }

        try {
            return JSON.parse(text);
        } catch (e) {
            console.error('Failed to parse JSON content:', e, 'Content:', text);
            return null;
        }
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
                console.error('Update Content API Error:', errorText);
                throw new Error(`Update failed: ${response.status} - ${errorText}`);
            }
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
