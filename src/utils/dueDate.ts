// タスクの期限(YYYY-MM-DD)から、緊急度の表示用情報を求める
import type { TaskStatus } from '../types';

export type DueKind = 'overdue' | 'today' | 'soon' | 'normal';

export interface DueInfo {
  kind: DueKind;
  /** バッジに表示する短い文言。通常の期限(余裕あり)のときは null */
  label: string | null;
}

/** 「あと◯日」を表示する日数のしきい値 */
const SOON_DAYS = 3;

function parseLocalDate(ymd: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(ymd);
  if (!m) return null;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
}

/**
 * 期限と状態から緊急度を判定する。完了済み・期限未設定のタスクは常に normal。
 * 日付はローカルタイムの暦日で比較する（時刻や UTC のずれで 1 日ずれないようにする）。
 */
export function getDueInfo(dueDate: string | undefined, status: TaskStatus, now: Date = new Date()): DueInfo {
  if (!dueDate || status === 'completed') return { kind: 'normal', label: null };
  const due = parseLocalDate(dueDate);
  if (!due) return { kind: 'normal', label: null };

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = Math.round((due.getTime() - today.getTime()) / 86_400_000);

  if (diff < 0) return { kind: 'overdue', label: `${-diff}日超過` };
  if (diff === 0) return { kind: 'today', label: '本日まで' };
  if (diff <= SOON_DAYS) return { kind: 'soon', label: `あと${diff}日` };
  return { kind: 'normal', label: null };
}
