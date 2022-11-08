// IndexedDB types
export interface TeamDbSettings {
    id: string;
    name: string;
    description?: string
    positions: TeamDbPositions[];
    ladders: TeamDbLadder[];
    members: string[];
}

interface TeamDbPositions {
    jobTitle: string;
    levels: TeamDbPositionLevels[];
}

interface TeamDbPositionLevels {
    name: string;
    levelId: string;
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