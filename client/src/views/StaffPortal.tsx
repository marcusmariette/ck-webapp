import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const StaffPortal: React.FC = () => {
    return (
        <>
            <Container disableGutters maxWidth={false}>
                <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
                    <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                        StaffPortal
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default StaffPortal;
