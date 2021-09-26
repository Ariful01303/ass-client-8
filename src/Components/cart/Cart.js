import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name,role,age,photo,nationality,salary}=props.actor;
    return (
        <div className="carts">
            <img src={photo} alt="" />
          <p>Name: {name}</p>
            <p>Role Name: {role}</p>
            <p>Age: {age}</p>
            <p>Nationality: {nationality}</p>
            <h3>Salary: {salary}</h3>
            <button onClick={()=>props.evenhandlar(props.actor)}className="btn btn-danger extra-style"> <i className="fas fa-plus"></i> ADD</button>
         </div>
       
    );
};

export default Cart;