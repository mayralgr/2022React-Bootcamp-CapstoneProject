import CheckOutForm from '../../components/CheckoutForm/CheckoutForm';
import OrderSummaryTable from '../../components/OrderSummaryTable/OrderSummaryTable';
import { useCart } from '../../contexts/CartContext';
import ButtonLink from '../../styles/ButtonSeeMore.styled';

const Checkout = () => {
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
            <ButtonLink to="/cart">Go back to cart</ButtonLink>
        </>
    );
};

export default Checkout;
