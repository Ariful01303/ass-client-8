import React from 'react';
import './NameShow.css'
const NameShow = (props) => {

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center border ex-style">
            <img className="w-50px" src={props.cart.photo} alt="" />
            <p>{props.cart.name}</p>
            </div>
            
        </div>
    );
};

export default NameShow;