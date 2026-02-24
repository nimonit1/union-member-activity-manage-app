import { Task, ScheduleEvent } from '../types';

/**
 * localStorage を使用した簡易的なデータ永続化
 */

const KEYS = {
    TASKS: 'union_app_tasks',
    EVENTS: 'union_app_events',
};

export const storage = {
    getTasks: (): Task[] => {
        const data = localStorage.getItem(KEYS.TASKS);
        return data ? JSON.parse(data) : [];
    },

    saveTasks: (tasks: Task[]): void => {
        localStorage.setItem(KEYS.TASKS, JSON.stringify(tasks));
    },

    getEvents: (): ScheduleEvent[] => {
        const data = localStorage.getItem(KEYS.EVENTS);
        return data ? JSON.parse(data) : [];
    },

    saveEvents: (events: ScheduleEvent[]): void => {
        localStorage.setItem(KEYS.EVENTS, JSON.stringify(events));
    },
};
