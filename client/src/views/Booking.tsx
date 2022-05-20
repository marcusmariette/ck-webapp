import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Booking: React.FC = () => {
    return (
        <>
            <Container disableGutters maxWidth={false}>
                <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                    <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                        Booking
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default Booking;
