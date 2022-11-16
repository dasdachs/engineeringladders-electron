import { useReducer } from "react";
import { Table, TableAction, TableActionType, TableRow } from "../types";
import { nanoid } from "nanoid";

interface UseTableProps<T>{
    initialData: T;
    initFunction(data: T): Table;
}

export function useTable<T>({ initialData, initFunction }:UseTableProps<T>) {
    const [ state, dispatch ] = useReducer(tableReducer, initialData, initFunction)

    return {
        state,
        dispatch
    }
}

function tableReducer(state: Table, action: TableAction): Table {
    const {
        type,
        payload = composeEmptyCell(),
        row,
        column
    } = action;

    switch (type) {
        case TableActionType.UPDATE_CELL:
            if (row === 0) {
                return {
                    ...state,
                    headers: [...state.headers.slice(0, column), payload, ...state.headers.slice(column + 1)],
                }
            }
            return {
                ...state,
                rows: state.rows.reduce((acc: TableRow[], currentRow, currentIndex) => {
                    return [...acc, currentIndex === row ? [...currentRow.slice(0,column), payload, ...currentRow.slice(column + 1)] : currentRow]
                }, [])
            }
        case TableActionType.ADD_COLUMN:
            return {
                headers: [...state.headers.slice(0, column), composeEmptyCell(true), ...state.headers.slice(column + 1)],
                rows: state.rows.reduce((acc: TableRow[], currentRow, currentIndex) => {
                    return [
                        ...acc,
                        currentIndex === row ? [...currentRow.slice(0, column), composeEmptyCell(true), ...currentRow.slice(column + 1)] : currentRow
                    ]
                }, [])
            }
        case TableActionType.ADD_ROW:
            return {
                ...state,
                rows: [...state.rows, [...state.headers.map((_, index) => composeEmptyCell(index > 1))]]
            }
        case TableActionType.DELETE_COLUMN:
            return {
                headers: state.headers.filter((_, i) => i !== column),
                rows: state.rows.reduce((acc: TableRow[], currentRow) => {
                    return [
                        ...acc,
                        currentRow.filter((_, index) => index !== column)
                    ]
                }, [])
            }
        case TableActionType.DELETE_ROW:
            return {
                headers: state.headers.filter((_, i) => i !== column),
                rows: state.rows.reduce((acc: TableRow[], currentRow) => {
                    return [
                        ...acc,
                        currentRow.filter((_, index) => index !== column)
                    ]
                }, [])
            }
        default:
            return state
    }
}

function composeEmptyCell(editable = false) {
    return {
        id: nanoid(),
        content: "",
        editable,
    }
}