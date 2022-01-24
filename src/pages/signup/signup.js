import React, { useState } from 'react';
import { Form, Button, Card, Container,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db} from '../../firebase/config';
import { collection, addDoc, setDoc, Timestamp, doc } from "firebase/firestore"; 
import './signup.css';
import Navbar from '../../components/navbar/navbar.js'



const Signup = () => {
  
    const navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
        errorMsg: [],
        successMsg: "",
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

        if (password !== passwordConfirm) {
            setData({ ...data, errorMsg: "Passwords do not match.", loading: true });
        }

        else if (password != /^[A-Za-z]\w{7,14}$/) {
            setData({ ...data, errorMsg: "Passwords should be equal to 6 letters.", loading: true});
        }


        try {
            const signup = await createUserWithEmailAndPassword(auth, email, password);

            await setDoc(doc(db, 'users', signup.user.uid), {
                uid: signup.user.uid,
                username,
                email, 
                password, 
                passwordConfirm, 
                createdAt: Timestamp.fromDate(new Date()),
                isOnline: true,
            });

            setData({
                username,
                email: "",
                password: "",
                passwordConfirm: "",
                errorMsg: "",
                loading: false,

            });

            navigate('/')
            
        } catch (error) {
            setData({ ...data,errorMsg: error.message,  loading: false });
        }

        
    }



    const {username, email, password, passwordConfirm, errorMsg, successMsg, loading } = data;


    return (
        <>

        <Navbar />


        <div className="signup">
            <div className="signup-container">
                <div className='header'>
                    <h2>Sign Up</h2>
                </div>

                <div className='alert'>
                    {errorMsg ? <p>{errorMsg}</p> : null}
                </div>

                

                <div className='form-body'>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group" id="email">
                            <label>Username</label>
                            <br />
                            <input 
                                type="text" required
                                value={username}
                                name="username"
                                onChange={handleChange} />
                        </div>
                        <br />

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

                        <div className="form-group" id="password">
                            <label>Confirm Password</label>
                            <br />
                            <input 
                                type="password" required
                                value={passwordConfirm}
                                name="passwordConfirm"
                                onChange={handleChange} />
                        </div>
                        <br />

                        <div className='signup-button'>
                            <button type='submit' disabled={loading}>
                                Sign Up
                            </button>
                        </div>

                    </form>


                    

                    <div className="already">
                        Already have an account? <Link to='/signin'>Log In </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup;



