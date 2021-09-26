import React from 'react';
import NameShow from '../NameShow/NameShow';
import './Amount.css'


const Amount = (props) => {

    const {carts}=props
    
    
    let totalQuantity=0
    let total=0;
    for(const actors of carts){
        if(!actors.quantity){
            actors.quantity=1
        }
        total=total+actors.salary*actors.quantity;
        totalQuantity=totalQuantity+actors.quantity;
        

    }
    return (
        <div>
            <div className="added">
            <h3>Actors Added <i className="fas fa-user-plus ex-st"></i>  {totalQuantity}</h3>
            <h2>Total Cost: ${total}</h2>
            {
                carts.map(cart=><NameShow
                     key={cart.contact}
                     cart={cart}
                     ></NameShow>)
            }
            </div>
            
        </div>
    );
};

export default Amount;