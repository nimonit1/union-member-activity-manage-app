import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { Task, TaskCategory, TaskStatus, Priority, TaskDefinition } from '../types';
import { Plus, Copy, Trash2, Check, Clock, Edit2, X, Filter, Edit3, ChevronDown, ChevronRight, Layout } from 'lucide-react';
import MemoEditor from '../components/MemoEditor';
import { MemoItem } from '../types';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDefs, setTaskDefs] = useState<TaskDefinition[]>([]);
  const [currentRoleId, setCurrentRoleId] = useState('');
  const [showAllItems, setShowAllItems] = useState(false);
  const [activeTab, setActiveTab] = useState<TaskCategory>('union_member');
  const [editingTask, setEditingTask] = useState<Partial<Task> | null>(null);
  const [isEditingDate, setIsEditingDate] = useState<string | null>(null);
  const [memoTaskId, setMemoTaskId] = useState<string | null>(null);
  const [globalMemos, setGlobalMemos] = useState<MemoItem[]>([]);
  const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);

  useEffect(() => {
    setTasks(storage.getTasks());
    setGlobalMemos(storage.getMemos());
    setTaskDefs(storage.getTaskDefinitions());
    setCurrentRoleId(storage.getCurrentRoleId());
    setShowAllItems(storage.getShowAllItems());
  }, []);

  const saveTasks = (newTasks: Task[]) => {
    setTasks(newTasks);
    storage.saveTasks(newTasks);
  };

  const handleStatusChange = (id: string, newStatus: TaskStatus) => {
    const newTasks = tasks.map(t => t.id === id ? { ...t, status: newStatus } : t);
    saveTasks(newTasks);
  };

  const handleResponseRateChange = (id: string, rate: number) => {
    const newTasks = tasks.map(t => t.id === id ? { ...t, response_rate: rate, responseRate: rate } : t);
    saveTasks(newTasks);
  };

  const handleSubtaskToggle = (taskId: string, subtaskId: string) => {
    const newTasks = tasks.map(t => {
      if (t.id === taskId) {
        const subtasks = (t.subtasks || []).map(s =>
          s.id === subtaskId ? { ...s, isCompleted: !s.isCompleted } : s
        );
        return { ...t, subtasks };
      }
      return t;
    });
    saveTasks(newTasks);
  };

  const handleDelete = (id: string) => {
    if (confirm('このタスクを削除しますか？')) {
      saveTasks(tasks.filter(t => t.id !== id));
    }
  };

  const handleDateChange = (id: string, date: string) => {
    const newTasks = tasks.map(t => t.id === id ? { ...t, dueDate: date } : t);
    saveTasks(newTasks);
  };

  const handleDuplicate = (task: Task) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      title: `${task.title} (コピー)`,
      createdAt: new Date().toISOString(),
      status: 'todo',
    };
    saveTasks([newTask, ...tasks]);
  };

  const createFromTemplate = (defId: string) => {
    const def = taskDefs.find(t => t.id === defId);
    if (!def) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: def.title,
      description: def.description,
      category: def.category,
      status: 'todo',
      priority: def.priority,
      createdAt: new Date().toISOString(),
      trackResponseRate: def.trackResponseRate,
      responseRate: (def.trackResponseRate) ? 0 : undefined,
      subtasks: (def.subtasks || []).map(s => ({
        id: `sub-${Math.random().toString(36).substr(2, 9)}`,
        title: s.title,
        isCompleted: false,
        order: s.order
      }))
    };

    saveTasks([newTask, ...tasks]);
    setActiveTab(def.category);
  };

  // フィルタリングロジック
  const filteredTasks = tasks.filter(t => {
    const matchesTab = t.category === activeTab;
    if (!matchesTab) return false;

    // 全表示モードなら他はチェックしない
    if (showAllItems) return true;

    // 役職に紐付いたタスク（定義から作成された場合）のチェック
    // 既存のタスクに roleIds がない場合（直接作成された等）は表示する
    const taskDef = taskDefs.find(d => d.title === t.title);
    if (taskDef && currentRoleId) {
      // 役職が指定されている定義の場合のみフィルタリング
      if (taskDef.roleIds.length > 0) {
        return taskDef.roleIds.includes(currentRoleId);
      }
    }

    return true;
  });

  // クイック作成用テンプレートの絞り込み
  const visibleTemplates = taskDefs.filter(def => {
    if (showAllItems) return true;
    if (!currentRoleId) return true;
    // 役職未指定（空配列）の定義は全員に表示する
    if (def.roleIds.length === 0) return true;
    return def.roleIds.includes(currentRoleId);
  });

  const getStatusLabel = (status: TaskStatus) => {
    switch (status) {
      case 'todo': return '未着手';
      case 'in_progress': return '進行中';
      case 'completed': return '完了';
      case 'on_hold': return '保留';
    }
  };

  const openNewTaskModal = () => {
    setEditingTask({
      category: activeTab,
      status: 'todo',
      priority: 'medium',
      title: '',
      description: '',
      dueDate: '',
      trackResponseRate: activeTab === 'union_member',
      responseRate: activeTab === 'union_member' ? 0 : undefined
    });
  };

  const handleSaveTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTask || !editingTask.title) return;

    if (editingTask.id) {
      // Edit existing
      const newTasks = tasks.map(t => t.id === editingTask.id ? { ...t, ...editingTask } as Task : t);
      saveTasks(newTasks);
    } else {
      // Create new
      const newTask: Task = {
        ...(editingTask as Task),
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };
      saveTasks([newTask, ...tasks]);
    }
    setEditingTask(null);
  };

  return (
    <div className="task-page">
      <header className="page-header">
        <h1>タスク管理</h1>
        <div className="header-actions">
          {!showAllItems && currentRoleId && (
            <span className="filter-status">
              <Filter size={14} />
              役職フィルタ有効
            </span>
          )}
          <button className="primary-btn" onClick={openNewTaskModal}>
            <Plus size={18} />
            手動で追加
          </button>
        </div>
      </header>

      <section className={`accordion-section templates-section ${isTemplatesOpen ? 'open' : ''}`}>
        <div className="section-header" onClick={() => setIsTemplatesOpen(!isTemplatesOpen)}>
          <Layout size={20} />
          <h3>クイック作成 (定型タスク)</h3>
          {isTemplatesOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
        {isTemplatesOpen && (
          <div className="section-content template-grid">
            {visibleTemplates.map(def => (
              <button key={def.id} className="template-card" onClick={() => createFromTemplate(def.id)}>
                <div className={`tpl-icon ${def.category}`}>
                  {def.category === 'union_member' && '🔴'}
                  {def.category === 'administrative' && '🔵'}
                  {def.category === 'committee' && '🟢'}
                </div>
                <div className="tpl-text">
                  <span className="tpl-title">{def.title}</span>
                  <span className="tpl-desc">{def.description}</span>
                </div>
              </button>
            ))}
            {visibleTemplates.length === 0 && <p className="empty-hint">この役職の定型タスクはありません。設定から追加できます。</p>}
          </div>
        )}
      </section>

      <nav className="tab-nav">
        <button
          className={`tab-btn ${activeTab === 'union_member' ? 'active' : ''}`}
          onClick={() => setActiveTab('union_member')}
        >
          🔴 組合員関連タスク
        </button>
        <button
          className={`tab-btn ${activeTab === 'administrative' ? 'active' : ''}`}
          onClick={() => setActiveTab('administrative')}
        >
          🔵 事務タスク
        </button>
        <button
          className={`tab-btn ${activeTab === 'committee' ? 'active' : ''}`}
          onClick={() => setActiveTab('committee')}
        >
          🟢 委員タスク
        </button>
      </nav>

      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <div key={task.id} className={`task-card ${task.priority} ${task.status}`}>
              <div className="task-main">
                <div className="task-info">
                  <div className="task-title-row">
                    <span className="task-title">{task.title}</span>
                    <span className={`priority-badge ${task.priority}`}>{task.priority === 'high' ? '優先：高' : task.priority === 'medium' ? '優先：中' : '優先：低'}</span>
                  </div>
                  <p className="task-desc">{task.description}</p>
                </div>

                <div className="task-status-control">
                  <span className="status-label">{getStatusLabel(task.status)}</span>
                  <div className="status-btns">
                    {(['todo', 'in_progress', 'completed'] as TaskStatus[]).map(s => (
                      <button
                        key={s}
                        className={`status-dot ${task.status === s ? 'active' : ''} ${s}`}
                        onClick={() => handleStatusChange(task.id, s)}
                        title={getStatusLabel(s)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {task.trackResponseRate && task.status !== 'completed' && (
                <div className="response-rate-area">
                  <div className="rate-header">
                    <span>回答率の更新</span>
                    <span className={`rate-value ${task.responseRate !== undefined && task.responseRate < 50 ? 'warning' : ''}`}>
                      {task.responseRate || 0}%
                    </span>
                  </div>
                  <div className="rate-btns">
                    {[0, 20, 40, 60, 80, 100].map(rate => (
                      <button
                        key={rate}
                        className={`rate-btn ${task.responseRate === rate ? 'active' : ''}`}
                        onClick={() => handleResponseRateChange(task.id, rate)}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {task.subtasks && task.subtasks.length > 0 && (
                <div className="subtasks-area">
                  <div className="subtask-header">
                    <span>サブタスク ({task.subtasks.filter(s => s.isCompleted).length}/{task.subtasks.length})</span>
                  </div>
                  <div className="subtasks-list">
                    {task.subtasks.sort((a, b) => a.order - b.order).map(sub => (
                      <div
                        key={sub.id}
                        className={`subtask-item ${sub.isCompleted ? 'completed' : ''}`}
                        onClick={() => handleSubtaskToggle(task.id, sub.id)}
                      >
                        <div className={`subtask-check ${sub.isCompleted ? 'checked' : ''}`}>
                          {sub.isCompleted && <Check size={10} />}
                        </div>
                        <span className="subtask-title">{sub.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="task-footer">
                <div className="task-meta">
                  <Clock size={14} />
                  {isEditingDate === task.id ? (
                    <div className="date-edit-group">
                      <input
                        type="date"
                        value={task.dueDate || ''}
                        onChange={(e) => handleDateChange(task.id, e.target.value)}
                        className="date-input"
                        autoFocus
                      />
                      <button className="small-done-btn" onClick={() => setIsEditingDate(null)}>
                        <Check size={12} />
                      </button>
                    </div>
                  ) : (
                    <div className="date-display" onClick={() => setIsEditingDate(task.id)}>
                      <span>期限: {task.dueDate || '未設定'}</span>
                      <button className="edit-btn-tiny" title="期限を設定">
                        <Edit2 size={12} />
                      </button>
                    </div>
                  )}
                  <button className="memo-btn-tiny" onClick={() => setMemoTaskId(task.id)}>
                    <Edit3 size={12} />
                    メモ ({globalMemos.filter(m => m.linkedTaskId === task.id).length})
                  </button>
                </div>
                <div className="task-actions">
                  <button className="icon-btn" title="詳細編集" onClick={() => setEditingTask(task)}><Edit2 size={16} /></button>
                  <button className="icon-btn" title="複製" onClick={() => handleDuplicate(task)}><Copy size={16} /></button>
                  <button className="icon-btn delete" onClick={() => handleDelete(task.id)} title="削除"><Trash2 size={16} /></button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">該当するタスクはありません。</div>
        )}
      </div>

      {
        editingTask && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h2>{editingTask.id ? 'タスクを編集' : '新規タスク作成'}</h2>
                <button className="close-btn" onClick={() => setEditingTask(null)}><X size={20} /></button>
              </div>
              <form onSubmit={handleSaveTask}>
                <div className="form-group">
                  <label>タイトル</label>
                  <input
                    type="text"
                    required
                    value={editingTask.title || ''}
                    onChange={e => setEditingTask({ ...editingTask, title: e.target.value })}
                    placeholder="例：〇〇改善案の意見集約"
                  />
                </div>
                <div className="form-group">
                  <label>説明</label>
                  <textarea
                    rows={3}
                    value={editingTask.description || ''}
                    onChange={e => setEditingTask({ ...editingTask, description: e.target.value })}
                    placeholder="詳細なメモを入力..."
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>カテゴリ</label>
                    <select
                      value={editingTask.category || 'union_member'}
                      onChange={e => setEditingTask({ ...editingTask, category: e.target.value as TaskCategory })}
                    >
                      <option value="union_member">🔴 組合員関連</option>
                      <option value="administrative">🔵 事務タスク</option>
                      <option value="committee">🟢 委員タスク</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>優先度</label>
                    <select
                      value={editingTask.priority || 'medium'}
                      onChange={e => setEditingTask({ ...editingTask, priority: e.target.value as Priority })}
                    >
                      <option value="high">高</option>
                      <option value="medium">中</option>
                      <option value="low">低</option>
                    </select>
                  </div>
                </div>
                {editingTask.category === 'union_member' && (
                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={editingTask.trackResponseRate || false}
                        onChange={e => setEditingTask({ 
                          ...editingTask, 
                          trackResponseRate: e.target.checked,
                          responseRate: e.target.checked ? (editingTask.responseRate || 0) : undefined
                        })}
                      />
                      回答率を記録してフォローする
                    </label>
                  </div>
                )}
                <div className="form-row">
                  <div className="form-group">
                    <label>期限</label>
                    <input
                      type="date"
                      value={editingTask.dueDate || ''}
                      onChange={e => setEditingTask({ ...editingTask, dueDate: e.target.value })}
                    />
                  </div>
                  {editingTask.trackResponseRate && (
                    <div className="form-group">
                      <label>現在の回答率 (%)</label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="10"
                        value={editingTask.responseRate || 0}
                        onChange={e => setEditingTask({ ...editingTask, responseRate: parseInt(e.target.value) })}
                      />
                    </div>
                  )}
                </div>
                <div className="modal-footer">
                  <button type="button" className="cancel-btn" onClick={() => setEditingTask(null)}>キャンセル</button>
                  <button type="submit" className="save-btn">保存する</button>
                </div>
              </form>
            </div>
          </div>
        )}

      {memoTaskId && (
        <MemoEditor
          memos={globalMemos.filter(m => m.linkedTaskId === memoTaskId)}
          initialMemoId={globalMemos.find(m => m.linkedTaskId === memoTaskId)?.id}
          onSave={(newMemos: MemoItem[]) => {
            const otherMemos = globalMemos.filter(m => m.linkedTaskId !== memoTaskId);
            const updatedGlobalMemos = [...otherMemos, ...newMemos];
            setGlobalMemos(updatedGlobalMemos);
            storage.saveMemos(updatedGlobalMemos);
          }}
          onClose={() => setMemoTaskId(null)}
        />
      )}

      <style>{`
        .task-page {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        /* アコーディオン共通スタイル */
        .accordion-section {
          background-color: var(--bg-card);
          border: 1px solid #334155;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .accordion-section .section-header {
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: background-color 0.2s;
          user-select: none;
        }

        .accordion-section .section-header:hover {
          background-color: rgba(255, 255, 255, 0.03);
        }

        .accordion-section .section-header h3 {
          flex: 1;
          margin: 0;
          font-size: 1rem;
          color: var(--text-main);
        }

        .accordion-section .section-content {
          padding: 0 1.25rem 1.25rem;
          border-top: 1px solid #334155;
          padding-top: 1.25rem;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .filter-status {
          font-size: 0.75rem;
          color: var(--primary);
          background-color: rgba(59, 130, 246, 0.1);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 600;
        }

        .header-actions .primary-btn {
          background-color: var(--primary);
          color: white;
          border: none;
          padding: 0.6rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .tpl-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          overflow: hidden;
        }

        .tpl-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.4;
        }

        .tpl-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .empty-hint {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-style: italic;
          padding: 1rem;
          text-align: center;
          width: 100%;
        }

        .template-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .template-card {
          background-color: var(--bg-card);
          border: 1px solid #334155;
          padding: 1rem 1.25rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          text-align: left;
          transition: all 0.2s ease;
          width: 100%;
        }

        .template-card:hover {
          background-color: #334155;
          transform: translateY(-2px);
        }

        .tpl-icon {
          font-size: 1.25rem;
        }

        .template-card span {
          font-size: 0.875rem;
          font-weight: 500;
        }

        .tab-nav {
          display: flex;
          gap: 1rem;
          border-bottom: 1px solid #334155;
          padding-bottom: 0.5rem;
        }

        .tab-btn {
          background: none;
          border: none;
          padding: 0.5rem 1rem;
          color: var(--text-muted);
          font-weight: 600;
          position: relative;
        }

        .tab-btn.active {
          color: var(--text-main);
        }

        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--primary);
        }

        .task-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .task-card {
          background-color: var(--bg-card);
          border: 1px solid #334155;
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .task-card.high { border-left: 4px solid var(--danger); }
        .task-card.medium { border-left: 4px solid var(--warning); }
        .task-card.completed { opacity: 0.6; }

        .task-main {
          display: flex;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .task-info {
          flex: 1;
        }

        .task-title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .task-title {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .priority-badge {
          font-size: 0.625rem;
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 700;
        }

        .priority-badge.high { background-color: rgba(239, 68, 68, 0.15); color: var(--danger); }
        .priority-badge.medium { background-color: rgba(245, 158, 11, 0.15); color: var(--warning); }
        .priority-badge.low { background-color: rgba(148, 163, 184, 0.15); color: var(--text-muted); }

        .task-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .task-status-control {
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 100px;
        }

        .status-label {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .status-btns {
          display: flex;
          gap: 0.5rem;
          justify-content: flex-end;
        }

        .status-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid transparent;
          background-color: transparent;
          transition: all 0.2s ease;
        }

        .status-dot.todo { border-color: #475569; }
        .status-dot.in_progress { border-color: var(--warning); }
        .status-dot.completed { border-color: var(--success); }

        .status-dot.active.todo { background-color: #475569; }
        .status-dot.active.in_progress { background-color: var(--warning); }
        .status-dot.active.completed { background-color: var(--success); }

        /* Subtasks Area */
        .subtasks-area {
          background-color: rgba(255, 255, 255, 0.02);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .subtask-header {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }
        .subtasks-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .subtask-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
          font-size: 0.85rem;
          padding: 2px 4px;
          border-radius: 4px;
          transition: background 0.2s;
        }
        .subtask-item:hover { background-color: rgba(255, 255, 255, 0.05); }
        .subtask-item.completed { color: var(--text-muted); text-decoration: line-through; opacity: 0.7; }
        .subtask-check {
          width: 14px;
          height: 14px;
          border: 1px solid #475569;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .subtask-check.checked {
          background-color: var(--success);
          border-color: var(--success);
          color: white;
        }
        .subtask-title { flex: 1; }

        .response-rate-area {
          background-color: rgba(255, 255, 255, 0.03);
          padding: 1rem;
          border-radius: 8px;
        }

        .rate-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          margin-bottom: 0.75rem;
          color: var(--text-muted);
        }

        .rate-value.warning {
          color: var(--danger);
          font-weight: 700;
        }

        .rate-btns {
          display: flex;
          justify-content: space-between;
          gap: 0.4rem;
        }

        .rate-btn {
          flex: 1;
          background-color: #334155;
          border: none;
          color: var(--text-main);
          padding: 0.4rem 0;
          border-radius: 4px;
          font-size: 0.7rem;
          transition: all 0.1s ease;
        }

        .rate-btn:hover { background-color: #475569; }
        .rate-btn.active { background-color: var(--primary); font-weight: 700; }

        .form-group.checkbox-group {
          margin-bottom: 1rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          cursor: pointer;
          color: var(--text-main);
        }

        .task-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.75rem;
          border-top: 1px solid #334155;
        }

        .task-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .task-actions {
          display: flex;
          gap: 0.5rem;
        }

        .icon-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          padding: 4px;
          border-radius: 4px;
        }

        .icon-btn:hover { background-color: #334155; color: var(--text-main); }
        .icon-btn.delete:hover { color: var(--danger); }

        .date-display {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          padding: 2px 4px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .date-display:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .edit-btn-tiny {
          background: none;
          border: none;
          color: var(--primary);
          padding: 0;
          display: flex;
          align-items: center;
          opacity: 0.6;
        }

        .memo-btn-tiny {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #334155;
          color: var(--text-muted);
          font-size: 0.65rem;
          padding: 2px 6px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .memo-btn-tiny:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--text-main);
          border-color: var(--primary);
        }

        .date-edit-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .date-input {
          background-color: #1e293b;
          border: 1px solid var(--primary);
          color: white;
          border-radius: 4px;
          padding: 2px 4px;
          font-size: 0.75rem;
          font-family: inherit;
        }

        .small-done-btn {
          background-color: var(--primary);
          color: white;
          border: none;
          width: 20px;
          height: 20px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-content {
          background-color: var(--bg-card);
          border: 1px solid #334155;
          border-radius: 16px;
          width: 100%;
          max-width: 500px;
          padding: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .modal-header h2 {
          font-size: 1.25rem;
          margin: 0;
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }

        .form-group {
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group label {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .form-group input, .form-group textarea, .form-group select {
          background-color: #0f172a;
          border: 1px solid #334155;
          color: white;
          padding: 0.75rem;
          border-radius: 8px;
          font-family: inherit;
          font-size: 1rem;
        }

        .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
          outline: none;
          border-color: var(--primary);
        }

        .modal-footer {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .modal-footer button {
          flex: 1;
          padding: 0.75rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
        }

        .modal-footer .save-btn {
          background-color: var(--primary);
          color: white;
          border: none;
        }

        .modal-footer .cancel-btn {
          background-color: transparent;
          border: 1px solid #334155;
          color: var(--text-muted);
        }

        @media (max-width: 640px) {
          .template-grid { grid-template-columns: 1fr; }
          .rate-btns { flex-wrap: wrap; gap: 0.5rem; }
          .rate-btn { flex: 1 1 30%; font-size: 0.8rem; padding: 0.6rem 0; }
          .task-title { font-size: 1rem; }
          .page-header h1 { font-size: 1.5rem; }
          .modal-content { padding: 1.5rem; border-radius: 12px; }
        }
      `}</style>
    </div >
  );
};

export default TaskList;
