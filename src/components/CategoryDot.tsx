// タスクのカテゴリを示す色ドット（絵文字は端末ごとに見た目が変わるため、CSS の丸で統一する）
import React from 'react';
import type { TaskCategory } from '../types';

export const CATEGORY_LABELS: Record<TaskCategory, string> = {
  union_member: '組合員関連',
  administrative: '事務',
  committee: '委員',
};

const CategoryDot: React.FC<{ category: TaskCategory }> = ({ category }) => (
  <span className={`cat-dot ${category}`} aria-hidden="true" />
);

export default CategoryDot;
