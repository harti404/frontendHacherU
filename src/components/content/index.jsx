import React from 'react';

const Card = (props) => {
    return (
        <div className="amado-pro-catagory clearfix" > 
                <div className="single-products-catagory clearfix" style={{position: "absolute", left: "0%", top: "0px"}}>
                    <a href="shop.html">
                        <img src="img/bg-img/1.jpg" alt=""/>
                        
                        <div className="hover-content">
                            <div className="line"/>
                            <p>From $180</p>
                            <h4>Modern Chair</h4>
                        </div>
                    </a>
                </div>

                
                <div className="single-products-catagory clearfix" style={{position: "absolute", left: "0%", top: "585px"}}>
                    <a href="shop.html">
                        <img src="img/bg-img/2.jpg" alt=""/>
                        
                        <div className="hover-content">
                            <div className="line"/>
                            <p>From $180</p>
                            <h4>Minimalistic Plant Pot</h4>
                        </div>
                    </a>
                </div>

                
                <div className="single-products-catagory clearfix" style={{position: "absolute", left: "0%", top: "1417px"}}>
                    <a href="shop.html">
                        <img src="img/bg-img/3.jpg" alt=""/>
                        
                        <div className="hover-content">
                            <div className="line"/>
                            <p>From $180</p>
                            <h4>Modern Chair</h4>
                        </div>
                    </a>
                </div>

                
                <div className="single-products-catagory clearfix" style={{position: "absolute", left: "0%", top: "1938px"}}>
                    <a href="shop.html">
                        <img src="img/bg-img/4.jpg" alt=""/>
                        
                        <div className="hover-content">
                            <div className="line"/>
                            <p>From $180</p>
                            <h4>Night Stand</h4>
                        </div>
                    </a>
                </div>

                
                <div className="single-products-catagory clearfix" style={{position: "absolute", left: "0%", top: "2459px"}}>
                    <a href="shop.html">
                        <img src="img/bg-img/5.jpg" alt=""/>
                        
                        <div className="hover-content">
                            <div className="line"/>
                            <p>From $18</p>
                            <h4>Plant Pot</h4>
                        </div>
                    </a>
                </div>

                

            </div>
    );
}

export default Card;