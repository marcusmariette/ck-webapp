import { Grid, Paper, Typography, TextField, Button, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutDetails, Order } from 'types/types';
import { calculateTotalPrice } from 'utils/utils';

const CheckoutForm = ({ cartItems, setCartItems, orders, setOrders, orderCounter, setOrderCounter }) => {
    const navigate = useNavigate();

    const defaultCheckoutDetails: CheckoutDetails = {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        diningOption: '',
        tableNumber: '',
    };

    const [checkoutDetails, setCheckoutDetails] = useState<CheckoutDetails>(defaultCheckoutDetails);

    const handleChange = (event: any) => {
        const { name, value } = event.target;

        setCheckoutDetails({
            ...checkoutDetails,
            [name]: value,
        });
    };

    const clearTableNumber = () => {
        setCheckoutDetails({
            ...checkoutDetails,
            tableNumber: '',
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const today = new Date();
        const orderToAdd: Order = {
            orderNumber: orderCounter + 1,
            checkoutDetails: checkoutDetails,
            items: cartItems,
            timePlaced: `${today.getHours()}:${today.getMinutes()}`,
        };

        setOrders([...orders, orderToAdd]);
        setOrderCounter(orderCounter + 1);
        setCartItems([]);
        navigate('/order-success');
    };

    return (
        <Grid container justifyContent={'center'}>
            <Paper variant='elevation' elevation={1} sx={{ justifyContent: 'center', padding: '3%' }}>
                <Grid item>
                    <Typography variant='h5' paddingBottom={2}>
                        {'Contact information'}
                    </Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={handleSubmit}>
                        <Grid container direction='row' spacing={2} marginBottom={2}>
                            <Grid item>
                                <TextField type='text' label='First Name' name='firstName' variant='outlined' value={checkoutDetails.firstName} onChange={handleChange} required />
                            </Grid>
                            <Grid item>
                                <TextField type='text' label='Last Name' name='lastName' variant='outlined' value={checkoutDetails.lastName} onChange={handleChange} required />
                            </Grid>
                        </Grid>

                        <Grid container direction='column' spacing={2} marginBottom={5}>
                            <Grid item>
                                <TextField type='text' label='Email' fullWidth name='email' variant='outlined' value={checkoutDetails.email} onChange={handleChange} required autoFocus />
                            </Grid>
                            <Grid item>
                                <TextField type='text' label='Mobile' fullWidth name='mobile' variant='outlined' value={checkoutDetails.mobile} onChange={handleChange} required autoFocus />
                            </Grid>
                        </Grid>

                        <Grid container direction='row' marginBottom={5}>
                            <RadioGroup row name='diningOption' value={checkoutDetails.diningOption} onChange={handleChange}>
                                <FormControlLabel value='eatIn' control={<Radio />} label='Eat-In' />
                                <FormControlLabel value='takeAway' control={<Radio />} label='Take Away' onClick={clearTableNumber} />
                            </RadioGroup>
                            <Grid item sx={{ flex: 1 }}>
                                <TextField type='text' label='Table Number' fullWidth name='tableNumber' value={checkoutDetails.tableNumber} onChange={handleChange} disabled={checkoutDetails.diningOption === 'takeAway'} required />
                            </Grid>
                        </Grid>

                        <Grid container direction='row' justifyContent='center' spacing={2} marginBottom={3}>
                            <Grid item>
                                <Typography variant='h6' paddingBottom={2}>
                                    {`Total: $${calculateTotalPrice(cartItems)}`}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' spacing={2} alignContent='centre' alignItems='center' justifyContent='center'>
                            <Grid item>
                                <Button variant='contained' onClick={() => navigate('/menu')}>
                                    {'Order More'}
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' type='submit'>
                                    {'Pay Now'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default CheckoutForm;
