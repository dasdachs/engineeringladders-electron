import TextField from "@mui/material/TextField";
import { TeamDetailTabProps } from "./TeamDetailTypes";


export function TeamBasic({ item, update }: TeamDetailTabProps) {
    return (
        <>
            <TextField
                fullWidth label="Team Name"
                id="teamName"
                margin="normal"
                value={item.name}
                onChange={(e) => update("name", e.currentTarget.value)}
            />

            <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue={item.description}
                onChange={(e) => update("description", e.currentTarget.value)}
            />
        </>
    )
}