/* eslint-disable no-unused-vars */
import CartItemsTable from '../../components/CartItemsTable/CartItemsTable';
import { useCart } from '../../contexts/CartContext';
import Button from '../../styles/ButtonSeeMore.styled';

const ShoppingCart = () => {
    const { state, dispatch } = useCart();
    const { items: cartItems } = state;
    // const total = cart.reduce((acc, item) => acc + item.price, 0);

    const checkOutHandler = (data, e) => {
        const {
            customerName,
            customerEmail,
            customerOrderNotes,
            customerZipCode,
        } = data;
    };

    const handleNumberOfItemsToAdd = (itemId, qty) => {
        debugger;
        const parsedQty = parseInt(qty) || 1;
        dispatch({
            type: 'updateItem',
            payload: {
                id: itemId,
                qty: parsedQty,
            },
        });
    };

    const deleteItemFromCart = (itemId) => {
        dispatch({
            type: 'deleteItem',
            payload: {
                id: itemId,
            },
        });
    };

    return (
        <>
            <CartItemsTable
                items={cartItems}
                handleNumberOfItemsToAdd={handleNumberOfItemsToAdd}
                deleteItemFromCart={deleteItemFromCart}
            />
            <Button to="/checkout">Proceed to checkout</Button>
        </>
    );
};

export default ShoppingCart;
