export class Store {
    private store: { [key: string]: any } = {};
    private storeKey: string = 'STORE_KEY';

    constructor() { }

    public init() {
        window.onbeforeunload = () => {
            console.log(JSON.stringify(this.store));
            localStorage.setItem(this.storeKey, JSON.stringify(this.store));
        };
        this.store = localStorage.getItem(this.storeKey)?.length > 0 ? JSON.parse(localStorage.getItem(this.storeKey)) : {};
        localStorage.removeItem(this.storeKey);
    }

    private assign(object: { [key: string]: any }, path: string | string[], value: any): void {
        let pathSplit: string | string[] = path;
        if (typeof path === 'string') {
            pathSplit = path.split('.');
        }
        if (pathSplit.length > 1) {
            const currentKey = (pathSplit as string[]).shift();
            this.assign(object[currentKey] = object[currentKey]?.toString() === '[object Object]' ? object[currentKey] : {}, pathSplit, value);
        } else {
            object[pathSplit[0]] = value;
        }
    }

    public set(path: string, value: any): { [key: string]: any } {
        if (path.indexOf('.')) {
            const object = { ...this.store };
            this.assign(object, path, value);
            this.store = { ...object };
        } else {
            this.store[path] = value;
        }
        return this;
    }

    public get(path: string): any {
        let toReturn = null;
        if (path.indexOf('.')) {
            const objectPath: string[] = path.split('.');
            let currentValue: any = this.store;
            objectPath.map((subpath: string) => {
                currentValue = currentValue && currentValue[subpath] ? currentValue[subpath] : null;
            });
            toReturn = currentValue;
        } else {
            toReturn = this.store[path]
                ? this.store[path]
                : null;
        }
        return toReturn;
    }
}

export const globalStore = new Store();