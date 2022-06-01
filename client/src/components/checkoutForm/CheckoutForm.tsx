import { Grid, Paper, Typography, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const navigate = useNavigate();

    return (
        <Grid container justifyContent={'center'}>
            <Paper variant='elevation' elevation={1} sx={{ justifyContent: 'center', minHeight: '30vh', padding: '3%' }}>
                <Grid item>
                    <Typography component='h1' variant='h5'>
                        Check out as a guest
                    </Typography>
                    <Typography component='h1' variant='h6' paddingBottom={2}>
                        Contact information
                    </Typography>
                </Grid>
                <Grid item >
                    <form>
                        <Grid container direction='column' spacing={2} marginBottom={5}>
                            <Grid item>
                                <TextField
                                    type='text'
                                    placeholder='Email'
                                    fullWidth
                                    name ='email'
                                    variant='outlined'
                                    required
                                    autoFocus
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    type='text'
                                    placeholder='First Name'
                                    fullWidth
                                    name='firstname'
                                    variant='outlined'
                                    required
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    type='text'
                                    placeholder='Last Name'
                                    fullWidth
                                    name='lastname'
                                    variant='outlined'
                                    required
                                />
                            </Grid>
                        </Grid>

                        <Grid container direction='row' spacing={2} marginBottom={5}>
                            <Grid item>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Eat In" />
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<Checkbox />} label="Take-Away" />
                            </Grid>
                            <Grid item>
                                <TextField
                                    type='text'
                                    placeholder='Table Number'
                                    fullWidth
                                    name='tableNumber'
                                    variant='standard'
                                    required
                                />
                            </Grid>
                        </Grid>


                        <Grid container direction='row' spacing={2} alignContent='centre'  alignItems='center' justifyContent='center'>
                            <Grid item>
                                <Button variant='contained' onClick={() => navigate("/Menu")} >
                                    Order More
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' type='submit'>
                                    Proceed to Payment
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
