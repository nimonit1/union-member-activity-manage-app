import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Cloud, RefreshCw, LogIn, LogOut } from 'lucide-react';
import { googleDrive, SignInSupersededError } from '../utils/googleDrive';
import { storage } from '../utils/storage';
import ConfirmDialog, { useConfirm } from './ConfirmDialog';
import ToastContainer, { useToast } from './Toast';

const SyncStatus: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [isSyncing, setIsSyncing] = useState(false);
    const [lastSynced, setLastSynced] = useState<string | null>(null);
    const [hasUpdate, setHasUpdate] = useState(false);
    const { toasts, showToast, dismissToast } = useToast();
    const { confirmDialogProps, confirm } = useConfirm();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // GIS の初期化完了を待つ（モバイルでは 500ms 固定では不十分なため Promise を使用）
                await googleDrive.waitForInit();

                // localStorage のトークン・同期フラグを確認
                const authenticated = googleDrive.isAuthenticated();
                const shouldSync = localStorage.getItem('union_app_sync_enabled') === 'true';

                if (authenticated) {
                    // すでにトークンが復元されている（localStorage）
                    setIsAuthenticated(true);
                    handleSync(false);
                } else if (shouldSync) {
                    // トークンはないが同期設定がON（リロード・ブリッジ失敗時や初回）
                    try {
                        // 自動・非ユーザー操作のサインインであることを明示する
                        await googleDrive.signIn({ silent: true });
                        setIsAuthenticated(true);
                        handleSync(false);
                    } catch (e) {
                        if (e instanceof SignInSupersededError) {
                            // 手動ログインに優先度負けしただけなので、状態・フラグは変更しない
                            // （UI状態は handleSignIn 側が更新する）
                            console.log('Auto-reconnect superseded by manual sign-in');
                            return;
                        }
                        const message = e instanceof Error ? e.message : String(e);
                        if (message.includes('not initialized')) {
                            // GIS が初期化されていないだけなのでフラグは保持する
                            console.log('Auto-reconnect skipped (GIS not ready):', e);
                        } else {
                            // トークン期限切れ・失効のときのみフラグを削除する
                            console.log('Auto-reconnect failed (expired or revoked):', e);
                            localStorage.removeItem('union_app_sync_enabled');
                        }
                        setIsAuthenticated(false);
                    }
                } else {
                    setIsAuthenticated(false);
                }
            } finally {
                setIsCheckingAuth(false);
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
        if (isSigningIn) return; // 連打防止
        setIsSigningIn(true);
        try {
            await googleDrive.signIn();
            localStorage.setItem('union_app_sync_enabled', 'true');
            setIsAuthenticated(true);
            handleSync();
        } catch (error) {
            if (error instanceof SignInSupersededError) {
                // 手動サインインが上書きされることは設計上発生しない想定だが、念のため無害に無視する
                console.log('Manual sign-in unexpectedly superseded:', error);
                return;
            }
            console.error('Sign in failed:', error);
            showToast('Googleログインに失敗しました。もう一度お試しください。', 'error');
        } finally {
            setIsSigningIn(false);
        }
    };

    const handleSignOut = async () => {
        // 同期ボタンと隣り合っているため、誤タップで同期が止まらないよう確認を挟む
        const ok = await confirm({
            title: 'クラウド同期を停止',
            message: 'ログアウトすると、他の端末との自動同期が止まります。この端末のデータは残ります。',
            confirmLabel: 'ログアウト',
            danger: false,
        });
        if (!ok) return;
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
            setLastSynced(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            localStorage.setItem('union_app_last_cloud_sync', now.toISOString());

            // 自動同期でクラウド側が高い（更新された）場合は通知のみ行う
            if (!force) {
                setHasUpdate(true);
            } else {
                // 手動同期（ボタン押下）の場合はリロードして反映
                window.location.reload();
            }
        } catch (error: any) {
            console.error('Sync Error:', error);
            if (force) {
                const errorMsg = error instanceof Error ? error.message : JSON.stringify(error);
                showToast(`同期に失敗しました。詳細: ${errorMsg}`, 'error');
            }
        } finally {
            setIsSyncing(false);
        }
    };

    // トーストと確認ダイアログは、サイドバーの重なり順(z-index)の影響を受けないよう body 直下に描画する
    const overlays = createPortal(
        <>
            <ConfirmDialog {...confirmDialogProps} />
            <ToastContainer toasts={toasts} onDismiss={dismissToast} />
        </>,
        document.body
    );

    if (isCheckingAuth) {
        return (
            <div className="sync-status" role="status">
                <div className="sync-checking">
                    <RefreshCw size={14} className="sync-spin" aria-hidden="true" />
                    <span>同期状態を確認中...</span>
                </div>
                <style>{SYNC_STYLES}</style>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="sync-status">
                <button className="sync-btn" onClick={handleSignIn} disabled={isSigningIn}>
                    <LogIn size={16} aria-hidden="true" />
                    <span>{isSigningIn ? 'ログイン中...' : 'クラウド同期を開始'}</span>
                </button>
                {overlays}
                <style>{SYNC_STYLES}</style>
            </div>
        );
    }

    return (
        <div className="sync-status authenticated">
            <div className="sync-info">
                {isSyncing ? (
                    <RefreshCw size={14} className="sync-spin" aria-hidden="true" />
                ) : (
                    <Cloud size={14} className="sync-ok" aria-hidden="true" />
                )}
                <div className="sync-text">
                    <span className="sync-label">クラウド同期中</span>
                    {hasUpdate ? (
                        <button className="sync-update-btn" onClick={() => window.location.reload()}>
                            新しいデータあり（再読込）
                        </button>
                    ) : (
                        lastSynced && <span className="sync-time">最終: {lastSynced}</span>
                    )}
                </div>
            </div>
            <div className="sync-actions">
                <button className="sync-icon-btn" onClick={() => handleSync(true)} title="今すぐ同期" aria-label="今すぐ同期" disabled={isSyncing}>
                    <RefreshCw size={16} aria-hidden="true" />
                </button>
                <button className="sync-icon-btn" onClick={handleSignOut} title="ログアウト" aria-label="ログアウト">
                    <LogOut size={16} aria-hidden="true" />
                </button>
            </div>
            {overlays}
            <style>{SYNC_STYLES}</style>
        </div>
    );
};

