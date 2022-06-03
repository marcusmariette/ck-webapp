import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import CenteredButton from 'components/button/CenteredButton';
import { MenuItem } from 'types/types';
import { calculateTotalPrice } from 'utils/utils';

const Cart = ({ cartItems, setCartItems }) => {
    const hasCartItems = cartItems.length > 0;

    const removeItem = (uuid: string) => {
        setCartItems(
            cartItems.filter((item: MenuItem) => {
                return item.id !== uuid;
            })
        );
    };

    return (
        <Container disableGutters maxWidth={false}>
            <Box alignItems='center' display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                    {'Cart'}
                </Typography>
                {!hasCartItems ? (
                    <Typography variant='h5' align='center' color='primary.contrastText' paddingBottom={10}>
                        {'The Cart appears to be empty! Go to the Menu to add items to the Cart.'}
                    </Typography>
                ) : (
                    <>
                        <Box paddingTop={5}>
                            {cartItems.map((item: MenuItem) => {
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
                                                <Button color={'secondary'} variant={'outlined'} size={'medium'} onClick={() => removeItem(item.id)}>
                                                    {'Remove'}
                                                </Button>
                                            </CardActions>
                                        </Box>
                                    </Card>
                                );
                            })}
                        </Box>
                        <Typography variant='h5' paddingTop={5} paddingBottom={5} color='primary.contrastText'>
                            {`Total: $${calculateTotalPrice(cartItems)}`}
                        </Typography>
                    </>
                )}

                <Box>
                    <CenteredButton text={'Menu'} link={'/menu'} />
                    {hasCartItems && <CenteredButton text={'Checkout'} link={'/checkout'} />}
                </Box>
            </Box>
        </Container>
    );
};

export default Cart;
