import { Box, Container, Typography } from '@mui/material';
import CenteredButton from 'components/button/CenteredButton';

const Home = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                    {'Authentic Australian Fusion'}
                </Typography>
                <Typography variant='h5' align='center' color='primary.contrastText' paddingBottom={10}>
                    {'Welcome to Cosy Kangaroo. We hope you enjoy our authentic Australian dishes.'}
                </Typography>

                <CenteredButton text={'View Menu'} link={'/menu'} />
                <CenteredButton text={'Make Booking'} link={'/booking'} />
                <CenteredButton text={'Staff Login'} link={'/staff-login'} />
            </Box>
        </Container>
    );
};

export default Home;
