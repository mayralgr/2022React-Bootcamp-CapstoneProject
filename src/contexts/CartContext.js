import * as React from 'react';

const CartContext = React.createContext({ itemsCount: 0, items: [] });

function cartReducer(state, action) {
    switch (action.type) {
        case 'addItem': {
            const { id, qty, name, price } = action.payload;
            const item = state.items.find(i => i.id === id);
            const itemQtyExisting = item?.qty ?? 0;
            const itemToAddOrUpdate = {
                id,
                name,
                price,
                qty: qty + itemQtyExisting,
            };
            if(item) {
                const items = state.items.filter(i => i.id !== id);
                return{
                    itemsCount: state.itemsCount + qty,
                    items: [ ...items, itemToAddOrUpdate ],
                }
            }
            return {
                itemsCount: state.itemsCount + qty,
                items: [ ...state.items, itemToAddOrUpdate ],
            };
        }
        case 'deleteItem': {
            const { id, qty } = action.payload;
            const item = state.items.find(i => i.id === id);
            const QtyExisting = item?.qty ?? 0;
            const finalQty = QtyExisting - qty;
            const updatedItem = {...item, qty: finalQty};
            if (finalQty === 0) {
                return {
                    itemsCount: state.itemsCount - qty,
                    items: [ ...state.items.filter((item) => item.id !== id) ],
                };
            } else {
                return {
                    itemsCount: state.itemsCount - qty,
                    items: { ...state.items.filter((item) => item.id !== id), updatedItem },
                };
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function CountProvider({ children }) {
    const [state, dispatch] = React.useReducer(cartReducer, {
        itemsCount: 0,
        items: [],
    });
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = { state, dispatch };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}

function useCart() {
    const context = React.useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CountProvider');
    }
    return context;
}

export { CountProvider, useCart };
