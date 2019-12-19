import React from 'react';

const Catalog = (props) => {
    return (
        <div className="amado_product_area section-padding-100">
            <div className="container-fluid">
                {props.children}
            </div>
        </div>
    );
}

export default Catalog;