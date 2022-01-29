import React from 'react';
import './productDescription.css';
import Navbar from '../../components/navbar/navbar'
import { useLocation, useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase/config';





const ProductDescription = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const handleAddToCart =() => {
        if (auth.currentUser !== null){
          navigate('/cart')
        }
        else{
          navigate('/signup')
        }
      }


    return (
        <>
            <Navbar />
            <div className='description'>
                <h5 className='title'>Product Details</h5>

                < div className='description-container'>
                    <div className='product-image'>
                        <img alt="image" src={location.state.img}/>
                    </div>

                    <div className='product-details'>
                        <div className='title'>
                            <p>{location.state.title}</p>
                        </div>

                        <div className='des'>
                            <p>{location.state.description}</p>
                        </div>
                        <br />

                        <div>
                            <p>Retail price: <span>GH&#8373;</span>{location.state.retailPrice}</p>
                        </div>
                        <br />

                        <div>
                            <p>Wholesale price: <span>GH&#8373;</span>{location.state.wholesalePrice}</p>
                        </div>
                        <br />

                        <div className='sizes'>
                            <p>Size: </p>
                            <select className='size-select'>
                                <option value='none' selected disabled hidden>Select Size</option>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                        <br />

                        <div className='des-add'>
                            <button onClick={handleAddToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default ProductDescription;




