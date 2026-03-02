import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { Role, TaskDefinition, MeetingDefinition, AppState } from '../types';
import { Plus, Trash2, Edit2, Shield, BookOpen, Users, Settings as SettingsIcon, ChevronDown, ChevronRight, Download } from 'lucide-react';

const SettingsPage: React.FC = () => {
    const [roles, setRoles] = useState<Role[]>([]);
    const [taskDefs, setTaskDefs] = useState<TaskDefinition[]>([]);
    const [mtgDefs, setMtgDefs] = useState<MeetingDefinition[]>([]);
    const [currentRoleId, setCurrentRoleId] = useState('');
    const [showAllItems, setShowAllItems] = useState(false);

    // Accordion state
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        prefs: true,
        roles: false,
        tasks: false,
        meetings: false
    });

    // Inline adding states
    const [newRoleName, setNewRoleName] = useState('');
    const [newTaskDef, setNewTaskDef] = useState<Partial<TaskDefinition>>({ title: '', category: 'union_member', priority: 'medium', roleIds: [] });
    const [newMtgDef, setNewMtgDef] = useState<Partial<MeetingDefinition>>({ name: '', content: '', timing: '', roleIds: [] });

    // Editing states (keeping modals for complex edits, but using table for list)
    const [editingRole, setEditingRole] = useState<Partial<Role> | null>(null);
    const [editingTaskDef, setEditingTaskDef] = useState<Partial<TaskDefinition> | null>(null);
    const [editingMtgDef, setEditingMtgDef] = useState<Partial<MeetingDefinition> | null>(null);

    useEffect(() => {
        setRoles(storage.getRoles());
        setTaskDefs(storage.getTaskDefinitions());
        setMtgDefs(storage.getMeetingDefinitions());
        setCurrentRoleId(storage.getCurrentRoleId());
        setShowAllItems(storage.getShowAllItems());
    }, []);

    const saveAll = (newRoles = roles, newTaskDefs = taskDefs, newMtgDefs = mtgDefs, newRoleId = currentRoleId, newShowAll = showAllItems) => {
        storage.saveSettings({
            roles: newRoles,
            taskDefinitions: newTaskDefs,
            meetingDefinitions: newMtgDefs,
            currentRoleId: newRoleId,
            showAllItems: newShowAll
        });
    };

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleExport = (type: 'settings' | 'all') => {
        let dataToExport: Partial<AppState> = {};
        const fullState = {
            version: 3,
            tasks: storage.getTasks(),
            events: storage.getEvents(),
            roles: storage.getRoles(),
            taskDefinitions: storage.getTaskDefinitions(),
            meetingDefinitions: storage.getMeetingDefinitions(),
            currentRoleId: storage.getCurrentRoleId(),
            showAllItems: storage.getShowAllItems(),
            lastSyncedAt: localStorage.getItem('union_app_last_sync') || undefined
        };

        if (type === 'settings') {
            const { tasks, events, ...settings } = fullState;
            dataToExport = settings;
        } else {
            dataToExport = fullState;
        }

        const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `union_app_${type}_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // Role Handlers
    const handleAddRole = () => {
        if (!newRoleName) return;
        const newRole = { id: `role-${Date.now()}`, name: newRoleName };
        const newRoles = [...roles, newRole];
        setRoles(newRoles);
        saveAll(newRoles);
        setNewRoleName('');
    };

    const handleSaveRole = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingRole?.name) return;
        const newRoles = roles.map(r => r.id === editingRole.id ? editingRole as Role : r);
        setRoles(newRoles);
        saveAll(newRoles);
        setEditingRole(null);
    };

    const handleDeleteRole = (id: string) => {
        if (confirm('この役職を削除しますか？紐付いているタスク・会議体からも解除されます。')) {
            const newRoles = roles.filter(r => r.id !== id);
            setRoles(newRoles);
            const newTaskDefs = taskDefs.map(t => ({ ...t, roleIds: t.roleIds.filter(rid => rid !== id) }));
            const newMtgDefs = mtgDefs.map(m => ({ ...m, roleIds: m.roleIds.filter(rid => rid !== id) }));
            setTaskDefs(newTaskDefs);
            setMtgDefs(newMtgDefs);
            saveAll(newRoles, newTaskDefs, newMtgDefs);
        }
    };

    // TaskDef Handlers
    const handleAddTaskDef = () => {
        if (!newTaskDef.title) return;
        const def: TaskDefinition = {
            id: `def-${Date.now()}`,
            title: newTaskDef.title || '',
            description: newTaskDef.description || '',
            category: newTaskDef.category as any || 'union_member',
            priority: newTaskDef.priority as any || 'medium',
            roleIds: newTaskDef.roleIds || []
        };
        const newList = [...taskDefs, def];
        setTaskDefs(newList);
        saveAll(roles, newList);
        setNewTaskDef({ title: '', category: 'union_member', priority: 'medium', roleIds: [] });
    };

    const handleSaveTaskDef = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingTaskDef?.title) return;
        const newList = taskDefs.map(t => t.id === editingTaskDef.id ? editingTaskDef as TaskDefinition : t);
        setTaskDefs(newList);
        saveAll(roles, newList);
        setEditingTaskDef(null);
    };

    const handleAddSubtaskDef = () => {
        if (!editingTaskDef) return;
        const subtasks = editingTaskDef.subtasks || [];
        const newSubtask = {
            id: `sub-${Date.now()}`,
            title: '',
            order: subtasks.length
        };
        setEditingTaskDef({
            ...editingTaskDef,
            subtasks: [...subtasks, newSubtask]
        });
    };

    const handleUpdateSubtaskDef = (id: string, title: string) => {
        if (!editingTaskDef) return;
        setEditingTaskDef({
            ...editingTaskDef,
            subtasks: (editingTaskDef.subtasks || []).map(s => s.id === id ? { ...s, title } : s)
        });
    };

    const handleDeleteSubtaskDef = (id: string) => {
        if (!editingTaskDef) return;
        setEditingTaskDef({
            ...editingTaskDef,
            subtasks: (editingTaskDef.subtasks || []).filter(s => s.id !== id)
        });
    };

    const handleDeleteTaskDef = (id: string) => {
        if (confirm('この定義を削除しますか？')) {
            const newList = taskDefs.filter(t => t.id !== id);
            setTaskDefs(newList);
            saveAll(roles, newList);
        }
    };

    // MeetingDef Handlers
    const handleAddMtgDef = () => {
        if (!newMtgDef.name) return;
        const def: MeetingDefinition = {
            id: `mtg-${Date.now()}`,
            name: newMtgDef.name || '',
            content: newMtgDef.content || '',
            timing: newMtgDef.timing || '',
            roleIds: newMtgDef.roleIds || []
        };
        const newList = [...mtgDefs, def];
        setMtgDefs(newList);
        saveAll(roles, taskDefs, newList);
        setNewMtgDef({ name: '', content: '', timing: '', roleIds: [] });
    };

    const handleSaveMtgDef = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingMtgDef?.name) return;
        const newList = mtgDefs.map(m => m.id === editingMtgDef.id ? editingMtgDef as MeetingDefinition : m);
        setMtgDefs(newList);
        saveAll(roles, taskDefs, newList);
        setEditingMtgDef(null);
    };

    const handleDeleteMtgDef = (id: string) => {
        if (confirm('この定義を削除しますか？')) {
            const newList = mtgDefs.filter(m => m.id !== id);
            setMtgDefs(newList);
            saveAll(roles, taskDefs, newList);
        }
    };

    const toggleRoleInDef = (roleId: string, currentRoles: string[]) => {
        return currentRoles.includes(roleId)
            ? currentRoles.filter(id => id !== roleId)
            : [...currentRoles, roleId];
    };

    return (
        <div className="settings-page">
            <header className="page-header">
                <h1>設定</h1>
            </header>

            <div className="settings-accordion">
                {/* 1. 個人設定 */}
                <div className={`accordion-section ${openSections.prefs ? 'open' : ''}`}>
                    <div className="section-header" onClick={() => toggleSection('prefs')}>
                        <SettingsIcon size={20} />
                        <h2>個人設定・データ管理</h2>
                        {openSections.prefs ? <ChevronDown /> : <ChevronRight />}
                    </div>
                    {openSections.prefs && (
                        <div className="section-content">
                            <div className="setting-item">
                                <label>現在の役職</label>
                                <select
                                    value={currentRoleId}
                                    onChange={(e) => {
                                        setCurrentRoleId(e.target.value);
                                        saveAll(roles, taskDefs, mtgDefs, e.target.value);
                                    }}
                                >
                                    <option value="">役職なし / 未設定</option>
                                    {roles.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                                </select>
                                <p className="hint">選択した役職に応じてフィルタリングされます。</p>
                            </div>
                            <div className="setting-item checkbox">
                                <label className="toggle-label">
                                    <input
                                        type="checkbox"
                                        checked={showAllItems}
                                        onChange={(e) => {
                                            setShowAllItems(e.target.checked);
                                            saveAll(roles, taskDefs, mtgDefs, currentRoleId, e.target.checked);
                                        }}
                                    />
                                    全表示モード（他役職の項目もすべて表示）
                                </label>
                            </div>
                            <div className="export-area">
                                <h3>データのエクスポート</h3>
                                <div className="export-actions">
                                    <button className="export-btn" onClick={() => handleExport('settings')}>
                                        <Download size={16} /> 設定のみを保存 (JSON)
                                    </button>
                                    <button className="export-btn all" onClick={() => handleExport('all')}>
                                        <Download size={16} /> 全データを保存 (JSON)
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* 2. 役職定義 */}
                <div className={`accordion-section ${openSections.roles ? 'open' : ''}`}>
                    <div className="section-header" onClick={() => toggleSection('roles')}>
                        <Users size={20} />
                        <h2>役職の定義</h2>
                        {openSections.roles ? <ChevronDown /> : <ChevronRight />}
                    </div>
                    {openSections.roles && (
                        <div className="section-content">
                            <div className="table-container">
                                <table className="settings-table">
                                    <thead>
                                        <tr>
                                            <th style={{ minWidth: '150px' }}>役職名</th>
                                            <th style={{ width: '100px' }}>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {roles.map(role => (
                                            <tr key={role.id}>
                                                <td>{role.name}</td>
                                                <td>
                                                    <div className="actions">
                                                        <button className="icon-btn" onClick={() => setEditingRole(role)}><Edit2 size={14} /></button>
                                                        <button className="icon-btn delete" onClick={() => handleDeleteRole(role.id)}><Trash2 size={14} /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        <tr className="adding-row">
                                            <td>
                                                <input
                                                    value={newRoleName}
                                                    onChange={e => setNewRoleName(e.target.value)}
                                                    placeholder="新しい役職名を入力..."
                                                />
                                            </td>
                                            <td>
                                                <button className="add-inline-btn" onClick={handleAddRole} disabled={!newRoleName}>
                                                    <Plus size={16} /> 追加
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>

                {/* 3. 定型タスク */}
                <div className={`accordion-section ${openSections.tasks ? 'open' : ''}`}>
                    <div className="section-header" onClick={() => toggleSection('tasks')}>
                        <BookOpen size={20} />
                        <h2>定型タスクの定義</h2>
                        {openSections.tasks ? <ChevronDown /> : <ChevronRight />}
                    </div>
                    {openSections.tasks && (
                        <div className="section-content">
                            <div className="table-container">
                                <table className="settings-table">
                                    <thead>
                                        <tr>
                                            <th style={{ minWidth: '180px' }}>タスク名</th>
                                            <th style={{ minWidth: '100px' }}>カテゴリ</th>
                                            <th style={{ minWidth: '80px' }}>優先度</th>
                                            <th style={{ minWidth: '120px' }}>対象役職</th>
                                            <th style={{ width: '100px' }}>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {taskDefs.map(def => (
                                            <tr key={def.id}>
                                                <td>
                                                    <strong>{def.title}</strong>
                                                    <div className="sub-text">{def.description}</div>
                                                </td>
                                                <td>
                                                    {def.category === 'union_member' && '🔴 組合員'}
                                                    {def.category === 'administrative' && '🔵 事務'}
                                                    {def.category === 'committee' && '🟢 委員'}
                                                </td>
                                                <td><span className={`prio-tag ${def.priority}`}>{def.priority}</span></td>
                                                <td>
                                                    <div className="role-mini-badges">
                                                        {def.roleIds.length > 0 ? def.roleIds.map(rid => (
                                                            <span key={rid} className="mini-badge">
                                                                {roles.find(r => r.id === rid)?.name || rid}
                                                            </span>
                                                        )) : <span className="empty-hint">全員</span>}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="actions">
                                                        <button className="icon-btn" onClick={() => setEditingTaskDef(def)}><Edit2 size={14} /></button>
                                                        <button className="icon-btn delete" onClick={() => handleDeleteTaskDef(def.id)}><Trash2 size={14} /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        <tr className="adding-row complex">
                                            <td colSpan={5}>
                                                <div className="inline-form">
                                                    <input
                                                        value={newTaskDef.title}
                                                        onChange={e => setNewTaskDef({ ...newTaskDef, title: e.target.value })}
                                                        placeholder="新しい定型タスク名..."
                                                    />
                                                    <select value={newTaskDef.category} onChange={e => setNewTaskDef({ ...newTaskDef, category: e.target.value as any })}>
                                                        <option value="union_member">🔴 組合員</option>
                                                        <option value="administrative">🔵 事務</option>
                                                        <option value="committee">🟢 委員</option>
                                                    </select>
                                                    <select value={newTaskDef.priority} onChange={e => setNewTaskDef({ ...newTaskDef, priority: e.target.value as any })}>
                                                        <option value="high">高</option>
                                                        <option value="medium">中</option>
                                                        <option value="low">低</option>
                                                    </select>
                                                    <button className="add-inline-btn" onClick={handleAddTaskDef} disabled={!newTaskDef.title}>
                                                        <Plus size={16} /> 追加
                                                    </button>
                                                </div>
                                                <p className="hint">※詳細は追加後の編集から設定してください</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>

                {/* 4. 会議体 */}
                <div className={`accordion-section ${openSections.meetings ? 'open' : ''}`}>
                    <div className="section-header" onClick={() => toggleSection('meetings')}>
                        <Shield size={20} />
                        <h2>会議体の定義</h2>
                        {openSections.meetings ? <ChevronDown /> : <ChevronRight />}
                    </div>
                    {openSections.meetings && (
                        <div className="section-content">
                            <div className="table-container">
                                <table className="settings-table">
                                    <thead>
                                        <tr>
                                            <th style={{ minWidth: '150px' }}>会議体名</th>
                                            <th style={{ minWidth: '150px' }}>時期・頻度</th>
                                            <th style={{ minWidth: '120px' }}>参加役職</th>
                                            <th style={{ width: '100px' }}>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mtgDefs.map(def => (
                                            <tr key={def.id}>
                                                <td>
                                                    <strong>{def.name}</strong>
                                                    <div className="sub-text">{def.content}</div>
                                                </td>
                                                <td><span className="timing-text">{def.timing}</span></td>
                                                <td>
                                                    <div className="role-mini-badges">
                                                        {def.roleIds.length > 0 ? def.roleIds.map(rid => (
                                                            <span key={rid} className="mini-badge">
                                                                {roles.find(r => r.id === rid)?.name || rid}
                                                            </span>
                                                        )) : <span className="empty-hint">全員</span>}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="actions">
                                                        <button className="icon-btn" onClick={() => setEditingMtgDef(def)}><Edit2 size={14} /></button>
                                                        <button className="icon-btn delete" onClick={() => handleDeleteMtgDef(def.id)}><Trash2 size={14} /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        <tr className="adding-row complex">
                                            <td colSpan={4}>
                                                <div className="inline-form">
                                                    <input
                                                        value={newMtgDef.name}
                                                        onChange={e => setNewMtgDef({ ...newMtgDef, name: e.target.value })}
                                                        placeholder="会議体名..."
                                                    />
                                                    <input
                                                        value={newMtgDef.timing}
                                                        onChange={e => setNewMtgDef({ ...newMtgDef, timing: e.target.value })}
                                                        placeholder="頻度（毎月第1月曜）"
                                                    />
                                                    <button className="add-inline-btn" onClick={handleAddMtgDef} disabled={!newMtgDef.name}>
                                                        <Plus size={16} /> 追加
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modals for Complex Edits */}
            {editingRole && (
                <div className="modal-overlay">
                    <div className="modal-content mini">
                        <h3>役職を編集</h3>
                        <form onSubmit={handleSaveRole}>
                            <input
                                autoFocus
                                value={editingRole.name}
                                onChange={e => setEditingRole({ ...editingRole, name: e.target.value })}
                                placeholder="役職名"
                                required
                            />
                            <div className="modal-footer">
                                <button type="button" onClick={() => setEditingRole(null)}>キャンセル</button>
                                <button type="submit" className="save-btn">保存</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {editingTaskDef && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>タスク定義の編集</h3>
                        <form onSubmit={handleSaveTaskDef}>
                            <div className="form-group">
                                <label>タイトル</label>
                                <input value={editingTaskDef.title} onChange={e => setEditingTaskDef({ ...editingTaskDef, title: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <label>説明</label>
                                <textarea value={editingTaskDef.description} onChange={e => setEditingTaskDef({ ...editingTaskDef, description: e.target.value })} />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>カテゴリ</label>
                                    <select value={editingTaskDef.category} onChange={e => setEditingTaskDef({ ...editingTaskDef, category: e.target.value as any })}>
                                        <option value="union_member">🔴 組合員関連</option>
                                        <option value="administrative">🔵 事務タスク</option>
                                        <option value="committee">🟢 委員タスク</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>優先度</label>
                                    <select value={editingTaskDef.priority} onChange={e => setEditingTaskDef({ ...editingTaskDef, priority: e.target.value as any })}>
                                        <option value="high">高</option>
                                        <option value="medium">中</option>
                                        <option value="low">低</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>担当する役職 (複数選択可)</label>
                                <div className="role-checkboxes">
                                    {roles.map(r => (
                                        <label key={r.id} className="role-cb-label">
                                            <input
                                                type="checkbox"
                                                checked={editingTaskDef.roleIds?.includes(r.id)}
                                                onChange={() => setEditingTaskDef({
                                                    ...editingTaskDef,
                                                    roleIds: toggleRoleInDef(r.id, editingTaskDef.roleIds || [])
                                                })}
                                            />
                                            {r.name}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    サブタスク定義
                                    <button type="button" className="add-sub-btn" onClick={handleAddSubtaskDef}>
                                        <Plus size={14} /> サブタスクを追加
                                    </button>
                                </label>
                                <div className="subtask-defs-list">
                                    {(editingTaskDef.subtasks || []).map((sub, idx) => (
                                        <div key={sub.id} className="subtask-def-item">
                                            <span className="order-num">{idx + 1}</span>
                                            <input
                                                value={sub.title}
                                                onChange={e => handleUpdateSubtaskDef(sub.id, e.target.value)}
                                                placeholder="サブタスクのタイトル..."
                                                required
                                            />
                                            <button type="button" className="icon-btn delete" onClick={() => handleDeleteSubtaskDef(sub.id)}>
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    {(editingTaskDef.subtasks || []).length === 0 && (
                                        <p className="empty-hint">サブタスクは定義されていません。</p>
                                    )}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={() => setEditingTaskDef(null)}>キャンセル</button>
                                <button type="submit" className="save-btn">保存</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {editingMtgDef && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>会議体定義の編集</h3>
                        <form onSubmit={handleSaveMtgDef}>
                            <div className="form-group">
                                <label>会議体名</label>
                                <input value={editingMtgDef.name} onChange={e => setEditingMtgDef({ ...editingMtgDef, name: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <label>開催時期・頻度</label>
                                <input value={editingMtgDef.timing} onChange={e => setEditingMtgDef({ ...editingMtgDef, timing: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <label>内容</label>
                                <textarea value={editingMtgDef.content} onChange={e => setEditingMtgDef({ ...editingMtgDef, content: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>参加する役職 (複数選択可)</label>
                                <div className="role-checkboxes">
                                    {roles.map(r => (
                                        <label key={r.id} className="role-cb-label">
                                            <input
                                                type="checkbox"
                                                checked={editingMtgDef.roleIds?.includes(r.id)}
                                                onChange={() => setEditingMtgDef({
                                                    ...editingMtgDef,
                                                    roleIds: toggleRoleInDef(r.id, editingMtgDef.roleIds || [])
                                                })}
                                            />
                                            {r.name}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={() => setEditingMtgDef(null)}>キャンセル</button>
                                <button type="submit" className="save-btn">保存</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
            }

            <style>{`
                .settings-page { max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem; }
                
                .settings-accordion { display: flex; flex-direction: column; gap: 0.75rem; }
                .accordion-section { border: 1px solid #334155; border-radius: 12px; background-color: var(--bg-card); overflow: hidden; }
                .section-header { 
                    padding: 1rem 1.5rem; display: flex; align-items: center; gap: 1rem; cursor: pointer; 
                    transition: background 0.2s; background-color: rgba(255, 255, 255, 0.02);
                }
                .section-header:hover { background-color: rgba(255, 255, 255, 0.05); }
                .section-header h2 { font-size: 1.1rem; flex: 1; margin: 0; }
                .section-content { padding: 1.5rem; border-top: 1px solid #334155; background-color: var(--bg-dark); }
                .table-container { overflow-x: auto; width: 100%; border: 1px solid #334155; border-radius: 8px; background-color: rgba(255,255,255,0.01); }

                /* Settings Table */
                .settings-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; min-width: 600px; }
                .settings-table th, .settings-table td { padding: 0.75rem 1rem; border-bottom: 1px solid #334155; text-align: left; vertical-align: middle; }
                .settings-table th { color: var(--text-muted); font-weight: 600; font-size: 0.8rem; background-color: rgba(255,255,255,0.03); white-space: nowrap; }
                .sub-text { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; white-space: normal; line-height: 1.4; }
                .adding-row { background-color: rgba(59, 130, 246, 0.05); }
                .adding-row td { border-bottom: none; padding-top: 1rem; }
                .adding-row.complex td { padding: 1rem; }
                
                .inline-form { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; width: 100%; }
                .inline-form input, .inline-form select { 
                    background-color: #0f172a; border: 1px solid #334155; color: white; 
                    padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.85rem; flex: 1; min-width: 140px;
                }
                .add-inline-btn { 
                    background-color: var(--primary); color: white; border: none; padding: 0.5rem 1.25rem; 
                    border-radius: 6px; font-weight: 600; display: flex; align-items: center; gap: 0.4rem; white-space: nowrap;
                }
                .add-inline-btn:disabled { opacity: 0.5; cursor: not-allowed; }

                /* Responsive Adjustments */
                @media (max-width: 768px) {
                    .section-content { padding: 1rem 0.75rem; }
                    .settings-table th, .settings-table td { padding: 0.6rem 0.75rem; }
                    .inline-form { flex-direction: column; align-items: stretch; }
                    .inline-form input, .inline-form select { width: 100%; min-width: auto; }
                    .add-inline-btn { justify-content: center; }
                    .export-actions { flex-direction: column; }
                }

                /* Tags & Badges */
                .prio-tag { font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; font-weight: 700; text-transform: uppercase; }
                .prio-tag.high { background-color: rgba(239, 68, 68, 0.2); color: var(--danger); }
                .prio-tag.medium { background-color: rgba(245, 158, 11, 0.2); color: var(--warning); }
                .prio-tag.low { background-color: rgba(148, 163, 184, 0.2); color: var(--text-muted); }
                
                .role-mini-badges { display: flex; flex-wrap: wrap; gap: 4px; }
                .mini-badge { font-size: 0.65rem; background-color: #1e293b; border: 1px solid var(--primary); color: var(--primary); padding: 1px 4px; border-radius: 3px; }
                .timing-text { font-size: 0.85rem; color: var(--warning); font-weight: 600; }

                /* Personal Prefs Area */
                .setting-item { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; }
                .setting-item label { font-size: 0.875rem; color: var(--text-muted); font-weight: 600; }
                .setting-item.checkbox { flex-direction: row; align-items: center; margin-top: 1rem; }
                .toggle-label { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; font-size: 0.9rem; }
                .hint { font-size: 0.75rem; color: var(--text-muted); font-style: italic; margin-top: 0.5rem; }

                /* Export Area */
                .export-area { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px dashed #334155; }
                .export-area h3 { font-size: 0.95rem; margin-bottom: 1rem; color: var(--text-main); }
                .export-actions { display: flex; gap: 1rem; }
                .export-btn { 
                    background: none; border: 1px solid #475569; color: var(--text-main); 
                    padding: 0.6rem 1rem; border-radius: 8px; font-size: 0.85rem; display: flex; 
                    align-items: center; gap: 0.6rem; transition: all 0.2s;
                }
                .export-btn:hover { background-color: #334155; border-color: var(--primary); }
                .export-btn.all:hover { border-color: var(--warning); }

                .actions { display: flex; gap: 0.5rem; }
                .role-checkboxes { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 0.5rem; padding: 0.75rem; background-color: #0f172a; border-radius: 8px; }
                .role-cb-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; cursor: pointer; padding: 4px; }

                /* Subtasks in Modal */
                .add-sub-btn { background: none; border: 1px solid var(--primary); color: var(--primary); font-size: 0.75rem; padding: 2px 8px; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer; }
                .add-sub-btn:hover { background-color: rgba(59, 130, 246, 0.1); }
                .subtask-defs-list { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem; }
                .subtask-def-item { display: flex; align-items: center; gap: 0.5rem; }
                .subtask-def-item input { flex: 1; padding: 0.4rem 0.6rem; font-size: 0.85rem; }
                .order-num { font-size: 0.75rem; color: var(--text-muted); width: 20px; text-align: center; }
            `}</style>
        </div >
    );
};

export default SettingsPage;
