import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import CenteredButton from '../components/button/CenteredButton';

const Home: React.FC = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={30}>
                    Authentic Australian Fusion
                </Typography>
                <Typography variant='h5' align='center' color='primary.contrastText' paddingBottom={10}>
                    Welcome to Cosy Kangaroo. We hope you enjoy our authentic Australian dishes.
                </Typography>

                <CenteredButton text={'View Menu'} href={'/menu'} />
                <CenteredButton text={'Make Booking'} href={'/booking'} />
            </Box>
        </Container>
    );
};

export default Home;
