import React from 'react';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import SyncStatus from './SyncStatus';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="mobile-header">
        <div className="app-logo-mini">
          <div className="logo-icon-mini">U</div>
          <span>役員活動管理</span>
        </div>
        <div className="mobile-sync-area">
          <SyncStatus />
        </div>
      </header>
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
      <BottomNav />

      <style>{`
        .layout-container {
          display: flex;
          min-height: 100vh;
        }

        .main-content {
          flex: 1;
          padding: 2rem;
          margin-left: 0; /* Sidebar is fixed or flex */
          overflow-y: auto;
          transition: padding 0.3s ease;
        }

        .mobile-header {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 56px;
          background-color: var(--bg-card);
          border-bottom: 1px solid #334155;
          padding: 0 1rem;
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
        }

        .logo-icon-mini {
          width: 24px;
          height: 24px;
          background-color: var(--primary);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.8rem;
        }

        .mobile-sync-area {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 768px) {
          .mobile-header {
            display: flex;
          }
          .layout-container {
            display: block;
            padding-top: 56px; /* Space for mobile header */
          }
          .main-content {
            padding: 1rem;
            padding-bottom: 80px; /* Space for BottomNav */
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
