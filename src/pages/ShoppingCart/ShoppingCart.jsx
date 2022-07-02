import { useCart } from "../../contexts/CartContext";

const ShoppingCart = () => {
    const { state } = useCart();
    return <> <h2>Shopping Cart</h2></>
}

export default ShoppingCart;