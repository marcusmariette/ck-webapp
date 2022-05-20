import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import Header from './components/header/Header';
import theme from './resources/theme';
import Router from './router/Router';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Router />
        </ThemeProvider>
    );
};

export default App;
