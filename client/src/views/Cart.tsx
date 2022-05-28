import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import CenteredButton from 'components/button/CenteredButton';

const Cart = ({ cartItems, setCartItems }) => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box alignItems='center' display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20} paddingBottom={10}>
                    Cart
                </Typography>
                {cartItems.map((item) => {
                    return (
                        <Card sx={{ display: 'flex', flexDirection: 'row', width: '60vw', marginBottom: 2, borderRadius: '5px' }}>
                            <Box width={'20vw'}>
                                <CardMedia component='img' height='110' image={require(`resources/images/${item.imgSrc}`)} alt={item.name} />
                            </Box>
                            <Box width={'40vw'}>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        {item.name}
                                    </Typography>
                                    <Typography sx={{ fontWeight: '400' }}>{`Price: $${item.price}`}</Typography>
                                </CardContent>
                            </Box>
                            <Box display={'flex'} textAlign={'center'} padding={2}>
                                <CardActions>
                                    <Button color={'secondary'} variant={'outlined'} size={'medium'}>
                                        Remove
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                    );
                })}
                <Box paddingTop={10}>
                    <CenteredButton text={'Back To Menu'} link={'/Menu'} />
                    <CenteredButton text={'Proceed To Checkout'} link={'/Checkout'} />
                </Box>
            </Box>
        </Container>
    );
};

export default Cart;
