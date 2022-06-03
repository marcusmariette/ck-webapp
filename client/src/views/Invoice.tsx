import { Paper, Grid, Box, Container, Typography,CardMedia, Table, Button, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { MenuItem } from 'types/types';
import { calculateTotalPrice } from 'utils/utils';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


const Invoice = ({ orders, cartItems }) => {

    const lastOrder = orders[orders.length - 1]

    return (
        <Container disableGutters maxWidth={false}>
            <Box display={'flex'} flexDirection={'column'}>
                <Typography variant='h2' align='center' color='primary.contrastText' gutterBottom paddingTop={20}>
                    {'Your Invoice'}
                </Typography>
                <Grid container justifyContent={'center'}>
                    <Paper variant='elevation' elevation={1} sx={{ justifyContent: 'center', minHeight: '10vh', padding: '3%' }}>
                        <Typography variant='h4' align='center' color='black' gutterBottom>
                            {'INVOICE'}
                        </Typography>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} sx={{ border: 1 }}>
                            <Box padding={6}>
                                <Typography variant='h6' align='left' color='black'>
                                    {'Cozy Kangaroo'}
                                </Typography>
                                <Typography variant='h6' align='left' color='black'>
                                    {'654A Glenferrie Road'}
                                </Typography>
                                <Typography variant='h6' align='left' color='black'>
                                    {'Hawthorn, Victoria, 3122'}
                                </Typography>
                                <Typography variant='h6' align='left' color='black'>
                                    {'03 7111 7111'}
                                </Typography>
                                <Typography variant='h6' align='left' color='black'>
                                    {'cozykangaroo@mail.com'}
                                </Typography>
                            </Box>
                            <Box padding={4}>
                                <CardMedia component='img' height='100' image={require(`resources/images/kang.jpg`)} alt={'item.name'} />
                                <Typography variant='h6' align='right' color='black'>
                                    {`Date & Time Placed: ` + date + ` ${lastOrder.timePlaced}`}
                                </Typography>
                                <Typography variant='h6' align='right' color='black'>
                                    {'Invoice Number: 0' + Math.floor(Math.random() * (999 - 1 + 1)) + 1}
                                </Typography>
                                <Typography variant='h6' align='right' color='black'>
                                    {`Order Number: ${lastOrder.orderNumber}`}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ borderLeft: 1, borderRight: 1, borderBottom: 1 }} p={6}>
                            <Box paddingBottom={3}>
                                <Typography variant='h6' align='left' color='black'>
                                    {`Billing To: ${lastOrder.checkoutDetails.firstName} ${lastOrder.checkoutDetails.lastName}`}
                                </Typography>
                                <Typography variant='h6' align='left' color='black'>
                                    {`Phone: ${lastOrder.checkoutDetails.mobile}`}
                                </Typography>
                                <Typography variant='h6' align='left' color='black'>
                                    {`Email: ${lastOrder.checkoutDetails.email}`}
                                </Typography>
                            </Box>
                            <Box >
                                <Typography variant='h6' align='left' color='black' >
                                    {'Paid Via: Apple Pay'}
                                </Typography>
                            </Box>
                        </Box>
                        
                        <Box sx={{ borderLeft: 1, borderRight: 1, borderBottom: 1 }} p={2}>
                            <Typography variant='h6' align='center' color='black'>
                                {'ORDER DETAILS'}
                            </Typography>
                            <Table size='small'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>{'Name'}</TableCell>
                                    <TableCell align='right'>{'Price'}</TableCell>
                                    
                                   
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {lastOrder.items.map((row: MenuItem) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell align='right'>${row.price}</TableCell>                                                                                                                 
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                            
                            <Typography variant='h6' align='right' color='black' paddingTop={4} paddingRight={2}>
                                {`Total: $${calculateTotalPrice(lastOrder.items)}`}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Box>
        </Container>
    );
};

export default Invoice;
