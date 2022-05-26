import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const ShoppingCartButton = () => {
    const navigate = useNavigate();

    return (
        <IconButton aria-label='cartIcon' onClick={() => navigate('/cart')} sx={{ color: '#fff' }}>
            <ShoppingCartIcon fontSize='large' />
        </IconButton>
    );
};

export default ShoppingCartButton;
