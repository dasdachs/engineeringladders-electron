import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";

interface CircularProps {
    size?: number;
}

const DEFAULT_SIZE = 100

export function Circular({ size }: CircularProps) {
    return(
        <Box sx={{ display: 'flex', width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center"  }}>
            <CircularProgress size={size ?? DEFAULT_SIZE} />
        </Box>
    )
}