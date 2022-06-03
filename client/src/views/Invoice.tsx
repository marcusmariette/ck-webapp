import { Paper, Box, Container, Typography, CardMedia, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { MenuItem } from 'types/types';
import { calculateTotalPrice } from 'utils/utils';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

const Invoice = ({ orders }) => {
    const lastOrder = orders[orders.length - 1];

    return (
        <Container disableGutters maxWidth={false}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Typography variant='h2' color='primary.contrastText' gutterBottom paddingTop={20} paddingBottom={5}>
                    {'Your Invoice'}
                </Typography>

                <Paper variant='elevation' elevation={1} sx={{ justifyContent: 'center', maxWidth: '40vw', padding: '3%', marginBottom: 10 }}>
                    <Typography variant='h4' align='center' gutterBottom>
                        {'INVOICE'}
                    </Typography>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} sx={{ border: 1, borderBottom: 'none' }}>
                        <CardMedia component='img' sx={{ paddingTop: 2, maxHeight: '100px', maxWidth: '200px' }} image={require(`resources/images/kang.jpg`)} alt={'item.name'} />
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} sx={{ border: 1, borderTop: 'none' }}>
                        <Box padding={6} alignItems={'left'}>
                            <Typography variant='h6'>{'Cozy Kangaroo'}</Typography>
                            <Typography variant='h6'>{'654A Glenferrie Road'}</Typography>
                            <Typography variant='h6'>{'Hawthorn, Victoria, 3122'}</Typography>
                            <Typography variant='h6'>{'03 7111 7111'}</Typography>
                            <Typography variant='h6'>{'cozykangaroo@mail.com'}</Typography>
                        </Box>
                        <Box padding={6} alignItems={'right'}>
                            <Typography variant='h6'>{`Date & Time Placed: ${date} ${lastOrder.timePlaced}`}</Typography>
                            <Typography variant='h6'>{'Invoice Number: 0' + Math.floor(Math.random() * (999 - 1 + 1)) + 1}</Typography>
                            <Typography variant='h6'>{`Order Number: ${lastOrder.orderNumber}`}</Typography>
                        </Box>
                    </Box>
                    <Box padding={6} sx={{ border: 1, borderTop: 'none' }}>
                        <Box paddingBottom={3}>
                            <Typography variant='h6'>{`Billing To: ${lastOrder.checkoutDetails.firstName} ${lastOrder.checkoutDetails.lastName}`}</Typography>
                            <Typography variant='h6'>{`Phone: ${lastOrder.checkoutDetails.mobile}`}</Typography>
                            <Typography variant='h6'>{`Email: ${lastOrder.checkoutDetails.email}`}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6'>{'Paid Via: Apple Pay'}</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ borderLeft: 1, borderRight: 1, borderBottom: 1 }} p={2}>
                        <Typography variant='h6' align='center'>
                            {'ORDER DETAILS'}
                        </Typography>
                        <Table size='small'>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: 18 }}>{'Name'}</TableCell>
                                    <TableCell sx={{ fontSize: 18 }} align='right'>
                                        {'Price'}
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {lastOrder.items.map((row: MenuItem) => (
                                    <TableRow key={row.id}>
                                        <TableCell sx={{ fontSize: 18 }}>{row.name}</TableCell>
                                        <TableCell sx={{ fontSize: 18 }} align='right'>
                                            {`$${row.price}`}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        <Typography variant='h6' align='right' paddingTop={4} paddingRight={2}>
                            {`Total: $${calculateTotalPrice(lastOrder.items)}`}
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default Invoice;
