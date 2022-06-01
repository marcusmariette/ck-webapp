import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const mockOrderData = [
    {
        id: 1,
        name: 'Marcus',
        items: ['Pizza', 'Pasta'],
        timePlaced: '10:20',
    },
];

const OrderTable = () => {
    return (
        <Box width={'60vw'} alignSelf={'center'} paddingTop={10}>
            <Typography variant='h4' gutterBottom>
                {'Orders'}
            </Typography>
            <Paper sx={{ boxShadow: 10 }}>
                <Table size='medium'>
                    <TableHead>
                        <TableRow>
                            <TableCell>{'Order ID'}</TableCell>
                            <TableCell>{'Customer Name'}</TableCell>
                            <TableCell>{'Items'}</TableCell>
                            <TableCell align='right'>{'Time Placed'}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockOrderData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.items.toString()}</TableCell>
                                <TableCell align='right'>{row.timePlaced}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default OrderTable;
