import React from 'react';

const CardShop = (props) => {
    return (
        <div className="row">

            <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                <div className="single-product-wrapper">

                    <div className="product-img">
                        <img src="img/product-img/product1.jpg" />

                        <img className="hover-img" src="img/product-img/product2.jpg" />
                    </div>

                    <div className="product-description d-flex align-items-center justify-content-between">

                        <div className="product-meta-data">
                            <div className="line" />
                            <p className="product-price">$180</p>
                            <a href="product-details.html">
                                <h6>Modern Chair</h6>
                            </a>
                        </div>

                        <div className="ratings-cart text-right">
                            <div className="ratings">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                            </div>
                            <div className="cart">
                                <a href="cart.html" data-toggle="tooltip" data-placement="left" data-original-title="Add to Cart">
                                    <img src="img/core-img/cart.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                <div className="single-product-wrapper">

                    <div className="product-img">
                        <img src="img/product-img/product2.jpg" />

                        <img className="hover-img" src="img/product-img/product3.jpg" />
                    </div>

                    <div className="product-description d-flex align-items-center justify-content-between">

                        <div className="product-meta-data">
                            <div className="line" />
                            <p className="product-price">$180</p>
                            <a href="product-details.html">
                                <h6>Modern Chair</h6>
                            </a>
                        </div>

                        <div className="ratings-cart text-right">
                            <div className="ratings">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                            </div>
                            <div className="cart">
                                <a href="cart.html" data-toggle="tooltip" data-placement="left" data-original-title="Add to Cart">
                                    <img src="img/core-img/cart.png" />

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                <div className="single-product-wrapper">

                    <div className="product-img">
                        <img src="img/product-img/product3.jpg" />

                        <img className="hover-img" src="img/product-img/product4.jpg" />
                    </div>


                    <div className="product-description d-flex align-items-center justify-content-between">

                        <div className="product-meta-data">
                            <div className="line" />
                            <p className="product-price">$180</p>
                            <a href="product-details.html">
                                <h6>Modern Chair</h6>
                            </a>
                        </div>

                        <div className="ratings-cart text-right">
                            <div className="ratings">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                            </div>
                            <div className="cart">
                                <a href="cart.html" data-toggle="tooltip" data-placement="left" data-original-title="Add to Cart">
                                    <img src="img/core-img/cart.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                <div className="single-product-wrapper">

                    <div className="product-img">
                        <img src="img/product-img/product4.jpg" />

                        <img className="hover-img" src="img/product-img/product5.jpg" />
                    </div>


                    <div className="product-description d-flex align-items-center justify-content-between">

                        <div className="product-meta-data">
                            <div className="line" />
                            <p className="product-price">$180</p>
                            <a href="product-details.html">
                                <h6>Modern Chair</h6>
                            </a>
                        </div>
                        <div className="ratings-cart text-right">
                            <div className="ratings">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                            </div>
                            <div className="cart">
                                <a href="cart.html" data-toggle="tooltip" data-placement="left" data-original-title="Add to Cart">
                                    <img src="img/core-img/cart.png" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardShop;