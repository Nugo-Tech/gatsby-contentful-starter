import React from 'react';
import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Toolbar, IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {};

export default function NavDrawer({ }: Props) {
    // anchor is the side of the screen where the drawer will appear (left, right, top, bottom)
    const anchor = 'right';
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    return (
        <div>
            <IconButton
                variant="contained"
                onClick={() => {
                    setDrawerOpen(true);
                }}>
                <MenuIcon
                    style={{ color: "white" }}
                />
            </IconButton >
            <Drawer
                anchor={anchor}
                open={drawerOpen}
                onClose={() => {
                    setDrawerOpen(false);
                }}
            >
                <Toolbar>
                    <Button onClick={() => {
                        setDrawerOpen(false);
                    }}>Close</Button>
                </Toolbar>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}