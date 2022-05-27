import { Box, Container, Typography } from '@mui/material';
import CenteredButton from 'components/button/CenteredButton';

const Cart = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20} paddingBottom={10}>
                    Cart
                </Typography>
                <CenteredButton text={'Proceed To Checkout'} link={'/Checkout'} />
                <CenteredButton text={'Back To Menu'} link={'/Menu'} />
            </Box>
        </Container>
    );
};

export default Cart;
