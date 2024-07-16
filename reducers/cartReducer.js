// src/redux/reducers/cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from '../types';

const initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            // Handle adding to cart logic
            return state;
        case REMOVE_FROM_CART:
            // Handle removing from cart logic
            return state;
        case INCREMENT_QUANTITY:
            // Handle incrementing quantity logic
            return state;
        case DECREMENT_QUANTITY:
            // Handle decrementing quantity logic
            return state;
        default:
            return state;
    }
};

export default cartReducer;
