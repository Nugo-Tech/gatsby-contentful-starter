import React from 'react';
import { AppBar, Typography, Toolbar, Button } from '@mui/material';
import Drawer from './drawer';
import DarkModeSwitch from "./darkModeSwitch";

export default function Navigation() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My App
                    </Typography>
                    {/* Desktop Only */}
                    <div className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Toggle Dark Mode */}
                    <DarkModeSwitch />


                    {/* Mobile Only */}
                    <div className='md:hidden'>
                        <Drawer />
                    </div>

                </Toolbar>
            </AppBar>
        </>
    );
}