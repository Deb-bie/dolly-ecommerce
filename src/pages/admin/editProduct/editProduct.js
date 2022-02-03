import React, { useState } from 'react';
import { db} from '../../../firebase/config';
import { doc, setDoc } from "firebase/firestore"; 
import Navbar from '../../../components/navbar/navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import './editProduct.css' 




const EditProduct = () => {

    const location = useLocation();

    const navigate = useNavigate();
    
    const [data, setData] = useState({
        title: location.state.title,
        description: location.state.description,
        stock: location.state.stock,
        retailPrice: location.state.retailPrice,
        wholesalePrice: location.state.wholesalePrice,
        errorMsg: "",
        success: "",
        loading: false
    });


    const { title, description, stock, retailPrice, wholesalePrice, errorMsg, success, loading} = data;


    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        }); 
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        setData({ ...data, success: null, errorMsg: null, loading: true });

        try {

            await setDoc(doc(db, 'Products', location.state.id), {
                title,
                description,
                stock,
                retailPrice,
                wholesalePrice,
                image: location.state.img,
                totalPrice: retailPrice,
                qty: 1,
            });

            setData({
                success: "Edit was successful",
                errorMsg: "Edit was not successful",
    
            });

            navigate('/productlist')

        } catch (error) {
            setData({
                ...data, errorMsg: error.message
           })
        }
    }



    return (
        <>
            <Navbar />

            <div className='edit'>
                <div className="edit-container">
                    <div className="header">
                        <h2>{title}</h2>
                        {/* .charAt(0).toUpperCase() + title.slice(1)}</h2> */}
                    </div>

                    {/* <div className='success'> */}
                        {/* {success ? navigate('/productlist') : null} */}
                        {/* {success ? <p>{success}</p> : null} */}
                    {/* </div>  */}

                    <div className='alert'>
                        {errorMsg ? <p>{errorMsg}</p> : null}
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
                                    placeholder={location.state.title}
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
                                    placeholder={location.state.description}
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
                                    placeholder={location.state.stock}
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
                                    placeholder={location.state.retailPrice}
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
                                    placeholder={location.state.wholesalePrice}
                                    onChange={handleChange} />
                            </div>
                            <br />

                            <div className='edit-button'>
                                <button type='submit' disabled={loading}>
                                    {/* <Link to='/productlist'> */}
                                        {/* {loading ? "Updating Products" : "Update"} */}
                                        update

                                    {/* </Link> */}
                                </button>
                            </div>
                        </form>
                    </div>                      
                </div>
            </div>
            
        </>
    )
}

export default EditProduct;



