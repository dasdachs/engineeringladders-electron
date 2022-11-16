import create from "zustand";
import { devtools } from "zustand/middleware";
import { AbstractListStore, ITeam } from "../types";

type TeamsListStore = AbstractListStore<ITeam>

export const useTeamsListStore = create<TeamsListStore>()(
    devtools(
        (set) => ({
            items: [],
            isLoading: true,
            error: null,

            init: async(db ) => {
                set(() => ({ isLoading: true }))
                try {
                    const teams = await db.teams.toArray()

                    set(() => ({
                            items: teams.map(
                                ({ id, name, description }) => ({ id, name, description }))
                        })
                    )
                } catch(e) {
                    set(() => ({ error: e as Error }))
                } finally {
                    set(() => ({ isLoading: false }))
                }
            }
        })
    )
)