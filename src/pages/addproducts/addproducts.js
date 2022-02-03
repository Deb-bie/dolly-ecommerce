import React, { useState } from 'react';
import { Form, Button, Card, Container} from 'react-bootstrap';
import {useNavigate} from 'react-router';
import { db, storage} from '../../firebase/config';
import { addDoc, collection } from "firebase/firestore"; 
import { ref, getDownloadURL, uploadBytes} from 'firebase/storage';
import Navbar from '../../components/navbar/navbar';






const AddProducts = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        title: "",
        description: "",
        wholesalePrice: '',
        retailPrice: '',
        stock: '',
        uploadErrorMsg: "",
        success: "",
        loading: false,
        user: ""
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

        setImage(null);

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
                path: snap.ref.fullPath
            });
    
            setData({
                ...data, 
                title: "", 
                description: "",
                wholesalePrice: "",
                retailPrice: "",
                stock: "",
                success: "Product Added",
                uploadErrorMsg: "",
                loading: false,
    
            });
    
            setImage(null);

        } catch (error) {
            setData({
                 ...data, uploadErrorMsg: error.message
            })
        }        
    }


    return (

        <>

            <Navbar />

            <div className='add'>


            {/* <Sidebar /> */}

            <Container 
            className="align-items-center justify-content-center" 
            style={{ minHeight: "100%",
            flex: "2"
            }}>

                <div className="w-100" style={{ maxWidth: "400px",
                marginTop: "20px"
                }}>

                    <Card>
                        <Card.Body>

                        {success ? <p>{success}</p> : null} 

                        {uploadErrorMsg ? <p>{uploadErrorMsg}</p> : null}
                            <h2 className="text-center mb-4">Add Products</h2>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Product Title</Form.Label>
                                    <Form.Control 
                                    type="text" required 
                                    value={title}
                                    name="title"
                                    onChange={handleChange}></Form.Control>
                                </Form.Group>


                                <Form.Group>
                                    <Form.Label>Product Description</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    required 
                                    value={description}
                                    name="description"
                                    onChange={handleChange}></Form.Control>
                                </Form.Group>


                                <Form.Group>
                                    <Form.Label>Wholesale Price</Form.Label>
                                    <Form.Control 
                                    type="number" 
                                    required 
                                    value={wholesalePrice}
                                    name="wholesalePrice"
                                    onChange={handleChange}></Form.Control>
                                </Form.Group>


                                <Form.Group>
                                    <Form.Label>Retail Price</Form.Label>
                                    <Form.Control 
                                    type="number" 
                                    required 
                                    value={retailPrice}
                                    name="retailPrice"
                                    onChange={handleChange}></Form.Control>
                                </Form.Group>


                                <Form.Group>
                                    <Form.Label>Number in Stock</Form.Label>
                                    <Form.Control 
                                    type="number" 
                                    required 
                                    value={stock}
                                    name="stock"
                                    onChange={handleChange}></Form.Control>
                                </Form.Group>


                                <Form.Group>
                                    <Form.Label>Upload Product Image</Form.Label>
                                    <Form.Control 
                                    type="file"
                                    id='file' 
                                    required 
                                    accept='image/*'
                                    onChange={(e) => setImage(e.target.files[0])}></Form.Control>
                                </Form.Group>



                                


                                <br />

                                <Button 
                                className="w-100" 
                                type="submit" disabled={loading}
                                >
                                    {loading ? "Adding Products" : "Add Products"}
                                </Button>
                            </Form>
                        </Card.Body>

                    </Card>

                    

                </div>
            </Container>



            </div>

            
        
        </>




        
    )
}


export default AddProducts;





