import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TeamBasic } from "./TeamBasic";
import { PathHashes, TeamDetailTabProps } from "./TeamDetailTypes";
import IconButton from "@mui/material/IconButton";
import SaveIcon from '@mui/icons-material/Save';

interface TeamDetailsComponentProps extends TeamDetailTabProps {
    onSave?(): void;
}

export function TeamDetailsComponent({ item, update, onSave }: TeamDetailsComponentProps) {
    const { hash } = useLocation()
    const navigate = useNavigate()

    return(
        <>
            <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Tabs value={hash.length !== 0 ? hash : PathHashes.TEAM_DETAIL} onChange={(_e, value) => {
                    navigate(value)
                }}>
                    <Tab label="Team Basic"  value={PathHashes.TEAM_DETAIL} />
                    <Tab label="Team Positions" value={PathHashes.TEAM_POSITIONS} />
                    <Tab label="Team Ladder" value={PathHashes.TEAM_LADDER} />
                    <Tab label="Team Members" value={PathHashes.TEAM_MEMBERS} />
                </Tabs>
                <IconButton onClick={onSave} sx={{ marginRight: 2 }}>
                    <SaveIcon />
                </IconButton>
            </Box>
            <Routes>
                <Route path={PathHashes.TEAM_DETAIL} element={<TeamBasic item={item} update={update} />} />
                <Route index element={<TeamBasic item={item} update={update} />} />
            </Routes>
        </>
    )
}