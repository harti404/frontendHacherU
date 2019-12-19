import React from 'react';

const CounterCart = (props) => {
  return (
    <td className="qty">
      <div className="qty-btn d-flex">
        <p>Qty</p>
        <div className="quantity">
          <span className="qty-minus" >
            <i className="fa fa-minus" aria-hidden="true" />
          </span>
          <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" defaultValue="1" />
          <span className="qty-plus" >
            <i className="fa fa-plus" aria-hidden="true" />
          </span>
        </div>
      </div>
    </td>
  );
}

export default CounterCart;