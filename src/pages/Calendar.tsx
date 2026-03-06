import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { ScheduleEvent, Task, MeetingDefinition, Role } from '../types';
import { ChevronLeft, ChevronRight, Plus, MapPin, Wallet, Trash2, Clock, Save, X, Filter, Shield, Edit3 } from 'lucide-react';
import TravelExpenseForm from '../components/TravelExpenseForm';
import MemoEditor from '../components/MemoEditor';
import { MemoItem, TravelExpenseItem } from '../types';

const CalendarPage: React.FC = () => {
    const [events, setEvents] = useState<ScheduleEvent[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [mtgDefs, setMtgDefs] = useState<MeetingDefinition[]>([]);
    const [currentRoleId, setCurrentRoleId] = useState('');
    const [showAllItems, setShowAllItems] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<string | null>(new Date().toISOString().split('T')[0]);
    const [editingEventId, setEditingEventId] = useState<string | null>(null);
    const [editFormData, setEditFormData] = useState<Partial<ScheduleEvent>>({});
    const [showMtgModal, setShowMtgModal] = useState(false);
    const [memoEventId, setMemoEventId] = useState<string | null>(null);
    const [travelExpenses, setTravelExpenses] = useState<TravelExpenseItem[]>([]);
    const [globalMemos, setGlobalMemos] = useState<MemoItem[]>([]);
    const [activeTab, setActiveTab] = useState<'schedule' | 'travel'>('schedule');
    const [editingExpenseId, setEditingExpenseId] = useState<string | null>(null);
    const [filterRoleId, setFilterRoleId] = useState<string>(''); // 追加: カレンダー内フィルタ用
    const [roles, setRoles] = useState<Role[]>([]); // 追加: 役職リスト
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null); // 追加: タスク編集用
    const [taskEditFormData, setTaskEditFormData] = useState<Partial<Task>>({}); // 追加: タスク編集データ

    useEffect(() => {
        setEvents(storage.getEvents());
        setTasks(storage.getTasks());
        setMtgDefs(storage.getMeetingDefinitions());
        setTravelExpenses(storage.getTravelExpenses());
        setGlobalMemos(storage.getMemos());
        setRoles(storage.getRoles());
        const savedRoleId = storage.getCurrentRoleId();
        setCurrentRoleId(savedRoleId);
        setFilterRoleId(savedRoleId); // 初期値は設定値に合わせる
        setShowAllItems(storage.getShowAllItems());
    }, []);

    const saveEvents = (newEvents: ScheduleEvent[]) => {
        setEvents(newEvents);
        storage.saveEvents(newEvents);
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);

    const getDayString = (day: number) => `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    const handleDeleteEvent = (id: string) => {
        if (confirm('この予定を削除しますか？')) {
            saveEvents(events.filter(e => e.id !== id));
            if (editingEventId === id) setEditingEventId(null);
        }
    };

    const handleStartEdit = (event: ScheduleEvent) => {
        setEditingEventId(event.id);
        setEditFormData({ ...event });
    };

    const handleSaveEdit = () => {
        if (!editFormData.title || !editingEventId) return;

        // Calculate total expense
        let finalExpense = editFormData.expense;
        if (finalExpense) {
            finalExpense.totalAmount = finalExpense.routes.reduce((sum, r) => sum + (r.amount * (r.isRoundTrip ? 2 : 1)), 0);
        }

        const updatedEvents = events.map(e => e.id === editingEventId ? { ...e, ...editFormData, expense: finalExpense } : e);
        saveEvents(updatedEvents);
        setEditingEventId(null);

        // 保存された予定が会議/打ち合わせの場合、旅費精算タスクを自動作成
        if (editFormData.date && editFormData.category) {
            checkAndCreateExpenseTask(editFormData.date, editFormData.category);
        }
    };

    const getFilteredEvents = (dateStr: string) => {
        return events.filter(e => {
            if (e.date !== dateStr) return false;
            if (showAllItems) return true;

            // フィルタ対象の役職ID（画面上の選択を優先）
            // 未選択（空文字）の場合はフィルタなし（全表示）
            if (!filterRoleId) return true;

            // 会議体定義に基づく予定かチェック
            const def = mtgDefs.find(d => d.name === e.title);
            if (def) {
                return def.roleIds.includes(filterRoleId);
            }
            return true;
        });
    };

    const getFilteredTasks = (dateStr: string) => {
        return tasks.filter(t => {
            if (t.dueDate !== dateStr) return false;
            if (showAllItems) return true;

            if (!filterRoleId) return true;

            // タスク管理側のロジックと同様
            const storageDefs = storage.getTaskDefinitions();
            const def = storageDefs.find((d: any) => d.title === t.title);
            if (def) {
                return def.roleIds.includes(filterRoleId);
            }
            return true;
        });
    };

    const handleAddEvent = () => {
        if (!selectedDate) return;
        const newEvent: ScheduleEvent = {
            id: Date.now().toString(),
            title: '新規予定',
            date: selectedDate,
            category: 'other',
            status: 'todo',
            expense: { routes: [], totalAmount: 0 }
        };
        saveEvents([...events, newEvent]);
        handleStartEdit(newEvent);
    };

    const handleAddFromDef = (def: MeetingDefinition) => {
        if (!selectedDate) return;
        const newEvent: ScheduleEvent = {
            id: Date.now().toString(),
            title: def.name,
            memo: def.content,
            date: selectedDate,
            category: 'meeting',
            status: 'todo',
            expense: { routes: [], totalAmount: 0 }
        };
        saveEvents([...events, newEvent]);
        setShowMtgModal(false);
        handleStartEdit(newEvent);

        // 会議体としての追加時、旅費精算タスクを自動作成
        checkAndCreateExpenseTask(newEvent.date, newEvent.category);
    };

    /**
     * 会議予定の1週間後に旅費精算タスクを自動作成する（重複チェック付き）
     */
    const checkAndCreateExpenseTask = (eventDate: string, category: string) => {
        if (category !== 'meeting' && category !== 'conference') return;

        // 1週間後の日付を計算
        const d = new Date(eventDate);
        d.setDate(d.getDate() + 7);
        const dueDate = d.toISOString().split('T')[0];

        // 重複チェック
        const existingTasks = storage.getTasks();
        const alreadyExists = existingTasks.some(t => t.title === '旅費精算' && t.dueDate === dueDate);

        if (!alreadyExists) {
            const newTask: Task = {
                id: `auto-${Date.now()}`,
                title: '旅費精算',
                description: `${eventDate} の${category === 'meeting' ? '打ち合わせ' : '会議'}に伴う精算`,
                category: 'administrative',
                status: 'todo',
                priority: 'medium',
                dueDate: dueDate,
                createdAt: new Date().toISOString()
            };
            const updatedTasks = [...existingTasks, newTask];
            setTasks(updatedTasks);
            storage.saveTasks(updatedTasks);
        }
    };

    const handleSaveMemos = (id: string, newMemos: MemoItem[]) => {
        const otherMemos = globalMemos.filter(m => m.linkedEventId !== id && m.linkedTaskId !== id);
        const updatedGlobalMemos = [...otherMemos, ...newMemos];
        setGlobalMemos(updatedGlobalMemos);
        storage.saveMemos(updatedGlobalMemos);
    };

    const handleAddTravelExpense = () => {
        if (!selectedDate) return;
        const newItem: TravelExpenseItem = {
            id: Date.now().toString(),
            title: '新規移動',
            date: selectedDate,
            routes: [],
            totalAmount: 0
        };
        const newExpenses = [...travelExpenses, newItem];
        setTravelExpenses(newExpenses);
        storage.saveTravelExpenses(newExpenses);
    };

    const handleDeleteTravelExpense = (id: string) => {
        if (confirm('この旅費データを削除しますか？')) {
            const newExpenses = travelExpenses.filter(te => te.id !== id);
            setTravelExpenses(newExpenses);
            storage.saveTravelExpenses(newExpenses);
            if (editingExpenseId === id) setEditingExpenseId(null);
        }
    };

    const handleUpdateTravelExpense = (id: string, routes: any[]) => {
        const totalAmount = routes.reduce((sum, r) => sum + (r.amount * (r.isRoundTrip ? 2 : 1)), 0);
        const newExpenses = travelExpenses.map(te => te.id === id ? { ...te, routes, totalAmount } : te);
        setTravelExpenses(newExpenses);
        storage.saveTravelExpenses(newExpenses);
    };

    const handleUpdateTravelTitle = (id: string, title: string) => {
        const newExpenses = travelExpenses.map(te => te.id === id ? { ...te, title } : te);
        setTravelExpenses(newExpenses);
        storage.saveTravelExpenses(newExpenses);
    };

    const handleStartTaskEdit = (task: Task) => {
        setEditingTaskId(task.id);
        setTaskEditFormData({ ...task });
    };

    const handleSaveTaskEdit = () => {
        if (!taskEditFormData.title || !editingTaskId) return;
        const updatedTasks = tasks.map(t => t.id === editingTaskId ? { ...t, ...taskEditFormData } : t);
        setTasks(updatedTasks);
        storage.saveTasks(updatedTasks);
        setEditingTaskId(null);
    };

    const handleDeleteTask = (id: string) => {
        if (confirm('このタスクを削除しますか？')) {
            const updatedTasks = tasks.filter(t => t.id !== id);
            setTasks(updatedTasks);
            storage.saveTasks(updatedTasks);
            if (editingTaskId === id) setEditingTaskId(null);
        }
    };

    return (
        <div className="calendar-page">
            <header className="page-header">
                <h1>スケジュール管理</h1>
                <div className="header-actions">
                    <div className="filter-area">
                        <Filter size={16} />
                        <select
                            value={filterRoleId}
                            onChange={(e) => setFilterRoleId(e.target.value)}
                            className="role-filter-select"
                        >
                            <option value="">（全表示 / フィルタ解除）</option>
                            {roles.map(r => (
                                <option key={r.id} value={r.id}>
                                    {r.id === currentRoleId ? `🚩 自分の役職 (${r.name})` : `${r.name} のみ表示`}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="month-nav">
                        <button className="icon-btn" onClick={prevMonth}><ChevronLeft /></button>
                        <span className="current-month-label">{year}年 {month + 1}月</span>
                        <button className="icon-btn" onClick={nextMonth}><ChevronRight /></button>
                    </div>
                </div>
            </header>

            <div className="calendar-layout">
                <div className="calendar-main">
                    <div className="calendar-grid-container">
                        <div className="calendar-header">
                            {['日', '月', '火', '水', '木', '金', '土'].map(d => <div key={d} className="weekday-label">{d}</div>)}
                        </div>
                        <div className="calendar-grid">
                            {days.map((day, idx) => {
                                const dateStr = day ? getDayString(day) : '';
                                const dayEvents = day ? getFilteredEvents(dateStr) : [];
                                const dayTasks = day ? getFilteredTasks(dateStr) : [];

                                return (
                                    <div
                                        key={idx}
                                        className={`calendar-day ${day === null ? 'empty' : ''} ${day && getDayString(day) === selectedDate ? 'selected' : ''} ${day && getDayString(day) === new Date().toISOString().split('T')[0] ? 'today' : ''}`}
                                        onClick={() => day && setSelectedDate(getDayString(day))}
                                    >
                                        {day && (
                                            <>
                                                <span className="day-number">{day}</span>
                                                <div className="day-events">
                                                    {dayEvents.map(e => (
                                                        <div key={e.id} className={`event-dot ${e.category} ${e.status === 'completed' ? 'completed' : ''}`}></div>
                                                    ))}
                                                    {dayTasks.map(t => (
                                                        <div key={t.id} className={`task-dot ${t.status === 'completed' ? 'completed' : ''}`}></div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="calendar-side">
                    {selectedDate ? (
                        <div className="detail-panel">
                            <div className="detail-tabs">
                                <button
                                    className={`detail-tab-btn ${activeTab === 'schedule' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('schedule')}
                                >
                                    予定・タスク
                                </button>
                                <button
                                    className={`detail-tab-btn ${activeTab === 'travel' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('travel')}
                                >
                                    旅費精算
                                </button>
                            </div>

                            {activeTab === 'travel' ? (
                                <div className="travel-tab-content">
                                    <div className="section-header">
                                        <h3>{selectedDate} の旅費一覧</h3>
                                        <button className="small-primary-btn" onClick={handleAddTravelExpense}>
                                            <Plus size={16} /> 追加
                                        </button>
                                    </div>
                                    <div className="daily-travel-list">
                                        {travelExpenses.filter(te => te.date === selectedDate).map(te => (
                                            <div key={te.id} className={`travel-item-card ${editingExpenseId === te.id ? 'editing' : ''}`}>
                                                {editingExpenseId === te.id ? (
                                                    <div className="travel-edit-mode">
                                                        <div className="edit-header">
                                                            <input
                                                                type="text"
                                                                value={te.title}
                                                                onChange={(e) => handleUpdateTravelTitle(te.id, e.target.value)}
                                                                placeholder="移動の目的など"
                                                                className="travel-title-input"
                                                                autoFocus
                                                            />
                                                            <button className="done-btn" onClick={() => setEditingExpenseId(null)}>
                                                                <Save size={16} /> 完了
                                                            </button>
                                                        </div>
                                                        <TravelExpenseForm
                                                            routes={te.routes}
                                                            onChange={(routes) => handleUpdateTravelExpense(te.id, routes)}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="travel-display-mode" onClick={() => setEditingExpenseId(te.id)}>
                                                        <div className="travel-header">
                                                            <strong>{te.title || '（無題の移動）'}</strong>
                                                            <span className="total">¥{(te.totalAmount || 0).toLocaleString()}</span>
                                                            <button
                                                                className="del-btn-tiny"
                                                                onClick={(e) => { e.stopPropagation(); handleDeleteTravelExpense(te.id); }}
                                                            >
                                                                <Trash2 size={12} />
                                                            </button>
                                                        </div>
                                                        <div className="travel-routes">
                                                            {te.routes.map((r, idx) => (
                                                                <div key={idx} className="route-tag">{r.from} → {r.to}</div>
                                                            ))}
                                                            {te.routes.length === 0 && <span className="empty-route">タップして経路を追加</span>}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        {travelExpenses.filter(te => te.date === selectedDate).length === 0 && (
                                            <p className="empty-hint">この日の旅費データはありません。</p>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="schedule-tab-content">
                                    <div className="section-header">
                                        <h3>{selectedDate} の予定・タスク</h3>
                                        <div className="add-actions">
                                            <button className="small-primary-btn" onClick={() => setShowMtgModal(true)}>
                                                <Shield size={16} /> 会議体
                                            </button>
                                            <button className="small-primary-btn" onClick={handleAddEvent}>
                                                <Plus size={16} /> 追加
                                            </button>
                                        </div>
                                    </div>

                                    <div className="event-list">
                                        {getFilteredEvents(selectedDate).map(event => (
                                            <div key={event.id} className="event-item-container">
                                                {editingEventId === event.id ? (
                                                    <div className="event-edit-form">
                                                        <input
                                                            className="edit-title"
                                                            value={editFormData.title || ''}
                                                            onChange={e => setEditFormData({ ...editFormData, title: e.target.value })}
                                                            placeholder="予定タイトル"
                                                        />
                                                        <div className="edit-row">
                                                            <Clock size={16} />
                                                            <input type="time" value={editFormData.startTime || ''} onChange={e => setEditFormData({ ...editFormData, startTime: e.target.value })} />
                                                            <span>〜</span>
                                                            <input type="time" value={editFormData.endTime || ''} onChange={e => setEditFormData({ ...editFormData, endTime: e.target.value })} />
                                                        </div>
                                                        <div className="edit-row">
                                                            <Edit3 size={16} />
                                                            <select
                                                                className="edit-status"
                                                                value={editFormData.status || 'todo'}
                                                                onChange={e => setEditFormData({ ...editFormData, status: e.target.value as any })}
                                                            >
                                                                <option value="todo">未着手</option>
                                                                <option value="in_progress">進行中</option>
                                                                <option value="completed">完了</option>
                                                                <option value="on_hold">保留</option>
                                                            </select>
                                                        </div>
                                                        <div className="edit-row">
                                                            <MapPin size={16} />
                                                            <input className="edit-loc" value={editFormData.location || ''} onChange={e => setEditFormData({ ...editFormData, location: e.target.value })} placeholder="場所" />
                                                        </div>
                                                        <select
                                                            className="edit-cat"
                                                            value={editFormData.category || 'other'}
                                                            onChange={e => setEditFormData({ ...editFormData, category: e.target.value as any })}
                                                        >
                                                            <option value="meeting">打ち合わせ</option>
                                                            <option value="negotiation">交渉</option>
                                                            <option value="business_trip">出張</option>
                                                            <option value="conference">会議</option>
                                                            <option value="training">研修</option>
                                                            <option value="other">その他</option>
                                                        </select>

                                                        <TravelExpenseForm
                                                            routes={editFormData.expense?.routes || []}
                                                            onChange={routes => setEditFormData({ ...editFormData, expense: { routes, totalAmount: 0 } })}
                                                        />

                                                        <div className="edit-actions">
                                                            <button className="save-btn" onClick={handleSaveEdit}><Save size={16} /> 保存</button>
                                                            <button className="delete-btn-action" onClick={() => handleDeleteEvent(event.id)}><Trash2 size={16} /> 削除</button>
                                                            <button className="cancel-btn" onClick={() => setEditingEventId(null)}><X size={16} /> キャンセル</button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className={`event-display-card ${event.status === 'completed' ? 'completed' : ''}`} onClick={() => handleStartEdit(event)}>
                                                        <div className="ev-header">
                                                            <div className="ev-left">
                                                                <span className={`ev-cat-tag ${event.category}`}>{event.category}</span>
                                                                {event.status === 'completed' && <span className="completed-badge">完了</span>}
                                                            </div>
                                                            <span className="ev-time">{event.startTime || ''}</span>
                                                        </div>
                                                        <h4 className="ev-title">{event.title}</h4>
                                                        {event.location && <div className="ev-loc"><MapPin size={12} /> {event.location}</div>}
                                                        {event.expense && event.expense.totalAmount > 0 && (
                                                            <div className="ev-expense">
                                                                <Wallet size={12} />
                                                                <span>旅費: ¥{event.expense.totalAmount.toLocaleString()}</span>
                                                            </div>
                                                        )}
                                                        <div className="ev-memos-row">
                                                            <button
                                                                className="memo-btn-tiny"
                                                                onClick={(e) => { e.stopPropagation(); setMemoEventId(event.id); }}
                                                            >
                                                                <Edit3 size={12} />
                                                                メモ ({globalMemos.filter(m => m.linkedEventId === event.id).length})
                                                            </button>
                                                        </div>
                                                        <div className="ev-hover-hint">タップで編集</div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                        {tasks.filter(t => t.dueDate === selectedDate).map(task => (
                                            <div key={task.id} className="event-item-container">
                                                {editingTaskId === task.id ? (
                                                    <div className="event-edit-form task-edit">
                                                        <input
                                                            className="edit-title"
                                                            value={taskEditFormData.title || ''}
                                                            onChange={e => setTaskEditFormData({ ...taskEditFormData, title: e.target.value })}
                                                            placeholder="タスク名"
                                                        />
                                                        <div className="edit-row">
                                                            <Edit3 size={16} />
                                                            <select
                                                                className="edit-status"
                                                                value={taskEditFormData.status || 'todo'}
                                                                onChange={e => setTaskEditFormData({ ...taskEditFormData, status: e.target.value as any })}
                                                            >
                                                                <option value="todo">未着手</option>
                                                                <option value="in_progress">進行中</option>
                                                                <option value="completed">完了</option>
                                                                <option value="on_hold">保留</option>
                                                            </select>
                                                        </div>
                                                        <textarea
                                                            className="edit-desc"
                                                            value={taskEditFormData.description || ''}
                                                            onChange={e => setTaskEditFormData({ ...taskEditFormData, description: e.target.value })}
                                                            placeholder="タスクの説明"
                                                            rows={3}
                                                        />
                                                        <div className="edit-actions">
                                                            <button className="save-btn" onClick={handleSaveTaskEdit}><Save size={16} /> 保存</button>
                                                            <button className="delete-btn-action" onClick={() => handleDeleteTask(task.id)}><Trash2 size={16} /> 削除</button>
                                                            <button className="cancel-btn" onClick={() => setEditingTaskId(null)}><X size={16} /> キャンセル</button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className={`task-display-card ${task.status}`} onClick={() => handleStartTaskEdit(task)}>
                                                        <div className="ev-header">
                                                            <div className="ev-left">
                                                                <span className="task-badge">{task.category === 'union_member' ? '🔴 組合員対応' : '🔵 事務タスク'}</span>
                                                                {task.status === 'completed' && <span className="completed-badge">完了</span>}
                                                            </div>
                                                            <span className="task-status-tag">{task.status === 'completed' ? '完了' : '期限日'}</span>
                                                        </div>
                                                        <h4 className="ev-title">【タスク】{task.title}</h4>
                                                        <div className="ev-loc">{task.description}</div>
                                                        {task.responseRate !== undefined && (
                                                            <div className="task-rate">回答率: {task.responseRate}%</div>
                                                        )}
                                                        <div className="ev-memos-row">
                                                            <button
                                                                className="memo-btn-tiny"
                                                                onClick={(e) => { e.stopPropagation(); setMemoEventId(task.id); }}
                                                            >
                                                                <Edit3 size={12} />
                                                                メモ ({globalMemos.filter(m => m.linkedTaskId === task.id).length})
                                                            </button>
                                                        </div>
                                                        <div className="ev-hover-hint">タップで編集</div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                        {getFilteredEvents(selectedDate).length === 0 && tasks.filter(t => t.dueDate === selectedDate).length === 0 && (
                                            <div className="empty-state">この日の予定・タスクはありません。</div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="empty-state-panel">日付を選択してください。</div>
                    )}
                </div>
            </div>

            {memoEventId && (
                <MemoEditor
                    memos={globalMemos.filter(m => m.linkedEventId === memoEventId || m.linkedTaskId === memoEventId)}
                    onSave={(newMemos) => {
                        handleSaveMemos(memoEventId, newMemos);
                    }}
                    onClose={() => setMemoEventId(null)}
                    defaultLinkedEventId={events.some(e => e.id === memoEventId) ? memoEventId : undefined}
                    defaultLinkedTaskId={tasks.some(t => t.id === memoEventId) ? memoEventId : undefined}
                />
            )}

            {showMtgModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>会議体定義から作成</h2>
                            <button className="close-btn" onClick={() => setShowMtgModal(false)}><X size={20} /></button>
                        </div>
                        <div className="mtg-grid">
                            {mtgDefs.filter(d => {
                                if (showAllItems) return true;
                                const target = filterRoleId || currentRoleId;
                                return !target || d.roleIds.includes(target);
                            }).map(def => (
                                <button key={def.id} className="mtg-card" onClick={() => handleAddFromDef(def)}>
                                    <div className="mtg-card-info">
                                        <strong>{def.name}</strong>
                                        <span className="timing">{def.timing}</span>
                                        <p>{def.content}</p>
                                    </div>
                                    <Plus size={20} />
                                </button>
                            ))}
                            {mtgDefs.filter(d => {
                                if (showAllItems) return true;
                                const target = filterRoleId || currentRoleId;
                                return !target || d.roleIds.includes(target);
                            }).length === 0 && (
                                    <p className="empty-hint">現在選択中の役職に該当する会議体定義はありません。</p>
                                )}
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        .calendar-page { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; }
        .calendar-layout { display: grid; grid-template-columns: 1fr 400px; gap: 1.5rem; }
        @media (max-width: 1024px) { .calendar-layout { grid-template-columns: 1fr; } }

        .month-nav { display: flex; align-items: center; gap: 1rem; background-color: var(--bg-card); padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid #334155; width: fit-content; }
        .current-month-label { font-weight: 700; font-size: 1.1rem; min-width: 120px; text-align: center; }

        .calendar-grid-container { background-color: var(--bg-card); border: 1px solid #334155; border-radius: 12px; overflow: hidden; }
        .calendar-header { display: grid; grid-template-columns: repeat(7, 1fr); background-color: #1e293b; border-bottom: 1px solid #334155; }
        .weekday-label { padding: 0.75rem; text-align: center; font-size: 0.8rem; font-weight: 600; color: var(--text-muted); }
        .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); }
        .calendar-day { height: 100px; padding: 0.5rem; border-right: 1px solid #334155; border-bottom: 1px solid #334155; cursor: pointer; transition: all 0.2s; display: flex; flex-direction: column; gap: 0.5rem; }
        .calendar-day:nth-child(7n) { border-right: none; }
        .calendar-day:hover:not(.empty) { background-color: #334155; }
        .calendar-day.selected { background-color: rgba(59, 130, 246, 0.2); border: 1px solid var(--primary); z-index: 10; }
        .calendar-day.today { background-color: rgba(59, 130, 246, 0.05); }
        .calendar-day.today .day-number { color: var(--primary); font-weight: 800; }
        .calendar-day.empty { cursor: default; }
        .day-number { font-size: 0.9rem; font-weight: 600; }
        .day-events { display: flex; flex-wrap: wrap; gap: 4px; }
        .event-dot { width: 6px; height: 6px; border-radius: 50%; }
        .event-dot.meeting { background-color: var(--warning); }
        .event-dot.negotiation { background-color: var(--danger); }
        .event-dot.business_trip { background-color: var(--primary); }
        .event-dot.conference { background-color: #a855f7; } /* Purple */
        .event-dot.training { background-color: #ec4899; } /* Pink */
        .event-dot.other { background-color: var(--text-muted); }
        .event-dot.completed { background-color: #64748b !important; opacity: 0.6; }
        .task-dot { width: 6px; height: 6px; border-radius: 50%; background-color: #10b981; border: 1px solid rgba(255,255,255,0.2); }
        .task-dot.completed { background-color: #64748b !important; opacity: 0.6; }

        .detail-panel { background-color: var(--bg-card); border: 1px solid #334155; border-radius: 12px; padding: 0; height: fit-content; position: sticky; top: 1.5rem; overflow: hidden; }
        .detail-tabs { display: flex; border-bottom: 1px solid #334155; background-color: #1e293b; }
        .detail-tab-btn { flex: 1; padding: 1rem; border: none; background: none; color: var(--text-muted); font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: all 0.2s; border-bottom: 2px solid transparent; }
        .detail-tab-btn.active { color: var(--primary); border-bottom-color: var(--primary); background-color: rgba(59, 130, 246, 0.05); }
        .schedule-tab-content, .travel-tab-content { padding: 1.5rem; }
        
        .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        .add-actions { display: flex; gap: 0.5rem; }
        .event-list { display: flex; flex-direction: column; gap: 1rem; }
        .ev-memo { font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem; border-top: 1px solid #334155; padding-top: 0.5rem; font-style: italic; }

        .mtg-grid { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
        .mtg-card { background-color: rgba(255, 255, 255, 0.03); border: 1px solid #334155; border-radius: 8px; padding: 1rem; display: flex; align-items: center; justify-content: space-between; text-align: left; transition: all 0.2s; }
        .mtg-card:hover { border-color: var(--primary); background-color: rgba(59, 130, 246, 0.05); }
        .mtg-card-info { flex: 1; display: flex; flex-direction: column; gap: 0.25rem; }
        .mtg-card-info strong { font-size: 1rem; color: #ffffff; }
        .mtg-card-info .timing { font-size: 0.75rem; color: var(--warning); font-weight: 600; }
        .mtg-card-info p { font-size: 0.8rem; color: var(--text-muted); margin: 0; }

        .event-display-card { background-color: rgba(255, 255, 255, 0.02); border: 1px solid #334155; border-radius: 10px; padding: 1rem; cursor: pointer; transition: all 0.2s; position: relative; overflow: hidden; }
        .event-display-card:hover { transform: translateY(-2px); border-color: var(--primary); background-color: rgba(59, 130, 246, 0.05); }
        .ev-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
        .ev-cat-tag { font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; font-weight: 700; border: 1px solid #475569; }
        .ev-cat-tag.meeting { color: #60a5fa; border-color: #60a5fa; }
        .ev-cat-tag.negotiation { color: #f87171; border-color: #f87171; }
        .ev-time { font-size: 0.8rem; font-weight: 700; color: var(--text-muted); }
        .ev-title { margin-bottom: 0.5rem; }
        .ev-loc, .ev-expense { font-size: 0.75rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.4rem; margin-top: 0.25rem; }
        .ev-expense { color: var(--success); font-weight: 600; }
        .ev-memos-row { margin-top: 0.5rem; display: flex; gap: 0.5rem; }
        .memo-btn-tiny { background: rgba(255, 255, 255, 0.05); border: 1px solid #334155; color: var(--text-muted); font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer; }
        .memo-btn-tiny:hover { background-color: rgba(255, 255, 255, 0.1); color: var(--text-main); }
        .ev-hover-hint { position: absolute; bottom: 0.5rem; right: 0.5rem; font-size: 0.65rem; color: var(--primary); opacity: 0; transition: opacity 0.2s; }
        .event-display-card:hover .ev-hover-hint { opacity: 1; }
        .event-display-card.completed { opacity: 0.6; filter: grayscale(0.5); }
        .event-display-card.completed .ev-title { text-decoration: line-through; color: var(--text-muted); }
        .completed-badge { font-size: 0.65rem; background-color: #1e293b; color: var(--text-muted); border: 1px solid #475569; padding: 1px 4px; border-radius: 3px; font-weight: 700; margin-left: 0.5rem; }
        .ev-left { display: flex; align-items: center; }

        .filter-area { display: flex; align-items: center; gap: 0.5rem; background-color: var(--bg-card); padding: 0.4rem 0.8rem; border-radius: 8px; border: 1px solid #334155; }
        .role-filter-select { background: none; border: none; color: var(--primary); font-size: 0.85rem; font-weight: 700; outline: none; cursor: pointer; }
        .role-filter-select option { background-color: #1e293b; color: white; }
        .edit-status { background-color: #334155; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 0.875rem; flex: 1; }

        .travel-item-card { background-color: rgba(255, 255, 255, 0.02); border: 1px solid #334155; border-radius: 10px; margin-bottom: 1rem; cursor: pointer; transition: all 0.2s; }
        .travel-item-card:hover:not(.editing) { border-color: var(--primary); background-color: rgba(59, 130, 246, 0.05); }
        .travel-item-card.editing { border-color: var(--primary); background-color: #0f172a; padding: 1rem; cursor: default; }
        .travel-display-mode { padding: 1rem; }
        .travel-edit-mode { display: flex; flex-direction: column; gap: 1rem; }
        .edit-header { display: flex; justify-content: space-between; align-items: center; gap: 1rem; border-bottom: 1px solid #334155; padding-bottom: 0.5rem; }
        .travel-title-input { background: none; border: none; color: white; font-size: 1rem; font-weight: 700; flex: 1; outline: none; }
        .done-btn { background-color: var(--primary); color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 4px; font-weight: 700; font-size: 0.8rem; display: flex; align-items: center; gap: 0.4rem; cursor: pointer; }
        
        .travel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
        .travel-header strong { font-size: 0.9rem; color: #ffffff; }
        .travel-header .total { color: var(--success); font-weight: 700; font-size: 0.9rem; }
        .travel-routes { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .route-tag { font-size: 0.7rem; background-color: #334155; color: var(--text-muted); padding: 2px 8px; border-radius: 4px; }
        .empty-route { font-size: 0.75rem; color: var(--text-muted); font-style: italic; }
        .del-btn-tiny { background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px; border-radius: 4px; }
        .del-btn-tiny:hover { color: var(--danger); background-color: rgba(239, 68, 68, 0.1); }
        .task-display-card.completed { opacity: 0.5; filter: grayscale(1); border-style: solid; }
        .task-badge { font-size: 0.65rem; color: #10b981; font-weight: 700; }
        .task-status-tag { font-size: 0.65rem; color: var(--text-muted); }
        .task-rate { font-size: 0.75rem; color: var(--primary); font-weight: 700; margin-top: 0.5rem; }

        .event-edit-form { display: flex; flex-direction: column; gap: 1rem; border: 1px solid var(--primary); border-radius: 10px; padding: 1rem; background-color: #0f172a; }
        .edit-title { background: none; border: none; border-bottom: 2px solid var(--primary); color: white; font-size: 1.1rem; font-weight: 700; padding: 4px 0; width: 100%; }
        .edit-row { display: flex; align-items: center; gap: 0.75rem; color: var(--text-muted); font-size: 0.875rem; }
        .edit-row input { background: none; border: 1px solid #334155; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.875rem; }
        .edit-loc { flex: 1; border: none !important; border-bottom: 1px solid #334155 !important; border-radius: 0 !important; }
        .edit-cat { background-color: #334155; color: white; border: none; padding: 6px; border-radius: 4px; font-size: 0.875rem; }
        .edit-desc { background-color: #334155; color: white; border: 1px solid #475569; padding: 8px; border-radius: 4px; font-size: 0.875rem; width: 100%; resize: vertical; margin-top: 0.5rem; }
        .edit-actions { display: flex; gap: 1rem; margin-top: 1rem; }
        .save-btn { flex: 1; background-color: var(--primary); color: white; border: none; padding: 0.6rem; border-radius: 6px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
        .delete-btn-action { background: none; border: 1px solid var(--danger); color: var(--danger); padding: 0.6rem; border-radius: 6px; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; gap: 0.4rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .delete-btn-action:hover { background-color: var(--danger); color: white; }
        .cancel-btn { background: none; border: 1px solid #334155; color: var(--text-muted); padding: 0.6rem; border-radius: 6px; font-size: 0.8rem; }
        
        @media (max-width: 768px) {
          .calendar-layout { grid-template-columns: 1fr; }
          .calendar-day { height: 80px; }
          .current-month-label { font-size: 1rem; min-width: 100px; }
          .page-header h1 { font-size: 1.5rem; }
          .detail-panel { padding: 1rem; position: static; }
        }

        @media (max-width: 480px) {
          .calendar-day { height: 60px; font-size: 0.75rem; }
          .weekday-label { padding: 0.5rem; font-size: 0.7rem; }
          .day-number { font-size: 0.8rem; }
        }
      `}</style>
        </div >
    );
};

export default CalendarPage;
