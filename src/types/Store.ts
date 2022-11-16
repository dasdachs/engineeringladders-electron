import { PerssistantStore } from "../db";

export interface AbstractDetailStore<T> extends AbstractStore{
    item: T;
    update<K extends keyof T, V extends T[K]>(key: K, value: V): void;
}

export interface AbstractListStore<T> extends AbstractStore{
    items: T[];
    init(db: PerssistantStore): void;
}

interface AbstractStore {
    error: Error | null;
    isLoading: boolean;
}