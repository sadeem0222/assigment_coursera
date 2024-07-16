// src/components/ShoppingCartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/actions/cartActions';

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    const handleIncrement = (itemId) => {
        dispatch(incrementQuantity(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementQuantity(itemId));
    };

    const handleRemove = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.map(item => (
                <div key={item.id}>
                    <img src={item.thumbnail} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
            ))}
            <button>Checkout (Coming Soon)</button>
            <button>Continue Shopping</button>
        </div>
    );
};

export default ShoppingCartPage;
