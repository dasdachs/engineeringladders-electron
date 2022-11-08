import Dexie, { Table } from 'dexie';
import { TeamDbSettings } from "./types";

export class PerssistantStore extends Dexie {
    teams!: Table<TeamDbSettings>;

    constructor() {
        super('heavyWeights');
        console.log("initing db...")
        this.version(1).stores({
            teams: "&id, name",
        });
    }
}