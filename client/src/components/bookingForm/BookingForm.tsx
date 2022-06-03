import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingDetails } from 'types/types';
import { getTodayDateString } from 'utils/utils';
import { v4 as uuid } from 'uuid';

const BookingForm = ({ bookings, setBookings }) => {
    const navigate = useNavigate();

    const defaultBookingDetails: BookingDetails = {
        id: uuid(),
        firstName: '',
        lastName: '',
        date: getTodayDateString(),
        time: '09:00',
    };

    const [bookingDetails, setBookingDetails] = useState<BookingDetails>(defaultBookingDetails);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setBookingDetails({
            ...bookingDetails,
            [name]: value,
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        setBookings([...bookings, bookingDetails]);
        navigate('/booking-success');
    };

    return (
        <Grid container justifyContent={'center'}>
            <Paper variant='elevation' elevation={1} sx={{ justifyContent: 'center', padding: '3%' }}>
                <Grid item>
                    <Typography variant='h5'>{'Reserve a Table'}</Typography>
                    <Typography variant='subtitle1'>{'Please note we only take bookings 1 year in advance.'}</Typography>
                    <Typography variant='subtitle2' paddingBottom={3}>
                        {'Bookings Available: 9:00AM - 9:00PM'}
                    </Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={handleSubmit}>
                        <Grid container direction='column' spacing={3}>
                            <Grid item>
                                <Grid container direction='row' spacing={2}>
                                    <Grid item>
                                        <TextField
                                            type='text'
                                            label='First Name'
                                            name='firstName'
                                            value={bookingDetails.firstName}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            type='text'
                                            label='Surname'
                                            name='lastName'
                                            variant='outlined'
                                            value={bookingDetails.lastName}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container direction='column' spacing={3}>
                                    <Grid item>
                                        <TextField
                                            label='Date'
                                            type='date'
                                            name='date'
                                            value={bookingDetails.date}
                                            inputProps={{
                                                min: getTodayDateString(),
                                                max: getTodayDateString(true),
                                            }}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label='Time'
                                            type='time'
                                            name='time'
                                            value={bookingDetails.time}
                                            inputProps={{
                                                min: '09:00',
                                                max: '21:00',
                                                step: 900,
                                            }}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' type='submit' sx={{ minWidth: '100%' }}>
                                    {'Reserve Booking'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default BookingForm;
