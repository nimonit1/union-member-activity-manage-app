import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Calendar as CalendarIcon, Settings as SettingsIcon, StickyNote } from 'lucide-react';

const BottomNav: React.FC = () => {
    const menuItems = [
        { name: 'ホーム', path: '/', icon: <LayoutDashboard size={20} aria-hidden="true" /> },
        { name: 'タスク', path: '/tasks', icon: <CheckSquare size={20} aria-hidden="true" /> },
        { name: '予定', path: '/calendar', icon: <CalendarIcon size={20} aria-hidden="true" /> },
        { name: 'メモ', path: '/memos', icon: <StickyNote size={20} aria-hidden="true" /> },
        { name: '設定', path: '/settings', icon: <SettingsIcon size={20} aria-hidden="true" /> },
    ];

    return (
        <nav className="bottom-nav" aria-label="メインナビゲーション">
            {menuItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `bottom-nav-link ${isActive ? 'active' : ''}`}
                >
                    {item.icon}
                    <span>{item.name}</span>
                </NavLink>
            ))}

            <style>{`
                .bottom-nav {
                    display: none;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    /* ホームインジケータ分の余白を含めた高さにする */
                    height: calc(var(--bottom-nav-height) + var(--safe-bottom));
                    background-color: var(--bg-card);
                    border-top: 1px solid var(--border);
                    padding: 0 max(0.5rem, var(--safe-right)) var(--safe-bottom) max(0.5rem, var(--safe-left));
                    z-index: 1000;
                    backdrop-filter: blur(10px);
                }

                .bottom-nav-link {
                    position: relative;
                    flex: 1;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.25rem;
                    color: var(--text-muted);
                    text-decoration: none;
                    font-size: 0.75rem;
                    font-weight: 600;
                    white-space: nowrap;
                    transition: color 0.2s ease;
                }

                .bottom-nav-link.active {
                    color: var(--primary);
                }

                /* 色の違いだけに頼らず、現在地を上部のバーでも示す */
                .bottom-nav-link.active::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 25%;
                    right: 25%;
                    height: 3px;
                    border-radius: 0 0 3px 3px;
                    background-color: var(--primary);
                }

                @media (max-width: 768px) {
                    .bottom-nav {
                        display: flex;
                    }
                }
            `}</style>
        </nav>
    );
};

export default BottomNav;
