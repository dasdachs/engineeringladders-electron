import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import SettingsIcon from '@mui/icons-material/Settings';

export function Settings() {
    return(
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <SettingsIcon sx={{ p: 0 }} />
            </Tooltip>
        </Box>
    )
}