import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';

export default ({ children }: any) => {
    const { ui } = useSelector((state: any) => state);
    const theme = createTheme({
        // This is the default theme
        // You can override it with your own
        palette: {
            mode: ui.themeMode,
            primary: {
                main: '#f44336',
            },
            secondary: {
                main: '#fd3f33'
            },
            success: {
                main: '#4caf50',
                dark: '#388e3c',
            },
            error: {
                main: '#f44336',
                dark: '#d32f2f',
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
