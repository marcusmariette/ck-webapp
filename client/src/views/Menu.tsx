import { Box, Container, Typography } from '@mui/material';
import chunk from 'lodash/chunk';
import MenuCard from 'components/menuCard/MenuCard';
import menu from 'resources/data/menu.json';
import { MenuItem } from 'types/types';

const Menu = ({ cartItems, setCartItems }) => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                    Menu
                </Typography>
            </Box>
            {chunk(menu, 3).map((row: MenuItem[], index) => {
                return (
                    <Box key={index} display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                        {row.map((col: MenuItem) => {
                            return (
                                <MenuCard
                                    key={col.id}
                                    id={col.id}
                                    name={col.name}
                                    description={col.description}
                                    price={col.price}
                                    imgSrc={col.imgSrc}
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}
                                />
                            );
                        })}
                    </Box>
                );
            })}
        </Container>
    );
};

export default Menu;
