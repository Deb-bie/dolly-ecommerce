import React from 'react';
import IndividualCart from './individualcart';
import './cart.css'



const Carts = ({ cart }) => {
  return cart.map((individualcart) => (
            <IndividualCart key={individualcart.ID} individualcart={individualcart}/> 
        ))
};

export default Carts;


















