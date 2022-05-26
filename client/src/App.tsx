import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'resources/theme';
import Router from 'router/Router';

const App = () => {
    const cartCount = 0; // Placeholder for now
    const [userSignedIn, setUserSignedIn] = useState(false);

    console.log('App userSignedIn:', userSignedIn);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router cartCount={cartCount} userSignedIn={userSignedIn} setUserSignedIn={setUserSignedIn} />
        </ThemeProvider>
    );
};

export default App;
