import { Box, Container, Typography } from '@mui/material';
import BookingTable from 'components/bookingTable/BookingTable';
import OrderTable from 'components/orderTable/OrderTable';

const StaffPortal = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' gutterBottom paddingTop={20}>
                    {'Staff Portal'}
                </Typography>
                <OrderTable />
                <BookingTable />
            </Box>
        </Container>
    );
};

export default StaffPortal;
