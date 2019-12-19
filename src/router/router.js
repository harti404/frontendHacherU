import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import * as URL from './url';
import Home from '../components/screens/home/home';

const Shop = lazy(() => import('../components/screens/shops/shop'));
const Cart = lazy(() => import('../components/screens/cart/cart'));
const Product = lazy(() => import('../components/screens/product/product'));
const Checkout = lazy(() => import('../components/screens/checkout/checkout'));

export default (
    <switch className=" section-padding-100 clearfix">
        <Route exact path = "/" component = {Home}/>
        <Route exact path = { URL.SHOP } component = {Shop}/>
        <Route exact path = { URL.CART } component = {Cart}/>
        <Route exact path = { URL.PRODUCT } component = {Product}/>
        <Route exact path = { URL.CHECKOUT } component = {Checkout}/>
    
    </switch>
)

































/*import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom'; //  , Switch
import * as URL from './url';
import Home from '../components/screens/home/home';
const Shop = lazy(() => import('../components/screens/shops/shop'));
const Cart = lazy(() => import('../components/screens/cart/cart'));
const Product = lazy(() => import('../components/screens/product/product'));
const Checkout = lazy(() => import('../components/screens/checkout/checkout'));


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={URL.SHOP} component={Shop} />
        <Route exact path={URL.CART} component={Cart} />
        <Route exact path={URL.CART} component={Product} />
        <Route exact path={URL.CART} component={Checkout} />

    </Switch>
);*/