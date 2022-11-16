export interface ITeam {
    id: string;
    name: string;
    description?: string;
}

// IndexedDB types
export interface TeamDbSettings {
    id: string;
    name: string;
    description?: string
    positions: TeamDbPositions[];
    ladders: TeamDbLadder[];
    members: string[];
}

export interface TeamDbPositions {
    jobTitle: string;
    levels: TeamDbPositionLevels[];
}

export interface TeamDbPositionLevels {
    name: string;
    senior: boolean;
    conditions: TeamDbPositionCondition[]
}

interface TeamDbPositionCondition {
    ladder: TeamDbLadder;
    ladderIndex: number;
    description?: string;
}

interface TeamDbLadder {
    name: string; // unique within the team
    description: string;
    levels: {
        name: string;
        description: string;
    }[]
}