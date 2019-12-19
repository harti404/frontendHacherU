import React from 'react';

const MainConteiner = (props) => {
    return (
        <div className="main-content-wrapper d-flex clearfix">
            {props.children}
        </div>
    );
}

export default MainConteiner;