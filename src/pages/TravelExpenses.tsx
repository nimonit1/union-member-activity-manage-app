import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { TravelExpenseItem, ScheduleEvent } from '../types';
import { Plus, Calendar, Trash2, Edit2, X, Save, MapPin, ChevronRight } from 'lucide-react';
import TravelExpenseForm from '../components/TravelExpenseForm';

const TravelExpenses: React.FC = () => {
    const [expenses, setExpenses] = useState<TravelExpenseItem[]>([]);
    const [events, setEvents] = useState<ScheduleEvent[]>([]);
    const [editingItem, setEditingItem] = useState<Partial<TravelExpenseItem> | null>(null);

    useEffect(() => {
        setExpenses(storage.getTravelExpenses());
        setEvents(storage.getEvents());
    }, []);

    const saveExpenses = (newExpenses: TravelExpenseItem[]) => {
        setExpenses(newExpenses);
        storage.saveTravelExpenses(newExpenses);
    };

    const handleAdd = () => {
        const newItem: Partial<TravelExpenseItem> = {
            id: Date.now().toString(),
            title: '',
            date: new Date().toISOString().split('T')[0],
            routes: [],
            totalAmount: 0
        };
        setEditingItem(newItem);
    };

    const handleEdit = (item: TravelExpenseItem) => {
        setEditingItem({ ...item });
    };

    const handleDelete = (id: string) => {
        if (confirm('この旅費明細を削除しますか？')) {
            saveExpenses(expenses.filter(e => e.id !== id));
        }
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingItem || !editingItem.title) return;

        // 合計金額の再計算
        const total = (editingItem.routes || []).reduce((sum, r) => sum + (r.amount * (r.isRoundTrip ? 2 : 1)), 0);
        const finalItem = { ...editingItem, totalAmount: total } as TravelExpenseItem;

        if (expenses.find(e => e.id === finalItem.id)) {
            saveExpenses(expenses.map(e => e.id === finalItem.id ? finalItem : e));
        } else {
            saveExpenses([finalItem, ...expenses]);
        }
        setEditingItem(null);
    };

    // イベントとの紐付け（もしあれば）
    const getRelatedEvent = (eventId?: string) => {
        if (!eventId) return null;
        return events.find(e => e.id === eventId);
    };

    return (
        <div className="travel-page">
            <header className="page-header">
                <h1>旅費精算管理</h1>
                <button className="primary-btn" onClick={handleAdd}>
                    <Plus size={18} />
                    新規作成
                </button>
            </header>

            <div className="expense-list">
                {expenses.length > 0 ? (
                    expenses.sort((a, b) => b.date.localeCompare(a.date)).map(item => (
                        <div key={item.id} className="expense-card">
                            <div className="expense-card-header">
                                <div className="date-badge">
                                    <Calendar size={14} />
                                    {item.date}
                                </div>
                                <div className="total-amount">
                                    ¥{item.totalAmount.toLocaleString()}
                                </div>
                            </div>

                            <h3 className="expense-title">{item.title}</h3>

                            <div className="routes-summary">
                                {item.routes.map((r, i) => (
                                    <div key={r.id} className="route-summary-item">
                                        <MapPin size={12} />
                                        <span>{r.from}</span>
                                        <ChevronRight size={12} />
                                        <span>{r.to}</span>
                                        {i < item.routes.length - 1 && <span className="separator">/</span>}
                                    </div>
                                ))}
                            </div>

                            {item.relatedEventId && (
                                <div className="related-event-info">
                                    <Calendar size={12} />
                                    <span>関連予定: {getRelatedEvent(item.relatedEventId)?.title || '不明なイベント'}</span>
                                </div>
                            )}

                            <div className="card-actions">
                                <button className="icon-btn" onClick={() => handleEdit(item)}><Edit2 size={16} /></button>
                                <button className="icon-btn delete" onClick={() => handleDelete(item.id)}><Trash2 size={16} /></button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="empty-state">旅費明細がありません。「新規作成」から追加してください。</div>
                )}
            </div>

            {editingItem && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{editingItem.id && expenses.find(e => e.id === editingItem.id) ? '旅費明細を編集' : '新規旅費明細'}</h2>
                            <button className="close-btn" onClick={() => setEditingItem(null)}><X size={20} /></button>
                        </div>
                        <form onSubmit={handleSave}>
                            <div className="form-group">
                                <label>タイトル</label>
                                <input
                                    type="text"
                                    required
                                    value={editingItem.title || ''}
                                    onChange={e => setEditingItem({ ...editingItem, title: e.target.value })}
                                    placeholder="例：〇〇支部会議 旅費"
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>日付</label>
                                    <input
                                        type="date"
                                        required
                                        value={editingItem.date || ''}
                                        onChange={e => setEditingItem({ ...editingItem, date: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>関連予定 (任意)</label>
                                    <select
                                        value={editingItem.relatedEventId || ''}
                                        onChange={e => setEditingItem({ ...editingItem, relatedEventId: e.target.value || undefined })}
                                    >
                                        <option value="">なし</option>
                                        {events.filter(ev => ev.date === editingItem.date).map(ev => (
                                            <option key={ev.id} value={ev.id}>{ev.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <TravelExpenseForm
                                routes={editingItem.routes || []}
                                onChange={routes => setEditingItem({ ...editingItem, routes })}
                            />

                            <div className="modal-footer">
                                <button type="button" className="cancel-btn" onClick={() => setEditingItem(null)}>キャンセル</button>
                                <button type="submit" className="save-btn"><Save size={18} /> 保存する</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <style>{`
                .travel-page {
                    max-width: 900px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .expense-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 1.5rem;
                }

                .expense-card {
                    background-color: var(--bg-card);
                    border: 1px solid #334155;
                    border-radius: 12px;
                    padding: 1.25rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    position: relative;
                }

                .expense-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .date-badge {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    background-color: rgba(255, 255, 255, 0.05);
                    padding: 2px 8px;
                    border-radius: 4px;
                }

                .total-amount {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: var(--success);
                }

                .expense-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0.25rem 0;
                }

                .routes-summary {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    font-size: 0.8rem;
                    color: var(--text-muted);
                }

                .route-summary-item {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                }

                .related-event-info {
                    font-size: 0.75rem;
                    color: var(--primary);
                    background-color: rgba(59, 130, 246, 0.1);
                    padding: 4px 8px;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                }

                .card-actions {
                    display: flex;
                    justify-content: flex-end;
                    gap: 0.5rem;
                    margin-top: 0.5rem;
                    padding-top: 0.75rem;
                    border-top: 1px solid #334155;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }

                @media (max-width: 640px) {
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default TravelExpenses;
