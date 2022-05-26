import { Box, Container, Typography } from '@mui/material';

const StaffPortal = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                    Staff Portal
                </Typography>
            </Box>
        </Container>
    );
};

export default StaffPortal;
