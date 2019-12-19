import React from 'react';
import Details from '../details';
import Payment from '../payment';

const Checkout = (props) => {
  return (
    <div className="cart-table-area section-padding-100">
      <div className="container-fluid">
        <div className="row">
          <Details />
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
