import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const NotFound: React.FC = () => {
    return (
        <>
            <Container disableGutters maxWidth={false}>
                <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                    <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                        404 Not Found.
                    </Typography>
                    <Typography variant='h5' align='center' color='primary.contrastText' paddingBottom={10}>
                        Sorry, the page you tried accessing could not be found.
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default NotFound;
