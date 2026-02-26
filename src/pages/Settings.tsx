import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { Role, TaskDefinition, MeetingDefinition } from '../types';
import { Plus, Trash2, Edit2, Shield, BookOpen, Users, Settings as SettingsIcon } from 'lucide-react';

const SettingsPage: React.FC = () => {
    const [roles, setRoles] = useState<Role[]>([]);
    const [taskDefs, setTaskDefs] = useState<TaskDefinition[]>([]);
    const [mtgDefs, setMtgDefs] = useState<MeetingDefinition[]>([]);
    const [currentRoleId, setCurrentRoleId] = useState('');
    const [showAllItems, setShowAllItems] = useState(false);

    // Editing states
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

    // Role Handlers
    const handleSaveRole = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingRole?.name) return;
        let newRoles;
        if (editingRole.id) {
            newRoles = roles.map(r => r.id === editingRole.id ? editingRole as Role : r);
        } else {
            const newRole = { id: `role-${Date.now()}`, name: editingRole.name };
            newRoles = [...roles, newRole];
        }
        setRoles(newRoles);
        saveAll(newRoles);
        setEditingRole(null);
    };

    const handleDeleteRole = (id: string) => {
        if (confirm('この役職を削除しますか？紐付いているタスク・会議体からも解除されます。')) {
            const newRoles = roles.filter(r => r.id !== id);
            setRoles(newRoles);
            // Cleanup references
            const newTaskDefs = taskDefs.map(t => ({ ...t, roleIds: t.roleIds.filter(rid => rid !== id) }));
            const newMtgDefs = mtgDefs.map(m => ({ ...m, roleIds: m.roleIds.filter(rid => rid !== id) }));
            setTaskDefs(newTaskDefs);
            setMtgDefs(newMtgDefs);
            saveAll(newRoles, newTaskDefs, newMtgDefs);
        }
    };

    // TaskDef Handlers
    const handleSaveTaskDef = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingTaskDef?.title) return;
        let newTaskDefs;
        const completeTaskDef = {
            category: 'union_member',
            priority: 'medium',
            description: '',
            roleIds: [],
            ...editingTaskDef
        } as TaskDefinition;

        if (completeTaskDef.id) {
            newTaskDefs = taskDefs.map(t => t.id === completeTaskDef.id ? completeTaskDef : t);
        } else {
            completeTaskDef.id = `def-${Date.now()}`;
            newTaskDefs = [...taskDefs, completeTaskDef];
        }
        setTaskDefs(newTaskDefs);
        saveAll(roles, newTaskDefs);
        setEditingTaskDef(null);
    };

    const handleDeleteTaskDef = (id: string) => {
        if (confirm('この定型タスク定義を削除しますか？')) {
            const newTaskDefs = taskDefs.filter(t => t.id !== id);
            setTaskDefs(newTaskDefs);
            saveAll(roles, newTaskDefs);
        }
    };

    // MeetingDef Handlers
    const handleSaveMtgDef = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingMtgDef?.name) return;
        let newMtgDefs;
        const completeMtgDef = {
            content: '',
            timing: '',
            roleIds: [],
            ...editingMtgDef
        } as MeetingDefinition;

        if (completeMtgDef.id) {
            newMtgDefs = mtgDefs.map(m => m.id === completeMtgDef.id ? completeMtgDef : m);
        } else {
            completeMtgDef.id = `mtg-${Date.now()}`;
            newMtgDefs = [...mtgDefs, completeMtgDef];
        }
        setMtgDefs(newMtgDefs);
        saveAll(roles, taskDefs, newMtgDefs);
        setEditingMtgDef(null);
    };

    const handleDeleteMtgDef = (id: string) => {
        if (confirm('この会議体定義を削除しますか？')) {
            const newMtgDefs = mtgDefs.filter(m => m.id !== id);
            setMtgDefs(newMtgDefs);
            saveAll(roles, taskDefs, newMtgDefs);
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

            <div className="settings-grid">
                {/* 1. ユーザー設定 */}
                <section className="settings-card user-prefs">
                    <div className="card-header">
                        <SettingsIcon size={20} />
                        <h2>個人設定</h2>
                    </div>
                    <div className="card-body">
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
                            <p className="hint">選択した役職に応じてタスクや会議体がフィルタリングされます。</p>
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
                                全表示モード（他役職のタスク等もすべて表示）
                            </label>
                        </div>
                    </div>
                </section>

                {/* 2. 役職定義管理 */}
                <section className="settings-card">
                    <div className="card-header">
                        <Users size={20} />
                        <h2>役職の定義</h2>
                        <button className="add-btn-small" onClick={() => setEditingRole({ name: '' })}><Plus size={16} /></button>
                    </div>
                    <div className="card-body">
                        <div className="role-list">
                            {roles.map(role => (
                                <div key={role.id} className="role-item">
                                    <span>{role.name}</span>
                                    <div className="actions">
                                        <button className="icon-btn" onClick={() => setEditingRole(role)}><Edit2 size={14} /></button>
                                        <button className="icon-btn delete" onClick={() => handleDeleteRole(role.id)}><Trash2 size={14} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. 定型タスク定義 */}
                <section className="settings-card task-definitions">
                    <div className="card-header">
                        <BookOpen size={20} />
                        <h2>定型タスクの定義</h2>
                        <button className="add-btn-small" onClick={() => setEditingTaskDef({ title: '', category: 'union_member', priority: 'medium', roleIds: [] })}>
                            <Plus size={16} />
                        </button>
                    </div>
                    <div className="card-body">
                        {taskDefs.map(def => (
                            <div key={def.id} className="def-item">
                                <div className="def-info">
                                    <strong>{def.title}</strong>
                                    <p>{def.description}</p>
                                    <div className="role-badges">
                                        {def.roleIds.map(rid => (
                                            <span key={rid} className="role-badge">
                                                {roles.find(r => r.id === rid)?.name || rid}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="actions">
                                    <button className="icon-btn" onClick={() => setEditingTaskDef(def)}><Edit2 size={14} /></button>
                                    <button className="icon-btn delete" onClick={() => handleDeleteTaskDef(def.id)}><Trash2 size={14} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. 会議体定義 */}
                <section className="settings-card meeting-definitions">
                    <div className="card-header">
                        <Shield size={20} />
                        <h2>会議体の定義</h2>
                        <button className="add-btn-small" onClick={() => setEditingMtgDef({ name: '', content: '', timing: '', roleIds: [] })}>
                            <Plus size={16} />
                        </button>
                    </div>
                    <div className="card-body">
                        {mtgDefs.map(def => (
                            <div key={def.id} className="def-item">
                                <div className="def-info">
                                    <strong>{def.name}</strong>
                                    <p className="timing">頻度: {def.timing}</p>
                                    <p>{def.content}</p>
                                    <div className="role-badges">
                                        {def.roleIds.map(rid => (
                                            <span key={rid} className="role-badge">
                                                {roles.find(r => r.id === rid)?.name || rid}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="actions">
                                    <button className="icon-btn" onClick={() => setEditingMtgDef(def)}><Edit2 size={14} /></button>
                                    <button className="icon-btn delete" onClick={() => handleDeleteMtgDef(def.id)}><Trash2 size={14} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Editing Modals */}
            {editingRole && (
                <div className="modal-overlay">
                    <div className="modal-content mini">
                        <h3>役職を編集</h3>
                        <form onSubmit={handleSaveRole}>
                            <input
                                autoFocus
                                value={editingRole.name}
                                onChange={e => setEditingRole({ ...editingRole, name: e.target.value })}
                                placeholder="役職名（例：副委員長）"
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
                        <h3>タスク定義</h3>
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
                        <h3>会議体定義</h3>
                        <form onSubmit={handleSaveMtgDef}>
                            <div className="form-group">
                                <label>会議体名</label>
                                <input value={editingMtgDef.name} onChange={e => setEditingMtgDef({ ...editingMtgDef, name: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <label>開催時期・頻度</label>
                                <input value={editingMtgDef.timing} onChange={e => setEditingMtgDef({ ...editingMtgDef, timing: e.target.value })} placeholder="例：毎月第1月曜日" required />
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
            )}

            <style>{`
                .settings-page { max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem; }
                .settings-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
                .settings-card { background-color: var(--bg-card); border: 1px solid #334155; border-radius: 12px; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
                .card-header { display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid #334155; padding-bottom: 0.75rem; margin-bottom: 0.5rem; }
                .card-header h2 { font-size: 1.1rem; margin: 0; flex: 1; }
                .card-body { display: flex; flex-direction: column; gap: 1rem; }

                .setting-item { display: flex; flex-direction: column; gap: 0.5rem; }
                .setting-item label { font-size: 0.875rem; color: var(--text-muted); font-weight: 600; }
                .setting-item.checkbox { flex-direction: row; align-items: center; }
                .toggle-label { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; font-size: 0.9rem; }
                .hint { font-size: 0.75rem; color: var(--text-muted); font-style: italic; }

                .role-list { display: flex; flex-direction: column; gap: 0.5rem; }
                .role-item { display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0.75rem; background-color: rgba(255, 255, 255, 0.03); border-radius: 6px; }
                .actions { display: flex; gap: 0.5rem; }
                .add-btn-small { background-color: var(--primary); color: white; border: none; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; cursor: pointer; }

                .def-item { border: 1px solid #334155; border-radius: 8px; padding: 0.75rem 1rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; background-color: rgba(255, 255, 255, 0.02); }
                .def-info { flex: 1; }
                .def-info strong { display: block; margin-bottom: 0.25rem; font-size: 0.95rem; }
                .def-info p { font-size: 0.8rem; color: var(--text-muted); margin: 0; }
                .def-info .timing { color: var(--warning); font-weight: 600; margin-bottom: 0.25rem; }
                
                .role-badges { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 0.5rem; }
                .role-badge { font-size: 0.65rem; background-color: #1e293b; border: 1px solid var(--primary); color: var(--primary); padding: 1px 5px; border-radius: 4px; }

                .role-checkboxes { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 0.5rem; padding: 0.5rem; background-color: #0f172a; border-radius: 8px; }
                .role-cb-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; cursor: pointer; padding: 4px; transition: background 0.2s; }
                .role-cb-label:hover { background-color: #1e293b; }

                /* Modal Adjustments */
                .modal-content.mini { max-width: 400px; }
                .modal-content h3 { margin-top: 0; margin-bottom: 1.5rem; }
                .modal-content input { width: 100%; box-sizing: border-box; }
            `}</style>
        </div>
    );
};

export default SettingsPage;
