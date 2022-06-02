import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { MenuItem } from 'types/types';
import { v4 as uuid } from 'uuid';

const MenuCard = ({ name, description, price, imgSrc, cartItems, setCartItems }) => {
    const handleAddToCart = () => {
        const itemToAdd: MenuItem = {
            id: uuid(),
            name,
            description,
            price,
            imgSrc,
        };

        setCartItems([...cartItems, itemToAdd]);
    };

    return (
        <Card sx={{ width: 350, height: 350, margin: 5 }}>
            <CardMedia component='img' height='150' image={require(`resources/images/${imgSrc}`)} alt={name} />
            <CardContent sx={{ paddingBottom: '0' }}>
                <Typography gutterBottom variant='h5' component='div'>
                    {name}
                </Typography>
                <Typography gutterBottom variant='body2'>
                    {description}
                </Typography>
                <Typography sx={{ fontWeight: '600' }}>{`$${price}`}</Typography>
            </CardContent>
            <CardActions>
                <Button color={'primary'} variant={'text'} size={'medium'} onClick={handleAddToCart}>
                    {'Add to cart'}
                </Button>
            </CardActions>
        </Card>
    );
};

export default MenuCard;
