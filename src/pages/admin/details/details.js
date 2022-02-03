import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './details.css'




const Details = () => {

    const location = useLocation();

    const navigate = useNavigate();

    // image = location.state.img,
    const title = location.state.title;
    // const description = location.state.description,
    // const stock = location.state.stock,
    // retailPrice = location.state.retailPrice,
    // wholesalePrice = location.state.wholesalePrice,
    // id = location.state.id,


    // const handleEdit = () => {
    //     navigate("/productlist/" + location.state.id, {
    //         state: {
    //           id: location.state.id,
    //         //   img: image,
    //           title: location.state.title,
    //         //   description: description,
    //         //   stock: stock,
    //         //   retailPrice: retailPrice,
    //         //   wholesalePrice: wholesalePrice,
    //         }
    //       })   
    // }
    
    

    
    return (
        <div className="details">
        <div className='app-wrapper'>
            <div className='header'>
                <h1>Contact Details</h1>
            </div>

            <div className='details-container'>

                <div className='details'>
                    {/* <p>{id}</p> */}
                    <p className='label'>Full Name:</p>
                    <h2>{title}</h2>
                </div>

                <br /><br />

                <div className='details'>
                    <p className='label'>Phone Number:</p>
                    <h2>{title}</h2>
                </div>

            </div>

            <br /><br />

            <div className='update-button'>
                    <input type='submit' value='Update' className='submit' 
                    // onClick={handleEdit}
                     />
            </div>

        </div>
        
    </div>
    )
}


export default Details


