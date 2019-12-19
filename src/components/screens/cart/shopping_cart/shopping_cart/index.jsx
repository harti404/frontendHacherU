import React from 'react';
import CardCart from '../card_cart/card_cart';
import TitleCart from '../title';

const ShoppingCart = (props) => {
  return (

    <div className="col-12 col-lg-8">
      <TitleCart />
      <CardCart/>
    </div>
  );
}

export default ShoppingCart;