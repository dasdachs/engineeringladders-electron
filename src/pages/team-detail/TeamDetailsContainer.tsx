import { useContext, useEffect } from "react";
import { DatabaseContext } from "../../contexts";
import { useTeamDetail } from "../../stores";
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { Circular, PagesLayout } from "../../components";
import { TeamDetailsComponent } from "./TeamDetailsComponent";

interface TeamsDetailProps {
    isNew?: boolean
}

export function TeamDetailsContainer({ isNew }: TeamsDetailProps) {
    const db = useContext(DatabaseContext)
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const { teamId } = useParams<"teamId">()
    const [ item, isLoading, error, get, save ] = useTeamDetail(
        state => [
            state.item,
            state.isLoading,
            state.error,
            state.get,
            state.save
        ]
    )

    const onSave = async() => {
        if (!db) {
            return
        }

        await save(db, item.id)

        if (isNew) {
            navigate(pathname.replace("new", item.id))
        }
    }

    useEffect(() => {
        if (db && !isNew && teamId) {
            get(db, teamId)
        }
    }, [ get, db, teamId ])

    if (isLoading) {
        return <Circular />
    }

    return(
        <PagesLayout>
            {error && <Alert severity="error">{error.message}</Alert>}
            <Routes>
                <Route path=":tab/*" element={<TeamDetailsComponent onSave={onSave} />} />
                <Route path="/*" element={<TeamDetailsComponent onSave={onSave} />} />
            </Routes>
        </PagesLayout>
    )
}