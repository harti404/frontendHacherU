import React from 'react';

import ShoppingCart from '../shopping_cart/shopping_cart';
import TableCart from '../shopping_cart/table_cart';
import TotalCart from '../total_cart/total_cart';
const Cart = (props) => {
    return (
        <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
                <div className="row">
                    <ShoppingCart>
                        <TableCart/>
                    </ShoppingCart>
                    {props.children}
                    <TotalCart />
                </div>
            </div>
        </div>
    );
}

export default Cart;