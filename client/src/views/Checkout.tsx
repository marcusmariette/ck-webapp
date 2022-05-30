import { Box, Container, Typography, TextField } from '@mui/material';
import { textAlign } from '@mui/system';

const Checkout = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                    Checkout
                </Typography>
            </Box>

            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch', alignItems: 'center' },}}>
                <div >
                    <TextField 
                        
                        defaultValue="Email"    
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        defaultValue="First name"
                        variant="filled"
                    />
                    <TextField
                        defaultValue="Last name"
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        defaultValue="Mobile"
                        variant="filled"
                    />
                </div>
            </Box>
        </Container>
    );
};

export default Checkout;
