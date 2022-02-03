import React from 'react';
import {Link, useNavigate} from 'react-router-dom'





const IndividualProduct = ({ individualproduct }) => {

  const navigate = useNavigate();


  const handleClick = () => {

    console.log(individualproduct.id)


    navigate('/productDescription/' + individualproduct.id, {
      state: {
        id: individualproduct.id,
        img: individualproduct.image,
        title: individualproduct.title,
        description: individualproduct.description,
        stock: individualproduct.stock,
        retailPrice: individualproduct.retailPrice,
        wholesalePrice: individualproduct.wholesalePrice,
        qty: individualproduct.qty,
        totalPrice: individualproduct.totalPrice,
      }
    })
  }


  


 



  return (
    <div className='product' onClick={handleClick}>
        <div className='product-img'>
            <img src={individualproduct.image} alt=''/>
        </div>

        <div className='product-text title'>{individualproduct.title}</div>
        <div className='product-text retail'>Retail price: <span>GH&#8373;</span>{individualproduct.retailPrice}</div>
        <div className='product-text wholesale'>Wholesale price: <span>GH&#8373;</span>{individualproduct.wholesalePrice}</div>
        <div className='cart-btn'>
          <Link to='#' className="cart">ADD TO CART</Link>
        </div>

    </div>
  );
};

export default IndividualProduct;
