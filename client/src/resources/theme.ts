import { createTheme } from '@mui/material';
import { deepOrange, teal } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        background: {
            default: teal[900],
        },
        primary: {
            main: teal[900],
        },
        secondary: {
            main: deepOrange[500],
        },
    },
    typography: {
        fontFamily: 'Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
    },
});

export default theme;
