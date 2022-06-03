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

    const ampm = hour < 12 ? 'AM' : 'PM';
    return `${formatSingleDigitTime(newHour)}${time.substring(2, 5)} ${ampm}`;
};

export const getTodayDateString = (nextYear?: boolean) => {
    const today = new Date();
    const year = nextYear ? today.getFullYear() + 1 : today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    return `${year}-${formatSingleDigitTime(month)}-${formatSingleDigitTime(day)}`;
};

export const formatSingleDigitTime = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`;
};
