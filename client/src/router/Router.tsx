import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StaffPortal from 'views/StaffPortal';
import Booking from 'views/Booking';
import Cart from 'views/Cart';
import Home from 'views/Home';
import Menu from 'views/Menu';
import NotFound from 'views/NotFound';
import StaffLogin from 'views/StaffLogin';
import Unauthorised from 'views/Unauthorised';
import Header from 'components/header/Header';

const Router = ({ cartCount, userSignedIn, setUserSignedIn }) => {
    console.log('Router userSignedIn:', userSignedIn);

    return (
        <BrowserRouter>
            <Header cartCount={cartCount} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/staff-login' element={<StaffLogin setUserSignedIn={setUserSignedIn} />} />
                <Route path='/staff-portal' element={userSignedIn ? <StaffPortal /> : <Unauthorised />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
