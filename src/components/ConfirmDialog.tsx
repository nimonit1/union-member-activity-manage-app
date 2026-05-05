// ブラウザネイティブのconfirm()を置き換えるアプリ内確認ダイアログ
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  /** danger=true で確認ボタンを赤色にする */
  danger?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  title,
  message,
  confirmLabel = '削除',
  cancelLabel = 'キャンセル',
  danger = true,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="confirm-overlay"
        onClick={onCancel}
        role="presentation"
      />
      <div
        className="confirm-dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-message"
      >
        <div className="confirm-icon">
          <AlertTriangle size={24} />
        </div>
        <h3 id="confirm-title" className="confirm-title">{title}</h3>
        <p id="confirm-message" className="confirm-message">{message}</p>
        <div className="confirm-actions">
          <button className="confirm-cancel-btn" onClick={onCancel}>
            {cancelLabel}
          </button>
          <button
            className={`confirm-ok-btn ${danger ? 'danger' : ''}`}
            onClick={onConfirm}
            autoFocus
          >
            {confirmLabel}
          </button>
        </div>
      </div>
      <style>{`
        .confirm-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 3000;
        }

        .confirm-dialog {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3001;
          background: var(--bg-card);
          border: 1px solid #334155;
          border-radius: 12px;
          padding: 1.75rem;
          width: min(400px, calc(100vw - 2rem));
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          text-align: center;
        }

        .confirm-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .confirm-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          margin: 0;
        }

        .confirm-message {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.5;
        }

        .confirm-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.5rem;
          width: 100%;
        }

        .confirm-cancel-btn {
          flex: 1;
          padding: 0.625rem;
          background: transparent;
          border: 1px solid #334155;
          border-radius: 8px;
          color: var(--text-muted);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .confirm-cancel-btn:hover {
          background: #334155;
          color: var(--text-main);
        }

        .confirm-ok-btn {
          flex: 1;
          padding: 0.625rem;
          background: var(--primary);
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .confirm-ok-btn.danger {
          background: var(--danger);
        }

        .confirm-ok-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
};

export default ConfirmDialog;

// 確認ダイアログ表示用のカスタムフック
export interface ConfirmOptions {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
}

export function useConfirm(): {
  confirmDialogProps: ConfirmDialogProps;
  confirm: (options: ConfirmOptions) => Promise<boolean>;
} {
  const [state, setState] = React.useState<{
    isOpen: boolean;
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    danger?: boolean;
    resolve?: (value: boolean) => void;
  }>({ isOpen: false, title: '', message: '' });

  const confirm = React.useCallback((options: ConfirmOptions): Promise<boolean> => {
    return new Promise((resolve) => {
      setState({ ...options, isOpen: true, resolve });
    });
  }, []);

  const handleConfirm = React.useCallback(() => {
    setState((prev) => {
      prev.resolve?.(true);
      return { ...prev, isOpen: false };
    });
  }, []);

  const handleCancel = React.useCallback(() => {
    setState((prev) => {
      prev.resolve?.(false);
      return { ...prev, isOpen: false };
    });
  }, []);

  const confirmDialogProps: ConfirmDialogProps = {
    isOpen: state.isOpen,
    title: state.title,
    message: state.message,
    confirmLabel: state.confirmLabel,
    cancelLabel: state.cancelLabel,
    danger: state.danger,
    onConfirm: handleConfirm,
    onCancel: handleCancel,
  };

  return { confirmDialogProps, confirm };
}
