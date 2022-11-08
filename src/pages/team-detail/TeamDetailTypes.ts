import { TeamDetailStore } from "../../types";

export type TeamDetailTabProps = Pick<TeamDetailStore, "item" | "update">

export enum PathHashes {
    TEAM_DETAIL = "#team-detail",
    TEAM_POSITIONS = "#team-positions",
    TEAM_LADDER = "#team-ladder",
    TEAM_MEMBERS = "#team-members",
}