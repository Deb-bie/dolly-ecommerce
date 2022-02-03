import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import { auth, db } from '../../firebase/config';
import { collection, onSnapshot} from "firebase/firestore";
import './cart.css';
import Carts from './carts.js';




const Cart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'users', `${auth.currentUser.uid}`, 'cart'),
        (snapshot) => {
            setCart(snapshot.docs.map((doc) => 
                doc.data()
            ))
        });
        return unsub;
    }, []);



    const q = cart.map((y) => {
        return y.qty;
    })


    // reducing the quantity in a single value
    const reducerofQ = (accumulator, currentValue) => accumulator+currentValue;

    const totalQty = q.reduce(reducerofQ, 0);

    const p = cart.map((t) => {
        return t.totalPrice;
    })

    // reducing the price in a single value
    const reducerofP = (accumulator, currentValue) => accumulator+currentValue;

    const totalP = p.reduce(reducerofP, 0);



    return (
        <>
        <Navbar />

        <div>
            {cart.length > 0 && (
                <div className='container-fluid'>
                    <h1 className='product-title'>Cart</h1>
                    <div className='products-box'>
                        <Carts cart={cart} />
                    </div>

                    <div>
                        Quantity: {totalQty}
                        <br/>
                      total Price: {totalP}
                        
                    </div>
                </div>
            )}

            {cart.length < 1 && ( 
                <div className='container-fluid'>
                    <h1 className='product-title'>Cart</h1>
                    <div className='container'>Your cart is empty</div>
                </div>
            )} 
        </div>
        </>
    );
};

export default Cart;
