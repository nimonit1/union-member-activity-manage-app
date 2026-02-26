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
            // 初期状態の確認
            const authenticated = googleDrive.isAuthenticated();
            setIsAuthenticated(authenticated);

            // すでにログインの意志がある（localStorageにフラグがある）場合は自動再接続を試行
            const shouldSync = localStorage.getItem('union_app_sync_enabled') === 'true';
            if (!authenticated && shouldSync) {
                try {
                    // APIの初期化を待つ（App.tsxでinitされているはずだが念のため）
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    await googleDrive.signIn(true); // サイレントサインイン
                    setIsAuthenticated(true);
                    handleSync();
                } catch (e) {
                    console.log('Auto-reconnect failed (expired or revoked):', e);
                    localStorage.removeItem('union_app_sync_enabled');
                    setIsAuthenticated(false);
                }
            }
        };

        checkAuth();
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

    const handleSync = async () => {
        if (isSyncing) return;
        setIsSyncing(true);
        try {
            await storage.syncWithCloud();
            setLastSynced(new Date().toLocaleTimeString());
            // 同期完了後に画面をリロードまたは状態を更新する必要があるかもしれないが、
            // 今回は簡易的にリロードを促すか、親コンポーネントで管理するのが望ましい。
            // ここでは簡易的に成功メッセージを表示。
        } catch (error: any) {
            console.error('Detailed Sync Error:', error);
            const errorMsg = error instanceof Error ? error.message : JSON.stringify(error);
            alert(`同期に失敗しました。\n詳細: ${errorMsg}\n\n※コンソールが確認できる場合は詳細を確認してください。`);
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
                <button className="icon-btn" onClick={handleSync} title="今すぐ同期" disabled={isSyncing}>
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
