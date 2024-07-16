// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">
                    <div>
                        <i className="fas fa-shopping-cart"></i>
                        <span>{cartItems.length}</span>
                    </div>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
