/**
 * IndexedDB を使用した大容量データ（音声データ等）の管理
 */

const DB_NAME = 'UnionOfficerAppDB';
const STORE_NAME = 'Blobs';
const DB_VERSION = 1;

export const db = {
    init(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME);
                }
            };

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    async saveBlob(id: string, blob: Blob): Promise<string> {
        const idb = await this.init();
        return new Promise((resolve, reject) => {
            const transaction = idb.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.put(blob, id);

            request.onsuccess = () => resolve(id);
            request.onerror = () => reject(request.error);
        });
    },

    async getBlob(id: string): Promise<Blob | null> {
        const idb = await this.init();
        return new Promise((resolve, reject) => {
            const transaction = idb.transaction(STORE_NAME, 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => reject(request.error);
        });
    },

    async deleteBlob(id: string): Promise<void> {
        const idb = await this.init();
        return new Promise((resolve, reject) => {
            const transaction = idb.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.delete(id);

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }
};
