// src/redux/actions/cartActions.js
import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from '../types';

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});

// Define other actions as needed
