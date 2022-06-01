import { Box, Container, Typography, TextField } from '@mui/material';
import { textAlign } from '@mui/system';
import CheckoutForm from 'components/checkoutForm/CheckoutForm';

const Checkout = () => {
    return (
        <Container disableGutters maxWidth={false}>     
            <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20} paddingBottom={10}>
                    Checkout
                </Typography>
                <CheckoutForm/>
            </Box>
        </Container>
    );
};

export default Checkout;
