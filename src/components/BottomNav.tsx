import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Calendar as CalendarIcon } from 'lucide-react';

const BottomNav: React.FC = () => {
    const menuItems = [
        { name: 'ダッシュ', path: '/', icon: <LayoutDashboard size={20} /> },
        { name: 'タスク', path: '/tasks', icon: <CheckSquare size={20} /> },
        { name: '予定', path: '/calendar', icon: <CalendarIcon size={20} /> },
    ];

    return (
        <nav className="bottom-nav">
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
                    height: 64px;
                    background-color: var(--bg-card);
                    border-top: 1px solid #334155;
                    padding: 0 1rem;
                    z-index: 1000;
                    backdrop-filter: blur(10px);
                }

                .bottom-nav-link {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.25rem;
                    color: var(--text-muted);
                    text-decoration: none;
                    font-size: 0.7rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }

                .bottom-nav-link.active {
                    color: var(--primary);
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
