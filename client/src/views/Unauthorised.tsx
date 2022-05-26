import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CenteredButton from 'components/button/CenteredButton';

const Unauthorised = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                    Unauthorised.
                </Typography>
                <Typography variant='h5' align='center' color='primary.contrastText' paddingBottom={10}>
                    Sorry, you need to login to access this page.
                </Typography>
                <CenteredButton text={'Staff Login'} link={'/staff-login'} />
            </Box>
        </Container>
    );
};

export default Unauthorised;
