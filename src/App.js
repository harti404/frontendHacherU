import React from 'react';

import Header from './components/header';
import Logo from './components/header/logo';
import MainConteiner from './components/main';
import Navigation from './components/header/navigation';
import Sosial from './components/header/social_network';
import CartNavigation from './components/header/cart_navigation';
import ButtonsNavigation from './components/header/Buttons/button_navigation';
import CloseNavigation from './components/header/Buttons/close_navigation';
import Subscribe from './components/subscribe';
import Footer from './components/footer/footer';
import Search from './components/search';
import Cart from './components/screens/cart/cart';
import Checkout from './components/screens/checkout/checkout';
import Product from './components/screens/product/product';
import { Route } from 'react-router';
import Shop from './components/screens/shops/shop';
import theRoutes from './router/router';


function App(props) {
  return (
    <React.Fragment>
      <Search />
      <MainConteiner>
          <Header>
              <Logo />
              <Navigation />
              <ButtonsNavigation />
              <CloseNavigation />
              <CartNavigation />
              <Sosial />
          </Header>
        {props.children}

      </MainConteiner>
      
      <Subscribe />
      <Footer />
    </React.Fragment>
  );
}

export default App;