// 汎用的なクラス名(.label / .time / .icon-btn など)はアプリ全体のスタイルと衝突していたため、
// このコンポーネントのクラスはすべて sync- 接頭辞で名前空間を分けている
const SYNC_STYLES = `
    .sync-status { padding: 0.5rem 1rem; }
    .sync-status.authenticated {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        background-color: rgba(255, 255, 255, 0.03);
        border-radius: var(--radius-md);
        margin: 0.5rem 1rem;
    }
    .mobile-header .sync-status,
    .mobile-header .sync-status.authenticated {
        margin: 0;
        padding: 0;
        background: none;
    }

    .sync-checking {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-muted);
        font-size: 0.75rem;
    }

    .sync-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        min-height: 36px;
        background-color: var(--primary);
        color: white;
        border: none;
        padding: 0.5rem 0.75rem;
        border-radius: var(--radius-sm);
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        white-space: nowrap;
    }
    .sync-btn:hover:not(:disabled) { background-color: var(--primary-dark); }
    .sync-btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .mobile-header .sync-btn { width: auto; min-height: 40px; }

    .sync-info { display: flex; align-items: center; gap: 0.75rem; min-width: 0; }
    .sync-text { display: flex; flex-direction: column; min-width: 0; }
    .sync-label { font-size: 0.75rem; font-weight: 700; color: var(--text-main); white-space: nowrap; }
    .sync-time { font-size: 0.75rem; color: var(--text-muted); white-space: nowrap; }
    .sync-ok { color: var(--success); flex-shrink: 0; }
    .sync-spin { animation: sync-rotate 2s linear infinite; color: var(--primary); flex-shrink: 0; }

    .sync-update-btn {
        background: var(--warning);
        color: #000;
        border: none;
        padding: 4px 10px;
        border-radius: var(--radius-xs);
        font-size: 0.75rem;
        font-weight: 800;
        margin-top: 2px;
        cursor: pointer;
        white-space: nowrap;
        animation: sync-bounce 2s infinite;
    }
    @keyframes sync-bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-3px); }
        60% { transform: translateY(-2px); }
    }
    @keyframes sync-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

    .sync-actions { display: flex; gap: 0.25rem; flex-shrink: 0; }
    .sync-icon-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 36px;
        min-height: 36px;
        background: none;
        border: none;
        color: var(--text-muted);
        border-radius: var(--radius-sm);
        cursor: pointer;
    }
    .sync-icon-btn:hover:not(:disabled) { background-color: var(--border); color: var(--text-main); }
    .sync-icon-btn:disabled { opacity: 0.5; cursor: not-allowed; }

    /* モバイルヘッダーは幅が狭いので、ラベルを隠して時刻とボタンだけにする */
    @media (max-width: 768px) {
        .mobile-header .sync-label { display: none; }
        .mobile-header .sync-icon-btn { min-width: 44px; min-height: 44px; }
    }
`;

export default SyncStatus;
