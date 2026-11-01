// アプリ全体で使う軽量トースト通知コンポーネント
import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastItemProps {
  toast: ToastMessage;
  onDismiss: (id: string) => void;
}

// 個別トースト — 成功 / 情報は3秒、エラーは内容を読み切れるよう7秒で自動消去
const AUTO_DISMISS_MS: Record<ToastType, number> = { success: 3000, info: 4000, error: 7000 };

const ToastItem: React.FC<ToastItemProps> = ({ toast, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(toast.id), AUTO_DISMISS_MS[toast.type]);
    return () => clearTimeout(timer);
  }, [toast.id, toast.type, onDismiss]);

  const icon =
    toast.type === 'success' ? <CheckCircle size={16} /> :
    toast.type === 'error' ? <AlertCircle size={16} /> :
    <Info size={16} />;

  return (
    <div className={`toast-item toast-${toast.type}`} role={toast.type === 'error' ? 'alert' : undefined}>
      {icon}
      <span className="toast-message">{toast.message}</span>
      <button
        className="toast-close"
        onClick={() => onDismiss(toast.id)}
        aria-label="閉じる"
      >
        <X size={14} />
      </button>
    </div>
  );
};

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

// トーストコンテナ — 画面右下に固定表示
// 通知領域(aria-live)は、中身が追加される前から DOM 上に存在していないと読み上げられないため、
// トーストが無いときも空のまま描画し続ける
const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  return (
    <>
      <div className="toast-container" role="status" aria-live="polite" aria-atomic="false">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
        ))}
      </div>
      <style>{`
        .toast-container {
          position: fixed;
          bottom: calc(1.5rem + var(--safe-bottom));
          right: calc(1.5rem + var(--safe-right));
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          z-index: 9999;
          /* 空のときに背面の操作を妨げない */
          pointer-events: none;
        }

        .toast-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 0.875rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          font-weight: 500;
          min-width: 240px;
          max-width: 360px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          animation: toast-slide-in 0.2s ease;
          pointer-events: auto;
          overflow-wrap: anywhere;
        }

        .toast-success {
          background: linear-gradient(rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.15)), var(--bg-card);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
        }

        .toast-error {
          background: linear-gradient(rgba(239, 68, 68, 0.15), rgba(239, 68, 68, 0.15)), var(--bg-card);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #f87171;
        }

        .toast-info {
          background: linear-gradient(rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.15)), var(--bg-card);
          border: 1px solid rgba(59, 130, 246, 0.4);
          color: #60a5fa;
        }

        .toast-message {
          flex: 1;
          color: var(--text-main);
        }

        .toast-close {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 8px;
          margin: -6px -6px -6px 0;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .toast-close:hover {
          color: var(--text-main);
        }

        @keyframes toast-slide-in {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @media (max-width: 768px) {
          .toast-container {
            /* 下部ナビ(64px) とホームインジケータの上に表示する */
            bottom: calc(var(--bottom-nav-height) + var(--safe-bottom) + 0.75rem);
            right: calc(0.75rem + var(--safe-right));
            left: calc(0.75rem + var(--safe-left));
          }
          .toast-item {
            min-width: unset;
            max-width: unset;
          }
        }
      `}</style>
    </>
  );
};

export default ToastContainer;

// トースト表示用のカスタムフック
export function useToast(): {
  toasts: ToastMessage[];
  showToast: (message: string, type?: ToastType) => void;
  dismissToast: (id: string) => void;
} {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

  const showToast = React.useCallback((message: string, type: ToastType = 'success') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, type, message }]);
  }, []);

  const dismissToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, showToast, dismissToast };
}
