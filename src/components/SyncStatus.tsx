import React, { useState, useEffect } from 'react';
import { Cloud, RefreshCw, LogIn, LogOut } from 'lucide-react';
import { googleDrive } from '../utils/googleDrive';
import { storage } from '../utils/storage';

const SyncStatus: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isSyncing, setIsSyncing] = useState(false);
    const [lastSynced, setLastSynced] = useState<string | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            // APIの初期化を待つ（App.tsxでinitされているはずだが念のため）
            await new Promise(resolve => setTimeout(resolve, 500));

            // sessionStorage または localStorage のフラグを確認
            const authenticated = googleDrive.isAuthenticated();
            const shouldSync = localStorage.getItem('union_app_sync_enabled') === 'true';

            if (authenticated) {
                // すでにトークンが復元されている（sessionStorage）
                setIsAuthenticated(true);
                handleSync(true);
            } else if (shouldSync) {
                // トークンはないが同期設定がON（リロード・ブリッジ失敗時や初回）
                try {
                    await googleDrive.signIn(true); // サイレントサインイン
                    setIsAuthenticated(true);
                    handleSync(true);
                } catch (e) {
                    console.log('Auto-reconnect failed (expired or revoked):', e);
                    localStorage.removeItem('union_app_sync_enabled');
                    setIsAuthenticated(false);
                }
            } else {
                setIsAuthenticated(false);
            }
        };

        checkAuth();

        // 定期的な同期チェック (3分おき)
        const interval = setInterval(() => {
            if (googleDrive.isAuthenticated()) {
                handleSync(false); // バックグラウンドチェック
            }
        }, 3 * 60 * 1000);

        // ウィンドウフォーカス時の同期チェック
        const onFocus = () => {
            if (googleDrive.isAuthenticated()) {
                handleSync(false);
            }
        };
        window.addEventListener('focus', onFocus);

        return () => {
            clearInterval(interval);
            window.removeEventListener('focus', onFocus);
        };
    }, []);

    const handleSignIn = async () => {
        try {
            await googleDrive.signIn();
            localStorage.setItem('union_app_sync_enabled', 'true');
            setIsAuthenticated(true);
            handleSync();
        } catch (error) {
            console.error('Sign in failed:', error);
            alert('Googleログインに失敗しました。');
        }
    };

    const handleSignOut = () => {
        googleDrive.signOut();
        localStorage.removeItem('union_app_sync_enabled');
        setIsAuthenticated(false);
    };

    const handleSync = async (force: boolean = true) => {
        if (isSyncing) return;

        // 認証チェック
        if (!googleDrive.isAuthenticated()) return;

        setIsSyncing(true);
        try {
            if (!force) {
                // メタデータを確認して、クラウド側が新しい場合のみ同期する
                const fileId = await googleDrive.getOrCreateFile('union_app_data.json');
                const meta = await googleDrive.getFileMetadata(fileId);
                const cloudTime = meta?.modifiedTime;

                // localStorage に保存されている最終同期時刻と比較
                const localLastSync = localStorage.getItem('union_app_last_cloud_sync');
                if (cloudTime && localLastSync && new Date(cloudTime) <= new Date(localLastSync)) {
                    // クラウド側が更新されていなければスキップ
                    return;
                }
            }

            await storage.syncWithCloud();
            const now = new Date();
            setLastSynced(now.toLocaleTimeString());
            localStorage.setItem('union_app_last_cloud_sync', now.toISOString());

            // 自動同期でクラウド側が高い（更新された）場合はリロードして反映
            if (!force) {
                window.location.reload();
            }
        } catch (error: any) {
            console.error('Sync Error:', error);
            if (force) {
                const errorMsg = error instanceof Error ? error.message : JSON.stringify(error);
                alert(`同期に失敗しました。\n詳細: ${errorMsg}`);
            }
        } finally {
            setIsSyncing(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="sync-status">
                <button className="sync-btn login" onClick={handleSignIn}>
                    <LogIn size={16} />
                    <span>クラウド同期を開始</span>
                </button>
                <style>{`
                    .sync-status { padding: 0.5rem 1rem; }
                    .sync-btn {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        background-color: var(--primary);
                        color: white;
                        border: none;
                        padding: 0.5rem 0.75rem;
                        border-radius: 6px;
                        font-size: 0.75rem;
                        cursor: pointer;
                        width: 100%;
                        justify-content: center;
                    }
                    .sync-btn:hover { opacity: 0.9; }
                `}</style>
            </div>
        );
    }

    return (
        <div className="sync-status authenticated">
            <div className="status-info">
                {isSyncing ? (
                    <RefreshCw size={14} className="spin" />
                ) : (
                    <Cloud size={14} className="success" />
                )}
                <div className="text-content">
                    <span className="label">クラウド同期中</span>
                    {lastSynced && <span className="time">最終: {lastSynced}</span>}
                </div>
            </div>
            <div className="actions">
                <button className="icon-btn" onClick={() => handleSync(true)} title="今すぐ同期" disabled={isSyncing}>
                    <RefreshCw size={14} />
                </button>
                <button className="icon-btn" onClick={handleSignOut} title="ログアウト">
                    <LogOut size={14} />
                </button>
            </div>
            <style>{`
                .sync-status.authenticated {
                    padding: 0.5rem 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: rgba(255, 255, 255, 0.03);
                    border-radius: 8px;
                    margin: 0.5rem 1rem;
                }
                .mobile-header .sync-status.authenticated {
                    margin: 0;
                    padding: 0;
                    background: none;
                }
                .mobile-header .sync-status {
                    padding: 0;
                }
                .status-info { display: flex; align-items: center; gap: 0.75rem; }
                .text-content { display: flex; flex-direction: column; }
                .label { font-size: 0.7rem; font-weight: 700; color: var(--text-main); }
                .time { font-size: 0.6rem; color: var(--text-muted); }
                .success { color: var(--success); }
                .spin { animation: rotate 2s linear infinite; color: var(--primary); }
                @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .actions { display: flex; gap: 0.25rem; }
                .icon-btn {
                    background: none;
                    border: none;
                    color: var(--text-muted);
                    padding: 4px;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .icon-btn:hover { background-color: #334155; color: var(--text-main); }
                .icon-btn:disabled { opacity: 0.5; cursor: not-allowed; }
            `}</style>
        </div>
    );
};

export default SyncStatus;
