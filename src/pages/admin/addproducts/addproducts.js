import React , { useState } from 'react';
import {useNavigate} from 'react-router';
import { db, storage} from '../../../firebase/config';
import { addDoc, collection } from "firebase/firestore"; 
import { ref, getDownloadURL, uploadBytes} from 'firebase/storage';
import Navbar from '../../../components/navbar/navbar';
import "./addproducts.css"






const AddProducts = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        title: "",
        description: "",
        wholesalePrice: Number(),
        retailPrice: Number(),
        stock: Number(),
        uploadErrorMsg: "",
        success: "",
        loading: false,
        user: "",
        totalPrice: Number(),
        qty: 1,
    });

    const [image, setImage] = useState('')

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        }); 
    }

    const { title, description, wholesalePrice, retailPrice, stock, loading, success, uploadErrorMsg} = data;


    const handleSubmit = async (e) => {
        e.preventDefault();

        setData({ ...data, success: null, uploadErrorMsg: null, loading: true });

        setImage(null)

        try {

            const storageRef = ref(storage, `product-images/${image.name}`);
    
            const snap = await uploadBytes(storageRef, image);
    
            const url = await getDownloadURL(ref(storage, snap.ref.fullPath))

            await addDoc(collection(db, "Products"), {
                title,
                description,
                wholesalePrice,
                retailPrice,
                stock,
                image: url,
                path: snap.ref.fullPath,
                totalPrice: retailPrice,
                qty: 1,
            });

            setData({
                ...data, 
                title: "", 
                description: "",
                wholesalePrice: Number(),
                retailPrice: Number(),
                stock:  Number(),
                success: "Product Added",
                uploadErrorMsg: "",
                loading: false,
                totalPrice: Number(),
                qty: 1,
    
            });
    
            setImage(null);

            navigate('/')

        } catch (error) {
            setData({
                ...data, uploadErrorMsg: error.message
            })
        }
    }



    return (
        <>
            <Navbar />

            <div className='edit'>
                <div className="edit-container">
                    <div className="header">
                        <h2>Add Product</h2>
                    </div>

                    {/* <div className='success'> */}
                        {/* {success ? navigate('/productlist') : null} */}
                        {success ? <p>{success}</p> : null}
                    {/* </div>  */}

                    <div className='alert'>
                        {uploadErrorMsg ? <p>{uploadErrorMsg}</p> : null}
                    </div>

                    <div className='form-body'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group' id="title">
                                <label>Product Title</label>
                                <br />
                                <input 
                                    type="text" required 
                                    value={title}
                                    name="title"
                                    onChange={handleChange} />
                            </div>
                            <br />

                            <div className='form-group' id="description">
                                <label>Product Description</label>
                                <br />
                                <input 
                                    type="text" required 
                                    value={description}
                                    name="description"
                                    onChange={handleChange} />
                            </div>
                            <br/>

                            <div className='form-group' id="stock">
                                <label>Stock</label>
                                <br />
                                <input 
                                    type="text" required 
                                    value={stock}
                                    name="stock"
                                    onChange={handleChange} />
                            </div>
                            <br />


                            <div className='form-group' id="retailPrice">
                                <label>Retail Price</label>
                                <br />
                                <input 
                                    type="text" required 
                                    value={retailPrice}
                                    name="retailPrice"
                                    onChange={handleChange} />
                            </div>
                            <br />

                            <div className='form-group' id="wholesalePrice">
                                <label>Wholesale Price</label>
                                <br />
                                <input 
                                    type="text" required 
                                    value={wholesalePrice}
                                    name="wholesalePrice"
                                    onChange={handleChange} />
                            </div>
                            <br />

                            <div className='form-group' id="upload">
                                <label>Upload Product Image</label>
                                <br />
                                <input 
                                    className="upload"
                                    type="file" required 
                                    id='file'
                                    accept='image/*'
                                    onChange={(e) => setImage(e.target.files[0])} />
                            </div>
                            <br />


                            <div className='edit-button'>
                                <button type='submit' disabled={loading}>
                                    {loading ? "Adding Product" : "Add Product"}
                                </button>
                            </div>
                        </form>
                    </div>                      
                </div>
            </div>
            </>
        )
}


export default AddProducts;


