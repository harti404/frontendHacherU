import React from 'react';

const MetaProduct = (props) => {
  return (
    <div>
      <div className="product-meta-data">
        <div className="line" />
        <p className="product-price">$180</p>
        <a href="product-details.html">
          <h6>White Modern Chair</h6>
        </a>

        <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
          <div className="ratings">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
          </div>
          <div className="review">
            <a href="#">Write A Review</a>
          </div>
        </div>

        <p className="avaibility">
          <i className="fa fa-circle" />
          In Stock
        </p>
      </div >

      <div className="short_overview my-5">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit
        iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?</p>
      </div>
    </div>
  );
}

export default MetaProduct;