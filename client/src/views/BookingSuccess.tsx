import { Box, Container, Typography } from '@mui/material';
import { convert24hTime } from 'utils/utils';

const BookingSuccess = ({ bookings }) => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                    {'Booking Reserved!'}
                </Typography>
                <Typography variant='h4' align='center' color='primary.contrastText' gutterBottom>
                    {'Your booking has been successfully reserved.'}
                </Typography>
                <Typography variant='h5' align='center' color='primary.contrastText' paddingTop={10}>
                    {`Date: ${bookings[bookings.length - 1].date}`}
                </Typography>
                <Typography variant='h5' align='center' color='primary.contrastText' paddingBottom={5}>
                    {`Time: ${convert24hTime(bookings[bookings.length - 1].time)}`}
                </Typography>
            </Box>
        </Container>
    );
};

export default BookingSuccess;
