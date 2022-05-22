import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import ShoppingCartButton from '../button/ShoppingCartButton';

type HeaderProps = {
    cartCount: number;
};

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
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
                        <Typography variant='h6'>{cartCount}</Typography>
                        <ShoppingCartButton />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Header;
