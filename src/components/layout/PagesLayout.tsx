import Box from "@mui/material/Box";
import { ChildrenProps } from "../../types";

export function PagesLayout({ children }: ChildrenProps) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            margin: 4,
        }}>
            {children}
        </Box>
    )
}