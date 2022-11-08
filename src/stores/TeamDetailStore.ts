import { TeamDbSettings, TeamDetailStore } from "../types";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { PerssistantStore } from "../db";
import { nanoid } from "nanoid";

export const useTeamDetail = create<TeamDetailStore>()(
    devtools(
        (set, get) => ({
            item:  {
                id: nanoid(),
                name: "",
                ladders: [],
                members: [],
                positions: []
            },
            isLoading: false,
            error: null,

            update: <K extends keyof TeamDbSettings, V extends TeamDbSettings[K]>(key: K, value: V) => set(
                state => (
                    { item: { ...(state.item ?? {}), [key]: value } as TeamDbSettings }
                )
            ),

            get: async(db: PerssistantStore, itemId: string) => {
                set(() => ({ isLoading: true }))

                try {
                    const item = await db.teams.get(itemId)

                    set(() => ({ item }))
                } catch(e) {
                    set(() => ({ error: e as Error }))
                } finally {
                    set(() => ({ isLoading: false }))
                }
            },
            save: async(db: PerssistantStore) => {
                set(() => ({ isLoading: true }))

                try {
                     await db.teams.put(get().item)
                } catch(e) {
                    set(() => ({ error: e as Error }))
                } finally {
                    set(() => ({ isLoading: false }))
                }
            },
            // delete(): void
        })
    )
)