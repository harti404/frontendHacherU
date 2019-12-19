import React from 'react';

import Catagories from '../catagories';
import Catalog from '../catalog/catalog';
import SidebarShop from '../catalog/sidebar_shop';
import CardShop from '../catalog/card_shop';
import SliderShop from '../catalog/slider_page';



const Shop = (props) => {
    return (
        <React.Fragment>
            <Catagories />
            <Catalog>
                <SidebarShop />
                <CardShop />
                <SliderShop />
            </Catalog>
            {props.children}
        </React.Fragment>

    );
}

export default Shop;