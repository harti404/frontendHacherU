import React from 'react';
import Breadcrumb from '../breadcrumbs';
import CardProduct from '../card_product/card_product';
import Gallary from '../card_product/gallary';
import InformationProduct from '../card_product/information/information';
import MetaProduct from '../card_product/information/Meta';
import Counter from '../card_product/information/counter';

const Product = (props) => {
  return (
    <div className="single-product-area section-padding-100 clearfix">
      <div className="container-fluid">
        <Breadcrumb />
        <CardProduct>
          <Gallary />
          <InformationProduct>
            <MetaProduct />
            <Counter />
          </InformationProduct>
        </CardProduct>
      </div>
    </div>
  );
}

export default Product;