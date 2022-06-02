import { MenuItem } from 'types/types';

export const calculateTotalPrice = (cartItems: MenuItem[]) => {
    let price = 0;
    cartItems.forEach((item: MenuItem) => {
        price += item.price;
    });

    return price;
};

export const convert24hTime = (time: string) => {
    const hour = +time.substring(0, 2);
    const newHour = hour % 12 || 12;

    const convertedHourText = newHour < 10 ? `0${newHour}` : `${newHour}`;
    const ampm = hour < 12 ? 'AM' : 'PM';
    return `${convertedHourText}${time.substring(2, 5)} ${ampm}`;
};
