import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import LoginForm from 'components/loginForm/LoginForm';

const StaffLogin: React.FC = () => {
    return (
        <>
            <Container disableGutters maxWidth={false}>
                <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                    <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20} paddingBottom={10}>
                        Staff Login
                    </Typography>
                    <LoginForm />
                </Box>
            </Container>
        </>
    );
};

export default StaffLogin;
