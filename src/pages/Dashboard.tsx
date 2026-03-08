import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { Task, ScheduleEvent } from '../types';
import { AlertCircle, Calendar, CheckSquare, Clock, TrendingDown, Wallet, Bell, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [events, setEvents] = useState<ScheduleEvent[]>([]);
  const [currentRoleId, setCurrentRoleId] = useState('');
  const [showAllItems, setShowAllItems] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTasks(storage.getTasks());
    setEvents(storage.getEvents());
    setCurrentRoleId(storage.getCurrentRoleId());
    setShowAllItems(storage.getShowAllItems());
  }, []);

  const taskDefs = storage.getTaskDefinitions();
  const mtgDefs = storage.getMeetingDefinitions();

  // フィルタリング
  const isTaskVisible = (t: Task) => {
    if (showAllItems) return true;
    const def = taskDefs.find((d: any) => d.title === t.title);
    if (def && currentRoleId) {
      if (def.roleIds && def.roleIds.length > 0) {
        return def.roleIds.includes(currentRoleId);
      }
    }
    return true;
  };

  const isEventVisible = (e: ScheduleEvent) => {
    if (showAllItems) return true;
    const def = mtgDefs.find((d: any) => d.name === e.title);
    if (def && currentRoleId) return def.roleIds.includes(currentRoleId);
    return true;
  };

  const visibleTasks = tasks.filter(isTaskVisible);
  const visibleEvents = events.filter(isEventVisible);

  // 集計ロジック
  const completedTasks = visibleTasks.filter(t => t.status === 'completed');
  const unionTasks = visibleTasks.filter(t => t.category === 'union_member');
  const lowResponseTasks = unionTasks.filter(t => t.responseRate !== undefined && t.responseRate < 50 && t.status !== 'completed');

  const today = new Date().toISOString().split('T')[0];
  const todayEvents = visibleEvents.filter(e => e.date === today);

  // 当月の旅費合計
  const currentMonth = new Date().toISOString().substring(0, 7);
  const monthlyExpense = visibleEvents
    .filter(e => e.date.startsWith(currentMonth) && e.expense)
    .reduce((sum, e) => sum + (e.expense?.totalAmount || 0), 0);

  // 期限アラート対象の抽出 (未完了)
  const urgentTasks = visibleTasks.filter(t => {
    if (t.status === 'completed' || !t.dueDate) return false;
    return t.dueDate <= today;
  });

  return (
    <div className="dashboard">
      <header className="page-header">
        <div className="header-main">
          <h1>ダッシュボード</h1>
          <p className="subtitle">こんにちは、今日も活動お疲れ様です。</p>
        </div>
        {currentRoleId && (
          <div className="role-tag">
            役職: {storage.getRoles().find((r: any) => r.id === currentRoleId)?.name || currentRoleId}
          </div>
        )}
      </header>

      {urgentTasks.length > 0 && (
        <div className="urgent-banner" onClick={() => navigate('/tasks')}>
          <div className="banner-icon">
            <Bell size={20} />
          </div>
          <div className="banner-content">
            <span className="banner-title">期限間近・超過のタスクがあります ({urgentTasks.length}件)</span>
            <span className="banner-desc">本日が期限、または期限を過ぎている未完了タスクを確認してください。</span>
          </div>
          <ChevronRight size={20} />
        </div>
      )}

      <div className="summary-grid">
        <div className="summary-card">
          <div className="card-icon blue"><CheckSquare size={24} /></div>
          <div className="card-info">
            <span className="label">担当タスク</span>
            <span className="value">{visibleTasks.length} <small>/ {completedTasks.length} 完了</small></span>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon orange"><Calendar size={24} /></div>
          <div className="card-info">
            <span className="label">本日の予定</span>
            <span className="value">{todayEvents.length} <small>件</small></span>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon green"><Wallet size={24} /></div>
          <div className="card-info">
            <span className="label">今月の旅費</span>
            <span className="value">¥ {monthlyExpense.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <section className="alert-section">
          <div className="section-header">
            <AlertCircle size={20} className="text-danger" />
            <h2>要注意タスク (回答率低下)</h2>
          </div>
          {lowResponseTasks.length > 0 ? (
            <div className="alert-list">
              {lowResponseTasks.map(task => (
                <div key={task.id} className="alert-item" onClick={() => navigate('/tasks')}>
                  <div className="alert-indicator"></div>
                  <div className="alert-body">
                    <span className="alert-title">{task.title}</span>
                    <div className="alert-meta">
                      <TrendingDown size={14} />
                      <span>回答率: {task.responseRate}%</span>
                      <span className="separator">|</span>
                      <Clock size={14} />
                      <span>期限: {task.dueDate || 'なし'}</span>
                    </div>
                  </div>
                  <button className="action-btn">フォロー</button>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">現在、フォローが必要な緊急タスクはありません。</div>
          )}
        </section>

        <section className="schedule-section">
          <div className="section-header">
            <Calendar size={20} />
            <h2>本日のスケジュール</h2>
          </div>
          <div className="schedule-list">
            {todayEvents.length > 0 ? (
              todayEvents.map(event => (
                <div key={event.id} className="event-item">
                  <span className="event-time">{event.startTime || '--:--'}</span>
                  <div className="event-details">
                    <span className="event-title">{event.title}</span>
                    <span className="event-location">{event.location || '場所指定なし'}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">本日の予定はありません。</div>
            )}
            <button className="view-all-btn" onClick={() => navigate('/calendar')}>カレンダーを見る</button>
          </div>
        </section>
      </div>

      <style>{`
        .dashboard {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header h1 {
          font-size: 2rem;
          margin-bottom: 0.25rem;
        }

        .subtitle {
          color: var(--text-muted);
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .summary-card {
          background-color: var(--bg-card);
          padding: 1.5rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 1px solid #334155;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-icon.blue { background-color: rgba(59, 130, 246, 0.1); color: #3b82f6; }
        .card-icon.orange { background-color: rgba(245, 158, 11, 0.1); color: #f59e0b; }
        .card-icon.green { background-color: rgba(16, 185, 129, 0.1); color: #10b981; }

        .card-info {
          display: flex;
          flex-direction: column;
        }

        .card-info .label {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .card-info .value {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .card-info .value small {
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--text-muted);
        }

        .dashboard-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .dashboard-content {
            grid-template-columns: 1fr;
          }
        }

        section {
          background-color: var(--bg-card);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid #334155;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .role-tag {
          padding: 0.5rem 1rem;
          background-color: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .urgent-banner {
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: white;
          padding: 1rem 1.25rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
          transition: transform 0.2s ease;
        }

        .urgent-banner:hover {
          transform: translateY(-2px);
        }

        .banner-icon {
          background: rgba(255, 255, 255, 0.2);
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .banner-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .banner-title {
          font-weight: 700;
          font-size: 1rem;
        }

        .banner-desc {
          font-size: 0.8rem;
          opacity: 0.9;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #334155;
        }

        .section-header h2 {
          font-size: 1.125rem;
        }

        .alert-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .alert-item {
          display: flex;
          align-items: center;
          background-color: rgba(239, 68, 68, 0.05);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 8px;
          padding: 1rem;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .alert-item:hover {
          transform: translateY(-2px);
          background-color: rgba(239, 68, 68, 0.08);
        }

        .alert-indicator {
          width: 4px;
          height: 40px;
          background-color: var(--danger);
          border-radius: 2px;
          margin-right: 1rem;
        }

        .alert-body {
          flex: 1;
        }

        .alert-title {
          display: block;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .alert-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .separator {
          margin: 0 0.25rem;
        }

        .action-btn {
          background-color: var(--danger);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .schedule-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .event-item {
          display: flex;
          gap: 1.25rem;
          padding: 0.75rem;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.03);
        }

        .event-time {
          font-weight: 700;
          color: var(--primary);
          min-width: 50px;
        }

        .event-details {
          display: flex;
          flex-direction: column;
        }

        .event-title {
          font-weight: 600;
        }

        .event-location {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .empty-state {
          text-align: center;
          padding: 2rem;
          color: var(--text-muted);
          font-style: italic;
          font-size: 0.875rem;
        }

        .view-all-btn {
          margin-top: 1rem;
          background: none;
          border: 1px solid #334155;
          color: var(--text-muted);
          padding: 0.5rem;
          border-radius: 6px;
          font-size: 0.875rem;
          transition: all 0.2s ease;
        }

        .view-all-btn:hover {
          background-color: #334155;
          color: var(--text-main);
        }

        .text-danger { color: var(--danger); }
        @media (max-width: 640px) {
          .summary-grid { grid-template-columns: 1fr; }
          .urgent-grid { grid-template-columns: 1fr; }
          .dashboard-header h1 { font-size: 1.5rem; }
          .summary-card { padding: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
