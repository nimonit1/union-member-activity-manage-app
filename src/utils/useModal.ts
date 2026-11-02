// モーダル / ダイアログ共通の挙動を提供するフック
//  - Esc キーで閉じる（複数が重なっている場合は最前面のものだけ閉じる）
//  - 開いている間は背面のスクロールを固定する
//  - 閉じたときに、開く前にフォーカスしていた要素へフォーカスを戻す
import { useEffect, useRef } from 'react';

// 現在開いているモーダルの Esc ハンドラのスタック（末尾が最前面）
const escapeStack: Array<() => void> = [];
let lockCount = 0;
let previousBodyOverflow = '';

function lockBodyScroll() {
  if (lockCount === 0) {
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
  lockCount += 1;
}

function unlockBodyScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.style.overflow = previousBodyOverflow;
  }
}

/**
 * @param isOpen   モーダルが開いているか
 * @param onClose  Esc キーで呼ぶ閉じる処理。undefined の場合は Esc では閉じない
 *                 （入力内容が失われやすいエディタなどで使う）
 */
export function useModal(isOpen: boolean, onClose?: () => void): void {
  // 最新の onClose を参照するための ref（効果の再実行を避ける）
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const canEscape = onClose !== undefined;

  useEffect(() => {
    if (!isOpen) return;

    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    lockBodyScroll();

    const handler = () => onCloseRef.current?.();
    if (canEscape) escapeStack.push(handler);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || e.isComposing) return;
      if (escapeStack[escapeStack.length - 1] !== handler) return;
      e.preventDefault();
      handler();
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      const index = escapeStack.indexOf(handler);
      if (index >= 0) escapeStack.splice(index, 1);
      unlockBodyScroll();
      // 開いた元の要素がまだ画面上にあれば、フォーカスを戻す
      if (opener && opener.isConnected) opener.focus({ preventScroll: true });
    };
  }, [isOpen, canEscape]);
}
