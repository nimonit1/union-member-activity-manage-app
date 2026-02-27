import { AppState } from '../types';

/**
 * 現在のデータ構造のバージョン
 */
export const CURRENT_VERSION = 4;

/**
 * データを最新の構造に変換する
 * @param data 読み込まれたデータ
 * @returns 変換後のデータ
 */
export const migrateData = (data: any): AppState => {
    // 1. バージョン情報がない場合は「バージョン0」とみなす
    const version = data.version || 0;

    let migratedData = { ...data };

    // 2. バージョンに応じた変換
    if (version < 1) {
        migratedData = migrateToV1(migratedData);
    }

    if (version < 2) {
        migratedData = migrateToV2(migratedData);
    }

    if (version < 3) {
        migratedData = migrateToV3(migratedData);
    }

    if (version < 4) {
        migratedData = migrateToV4(migratedData);
    }

    // 最終的なバージョン情報を付与
    migratedData.version = CURRENT_VERSION;

    return migratedData as AppState;
};

/**
 * バージョン0から1への変換
 * 初期実装：足りないフィールド（tasks, events）の補完
 */
const migrateToV1 = (data: any): any => {
    return {
        ...data,
        tasks: data.tasks || [],
        events: data.events || [],
        version: 1
    };
};

/**
 * バージョン1から2への変換
 * 役職、タスク定義、会議体定義の初期化
 */
const migrateToV2 = (data: any): any => {
    const defaultRoles = [
        { id: 'role-leader', name: '委員長' },
        { id: 'role-secretary', name: '書記長' },
        { id: 'role-treasurer', name: '会計' },
        { id: 'role-member', name: '執行委員' },
    ];

    const defaultTaskDefinitions = [
        {
            id: 'def-report',
            title: '活動報告書の提出',
            description: '月次の活動報告書を作成し、提出する。',
            category: 'administrative',
            priority: 'medium',
            roleIds: ['role-leader', 'role-secretary', 'role-treasurer', 'role-member']
        },
        {
            id: 'def-negotiation',
            title: '団体交渉の準備',
            description: '会社側との交渉に向けた資料作成と要求案の整理。',
            category: 'union_member',
            priority: 'high',
            roleIds: ['role-leader', 'role-secretary']
        }
    ];

    const defaultMeetingDefinitions = [
        {
            id: 'mtg-exec',
            name: '三役会議',
            content: '重要事項の決定',
            timing: '毎週火曜日',
            roleIds: ['role-leader', 'role-secretary', 'role-treasurer']
        },
        {
            id: 'mtg-board',
            name: '執行委員会',
            content: '活動報告と方針確認',
            timing: '毎月第2木曜日',
            roleIds: ['role-leader', 'role-secretary', 'role-treasurer', 'role-member']
        }
    ];

    return {
        ...data,
        roles: data.roles || defaultRoles,
        taskDefinitions: data.taskDefinitions || defaultTaskDefinitions,
        meetingDefinitions: data.meetingDefinitions || defaultMeetingDefinitions,
        currentRoleId: data.currentRoleId || 'role-member',
        showAllItems: data.showAllItems !== undefined ? data.showAllItems : false,
        version: 2
    };
};

const migrateToV3 = (data: any): any => {
    return {
        ...data,
        travelExpenses: data.travelExpenses || [],
        tasks: (data.tasks || []).map((t: any) => ({
            ...t,
            subtasks: t.subtasks || []
        })),
        events: (data.events || []).map((e: any) => ({
            ...e,
            memos: e.memos || []
        })),
        version: 3
    };
};

const migrateToV4 = (data: any): any => {
    return {
        ...data,
        tasks: (data.tasks || []).map((t: any) => ({
            ...t,
            memos: t.memos || []
        })),
        version: 4
    };
};
