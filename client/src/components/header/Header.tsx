import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';
import React from 'react';

const Header: React.FC = () => {
    return (
        <>
            <Box>
                <AppBar position='fixed' color={'secondary'} sx={{ paddingLeft: '25px', paddingRight: '25px' }}>
                    <Toolbar>
                        <Typography
                            variant='h6'
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                color: 'inherit',
                                textDecoration: 'none',
                                flex: 1,
                            }}
                        >
                            Cosy Kangaroo
                        </Typography>
                        <IconButton aria-label='cartIcon' href='/cart' sx={{ color: '#fff' }}>
                            <ShoppingCartIcon fontSize='large' />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Header;
