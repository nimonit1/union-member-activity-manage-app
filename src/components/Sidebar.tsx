import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Calendar as CalendarIcon, Settings, User } from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'ダッシュボード', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'タスク管理', path: '/tasks', icon: <CheckSquare size={20} /> },
    { name: 'スケジュール', path: '/calendar', icon: <CalendarIcon size={20} /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="app-logo">
          <div className="logo-icon">U</div>
          <span>役員活動管理</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <User size={18} />
          <span>組合役員 A</span>
        </div>
        <button className="settings-btn" title="設定">
          <Settings size={18} />
        </button>
      </div>

      <style>{`
        .sidebar {
          width: var(--sidebar-width);
          background-color: var(--bg-card);
          border-right: 1px solid #334155;
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid #334155;
        }

        .app-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background-color: var(--primary);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1.5rem;
          color: var(--text-muted);
          transition: all 0.2s ease;
          border-left: 3px solid transparent;
        }

        .nav-link:hover {
          background-color: #334155;
          color: var(--text-main);
        }

        .nav-link.active {
          color: var(--primary);
          background-color: #1e293b;
          border-left-color: var(--primary);
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 41, 59, 0) 100%);
        }

        .sidebar-footer {
          padding: 1rem 1.5rem;
          border-top: 1px solid #334155;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .settings-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          padding: 4px;
          border-radius: 4px;
        }

        .settings-btn:hover {
          background-color: #334155;
          color: var(--text-main);
        }

        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
