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

const Router = ({ cartItems, setCartItems, userSignedIn, setUserSignedIn }) => {
    return (
        <BrowserRouter>
            <Header cartItems={cartItems} userSignedIn={userSignedIn} setUserSignedIn={setUserSignedIn} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route path='/checkout' element={<Checkout cartItems={cartItems} />} />
                <Route path='/staff-login' element={<StaffLogin setUserSignedIn={setUserSignedIn} />} />
                <Route path='/staff-portal' element={userSignedIn ? <StaffPortal /> : <Unauthorised />} />
                <Route path='/booking-success' element={<BookingSuccess />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
