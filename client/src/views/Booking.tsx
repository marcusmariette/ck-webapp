import { Box, Container, Typography } from '@mui/material';
import BookingForm from 'components/bookingForm/BookingForm';

const Booking = ({ bookings, setBookings }) => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20} paddingBottom={10}>
                    {'Booking'}
                </Typography>
                <BookingForm bookings={bookings} setBookings={setBookings} />
            </Box>
        </Container>
    );
};

export default Booking;
