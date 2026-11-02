import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { Task, TaskCategory, TaskStatus, Priority, TaskDefinition } from '../types';
import { Plus, Copy, Trash2, Check, Clock, Edit2, X, Filter, Edit3, ChevronDown, ChevronRight, Layout, ClipboardList } from 'lucide-react';
import MemoEditor from '../components/MemoEditor';
import { MemoItem } from '../types';
import ConfirmDialog, { useConfirm } from '../components/ConfirmDialog';
import ToastContainer, { useToast } from '../components/Toast';
import { buttonProps } from '../utils/a11y';
import { getDueInfo } from '../utils/dueDate';
import { useModal } from '../utils/useModal';
import CategoryDot from '../components/CategoryDot';
import EmptyState from '../components/EmptyState';

// 期限の表示。期限切れ / 本日 / 3日以内のときは、色とバッジで緊急度を示す
const DueText: React.FC<{ dueDate?: string; status: TaskStatus }> = ({ dueDate, status }) => {
  const { kind, label } = getDueInfo(dueDate, status);
  return (
    <>
      <span className={`due-text ${kind}`}>期限: {dueDate || '未設定'}</span>
      {label && <span className={`due-badge ${kind}`}>{label}</span>}
    </>
  );
};

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
  const { confirmDialogProps, confirm } = useConfirm();
  // 手動追加モーダルで選んだ種類（定型タスク）の ID。空なら種類を指定しない自由入力
  const [newTaskTypeId, setNewTaskTypeId] = useState('');
  const { toasts, showToast, dismissToast } = useToast();

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

  const handleDelete = async (id: string) => {
    const ok = await confirm({
      title: 'タスクを削除',
      message: 'このタスクを削除しますか？この操作は元に戻せません。',
      confirmLabel: '削除する',
    });
    if (ok) {
      saveTasks(tasks.filter(t => t.id !== id));
      showToast('タスクを削除しました', 'info');
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

  // 種類を選ぶと、その定型タスクの設定（カテゴリ・優先度・回答率の測定など）を引き継ぐ
  const handlePickTaskType = (defId: string) => {
    setNewTaskTypeId(defId);
    const def = taskDefs.find(d => d.id === defId);
    if (!def) return;
    setEditingTask(prev => prev && ({
      ...prev,
      category: def.category,
      priority: def.priority,
      title: prev.title || def.title,
      description: prev.description || def.description,
      trackResponseRate: !!def.trackResponseRate,
      responseRate: def.trackResponseRate ? (prev.responseRate || 0) : undefined,
      subtasks: (def.subtasks || []).map(sub => ({
        id: `sub-${Math.random().toString(36).substr(2, 9)}`,
        title: sub.title,
        isCompleted: false,
        order: sub.order,
      })),
    }));
  };

  const openNewTaskModal = () => {
    setNewTaskTypeId('');
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
    showToast(editingTask.id ? 'タスクを更新しました' : 'タスクを作成しました');
    setEditingTask(null);
  };

  // タスク編集モーダル: Esc で閉じる / 背面スクロール固定 / フォーカス復帰
  useModal(!!editingTask, () => setEditingTask(null));

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
        <div className="section-header" aria-expanded={isTemplatesOpen} {...buttonProps(() => setIsTemplatesOpen(!isTemplatesOpen))}>
          <Layout size={20} />
          <h3>クイック作成 (定型タスク)</h3>
          {isTemplatesOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
        {isTemplatesOpen && (
          <div className="section-content template-grid">
            {visibleTemplates.map(def => (
              <button key={def.id} className="template-card" onClick={() => createFromTemplate(def.id)}>
                <div className={`tpl-icon ${def.category}`}>
                  <CategoryDot category={def.category} />
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

      <nav className="tab-nav" role="tablist" aria-label="タスクの種類">
        <button
          role="tab"
          aria-selected={activeTab === 'union_member'}
          className={`tab-btn ${activeTab === 'union_member' ? 'active' : ''}`}
          onClick={() => setActiveTab('union_member')}
        >
          <CategoryDot category="union_member" />組合員関連<span className="tab-suffix">タスク</span>
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'administrative'}
          className={`tab-btn ${activeTab === 'administrative' ? 'active' : ''}`}
          onClick={() => setActiveTab('administrative')}
        >
          <CategoryDot category="administrative" />事務<span className="tab-suffix">タスク</span>
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'committee'}
          className={`tab-btn ${activeTab === 'committee' ? 'active' : ''}`}
          onClick={() => setActiveTab('committee')}
        >
          <CategoryDot category="committee" />委員<span className="tab-suffix">タスク</span>
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
                  {task.status === 'on_hold' && <span className="status-label">{getStatusLabel(task.status)}</span>}
                  <div className="status-btns" role="group" aria-label={`「${task.title}」のステータス`}>
                    {(['todo', 'in_progress', 'completed'] as TaskStatus[]).map(s => (
                      <button
                        key={s}
                        className={`status-seg-btn ${task.status === s ? 'active' : ''} ${s}`}
                        onClick={() => handleStatusChange(task.id, s)}
                        aria-pressed={task.status === s}
                      >
                        {getStatusLabel(s)}
                      </button>
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
                    <div className="date-display" {...buttonProps(() => setIsEditingDate(task.id))}>
                      <DueText dueDate={task.dueDate} status={task.status} />
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
                  <button className="icon-btn" title="詳細編集" aria-label={`「${task.title}」を詳細編集`} onClick={() => setEditingTask(task)}><Edit2 size={16} aria-hidden="true" /></button>
                  <button className="icon-btn" title="複製" aria-label={`「${task.title}」を複製`} onClick={() => handleDuplicate(task)}><Copy size={16} aria-hidden="true" /></button>
                  <button className="icon-btn delete" onClick={() => handleDelete(task.id)} title="削除" aria-label={`「${task.title}」を削除`}><Trash2 size={16} aria-hidden="true" /></button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <EmptyState
            icon={<ClipboardList size={24} />}
            title="該当するタスクはありません"
            description="「手動で追加」か、クイック作成の定型タスクから登録できます。"
            action={{ label: 'タスクを追加', onClick: openNewTaskModal }}
          />
        )}
      </div>

      {
        editingTask && (
          <div className="modal-overlay">
            <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="task-modal-title">
              <div className="modal-header">
                <h2 id="task-modal-title">{editingTask.id ? 'タスクを編集' : '新規タスク作成'}</h2>
                <button className="close-btn" onClick={() => setEditingTask(null)} aria-label="閉じる" title="閉じる"><X size={20} aria-hidden="true" /></button>
              </div>
              <form onSubmit={handleSaveTask}>
                {!editingTask.id && (
                  <div className="form-group">
                    <label htmlFor="new-task-type">種類（定型タスク）</label>
                    <select id="new-task-type" value={newTaskTypeId} onChange={e => handlePickTaskType(e.target.value)}>
                      <option value="">種類を指定しない（自由入力）</option>
                      {visibleTemplates.map(d => (
                        <option key={d.id} value={d.id}>{d.title}</option>
                      ))}
                    </select>
                    <p className="form-hint">種類を選ぶと、カテゴリ・優先度・回答率を測るかどうかが設定どおりになります。</p>
                  </div>
                )}
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
                      disabled={!editingTask.id && !!newTaskTypeId}
                      value={editingTask.category || 'union_member'}
                      onChange={e => setEditingTask({ ...editingTask, category: e.target.value as TaskCategory })}
                    >
                      <option value="union_member">組合員関連</option>
                      <option value="administrative">事務タスク</option>
                      <option value="committee">委員タスク</option>
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
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={editingTask.trackResponseRate || false}
                      disabled={!editingTask.id && !!newTaskTypeId}
                      onChange={e => setEditingTask({ 
                        ...editingTask, 
                        trackResponseRate: e.target.checked,
                        responseRate: e.target.checked ? (editingTask.responseRate || 0) : undefined
                      })}
                    />
                    回答率を測る
                  </label>
                  {!editingTask.id && newTaskTypeId && (
                    <p className="form-hint">選んだ種類の設定に従います（設定画面で変更できます）。</p>
                  )}
                </div>
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
          defaultLinkedTaskId={memoTaskId}
          onSave={(newMemos: MemoItem[]) => {
            const otherMemos = globalMemos.filter(m => m.linkedTaskId !== memoTaskId);
            const updatedGlobalMemos = [...otherMemos, ...newMemos];
            setGlobalMemos(updatedGlobalMemos);
            storage.saveMemos(updatedGlobalMemos);
          }}
          onClose={() => setMemoTaskId(null)}
        />
      )}

      <ConfirmDialog {...confirmDialogProps} />
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      <style>{`
        .task-page {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: var(--content-max-width);
          margin: 0 auto;
        }

        /* アコーディオン共通スタイル */
        .accordion-section {
          background-color: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
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
          border-top: 1px solid var(--border);
          padding-top: 1.25rem;
        }

        .filter-status {
          font-size: 0.75rem;
          color: var(--primary);
          background-color: rgba(59, 130, 246, 0.1);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-pill);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 600;
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

        .template-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .template-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 1.25rem;
          text-align: left;
          transition: all 0.2s ease;
          width: 100%;
        }

        .template-card:hover {
          background-color: var(--border);
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
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.5rem;
          /* 幅が足りないときは折り返さず横スクロールにする */
          overflow-x: auto;
          scrollbar-width: none;
        }

        .tab-nav::-webkit-scrollbar { display: none; }

        .tab-btn {
          background: none;
          border: none;
          padding: 0.5rem 1rem;
          color: var(--text-muted);
          font-weight: 600;
          position: relative;
          white-space: nowrap;
          flex: 0 0 auto;
          min-height: 44px;
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
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
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
          white-space: nowrap;
          flex-shrink: 0;
          font-size: 0.75rem;
          padding: 2px 6px;
          border-radius: var(--radius-xs);
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
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .status-label {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .status-btns {
          display: flex;
          gap: 0.25rem;
          justify-content: flex-end;
        }

        /* ステータス切替: 3 択のラベル付きセグメントボタン（色だけに頼らず文字で状態を示す） */
        .status-btns {
          display: inline-flex;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .status-seg-btn {
          min-height: 36px;
          padding: 0.4rem 0.75rem;
          background: none;
          border: none;
          border-left: 1px solid var(--border);
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
          transition: background-color 0.15s, color 0.15s;
        }

        .status-seg-btn:first-child { border-left: none; }
        .status-seg-btn:hover:not(.active) { background-color: rgba(255, 255, 255, 0.06); color: var(--text-main); }
        .status-seg-btn.active.todo { background-color: var(--border); color: var(--text-main); }
        .status-seg-btn.active.in_progress { background-color: rgba(245, 158, 11, 0.2); color: #fbbf24; }
        .status-seg-btn.active.completed { background-color: rgba(16, 185, 129, 0.2); color: #34d399; }
        .status-seg-btn:focus-visible { outline-offset: -2px; }

        /* 期限の緊急度 */
        .due-text.overdue { color: #f87171; font-weight: 600; }
        .due-text.today { color: #fbbf24; font-weight: 600; }

        .due-badge {
          padding: 1px 8px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 700;
          white-space: nowrap;
        }
        .due-badge.overdue { background-color: rgba(239, 68, 68, 0.18); color: #f87171; }
        .due-badge.today { background-color: rgba(245, 158, 11, 0.2); color: #fbbf24; }
        .due-badge.soon { background-color: rgba(148, 163, 184, 0.15); color: var(--text-main); }

        /* Subtasks Area */
        .subtasks-area {
          background-color: rgba(255, 255, 255, 0.02);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .subtask-header {
          font-size: 0.75rem;
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
          border-radius: var(--radius-xs);
          transition: background 0.2s;
        }
        .subtask-item:hover { background-color: rgba(255, 255, 255, 0.05); }
        .subtask-item.completed { color: var(--text-muted); text-decoration: line-through; opacity: 0.7; }
        .subtask-check {
          width: 14px;
          height: 14px;
          border: 1px solid var(--border-hover);
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
          border-radius: var(--radius-md);
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
          background-color: var(--border);
          border: none;
          color: var(--text-main);
          padding: 0.4rem 0;
          border-radius: var(--radius-xs);
          font-size: 0.75rem;
          transition: all 0.1s ease;
        }

        .rate-btn:hover { background-color: var(--border-hover); }
        .rate-btn.active { background-color: var(--primary); font-weight: 700; }

        .task-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border);
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

        .date-display {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          padding: 2px 4px;
          border-radius: var(--radius-xs);
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
          border: 1px solid var(--border);
          color: var(--text-muted);
          font-size: 0.75rem;
          padding: 2px 6px;
          border-radius: var(--radius-xs);
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
          background-color: var(--bg-card);
          border: 1px solid var(--primary);
          color: white;
          border-radius: var(--radius-xs);
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
          border-radius: var(--radius-xs);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* モーダル / フォーム / アイコンボタン等の共通スタイルは src/index.css に集約 */

        @media (max-width: 640px) {
          .template-grid { grid-template-columns: 1fr !important; }
          .rate-btns { flex-wrap: wrap; gap: 0.5rem; }
          .rate-btn { flex: 1 1 30%; font-size: 0.8rem; padding: 0.6rem 0; }
          .task-title { font-size: 1rem; }
          .task-main { flex-direction: column; gap: 0.75rem; }
          .task-status-control { align-items: stretch; }
          .status-btns { display: flex; }
          .status-seg-btn { flex: 1; min-height: 40px; }
          .tab-nav { gap: 0.25rem; }
          .tab-btn { padding: 0.5rem 0.75rem; font-size: 0.9rem; }
          /* カード下部（期限 / メモ / 操作ボタン）が収まらないときは折り返す */
          .task-footer { flex-wrap: wrap; gap: 0.5rem; }
          .task-meta { flex-wrap: wrap; }
          .task-actions { margin-left: auto; }
          .date-display span { white-space: nowrap; }
        }

        @media (pointer: coarse) {
          .memo-btn-tiny { min-height: 36px; }
          .edit-btn-tiny { min-width: 32px; min-height: 32px; justify-content: center; }
        }

        /* 狭い画面では「〜タスク」の語尾を省いて 3 つのタブを 1 行に収める */
        @media (max-width: 480px) {
          .tab-suffix { display: none; }
          .tab-nav { gap: 0; justify-content: space-between; }
          .tab-btn { flex: 1 1 0; padding: 0.5rem 0.25rem; }
        }
      `}</style>
    </div >
  );
};

export default TaskList;
