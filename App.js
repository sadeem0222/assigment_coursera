// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/products" component={ProductListingPage} />
                    <Route path="/cart" component={ShoppingCartPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
