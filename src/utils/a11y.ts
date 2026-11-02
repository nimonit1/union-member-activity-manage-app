// アクセシビリティ用の小さなヘルパー
import type { KeyboardEvent } from 'react';

/**
 * クリックできる div / span などを、キーボード(Enter / Space)とスクリーンリーダーでも操作できるボタンにする。
 * 使い方: <div className="card" {...buttonProps(() => doSomething())}>
 *
 * 内部にある本物のボタンなどのキー操作は横取りしない（e.target が自身のときだけ反応する）。
 */
export function buttonProps(onActivate: () => void) {
  return {
    role: 'button' as const,
    tabIndex: 0,
    onClick: onActivate,
    onKeyDown: (e: KeyboardEvent<HTMLElement>) => {
      if (e.target !== e.currentTarget) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onActivate();
      }
    },
  };
}
