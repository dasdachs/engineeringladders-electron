import { useTeamsListStore } from "../stores";
import { useContext, useEffect } from "react";
import { Circular, PagesLayout } from "../components";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import { Link } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import { DatabaseContext } from "../contexts";

export function TeamsList() {
    const db = useContext(DatabaseContext)
    const [ items, isLoading, error, init ] = useTeamsListStore(state => [ state.items, state.isLoading, state.error, state.init ])

    useEffect(() => {
        if (db) {
            init(db)
        }
    }, [ init ])

    if (isLoading) {
        return <Circular />
    }
    return(
        <PagesLayout>
            {error && <Alert severity="error">{error.message}</Alert>}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map(item => (
                            <TableRow key={item.id}>
                                <TableCell><Link to={item.id}>{item.id}</Link></TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </PagesLayout>
    )
}