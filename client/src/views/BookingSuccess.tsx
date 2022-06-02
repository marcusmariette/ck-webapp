import { Box, Container, Typography } from '@mui/material';
import CenteredButton from 'components/button/CenteredButton';

const BookingSuccess = () => {
    let message;

    if (localStorage.getItem('message') == null) {
        message = '';
        localStorage.setItem('message', JSON.stringify(message));
    } else {
        message = JSON.parse(localStorage.getItem('message')!);
    }

    return (
        <Container disableGutters maxWidth={false}>
            <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                    {'Success!'}
                </Typography>
                <Typography variant='h5' align='center' color='primary.contrastText' paddingBottom={10} paddingTop={5}>
                    {message}
                </Typography>
                <Box>
                    <CenteredButton text={'Return to Homepage'} link={'/'} />
                    <CenteredButton text={'Make Another Booking'} link={'/booking'} />
                </Box>
            </Box>
        </Container>
    );
};

export default BookingSuccess;
