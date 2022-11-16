import { useNavigate, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TeamBasic, TeamPositions } from "./tabs";
import { TeamDetailTabPaths } from "./TeamDetailTypes";
import IconButton from "@mui/material/IconButton";
import SaveIcon from '@mui/icons-material/Save';
import { TabPanel } from "../../components";

interface TeamDetailsComponentProps {
    onSave?(): void;
}

export function TeamDetailsComponent({ onSave }: TeamDetailsComponentProps) {
    const { tab } = useParams<"tab">()
    const navigate = useNavigate()
    const selectedTab = tab ?? TeamDetailTabPaths.TEAM_DETAIL

    return(
        <>
            <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Tabs value={selectedTab} onChange={(_e, value) => {
                    navigate(tab ? `../${value}` : value)
                }}>
                    <Tab label="Team Basic"  value={TeamDetailTabPaths.TEAM_DETAIL} />
                    <Tab label="Team Positions" value={TeamDetailTabPaths.TEAM_POSITIONS} />
                    <Tab label="Team Ladder" value={TeamDetailTabPaths.TEAM_LADDER} />
                    <Tab label="Team Members" value={TeamDetailTabPaths.TEAM_MEMBERS} />
                </Tabs>
                <IconButton onClick={onSave} sx={{ marginRight: 2 }}>
                    <SaveIcon />
                </IconButton>
            </Box>

            <TabPanel tab={TeamDetailTabPaths.TEAM_DETAIL} selectedTab={selectedTab}>
                <TeamBasic />
            </TabPanel>
            <TabPanel tab={TeamDetailTabPaths.TEAM_POSITIONS} selectedTab={selectedTab}>
                <TeamPositions />
            </TabPanel>
            <TabPanel tab={TeamDetailTabPaths.TEAM_LADDER} selectedTab={selectedTab}>
                <TeamBasic />
            </TabPanel>
            <TabPanel tab={TeamDetailTabPaths.TEAM_MEMBERS} selectedTab={selectedTab}>
                <TeamBasic />
            </TabPanel>
        </>
    )
}