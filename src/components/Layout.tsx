import React from 'react';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
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

        @media (max-width: 768px) {
          .layout-container {
            display: block; /* sidebar is hidden */
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
