import React from 'react';

const Navigation = (props) => {
    return (
        <nav className="amado-nav">
            <ul>
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="product-details.html">Product</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="checkout.html">Checkout</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
