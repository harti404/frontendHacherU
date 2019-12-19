import React from 'react';
import CardCart from '../card_cart/card_cart';

const TableCart = (props) => {
  return (
    <div className="col-12 col-lg-8">
      <div className="cart-table clearfix">
        <table className="table table-responsive" tabindex="1" style={{overflow: "hidden", outline: "none"}}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          {<CardCart />}
        </table>
      </div>
    </div>
  );
}

export default TableCart;