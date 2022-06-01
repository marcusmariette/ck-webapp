import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        background: {
            default: '#042A2B',
        },
        primary: {
            main: '#042A2B',
        },
        secondary: {
            main: '#E76134',
        },
    },
    typography: {
        fontFamily: 'Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
    },
});

export const staffTheme = createTheme({
    ...theme,
    palette: {
        ...theme.palette,
        background: {
            default: '#fff',
        },
    },
});
