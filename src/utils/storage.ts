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
        } else {
            // クラウドにデータがない場合（初回）、現在のローカルデータをアップロード
            await storage.uploadToCloud();
        }
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
            lastSyncedAt: new Date().toISOString()
        };

        await googleDrive.updateFileContent(fileId, appState);
    }
};
