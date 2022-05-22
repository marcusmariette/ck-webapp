import React from 'react';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCartButton: React.FC = () => {
    return (
        <IconButton aria-label='cartIcon' href='/cart' sx={{ color: '#fff' }}>
            <ShoppingCartIcon fontSize='large' />
        </IconButton>
    );
};

export default ShoppingCartButton;
