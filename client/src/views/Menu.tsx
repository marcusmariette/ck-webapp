import { Box, Container, Typography } from '@mui/material';
import chunk from 'lodash/chunk';
import MenuCard from 'components/menuCard/MenuCard';
import menu from 'resources/data/menu.json';

const Menu = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                    Menu
                </Typography>
            </Box>
            {chunk(menu, 3).map((row) => {
                return (
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                        {row.map((col) => {
                            return <MenuCard name={col.name} description={col.description} price={col.price} imgSrc={col.imgSrc} />;
                        })}
                    </Box>
                );
            })}
        </Container>
    );
};

export default Menu;
