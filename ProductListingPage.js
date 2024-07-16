// src/components/ProductListingPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ProductListingPage = () => {
    const dispatch = useDispatch();
    const plants = useSelector(state => state.plants); // Assuming you have plant data in redux store

    const handleAddToCart = (plant) => {
        dispatch(addToCart(plant));
    };

    return (
        <div>
            <h2>Our Plants</h2>
            {plants.map(plant => (
                <div key={plant.id}>
                    <img src={plant.thumbnail} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>
                    <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductListingPage;
