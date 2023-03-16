import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import Navigation from "./navigation";

export default ({ children, className }: any) => {
    const { ui } = useSelector((state: any) => state);
    const theme = createTheme({
        // This is the default theme
        // You can override it with your own
        palette: {
            mode: ui.themeMode,
        },
    });

    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <Navigation />
            <div className={`${className}`}>
                {children}
            </div>
        </ThemeProvider>
    );
};
