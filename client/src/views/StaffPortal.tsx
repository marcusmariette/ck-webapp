import { Box, Container, Typography } from '@mui/material';
import BookingTable from 'components/bookingTable/BookingTable';
import OrderTable from 'components/orderTable/OrderTable';

const StaffPortal = ({ orders, setOrders, bookings, setBookings }) => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' gutterBottom paddingTop={20}>
                    {'Staff Portal'}
                </Typography>
                <OrderTable orders={orders} setOrders={setOrders} />
                <BookingTable bookings={bookings} setBookings={setBookings} />
            </Box>
        </Container>
    );
};

export default StaffPortal;
