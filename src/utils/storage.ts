import { Task, ScheduleEvent, AppState } from '../types';
import { googleDrive } from './googleDrive';
import { migrateData, CURRENT_VERSION } from './migrations';

/**
 * localStorage を使用した簡易的なデータ永続化とクラウド同期
 */

const KEYS = {
    TASKS: 'union_app_tasks',
    EVENTS: 'union_app_events',
};

const SYNC_FILE_NAME = 'union_app_data.json';

export const storage = {
    getTasks: (): Task[] => {
        const data = localStorage.getItem(KEYS.TASKS);
        return data ? JSON.parse(data) : [];
    },

    saveTasks: (tasks: Task[]): void => {
        localStorage.setItem(KEYS.TASKS, JSON.stringify(tasks));
        storage.uploadToCloud(); // バックグラウンドでアップロードを試行
    },

    getEvents: (): ScheduleEvent[] => {
        const data = localStorage.getItem(KEYS.EVENTS);
        return data ? JSON.parse(data) : [];
    },

    saveEvents: (events: ScheduleEvent[]): void => {
        localStorage.setItem(KEYS.EVENTS, JSON.stringify(events));
        storage.uploadToCloud(); // バックグラウンドでアップロードを試行
    },

    /**
     * クラウドストレージ上の最新データで同期
     */
    syncWithCloud: async (): Promise<void> => {
        if (!googleDrive.isAuthenticated()) return;

        const fileId = await googleDrive.getOrCreateFile(SYNC_FILE_NAME);
        const rawData = await googleDrive.getFileContent(fileId);

        if (rawData) {
            // クラウドにデータがある場合、マイグレーションを適用してからローカルを更新
            const cloudData = migrateData(rawData);
            storage.saveTasks(cloudData.tasks);
            storage.saveEvents(cloudData.events);
            // 他の設定データもlocalStorageにキャッシュ（必要に応じて）
            if (cloudData.roles) localStorage.setItem('union_app_roles', JSON.stringify(cloudData.roles));
            if (cloudData.taskDefinitions) localStorage.setItem('union_app_task_defs', JSON.stringify(cloudData.taskDefinitions));
            if (cloudData.meetingDefinitions) localStorage.setItem('union_app_mtg_defs', JSON.stringify(cloudData.meetingDefinitions));
            if (cloudData.currentRoleId) localStorage.setItem('union_app_current_role', cloudData.currentRoleId);
            localStorage.setItem('union_app_show_all', String(cloudData.showAllItems || false));
        } else {
            // クラウドにデータがない場合（初回）、現在のローカルデータをアップロード
            await storage.uploadToCloud();
        }
    },

    // 補助的なゲッター
    getRoles: () => JSON.parse(localStorage.getItem('union_app_roles') || '[]'),
    getTaskDefinitions: () => JSON.parse(localStorage.getItem('union_app_task_defs') || '[]'),
    getMeetingDefinitions: () => JSON.parse(localStorage.getItem('union_app_mtg_defs') || '[]'),
    getCurrentRoleId: () => localStorage.getItem('union_app_current_role') || '',
    getShowAllItems: () => localStorage.getItem('union_app_show_all') === 'true',

    saveSettings: (settings: { roles: any[], taskDefinitions: any[], meetingDefinitions: any[], currentRoleId: string, showAllItems: boolean }) => {
        localStorage.setItem('union_app_roles', JSON.stringify(settings.roles));
        localStorage.setItem('union_app_task_defs', JSON.stringify(settings.taskDefinitions));
        localStorage.setItem('union_app_mtg_defs', JSON.stringify(settings.meetingDefinitions));
        localStorage.setItem('union_app_current_role', settings.currentRoleId);
        localStorage.setItem('union_app_show_all', String(settings.showAllItems));
        storage.uploadToCloud();
    },

    /**
     * 現在のローカルデータをクラウドへアップロード
     */
    uploadToCloud: async (): Promise<void> => {
        if (!googleDrive.isAuthenticated()) return;

        const fileId = await googleDrive.getOrCreateFile(SYNC_FILE_NAME);
        const appState: AppState = {
            version: CURRENT_VERSION,
            tasks: storage.getTasks(),
            events: storage.getEvents(),
            roles: storage.getRoles(),
            taskDefinitions: storage.getTaskDefinitions(),
            meetingDefinitions: storage.getMeetingDefinitions(),
            currentRoleId: storage.getCurrentRoleId(),
            showAllItems: storage.getShowAllItems(),
            lastSyncedAt: new Date().toISOString()
        };

        await googleDrive.updateFileContent(fileId, appState);
    }
};
