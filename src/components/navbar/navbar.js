import React, { useState } from 'react';
import './navbar.css';
import {PhoneIphoneOutlined, Facebook, Twitter, Instagram, WhatsApp, Search, PersonOutlined, KeyboardArrowDownOutlined, ShoppingCartOutlined, FavoriteOutlined, CloseOutlined, MenuOutlined} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.svg';     
import { auth, db } from '../../firebase/config'
import { signOut } from 'firebase/auth';






const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <header>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='navbar-contacts'>
                        <div className='contact'>
                            <PhoneIphoneOutlined style={{fontSize: "16px"}} />
                            &nbsp;
                            0240556824 
                        </div>

                        <div className='contact'>
                            <WhatsApp style={{fontSize: "16px"}} />
                            &nbsp;
                            0240556824 
                        </div>

                        <div className='contact'>
                            <WhatsApp style={{fontSize: "16px"}} />
                            &nbsp;
                            0240556824 
                        </div>

                    </div>

                    <div className='navbar-social'>
                        <Link to='#'  className='social'>
                            <Facebook style={{fontSize: "22px"}} />
                        </Link>
                        
                        

                        <Link to='#' className='social' >
                            <Twitter style={{fontSize: "22px"}} />
                        </Link>

                        <Link to='#' className='social'>
                            <Instagram style={{fontSize: "22px"}}/>
                        </Link>

                        <Link to='#' className='social'>
                            <WhatsApp style={{fontSize: "22px"}} />
                        </Link>
                    </div>

                </div>
                
            </nav>

  


            {/* SEARCH NAV */}


            <div className='search-nav'>
                <div className='search-container'>

                    <div className="navbar-icon" onClick={handleClick}>
                        <div className='menu'>
                            <MenuOutlined style={{fontSize: "30px"}}/> &nbsp;
                            Menu
                        </div>
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <CloseOutlined className='close'
                            style={{
                                color: "black",
                                marginLeft: "90%",
                                marginBottom: '1rem',
                            }}

                            onClick={handleClick}
                         />
                        <li className="nav-item">
                            <Link to='#' className="nav-link text">
                                <input placeholder="Search products" className='media-input' />
                                <Search
                                    style={{
                                    color: "blue",
                                }}
                                 />
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='#' className="nav-links" onClick={handleClick}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='#' className="nav-links" onClick={handleClick}>
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='#' className="nav-links" onClick={handleClick}>
                                Discovery
                            </Link>
                        </li>
                    </ul>

                    <div className='logo'>
                        <Link to='/'>
                            <img src={Logo} alt='logo' />
                        </Link>
                    </div>


                    <div className='search-bar'>
                        <input type="text" className='form-control input-search' placeholder='Search for products' />
                        <select className="select">
                            <option value="none" selected disabled hidden>Select Category</option>
                            <option>2 Piece set</option>
                            <option>Bags</option>
                            <option>Boots</option>
                            <option>Clothing</option>
                            <option >Free</option>
                        </select>
                        <div className='search'>
                            <Search />
                        </div>
                    </div>

                    <div className="profile-icon ">
                        {auth.currentUser ? (

                            <>
                                <div className="person">
                                    <Link to='/signin' className='profile'>
                                        {auth.currentUser.email}
                                    </Link>
                                </div>

                                <div className='cart'>
                                    <Link to='/cart' className='profile'>
                                        <ShoppingCartOutlined />
                                    </Link>
                                </div>

                                <div className='favorite'>
                                    <Link to='/addproducts' className='profile'>
                                        <FavoriteOutlined />
                                    </Link>
                                </div>
                            </>

                        ) : (
                            <>
                                <div className="person">
                                    <Link to='/signin' className='profile'>
                                        <PersonOutlined />
                                    </Link>
                                </div>

                                <div className='cart'>
                                    <Link to='/addproducts' className='profile'>
                                        <ShoppingCartOutlined />
                                    </Link>
                                </div>

                                <div className='favorite'>
                                    <Link to='#' className='profile'>
                                        <FavoriteOutlined />
                                    </Link>
                                </div>
                            </>
                        )}

                    </div>

                </div>
            </div>



            {/* Home NAV */}

            <div className='home-nav'>
                <div className='home-container'>
                    <div className='home-items'>
                        <Link to='/' className='item active'>Home</Link>
                    </div>

                    <div className='home-items'>
                        <div className='dropdown'>
                            <Link to='#' className='dropbtn'>
                                Clothing
                                <KeyboardArrowDownOutlined />
                            </Link>
                            <div className='dropdown-content'>
                                <Link className='a' to='#'>2 Piece Dresses</Link>
                                <Link className='a' to='#'>Club Dresses</Link>
                                <Link className='a' to='#'>2 Piece Dresses</Link>
                                <Link className='a' to='#'>2 Piece Dresses</Link>
                            </div>
                        </div>
                    </div>


                    <div className='home-items'>
                        <div className='dropdown'>
                            <Link to='#' className='dropbtn'>
                                Shoes
                                <KeyboardArrowDownOutlined />
                            </Link>
                            <div className='dropdown-content'>
                                <Link className='a' to='#'>Heels</Link>
                                <Link className='a' to='#'>Slides</Link>
                                <Link className='a' to='#'>Sneakers</Link>
                            </div>
                        </div>
                    </div>


                    <div className='home-items'>
                        <Link to='#' className='item'>Bags</Link>
                    </div>

                    <div className='home-items'>
                        <Link to='#' className='item'>Wholesaling</Link>
                    </div>

                    <div className='home-items'>
                        <Link to='#' className='item'>About Us</Link>
                    </div>

                </div>

            </div>
        </header>

        
    )

}


export default Navbar;

