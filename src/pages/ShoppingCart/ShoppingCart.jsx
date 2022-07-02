/* eslint-disable no-unused-vars */
import CheckOutForm from '../../components/CheckoutForm/CheckoutForm';
import OrderSummaryTable from '../../components/OrderSummaryTable/OrderSummaryTable';
import { useCart } from '../../contexts/CartContext';

const ShoppingCart = () => {
    const { state } = useCart();
    const { items: cartItems } = state;
    // const total = cart.reduce((acc, item) => acc + item.price, 0);

    const checkOutHandler = (data, e) => {
        const {
            customerName,
            customerEmail,
            customerOrderNotes,
            customerZipCode,
        } = data;
        // portal of confirmation
    };

    return (
        <>
            <OrderSummaryTable items={cartItems} />
            <CheckOutForm checkOutHandler={checkOutHandler} />
        </>
    );
};

export default ShoppingCart;
