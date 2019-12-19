import React from 'react';

const Payment = (props) => {
    return (
        <div className="col-12 col-lg-4">
            <div className="cart-summary">
                <h5>Cart Total</h5>
                <ul className="summary-table">
                    <li><span>subtotal:</span> <span>$140.00</span></li>
                    <li><span>delivery:</span> <span>Free</span></li>
                    <li><span>total:</span> <span>$140.00</span></li>
                </ul>

                <div className="payment-method">
                    <div className="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="cod" />
                        <label className="custom-control-label" for="cod">Cash on Delivery</label>
                    </div>

                    <div className="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="paypal" />
                        <label className="custom-control-label" for="paypal">
                            Paypal
                                    <img className="ml-15" src="img/core-img/paypal.png" alt="" />
                        </label>
                    </div>
                </div>

                <div className="cart-btn mt-100">
                    <a href="#" className="btn amado-btn w-100">Checkout</a>
                </div>
            </div>
        </div>
    );
}

export default Payment;