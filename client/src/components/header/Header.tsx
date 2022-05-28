import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import ShoppingCartButton from 'components/button/ShoppingCartButton';
import { useNavigate } from 'react-router-dom';

const Header = ({ cartItems }) => {
    const navigate = useNavigate();

    return (
        <Box>
            <AppBar position='fixed' color={'secondary'} sx={{ paddingLeft: '25px', paddingRight: '25px' }}>
                <Toolbar>
                    <Typography
                        variant='h6'
                        component='a'
                        onClick={() => navigate('/')}
                        sx={{
                            mr: 2,
                            color: 'inherit',
                            textDecoration: 'none',
                            flex: 1,
                            cursor: 'pointer',
                        }}
                    >
                        Cosy Kangaroo
                    </Typography>
                    <Typography variant='h6'>{cartItems.length}</Typography>
                    <ShoppingCartButton />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
