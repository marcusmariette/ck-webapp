import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import ShoppingCartButton from 'components/button/ShoppingCartButton';
import { useNavigate } from 'react-router-dom';

const Header = ({ cartItems, userSignedIn, setUserSignedIn }) => {
    const navigate = useNavigate();

    return (
        <Box>
            <AppBar position='fixed' color={userSignedIn ? 'primary' : 'secondary'} sx={{ paddingLeft: '25px', paddingRight: '25px' }}>
                <Toolbar>
                    <Typography
                        variant='h6'
                        onClick={() => navigate(userSignedIn ? '/staff-portal' : '/')}
                        sx={{
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        {'Cosy Kangaroo'}
                    </Typography>
                    {userSignedIn ? (
                        <>
                            <Box sx={{ flex: 1 }}></Box>
                            <Button
                                color={'inherit'}
                                variant={'outlined'}
                                size={'small'}
                                onClick={() => {
                                    setUserSignedIn(false);
                                    navigate('/');
                                }}
                            >
                                {'Logout'}
                            </Button>
                        </>
                    ) : (
                        <>
                            <Typography
                                variant='h6'
                                textAlign={'right'}
                                sx={{
                                    flex: 1,
                                }}
                            >
                                {cartItems.length}
                            </Typography>
                            <ShoppingCartButton />
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
