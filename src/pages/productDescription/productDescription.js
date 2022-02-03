import React from 'react';
import './productDescription.css';
import Navbar from '../../components/navbar/navbar'
import { useLocation, useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase/config';
import { collection, addDoc, doc , updateDoc} from "firebase/firestore"; 






const ProductDescription = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const title = location.state.title;
    const description = location.state.description;
    const wholesalePrice = location.state.wholesalePrice;
    const retailPrice = location.state.retailPrice;
    const stock = location.state.stock;
    const img = location.state.img;
    const qty = location.state.qty;
    const totalPrice = location.state.totalPrice;


    const handleAddToCart = async() => {
        if (auth.currentUser !== null){

            const ref = await addDoc(collection(db, 'users', `${auth.currentUser.uid}`, 'cart'),{
                title,
                description,
                wholesalePrice,
                retailPrice,
                stock,
                img,
                qty,
                totalPrice,
            })

            await updateDoc(doc(db, 'users', `${auth.currentUser.uid}`, 'cart', `${ref.id}`), {
                id: ref.id
            })

          navigate('/cart');

          return ref;

         
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
                        <img alt="product" src={location.state.img}/>
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




