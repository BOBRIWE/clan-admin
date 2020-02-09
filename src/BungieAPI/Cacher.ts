class Cacher {
    private DB_NAME = 'CACHED_DB';
    private STORE_NAME = 'REQUESTS';
    private readonly _indexedDB: IDBFactory = indexedDB;
    private readonly _openRequestPromise: Promise<IDBDatabase>;

    constructor() {
        this._openRequestPromise = new Promise<IDBDatabase>((resolve, reject) => {
            const openRequest = this._indexedDB.open(this.DB_NAME);

            openRequest.onerror = () => {
                reject('DB not opened!');
            };

            openRequest.onsuccess = () => {
              resolve(openRequest.result);
            };

            openRequest.onupgradeneeded = () => {
                const db = openRequest.result;
                if (!db.objectStoreNames.contains(this.STORE_NAME)) {
                    db.createObjectStore(this.STORE_NAME);
                }
            };
        });
    }

    async get<T> (key: string): Promise<T> {
        const db = await this._openRequestPromise;
        const transaction = db.transaction(this.STORE_NAME, 'readwrite');
        const store = transaction.objectStore(this.STORE_NAME);

        const request = store.get(key);


        return new Promise((resolve, reject) => {
            request.onerror = () => {
                reject(`${key} not added!`);
            };

            request.onsuccess = () => {
                resolve(request.result);
            };
        });
    }

    async save<T> (key: string, value: T): Promise<T> {
        const db = await this._openRequestPromise;
        const transaction = db.transaction(this.STORE_NAME, 'readwrite');
        const store = transaction.objectStore(this.STORE_NAME);

        return new Promise((resolve, reject) => {
            const request = store.add(value, key);

            request.onerror = (e) => {
                reject(`${key} not added! ${request.error}`);
            };

            request.onsuccess = () => {
                resolve(value);
            }
        });
    }
}

export default Cacher;