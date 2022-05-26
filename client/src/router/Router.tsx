import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StaffPortal from 'views/StaffPortal';
import Booking from 'views/Booking';
import Cart from 'views/Cart';
import Home from 'views/Home';
import Menu from 'views/Menu';
import NotFound from 'views/NotFound';
import StaffLogin from 'views/StaffLogin';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/staff-login' element={<StaffLogin />} />
                <Route path='/staff-portal' element={<StaffPortal />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
