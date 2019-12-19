import React from 'react';
import BattonAddToCart from '../button';

const Counter = (props) => {
  return (
    <form className="cart clearfix" method="post">
      <div className="cart-btn d-flex mb-50">
        <p>Qty</p>
        <div className="quantity">
          <span className="qty-minus" >
            <i className="fa fa-caret-down" aria-hidden="true" />
          </span>
          <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" defaultValue="1" />
          <span className="qty-plus" >
            <i className="fa fa-caret-up" aria-hidden="true" />
          </span>
        </div>
      </div>
      {<BattonAddToCart/>}
    </form>
  );
}

export default Counter;