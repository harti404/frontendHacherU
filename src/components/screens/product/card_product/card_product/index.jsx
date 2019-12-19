import React from 'react';

const CardProduct = (props) => {
  return (

    <div className="row" >
      {props.children}
    </div>
  );
}

export default CardProduct;