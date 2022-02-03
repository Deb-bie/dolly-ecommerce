import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth, db} from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore"; 
import './signin.css';
import Navbar from '../../components/navbar/navbar.js'



const Signin = () => {
  
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
        errorMsg: [],
        loading: false,
    });

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        }); 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setData({ ...data, errorMsg: null, loading: true });

        try {
            const signin = await signInWithEmailAndPassword(auth, email, password);

            await updateDoc(doc(db, 'users', signin.user.uid), {
                isOnline: true,
            });

            setData({
                email: "",
                password: "",
                errorMsg: "",
                loading: false,

            });

            navigate('/')
            
        } catch (error) {
            setData({ ...data,errorMsg: error.message,  loading: false });
        }    
    }



    const { email, password, errorMsg, loading } = data;


    return (
        <>

        <Navbar />


        <div className="signin">
            <div className="signin-container">
                <div className='header'>
                    <h2>Sign In</h2>
                </div>

                <div className='alert'>
                    {errorMsg ? <p>{errorMsg}</p> : null}
                </div>

                

                <div className='form-body'>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group" id="email">
                            <label>Email</label>
                            <br />
                            <input 
                                type="email" required
                                value={email}
                                name="email"
                                onChange={handleChange} />
                        </div>
                        <br />


                        <div className="form-group" id="password">
                            <label>Password</label>
                            <br />
                            <input 
                                type="password" required
                                value={password}
                                name="password"
                                onChange={handleChange} />
                        </div>
                        <br />

                        <div className='signin-button'>
                            <button type='submit' disabled={loading}>
                                Sign In
                            </button>
                        </div>

                    </form>


                    

                    <div className="already">
                        Don't have an account? <Link to='/signup'>Sign Up </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signin;



