import {
    Box,
    Typography,
    Button,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import { MenuItem, Order } from 'types/types';
import { convert24hTime } from 'utils/utils';

const OrderTable = ({ orders, setOrders }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [orderNumberToComplete, setOrderNumberToComplete] = useState('');

    const handleClickOpen = (orderNumber: string) => {
        setOrderNumberToComplete(orderNumber);
        setOpenDialog(true);
    };

    const handleCancel = () => {
        setOrderNumberToComplete('');
        setOpenDialog(false);
    };

    const handleConfirmCompleteOrder = () => {
        setOrders(
            orders.filter((order: Order) => {
                return order.orderNumber !== orderNumberToComplete;
            })
        );

        setOrderNumberToComplete('');
        setOpenDialog(false);
    };

    const getItems = (items: MenuItem[]) => {
        let listString = '';

        items.forEach((item) => {
            listString += `${item.name}, `;
        });

        return listString.substring(0, listString.length - 2);
    };

    return (
        <Paper sx={{ width: '60vw', padding: 5, marginTop: 5, alignSelf: 'center', backgroundColor: '#042A2B' }}>
            <Box alignSelf={'center'}>
                <Typography variant='h4' color='primary.contrastText' gutterBottom>
                    {'Orders'}
                </Typography>

                {orders.length < 1 ? (
                    <Typography variant='h6' color='primary.contrastText' gutterBottom>
                        {'No Orders'}
                    </Typography>
                ) : (
                    <Paper sx={{ boxShadow: 10 }}>
                        <Table size='medium'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>{'Order Number'}</TableCell>
                                    <TableCell>{'Customer Name'}</TableCell>
                                    <TableCell>{'Table Number'}</TableCell>
                                    <TableCell>{'Items'}</TableCell>
                                    <TableCell align='right'>{'Time Placed'}</TableCell>
                                    <TableCell align='right'></TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {orders.map((row: Order) => (
                                    <TableRow key={row.orderNumber}>
                                        <TableCell>{row.orderNumber}</TableCell>
                                        <TableCell>{`${row.checkoutDetails.firstName} ${row.checkoutDetails.lastName}`}</TableCell>
                                        <TableCell>{row.checkoutDetails.tableNumber || 'Take Away'}</TableCell>
                                        <TableCell>{getItems(row.items)}</TableCell>
                                        <TableCell align='right'>{convert24hTime(row.timePlaced)}</TableCell>
                                        <TableCell align='right'>
                                            {
                                                <Button color={'success'} variant={'outlined'} size={'small'} onClick={() => handleClickOpen(row.orderNumber)}>
                                                    {'Complete'}
                                                </Button>
                                            }
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                )}

                <Dialog open={openDialog} onClose={handleCancel}>
                    <DialogTitle>{`Order Number: ${orderNumberToComplete}`}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>{'Would you like to mark this order as Completed?'}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancel}>{'Cancel'}</Button>
                        <Button onClick={handleConfirmCompleteOrder} autoFocus>
                            {'Confirm'}
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Paper>
    );
};

export default OrderTable;
