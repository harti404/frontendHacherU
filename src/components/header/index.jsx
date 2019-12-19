import React from 'react';
import Logo from './logo';
import Navigation from './navigation';
import ButtonsNavigation from './Buttons/button_navigation';
import CloseNavigation from './Buttons/close_navigation';
import CartNavigation from './cart_navigation';
import Sosial from './social_network';


const Header = (props) => {
    return (
        <header className="header-area clearfix">
            <Logo/>
            <Navigation/>
            <ButtonsNavigation />
            <CloseNavigation />
            <CartNavigation />
            <Sosial />
        </header>
        
    );
}

export default Header;
