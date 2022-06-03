import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StaffPortal from 'views/StaffPortal';
import BookingSuccess from 'views/BookingSuccess';
import Booking from 'views/Booking';
import Cart from 'views/Cart';
import Checkout from 'views/Checkout';
import Home from 'views/Home';
import Menu from 'views/Menu';
import NotFound from 'views/NotFound';
import StaffLogin from 'views/StaffLogin';
import Unauthorised from 'views/Unauthorised';
import Header from 'components/header/Header';
import OrderSuccess from 'views/OrderSuccess';

const Router = ({ cartItems, setCartItems, orders, setOrders, orderCounter, setOrderCounter, bookings, setBookings, userSignedIn, setUserSignedIn }) => {
    return (
        <BrowserRouter>
            <Header cartItems={cartItems} userSignedIn={userSignedIn} setUserSignedIn={setUserSignedIn} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route path='/booking' element={<Booking bookings={bookings} setBookings={setBookings} />} />
                <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route
                    path='/checkout'
                    element={
                        <Checkout
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            orders={orders}
                            setOrders={setOrders}
                            orderCounter={orderCounter}
                            setOrderCounter={setOrderCounter}
                        />
                    }
                />
                <Route path='/staff-login' element={<StaffLogin setUserSignedIn={setUserSignedIn} />} />
                <Route
                    path='/staff-portal'
                    element={
                        userSignedIn ? <StaffPortal orders={orders} setOrders={setOrders} bookings={bookings} setBookings={setBookings} /> : <Unauthorised />
                    }
                />
                <Route path='/booking-success' element={<BookingSuccess bookings={bookings} />} />
                <Route path='/order-success' element={<OrderSuccess orders={orders} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
