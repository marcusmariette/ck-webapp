import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Cart: React.FC = () => {
    return (
        <>
            <Container disableGutters maxWidth={false}>
                <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                    <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                        Cart
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default Cart;
