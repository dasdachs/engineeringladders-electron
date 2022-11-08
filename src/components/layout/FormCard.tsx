import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

interface FormCardProps {
    subtitle?: string;
    children: JSX.Element | JSX.Element[];
}
export function FormCard({ children, subtitle }: FormCardProps) {
    return(
        <Box sx={{ marginY: 2, padding: 2, boxShadow: 3  }}>
            {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
            {children}
        </Box>
    )
}