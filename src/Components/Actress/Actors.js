import React, { useEffect, useState } from 'react';
import Amount from '../Amount/Amount';
import Cart from '../cart/Cart';
import './Actors.css'

const Actors = () => {
    const [actors,setActors]=useState([])
    const [carts,setCarts]=useState([])
    useEffect(()=>{
        fetch('fakeData.JSON')
        .then(res=>res.json())
        .then(data=>setActors(data))
},[])
const evenHandlar=actor=>{
    const newCarts=[...carts,actor];
    setCarts(newCarts)
    
}
    return (
        
             <div>
            <div className="d-flex row">
                <div className="col-md-9">
                <div className="actors-card">
                   {
                       actors.map(actor=><Cart
                        key={actor.contact}
                         actor={actor}
                          evenhandlar={evenHandlar}
                         ></Cart>)
                   }
                   </div>
                </div>
                <div className="col-md-3">
                <Amount
                
                 carts={carts}
                 ></Amount>
                 
                </div>
            </div>
        </div>
        
       
    );
};

export default Actors;