import { Trash } from 'react-bootstrap-icons';

const CartItemsTable = ({ items, deleteItemFromCart, handleNumberOfItemsToAdd }) => {
    const total = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
    
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th />
                    </tr>
                </thead>
                {Object.keys(items).length !== 0 ? (
                    <>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.mainImage}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="itemsToAdd"
                                            id="itemsToAdd"
                                            value={item.qty}
                                            onChange={(e) =>
                                                handleNumberOfItemsToAdd(
                                                    item.id,
                                                    e.target.value
                                                )
                                            }
                                            min={0}
                                            max={item.stock}
                                        />
                                    </td>
                                    <td>$ {item.price * item.qty}</td>
                                    <td>
                                        <Trash onClick={()=> deleteItemFromCart(item.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'end' }}>
                                    Total
                                </td>
                                <td id="total">$ {total}</td>
                            </tr>
                        </tfoot>
                    </>
                ) : (
                    <tfoot><tr> No items in the cart </tr></tfoot>
                )}
            </table>
        </>
    );
};

export default CartItemsTable;
