import { AppState } from '../types';

/**
 * 現在のデータ構造のバージョン
 */
export const CURRENT_VERSION = 1;

/**
 * データを最新の構造に変換する
 * @param data 読み込まれたデータ
 * @returns 変換後のデータ
 */
export const migrateData = (data: any): AppState => {
    // 1. バージョン情報がない場合は「バージョン0」とみなす
    const version = data.version || 0;

    let migratedData = { ...data };

    // 2. バージョンに応じた変換（将来的に増えていく）
    if (version < 1) {
        migratedData = migrateToV1(migratedData);
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
