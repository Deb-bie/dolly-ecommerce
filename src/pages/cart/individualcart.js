import React from 'react';
import './cart.css'
import {Link } from 'react-router-dom';
import {Remove, Add} from '@material-ui/icons';
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db, auth} from '../../firebase/config';



const IndividualCart = ({ individualcart}) => {


    const handleProductIncrease = async (e) => {
        individualcart.qty = individualcart.qty + 1;

        individualcart.totalPrice = individualcart.qty*individualcart.retailPrice;

        await updateDoc(doc(db, 'users', `${auth.currentUser.uid}`, 'cart', `${individualcart.id}`), {
            qty: individualcart.qty,
            totalPrice: individualcart.totalPrice
        })
    }



    const handleProductDecrease = async(e) => {
        individualcart.qty = individualcart.qty - 1;
        individualcart.totalPrice = individualcart.qty*individualcart.retailPrice;

        await updateDoc(doc(db, 'users', `${auth.currentUser.uid}`, 'cart', `${individualcart.id}`), {
            qty: individualcart.qty,
            totalPrice: individualcart.totalPrice
        })
    }


    const handleRemove = async(e) => {
        await deleteDoc(doc(db, 'users', `${auth.currentUser.uid}`, 'cart', `${individualcart.id}`))

    }

    

    return (
        <div className='main-cart'>
            <div className='product-img'>
                <img src={individualcart.img} alt='' />
            </div>

            <div className='product-text title'>{individualcart.title}</div>
            <div className='product-text retail'>Retail price: <span>GH&#8373;</span>{individualcart.retailPrice}</div>
            <div className='product-text wholesale'>Wholesale price: <span>GH&#8373;</span>{individualcart.wholesalePrice}</div>
            <span>Quantity</span>
            <div className='quantity-box'>
                <div className="minus" onClick={handleProductDecrease}>
                    <Remove /> 
                </div>
                <div> &nbsp;  &nbsp; {individualcart.qty}  &nbsp;  &nbsp;</div>
                <div className="add" onClick={handleProductIncrease}>
                    <Add />
                </div>
            </div>

            <div>Price : <span>GH&#8373;</span>{individualcart.totalPrice}</div>

            <div className='delete-btn' onClick={handleRemove}>
                <Link to='#' className="cart">REMOVE</Link>
            </div>
        
        </div> 
    )
    };

export default IndividualCart;























































