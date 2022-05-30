import { Paper, Grid, Box, Container, Typography } from '@mui/material';
import BookingSelector from 'components/date/Calender';

const Booking = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                    Booking
                </Typography>
                <Grid container justifyContent={'center'}> 
                    <Paper variant='elevation' elevation={1} sx={{ justifyContent: 'center', minHeight: '10vh', padding: '3%' }}>
                        <BookingSelector/>
                    </Paper>
                </Grid>
            </Box>
            
        </Container>
    );
};

export default Booking;
