/**
 * アプリケーション全体で使用する型定義
 */

export type TaskCategory = 'union_member' | 'administrative';

export type TaskStatus = 'todo' | 'in_progress' | 'completed' | 'on_hold';

export type Priority = 'low' | 'medium' | 'high';

export interface Task {
    id: string;
    title: string;
    description: string;
    category: TaskCategory;
    status: TaskStatus;
    priority: Priority;
    dueDate?: string;
    responseRate?: number; // 0 to 100, 組合員関連タスクのみ
    createdAt: string;
}

export type EventCategory = 'meeting' | 'business_trip' | 'negotiation' | 'conference' | 'training' | 'other';

export type TransportType = 'public' | 'plane' | 'car' | 'other';

export interface TravelRoute {
    id: string;
    from: string;
    to: string;
    amount: number;
    isRoundTrip: boolean;
    transportType: TransportType;
}

export interface TravelExpense {
    routes: TravelRoute[];
    totalAmount: number;
}

export interface ScheduleEvent {
    id: string;
    title: string;
    date: string; // YYYY-MM-DD
    startTime?: string;
    endTime?: string;
    category: EventCategory;
    location?: string;
    memo?: string;
    expense?: TravelExpense;
}

export interface TaskTemplate {
    id: string;
    title: string;
    description: string;
    category: TaskCategory;
    priority: Priority;
}
