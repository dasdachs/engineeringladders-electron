import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export interface MenuItem {
    icon?: JSX.Element
    name: string
    url: string
}

interface MenuItemsProps{
    items: MenuItem[]
}

export function MenuItems({ items }: MenuItemsProps) {
    const navigate = useNavigate()

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {items.map((item) => (
                <Button
                    key={item.name}
                    onClick={() => navigate(item.url)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {item.name}
                </Button>
            ))}
        </Box>
    )
}