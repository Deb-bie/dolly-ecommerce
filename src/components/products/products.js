import React from 'react';
import IndividualProduct from './individualproduct';
import './products.css'



const Products = ({ products }) => {
  return (
    <div className='products-box'>
        {products.map((individualproduct) => (
            <IndividualProduct key={individualproduct.ID} individualproduct={individualproduct} /> 
        ))}
    </div>
  )
};

export default Products;
