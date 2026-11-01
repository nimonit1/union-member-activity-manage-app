// 「データがない」状態の共通表示。アイコン + 説明 + （任意で）次の行動ボタン
import React from 'react';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  /** success: 「問題なし」のような良い知らせのときに緑で表示する */
  tone?: 'default' | 'success';
  action?: { label: string; onClick: () => void };
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, tone = 'default', action }) => (
  <div className="empty-state">
    <div className={`empty-state-icon ${tone}`} aria-hidden="true">{icon}</div>
    <p className="empty-state-title">{title}</p>
    {description && <p className="empty-state-desc">{description}</p>}
    {action && (
      <button type="button" className="primary-btn empty-state-action" onClick={action.onClick}>
        {action.label}
      </button>
    )}
  </div>
);

export default EmptyState;
