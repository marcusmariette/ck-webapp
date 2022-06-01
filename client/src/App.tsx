import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme, staffTheme } from 'resources/theme';
import Router from 'router/Router';
import { MenuItem } from 'types/types';

const App = () => {
    const [cartItems, setCartItems] = useState<MenuItem[]>([]);
    const [userSignedIn, setUserSignedIn] = useState<boolean>(false);

    return (
        <ThemeProvider theme={userSignedIn ? staffTheme : theme}>
            <CssBaseline />
            <Router cartItems={cartItems} setCartItems={setCartItems} userSignedIn={userSignedIn} setUserSignedIn={setUserSignedIn} />
        </ThemeProvider>
    );
};

export default App;
