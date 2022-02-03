import React, { useState, useEffect} from 'react';
import Products from '../products/products';
import { db } from '../../firebase/config';
import { collection, onSnapshot } from "firebase/firestore";
import './main.css';




const Main = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "Products"), 
        (snapshot) => {

            setProducts(snapshot.docs.map((doc) => doc.data()))
        });

        return unsub;
    }, []);


    return (
        <div>
            {products.length > 0 && (
                <div className='container-fluid'>
                    <h1 className='product-title'>Products</h1>
                    <div className='products-box'>
                        <Products products={products} />
                    </div>
                </div>
            )}

            {products.length < 1 && ( 
                <div className='container-fluid'>
                    <h1 className='product-title'>Products</h1>
                    <div className='container'>Please Wait........</div>
                </div>


            )} 
        </div>
    );
};

export default Main;
