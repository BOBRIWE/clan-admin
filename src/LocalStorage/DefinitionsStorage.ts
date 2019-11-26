import {ISupportedDefinitions, SupportedDefinitions} from "../BungieAPI/Destiny/Definitions/SupportedDefinitions";

export default interface ICachedItem {
    name: string
    version: string
    value: string
}

export default class DefinitionsStorage {
    private static ALL_DEFINITIONS = 'ALL_DEFINITIONS';
    private static WORLD_CONTENT = 'WORLD_CONTENT';

    static update(definitionTables: ISupportedDefinitions) {
        return new Promise((resolve, reject) => {
            const db = indexedDB.open('clan-admin-db');

            db.onupgradeneeded = () => {
                const idb = db.result;
                idb.createObjectStore(this.ALL_DEFINITIONS);
            };

            db.onsuccess = () => {
                const idb = db.result;

                const transaction = idb.transaction(this.ALL_DEFINITIONS, 'readwrite');
                const store = transaction.objectStore(this.ALL_DEFINITIONS);

                let supported: {[key: string]: object} = {};

                for (let supportedDefinition in SupportedDefinitions) {
                    const temp = definitionTables as unknown as {[key: string]: object};
                    supported[supportedDefinition] = temp[supportedDefinition];
                }

                const putRequest = store.put(supported, this.WORLD_CONTENT);

                putRequest.onsuccess = () => {
                    resolve(idb);
                };

                putRequest.onerror = (e) => {
                    reject(e);
                };
            };

            db.onerror = (event) => {
                reject(event);
            };
        });
    }

    static getDefinitions(): Promise<ISupportedDefinitions> {
        return new Promise((resolve, reject) => {
            const idb = indexedDB.open('clan-admin-db');
            idb.onsuccess = () => {
                const db = idb.result;
                const transaction = db.transaction(this.ALL_DEFINITIONS, 'readonly');
                const store = transaction.objectStore(this.ALL_DEFINITIONS);
                const request = store.get(this.WORLD_CONTENT);

                request.onsuccess = (e) => {
                    resolve(request.result);
                };

                request.onerror = function(e) {
                    reject(e);
                }
            };

            idb.onerror = (e) => {
                reject(e);
            };
        })
    }
}