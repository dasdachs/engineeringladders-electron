import TextField from "@mui/material/TextField";
import { useTeamDetail } from "../../../stores";


export function TeamBasic() {
    const [ item, update ] = useTeamDetail(state => [ state.item, state.update ])
    
    return (
        <>
            <TextField
                fullWidth
                label="Team Name"
                id="teamName"
                margin="normal"
                value={item.name}
                onChange={(e) => update("name", e.currentTarget.value)}
            />

            <TextField
                id="outlined-multiline-static"
                label="Description"
                fullWidth
                multiline
                rows={4}
                defaultValue={item.description}
                onChange={(e) => update("description", e.currentTarget.value)}
            />
        </>
    )
}