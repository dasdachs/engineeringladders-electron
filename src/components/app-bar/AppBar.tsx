import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import { Logo } from "./Logo";
import { MenuItems, MenuItem } from "./MenuItems";
import { Settings } from "./Settings";

const menuItems: MenuItem[] = [
        {
            name: "Stats",
            url: "/stats"
        },
        {
            name: "Teams",
            url: "/teams"
        },
        {
            name: "Calendar",
            url: "/calendar"
        },
    ]


export default function NavigationBar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Logo />
                    <MenuItems items={menuItems} />
                    <Settings />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
