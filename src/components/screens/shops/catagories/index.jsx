import React from 'react';

const Catagories = (props) => {
    return (
        <div className="shop_sidebar_area">

            
            <div className="widget catagory mb-50">
                
                <h6 className="widget-title mb-30">Catagories</h6>

                <div className="catagories-menu">
                    <ul>
                        <li className="active"><a href="#">Chairs</a></li>
                        <li><a href="#">Beds</a></li>
                        <li><a href="#">Accesories</a></li>
                        <li><a href="#">Furniture</a></li>
                        <li><a href="#">Home Deco</a></li>
                        <li><a href="#">Dressings</a></li>
                        <li><a href="#">Tables</a></li>
                    </ul>
                </div>
            </div>

            
            <div className="widget brands mb-50">
                
                <h6 className="widget-title mb-30">Brands</h6>

                <div className="widget-desc">
                    
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="amado"/>
                        <label className="form-check-label" for="amado">Amado</label>
                    </div>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="ikea"/>
                        <label className="form-check-label" for="ikea">Ikea</label>
                    </div>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="furniture" />
                        <label className="form-check-label" for="furniture">Furniture Inc</label>
                    </div>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="factory" />
                        <label className="form-check-label" for="factory">The factory</label>
                    </div>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="artdeco" />
                        <label className="form-check-label" for="artdeco">Artdeco</label>
                    </div>
                </div>
            </div>

            
            <div className="widget color mb-50">
                
                <h6 className="widget-title mb-30">Color</h6>

                <div className="widget-desc">
                    <ul className="d-flex">
                        <li><a href="#" className="color1"></a></li>
                        <li><a href="#" className="color2"></a></li>
                        <li><a href="#" className="color3"></a></li>
                        <li><a href="#" className="color4"></a></li>
                        <li><a href="#" className="color5"></a></li>
                        <li><a href="#" className="color6"></a></li>
                        <li><a href="#" className="color7"></a></li>
                        <li><a href="#" className="color8"></a></li>
                    </ul>
                </div>
            </div>

            
            <div className="widget price mb-50">
                
                <h6 className="widget-title mb-30">Price</h6>

                <div className="widget-desc">
                    <div className="slider-range">
                        <div data-min="10" data-max="1000" data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="10" data-value-max="1000" data-label-result="">
                            <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                            <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{left: "0%"}}></span>
                            <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{left: "100%"}}></span>
                        <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: "0%", width: "100%"}}></div></div>
                        <div className="range-price">$10 - $1000</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catagories;