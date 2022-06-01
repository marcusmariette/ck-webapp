import { MenuItem } from 'types/types';

export const calculateTotalPrice = (cartItems: MenuItem[]) => {
    let price = 0;
    cartItems.forEach((item: MenuItem) => {
        price += item.price;
    });

    return price;
};
