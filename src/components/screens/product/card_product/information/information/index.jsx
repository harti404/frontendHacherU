import React from 'react';

const InformationProduct = (props) => {
  return (
    <div className="col-12 col-lg-5">
      <div className="single_product_desc">
        {props.children}
      </div>
    </div>
  );
}

export default InformationProduct;