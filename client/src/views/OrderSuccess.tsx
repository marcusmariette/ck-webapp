import { Box, Container, Typography } from '@mui/material';
import CenteredButton from 'components/button/CenteredButton';

const OrderSuccess = ({ orders }) => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                    {'Order Successfully Placed!'}
                </Typography>
                <Typography variant='h3' align='center' color='primary.contrastText' paddingTop={10} paddingBottom={5}>
                    {`Order Number: ${orders[orders.length - 1].orderNumber}`}
                </Typography>
                <Typography variant='h5' align='center' color='primary.contrastText' paddingBottom={10}>
                    {`Your food should be ready in approx. 15-20 minutes.`}
                </Typography>
                <CenteredButton text={'View Invoice'} link={'/invoice'} />
            </Box>
        </Container>
    );
};

export default OrderSuccess;
