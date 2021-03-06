export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    imgSrc: string;
};

export type LoginDetails = {
    username: string;
    password: string;
};

export type BookingDetails = {
    id: string;
    firstName: string;
    lastName: string;
    date: string;
    time: string;
};

export type CheckoutDetails = {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    diningOption: string;
    tableNumber: string;
};

export type Order = {
    orderNumber: string;
    checkoutDetails: CheckoutDetails;
    items: MenuItem[];
    timePlaced: string;
};
