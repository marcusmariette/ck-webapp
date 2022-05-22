import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Booking from '../views/Booking';
import Cart from '../views/Cart';
import Home from '../views/Home';
import Menu from '../views/Menu';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
