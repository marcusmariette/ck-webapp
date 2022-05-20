import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Header: React.FC = () => {
    return (
        <>
            <Box>
                <AppBar position='fixed' color={'secondary'}>
                    <Toolbar>
                        <Typography
                            variant='h6'
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Cosy Kangaroo
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Header;
