import { Grid, Paper, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import loginCredentials from 'resources/data/loginDetails.json';

type loginDetails = {
    username: string;
    password: string;
};

const LoginForm: React.FC = () => {
    const defaultLoginDetails: loginDetails = {
        username: '',
        password: '',
    };

    const [loginDetails, setLoginDetails] = useState<loginDetails>(defaultLoginDetails);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value,
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const success = loginCredentials.find((credentials) => {
            return credentials.username === loginDetails.username && credentials.password === loginDetails.password;
        });

        success ? window.location.assign('/staff-portal') : alert('Invlaid Login Credentials');
    };

    return (
        <Grid container justifyContent={'center'}>
            <Paper variant='elevation' elevation={1} sx={{ justifyContent: 'center', minHeight: '30vh', padding: '3%' }}>
                <Grid item>
                    <Typography component='h1' variant='h5' paddingBottom={3}>
                        Login
                    </Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={handleSubmit}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <TextField
                                    type='text'
                                    placeholder='Username'
                                    fullWidth
                                    name='username'
                                    variant='outlined'
                                    value={loginDetails.username}
                                    onChange={handleChange}
                                    required
                                    autoFocus
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    type='password'
                                    placeholder='Password'
                                    fullWidth
                                    name='password'
                                    variant='outlined'
                                    value={loginDetails.password}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item>
                                <Button variant='contained' type='submit' sx={{ minWidth: '100%' }}>
                                    Login
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' onClick={() => setLoginDetails(defaultLoginDetails)} sx={{ minWidth: '100%' }}>
                                    Reset
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default LoginForm;
