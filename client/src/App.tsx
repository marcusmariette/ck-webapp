import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from 'components/header/Header';
import theme from 'resources/theme';
import Router from 'router/Router';

const App: React.FC = () => {
    const [cartCount, setCardCount] = useState<number>(0);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header cartCount={cartCount} />
            <Router />
        </ThemeProvider>
    );
};

export default App;
