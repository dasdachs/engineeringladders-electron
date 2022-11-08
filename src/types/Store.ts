import { TeamDbSettings } from "./Team";
import { PerssistantStore } from "../db";

export interface AbstractStore<T> {
    item: T;
    error: Error | null;
    isLoading: boolean;

    update<K extends keyof T, V extends T[K]>(key: K, value: V): void;
}

export interface TeamDetailStore extends AbstractStore<TeamDbSettings> {
    get(db: PerssistantStore, itemId: string): void;
    save(db: PerssistantStore, itemId?: string): void;
}
