import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme, staffTheme } from 'resources/theme';
import Router from 'router/Router';
import { BookingDetails, MenuItem, Order } from 'types/types';

const App = () => {
    const [cartItems, setCartItems] = useState<MenuItem[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [orderCounter, setOrderCounter] = useState<number>(0);
    const [bookings, setBookings] = useState<BookingDetails[]>([]);
    const [userSignedIn, setUserSignedIn] = useState<boolean>(false);

    return (
        <ThemeProvider theme={userSignedIn ? staffTheme : theme}>
            <CssBaseline />
            <Router
                cartItems={cartItems}
                setCartItems={setCartItems}
                orders={orders}
                setOrders={setOrders}
                orderCounter={orderCounter}
                setOrderCounter={setOrderCounter}
                bookings={bookings}
                setBookings={setBookings}
                userSignedIn={userSignedIn}
                setUserSignedIn={setUserSignedIn}
            />
        </ThemeProvider>
    );
};

export default App;
