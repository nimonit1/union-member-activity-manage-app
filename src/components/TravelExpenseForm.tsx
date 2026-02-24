import React, { useMemo } from 'react';
import { TravelRoute, TransportType, ScheduleEvent } from '../types';
import { Plus, Trash2, Clock, MapPin, Wallet, Copy } from 'lucide-react';
import { storage } from '../utils/storage';

interface TravelExpenseFormProps {
    routes: TravelRoute[];
    onChange: (routes: TravelRoute[]) => void;
}

const TravelExpenseForm: React.FC<TravelExpenseFormProps> = ({ routes, onChange }) => {
    // 履歴からのコピー用
    const recentRoutes = useMemo(() => {
        const events = storage.getEvents();
        const allRoutes = events
            .filter(e => e.expense && e.expense.routes.length > 0)
            .flatMap(e => e.expense!.routes);

        // ユニークな経路のみ抽出
        const unique = [];
        const seen = new Set();
        for (const r of allRoutes) {
            const key = `${r.from}-${r.to}-${r.amount}`;
            if (!seen.has(key)) {
                unique.push(r);
                seen.add(key);
            }
        }
        return unique.slice(0, 3); // 最新3件
    }, [routes]); // routesが更新された時ではなく、初期化時や必要時に再計算

    const addRoute = () => {
        const newRoute: TravelRoute = {
            id: Date.now().toString(),
            from: '',
            to: '',
            amount: 0,
            isRoundTrip: true,
            transportType: 'public',
        };
        onChange([...routes, newRoute]);
    };

    const copyRoute = (baseRoute: TravelRoute) => {
        const newRoute: TravelRoute = {
            ...baseRoute,
            id: Date.now().toString(),
        };
        onChange([...routes, newRoute]);
    };

    const updateRoute = (id: string, updates: Partial<TravelRoute>) => {
        onChange(routes.map(r => r.id === id ? { ...r, ...updates } : r));
    };

    const removeRoute = (id: string) => {
        onChange(routes.filter(r => r.id !== id));
    };

    const total = routes.reduce((sum, r) => sum + (r.amount * (r.isRoundTrip ? 2 : 1)), 0);

    return (
        <div className="travel-expense-form">
            <div className="expense-header">
                <label><Wallet size={14} /> 旅費精算</label>
                <span className="total-badge">合計: ¥{total.toLocaleString()}</span>
            </div>

            {recentRoutes.length > 0 && (
                <div className="recent-routes">
                    <span className="recent-label">履歴からコピー:</span>
                    <div className="recent-list">
                        {recentRoutes.map(r => (
                            <button key={r.id} className="copy-chip" onClick={() => copyRoute(r)}>
                                <MapPin size={10} /> {r.from}→{r.to} (¥{r.amount.toLocaleString()})
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="routes-list">
                {routes.map((route) => (
                    <div key={route.id} className="route-item">
                        <div className="route-inputs">
                            <input type="text" placeholder="出発" value={route.from} onChange={e => updateRoute(route.id, { from: e.target.value })} />
                            <span className="arrow">→</span>
                            <input type="text" placeholder="到着" value={route.to} onChange={e => updateRoute(route.id, { to: e.target.value })} />
                        </div>
                        <div className="route-meta">
                            <div className="amount-box">
                                <span>¥</span>
                                <input type="number" value={route.amount || ''} onChange={e => updateRoute(route.id, { amount: parseInt(e.target.value) || 0 })} />
                            </div>
                            <div className="trip-toggle">
                                <button className={!route.isRoundTrip ? 'active' : ''} onClick={() => updateRoute(route.id, { isRoundTrip: false })}>片道</button>
                                <button className={route.isRoundTrip ? 'active' : ''} onClick={() => updateRoute(route.id, { isRoundTrip: true })}>往復</button>
                            </div>
                            <button className="del-btn" onClick={() => removeRoute(route.id)}><Trash2 size={14} /></button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="add-btn" onClick={addRoute}><Plus size={14} /> 経路を追加</button>

            <style>{`
        .travel-expense-form { margin-top: 1rem; border-top: 1px solid #334155; padding-top: 1rem; }
        .expense-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
        .expense-header label { font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem; font-weight: 700; }
        .total-badge { background-color: var(--success); color: white; padding: 2px 8px; border-radius: 4px; font-weight: 700; font-size: 0.85rem; }

        .recent-routes { margin-bottom: 1rem; }
        .recent-label { font-size: 0.7rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem; }
        .recent-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .copy-chip { background-color: #334155; border: 1px solid #475569; color: var(--text-muted); font-size: 0.7rem; padding: 2px 8px; border-radius: 20px; cursor: pointer; display: flex; align-items: center; gap: 0.3rem; }
        .copy-chip:hover { background-color: #475569; color: var(--text-main); }

        .routes-list { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 0.75rem; }
        .route-item { background-color: rgba(255, 255, 255, 0.03); border: 1px solid #334155; border-radius: 8px; padding: 0.75rem; }
        .route-inputs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; }
        .route-inputs input { background: none; border: none; border-bottom: 1px solid #334155; color: white; flex: 1; font-size: 0.85rem; padding: 2px 0; }
        .route-inputs input:focus { border-bottom-color: var(--primary); outline: none; }
        .arrow { color: var(--text-muted); font-size: 0.8rem; }

        .route-meta { display: flex; align-items: center; gap: 1rem; }
        .amount-box { display: flex; align-items: center; gap: 4px; background-color: #1e293b; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; width: 100px; }
        .amount-box input { background: none; border: none; color: white; width: 100%; text-align: right; }
        .amount-box input:focus { outline: none; }

        .trip-toggle { display: flex; background-color: #1e293b; border-radius: 4px; overflow: hidden; }
        .trip-toggle button { background: none; border: none; color: var(--text-muted); font-size: 0.7rem; padding: 4px 10px; cursor: pointer; }
        .trip-toggle button.active { background-color: var(--primary); color: white; }
        .del-btn { margin-left: auto; color: var(--text-muted); background: none; border: none; }
        .del-btn:hover { color: var(--danger); }

        .add-btn { width: 100%; background: none; border: 1px dashed #475569; color: var(--text-muted); padding: 0.5rem; border-radius: 6px; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
        .add-btn:hover { background-color: rgba(255, 255, 255, 0.03); color: var(--text-main); border-style: solid; }
      `}</style>
        </div>
    );
};

export default TravelExpenseForm;
