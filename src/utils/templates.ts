import { TaskTemplate } from '../types';

/**
 * 忙しい役員のための定型タスクテンプレート
 */
export const TASK_TEMPLATES: TaskTemplate[] = [
    {
        id: 'tpl-report',
        title: '活動報告書の提出',
        description: '月次の活動報告書を作成し、提出する。',
        category: 'administrative',
        priority: 'medium',
    },
    {
        id: 'tpl-expense',
        title: '旅費精算の精算処理',
        description: '出張・外出に伴う旅費の精算申請を行う。',
        category: 'administrative',
        priority: 'medium',
    },
    {
        id: 'tpl-survey',
        title: '意見集約のフォローアップ',
        description: '組合員へのアンケート回答を促し、意見を集約する。',
        category: 'union_member',
        priority: 'high',
    },
    {
        id: 'tpl-negotiation',
        title: '団体交渉の準備',
        description: '会社側との交渉に向けた資料作成と要求案の整理。',
        category: 'union_member',
        priority: 'high',
    },
];
