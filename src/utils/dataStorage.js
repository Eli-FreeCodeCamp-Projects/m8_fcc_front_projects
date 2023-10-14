import {ut} from './utils.js'
/**
 * Data Storage Helper class
 * Used to load and save data from localStorage and/or sessionStorage
 * Contain only static methods and properties.
 */
export class DataStorage{
    static SESSION_STORAGE = "SESSION_STORAGE"
    static LOCAL_STORAGE = "LOCAL_STORAGE"

    /**
     * Test if is valid data storage key
     * @param key The data storage key to test
     * @return {Error|boolean}
     */
    static isStoreKey(key){
        if(! ut.isAttrKey(key)){
            return new Error(`Unable to get store data. Data key is invalid.`)
        }
        return true;
    }

    /**
     * Select data storage to use.
     * Can be sessionStorage or localStorage
     * @param storage the storage name to use.
     * @return {Error|any}
     */
    static getStore(storage){
        switch(storage){
            case DataStorage.SESSION_STORAGE:
                return sessionStorage;
            case DataStorage.LOCAL_STORAGE:
                return localStorage;
            default:
                return new Error(`Invalid Storage type. Can be SESSION_STORAGE or LOCAL_STORAGE`);
        }
    }

    /**
     * Get Data from selected storage (localStorage or sessionStorage).
     * By default, get data from localStorage.
     * @param key The data storage key
     * @param storage The storage to use (localStorage or sessionStorage)
     * @return {*|null}
     */
    static getStoreData(key, storage= DataStorage.LOCAL_STORAGE){
        DataStorage.isStoreKey(key);
        const store = DataStorage.getStore(storage);
        let storageData = store.getItem("m8Prv_sizes");
        if(ut.isStr(storageData)){
            storageData = JSON.parse(storageData);
        }
        return (ut.isObject(storageData)) ? storageData : null;
    }

    /**
     * Save Data on selected storage (localStorage or sessionStorage)
     * @param key {String} The data storage key
     * @param data {Object} The data to store
     * @param storage {String} The storage to use (localStorage or sessionStorage)
     * @return {Error|boolean} Return true or Error if data is not a valid Object.
     */
    static setStoreData(key, data, storage= DataStorage.LOCAL_STORAGE) {
        DataStorage.isStoreKey(key);
        const store = DataStorage.getStore(storage);
        if(!ut.isObject(data)){
            return new Error(`Unable to set storage data. Data must be a valid object.`)
        }
        store.setItem("m8Prv_sizes", JSON.stringify(data));
        return true;
    }
}