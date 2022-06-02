import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const mockBookings = [
    {
        id: 1,
        name: 'Marcus',
        time: '10:20',
        notes: 'Vegan',
    },
];

const BookingTable = () => {
    return (
        <Paper sx={{ width: '60vw', padding: 5, marginTop: 10, alignSelf: 'center', backgroundColor: '#042A2B' }}>
            <Box alignSelf={'center'}>
                <Typography variant='h4' color='primary.contrastText' gutterBottom>
                    {'Bookings'}
                </Typography>
                <Paper sx={{ boxShadow: 10 }}>
                    <Table size='medium'>
                        <TableHead>
                            <TableRow>
                                <TableCell>{'Booking ID'}</TableCell>
                                <TableCell>{'Customer Name'}</TableCell>
                                <TableCell>{'Time'}</TableCell>
                                <TableCell>{'Notes'}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {mockBookings.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.time}</TableCell>
                                    <TableCell>{row.notes}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Box>
        </Paper>
    );
};

export default BookingTable;
