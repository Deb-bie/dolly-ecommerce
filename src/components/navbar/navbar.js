import React, { useState } from 'react';
import './navbar.css';
import {PhoneIphoneOutlined, Facebook, Twitter, 
        Instagram, WhatsApp, Search, PersonOutlined, 
        ShoppingCartOutlined, FavoriteOutlined, CloseOutlined, MenuOutlined
    } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.svg'







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



            <div className='search-nav'>
                <div className='search-container'>

                    <div className="navbar-icon" onClick={handleClick}>
                        {click ? <CloseOutlined style={{fontSize: "30px"}} /> : <MenuOutlined style={{fontSize: "30px"}}/>}
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to='#' activeClass="active" className="nav-link" onClick={handleClick}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='#' activeClass="active" className="nav-link" onClick={handleClick}>
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='#' activeClass="active" className="nav-link" onClick={handleClick}>
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='#' activeClass="active" className="nav-link" onClick={handleClick}>
                                Discovery
                            </Link>
                        </li>
                    </ul>

                    <div className='logo'>
                        <Link to='#'>
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
                        <div className="person">
                            <Link to='#' className='profile'>
                                <PersonOutlined />
                            </Link>
                        </div>

                        <div className='cart'>
                            <Link to='#' className='profile'>
                                <ShoppingCartOutlined />
                            </Link>
                        </div>

                        <div className='favorite'>
                            <Link to='#' className='profile'>
                            <FavoriteOutlined />
                        </Link>
                        </div>

                        
                    </div>


                </div>
            </div>
        </header>

        
    )

}


export default Navbar;

