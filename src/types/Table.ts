/**
 * Interfaces for the useTable hook
 */
export type CellContent = string | number | boolean | undefined | null | Date
export type TableRow = TableCell[];

export interface TableCell {
    id: string;
    content: CellContent;
    editable: boolean;
}

export interface Table {
    headers: TableRow;
    rows: TableRow[];
}

export enum TableActionType {
    UPDATE_CELL = "UPDATE_CELL",
    ADD_ROW = "ADD_ROW",
    DELETE_ROW = "DELETE_ROW",
    ADD_COLUMN = "ADD_COLUMN",
    DELETE_COLUMN = "DELETE_COLUMN",
}

export interface TableAction {
    type: TableActionType;
    row: number;
    column: number;
    payload?: TableCell;
}