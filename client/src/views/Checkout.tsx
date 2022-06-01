import { Box, Container, Typography } from '@mui/material';
import CenteredButton from 'components/button/CenteredButton';
import CheckoutForm from 'components/checkoutForm/CheckoutForm';

const Checkout = ({ cartItems }) => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20} paddingBottom={5}>
                    {'Checkout'}
                </Typography>
                {cartItems.length < 1 ? (
                    <Box>
                        <Typography variant='h5' align='center' color='primary.contrastText' paddingBottom={10}>
                            {'There are no items in your Cart. Please go to the menu and add some items before checking out.'}
                        </Typography>
                        <Box>
                            <CenteredButton text={'Menu'} link={'/menu'} />
                        </Box>
                    </Box>
                ) : (
                    <CheckoutForm cartItems={cartItems} />
                )}
            </Box>
        </Container>
    );
};

export default Checkout;
