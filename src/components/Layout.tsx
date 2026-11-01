import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import SyncStatus from './SyncStatus';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  // 画面遷移したら先頭へスクロールする（前の画面のスクロール位置が残るのを防ぐ）
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="layout-container">
      {/* キーボード操作時に、ナビゲーションを飛ばして本文へ移動するためのリンク。
          HashRouter では href="#..." がルーティングを壊すため、ボタンでフォーカスを移す */}
      <button type="button" className="skip-link" onClick={() => mainRef.current?.focus()}>
        メインコンテンツへ移動
      </button>
      <header className="mobile-header">
        <div className="app-logo-mini">
          <div className="logo-icon-mini" aria-hidden="true">U</div>
          <span>役員活動管理</span>
        </div>
        <div className="mobile-sync-area">
          <SyncStatus />
        </div>
      </header>
      <Sidebar />
      <main className="main-content" id="main-content" ref={mainRef} tabIndex={-1}>
        {children}
      </main>
      <BottomNav />

      <style>{`
        .layout-container {
          display: flex;
          min-height: 100vh;
          min-height: 100dvh;
        }

        .skip-link {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          z-index: 5000;
          padding: 0.5rem 1rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: var(--radius-sm);
          font-weight: 600;
          /* 通常は画面外に退避し、フォーカスされたときだけ表示する */
          transform: translateY(-200%);
        }

        .skip-link:focus {
          transform: translateY(0);
        }

        .main-content {
          flex: 1;
          /* flex の子が内容幅まで広がり、横スクロールテーブルがはみ出すのを防ぐ */
          min-width: 0;
          padding: 2rem;
          margin-left: 0; /* Sidebar is fixed or flex */
          overflow-y: auto;
          transition: padding 0.3s ease;
        }

        .main-content:focus {
          outline: none;
        }

        .mobile-header {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          /* ノッチ / ステータスバーの下から内容を始める（black-translucent 対応） */
          height: calc(var(--mobile-header-height) + var(--safe-top));
          background-color: var(--bg-card);
          border-bottom: 1px solid var(--border);
          padding: var(--safe-top) max(1rem, var(--safe-right)) 0 max(1rem, var(--safe-left));
          align-items: center;
          justify-content: space-between;
          z-index: 1000;
        }

        .app-logo-mini {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 0.9rem;
          white-space: nowrap;
        }

        .logo-icon-mini {
          width: 24px;
          height: 24px;
          background-color: var(--primary);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.8rem;
        }

        .mobile-sync-area {
          flex: 1;
          min-width: 0;
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 768px) {
          .mobile-header {
            display: flex;
          }
          .layout-container {
            display: block;
            padding-top: calc(var(--mobile-header-height) + var(--safe-top)); /* Space for mobile header */
          }
          .main-content {
            padding: 1rem;
            padding-left: max(1rem, var(--safe-left));
            padding-right: max(1rem, var(--safe-right));
            /* 下部ナビ + ホームインジケータ + 余白 */
            padding-bottom: calc(var(--bottom-nav-height) + var(--safe-bottom) + 1rem);
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
