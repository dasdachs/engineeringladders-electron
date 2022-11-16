import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { useTeamDetail } from "../../../stores";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import TextField from "@mui/material/TextField";
import { useTable } from "../../../hooks"
import { TeamDbPositions, Table as ITable, TableActionType, TableRow as ITableRow } from "../../../types";
import { nanoid } from "nanoid";
import Box from "@mui/material/Box";
import { useEffect } from "react";

export function TeamPositions() {
    const [ { positions }, update ] = useTeamDetail(state => [ state.item, state.update ])
    const { state, dispatch } = useTable<TeamDbPositions[]>({
            initialData: positions,
            initFunction: composeInitialState
        }
    )

    function syncState() {
        update("positions", mapTableToPositions(state)
    }

    useEffect(() => {
        return() => syncState()
    }, [syncState])

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {state.headers.map((cell, index) =>
                            <TableCell key={cell.id}>
                                <TextField
                                    disabled={!cell.editable}
                                    sx={{ outline: "0px" }}
                                    value={cell.content}
                                    onBlur={syncState}
                                    onChange={
                                        (e) => {
                                            dispatch({
                                                type: TableActionType.UPDATE_CELL,
                                                row: 0,
                                                column: index,
                                                payload: {
                                                    ...cell,
                                                    content:e.currentTarget.value
                                                }
                                            })
                                        }
                                    }
                                    size="small"
                                    variant="standard"
                                />
                            </TableCell>
                        )}
                        <TableCell size="small">
                            <IconButton onClick={() => dispatch({ type: TableActionType.ADD_COLUMN, row: state.rows.length, column: state.headers.length })}>
                                <AddIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.rows.map((row, rowIndex) =>
                        <TableRow key={rowIndex}>
                            {row.map((cell, columnIndex) => <TableCell key={cell.id}>
                                <TextField
                                    disabled={!cell.editable}
                                    sx={{ outline: "0px" }}
                                    value={cell.content}
                                    onBlur={syncState}
                                    onChange={
                                        (e) => {
                                            dispatch({
                                                type: TableActionType.UPDATE_CELL,
                                                row: rowIndex,
                                                column: columnIndex,
                                                payload: {
                                                    ...cell,
                                                    content:e.currentTarget.value
                                                }
                                            })
                                        }
                                    }
                                    size="small"
                                    variant="standard"
                                />
                            </TableCell>)}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Box sx={{ my: 2, justifyContent: "center", alignItems: "center" }}>
                <IconButton onClick={() => dispatch({ type: TableActionType.ADD_ROW, row: state.rows.length, column: state.headers.length })} size="small">
                    <AddIcon />
                </IconButton>
            </Box>
    </TableContainer>
    )
}

function composeInitialState(data: TeamDbPositions[]): ITable {
    const initialRows: ITableRow[] = data.map(
        (_, index) => [
            {
                id: nanoid(),
                content: index + 1,
                editable: false
            },
            {
                id: nanoid(),
                content: "",
                editable: false
            }
        ]
    )
    return {
        headers: [
            {
              id: nanoid(),
              content: "Level",
              editable: false
            },
            {
              id: nanoid(),
              content: "Senior",
              editable: false
            },
            ...data.map(p => ({ id: nanoid(), content: p.jobTitle, editable: true }))
        ],
        rows: data.reduce((acc: ITableRow[], { levels }) => {
            for (const position of levels) {
                for (const row of acc) {
                    row.push({
                        id: nanoid(),
                        content: position.name,
                        editable: true
                    })
                    if (position.senior && row[1]) {
                        row[1].content = "Senior"
                    }
                }
            }
            return acc
        }, initialRows)
    }
}

function mapTableToPositions(table: ITable): TeamDbPositions[] {
    const positions = table.headers.filter((_, i) => i > 1).map((cell) => ({ jobTitle: cell.content } as TeamDbPositions))

    return table.rows.reduce((acc:TeamDbPositions[], row) => {
        row.forEach((cell, index) => {
            if
        })
        return positions
    }, positions)
}