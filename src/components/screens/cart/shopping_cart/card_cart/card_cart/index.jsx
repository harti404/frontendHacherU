import React from 'react';
import CounterCart from '../counter';
const CardCart = (props) => {
  return (
    <div className="cart-table clearfix">
        <table className="table table-responsive" tabindex="1" style={{ overflow: "hidden", outline: "none" }}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cart_product_img">
                <a href="#">
                  <img src="img/bg-img/cart1.jpg" alt="Product" />

                </a>
              </td>
              <td className="cart_product_desc">
                <h5>White Modern Chair</h5>
              </td>
              <td className="price">
                <span>$130</span>
              </td>
              {<CounterCart />}
            </tr>
            <tr>
              <td className="cart_product_img">
                <a href="#">
                  <img src="img/bg-img/cart2.jpg" alt="Product" />

                </a>
              </td>
              <td className="cart_product_desc">
                <h5>Minimal Plant Pot</h5>
              </td>
              <td className="price">
                <span>$10</span>
              </td>
              {<CounterCart />}
            </tr>
            <tr>
              <td className="cart_product_img">
                <a href="#">
                  <img src="img/bg-img/cart3.jpg" alt="Product" />
                </a>
              </td>
              <td className="cart_product_desc">
                <h5>Minimal Plant Pot</h5>
              </td>
              <td className="price">
                <span>$10</span>
              </td>
              {<CounterCart />}
            </tr>
          </tbody>
        </table>
      </div>
  );
}

export default CardCart;