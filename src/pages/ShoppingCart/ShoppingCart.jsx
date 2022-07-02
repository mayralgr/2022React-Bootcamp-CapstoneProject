import CheckOutForm from '../../components/CheckoutForm/CheckoutForm';
import { useCart } from '../../contexts/CartContext';

const ShoppingCart = () => {
    const { state } = useCart();
    const { items: cart } = state;
    // const total = cart.reduce((acc, item) => acc + item.price, 0);
    
    const checkOutHandler = (data, e) => {
        const {
            customerName,
            customerEmail,
            customerOrderNotes,
            customerZipCode,
        } = data;
        // pop?
        
    };

    return (
        <>
            <CheckOutForm
                checkOutHandler={checkOutHandler}
            />
        </>
    );
};

export default ShoppingCart;
