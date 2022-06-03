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
import { BookingDetails } from 'types/types';
import { convert24hTime } from 'utils/utils';

const BookingTable = ({ bookings, setBookings }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [bookingToRemove, setBookingToRemove] = useState('');

    const handleClickOpen = (bookingId: string) => {
        setBookingToRemove(bookingId);
        setOpenDialog(true);
    };

    const handleCancel = () => {
        setBookingToRemove('');
        setOpenDialog(false);
    };

    const handleConfirmRemoveBooking = () => {
        setBookings(
            bookings.filter((booking: BookingDetails) => {
                return booking.id !== bookingToRemove;
            })
        );

        setBookingToRemove('');
        setOpenDialog(false);
    };

    return (
        <Paper sx={{ width: '60vw', padding: 5, marginTop: 5, alignSelf: 'center', backgroundColor: '#042A2B' }}>
            <Box alignSelf={'center'}>
                <Typography variant='h4' color='primary.contrastText' gutterBottom>
                    {'Bookings'}
                </Typography>

                {bookings.length < 1 ? (
                    <Typography variant='h6' color='primary.contrastText' gutterBottom>
                        {'No Bookings'}
                    </Typography>
                ) : (
                    <Paper sx={{ boxShadow: 10 }}>
                        <Table size='medium'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>{'Customer Name'}</TableCell>
                                    <TableCell>{'Date'}</TableCell>
                                    <TableCell>{'Time'}</TableCell>
                                    <TableCell align='right'></TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {bookings.map((row: BookingDetails) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{`${row.firstName} ${row.lastName}`}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{convert24hTime(row.time)}</TableCell>
                                        <TableCell align='right'>
                                            {
                                                <Button color={'warning'} variant={'outlined'} size={'small'} onClick={() => handleClickOpen(row.id)}>
                                                    {'Remove'}
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
                    <DialogTitle>{`Delete Booking`}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>{'Would you like to delete this Booking?'}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancel}>{'Cancel'}</Button>
                        <Button onClick={handleConfirmRemoveBooking} autoFocus>
                            {'Confirm'}
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Paper>
    );
};

export default BookingTable;
