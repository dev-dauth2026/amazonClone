import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaCaretDown } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { MdOutlineShoppingCart } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"
import Amazonlogo from "../image/amazon logo.png"
import ReactCountryFlag from "react-country-flag"
import { FaBars } from "react-icons/fa"
import "./navbar.css";
import SearchBar from './SearchBar';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <nav className='navbar' >
                <div className="logoDiv">
                    <FaBars className="menuIcon" onClick={() => setToggle(!toggle)} />
                    <img src={Amazonlogo} alt="amazonlogo" className="logo" />
                    
                        <div className={toggle?`toggleMenu`:`toggleMenuOn`}>
                            <ul className="menuList">
                                <div className="menuHeader">
                                    <div className="menuSignin">
                                        <h5>Sign in </h5>
                                        <FaUser className="menuUserIcon" />
                                    </div>
                                    <div className="header">
                                        <h4>Browse</h4>
                                        <h2>Amazon</h2>
                                    </div>
                                </div>
                                <li>
                                    <Link to="all">
                                        All
                                    </Link>
                                </li>
                                <li>
                                    <Link to="bestseller">
                                        Best Seller
                                    </Link>
                                </li>
                                <li>
                                    <Link to="customer-service">
                                        Customer Service
                                    </Link>
                                </li>
                                <li>
                                    <Link to="today-deal">
                                        Today's Deals
                                    </Link>
                                </li>
                                <li>
                                    <Link to="prime">
                                        Prime <FaCaretDown />
                                    </Link>
                                </li>

                                <li>
                                    <Link to="new-release">
                                        New Releases
                                    </Link>
                                </li>
                                <li>
                                    <Link to="music">
                                        Music
                                    </Link>
                                </li>
                                <li>
                                    <Link to="kindle-book">
                                        Kindle Book
                                    </Link>
                                </li>
                                <li>
                                    <Link to="books">
                                        Books
                                    </Link>
                                </li>
                                <li>
                                    <Link to="fashion">
                                        Fashion
                                    </Link>
                                </li>
                                <li>
                                    <Link to="electronics">
                                        Electronics
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="toys-game">
                                        Toys & Game
                                    </Link>
                                </li>


                            </ul>
                            <div className="cancle">
                                <AiOutlineClose className="cancleIcon" onClick={() => setToggle(!toggle)} />
                            </div>
                        </div>
                    
                    

                </div>

                {/* location seletion */}
                <div className="location">
                    <FaMapMarkerAlt className="map" />
                    <ul className="navbar-item" >
                        <li><h6>Hello</h6></li>
                        <li><h5>Select your address</h5></li>
                    </ul>
                </div>
                {/* search div  */}
                <div className="searchdiv">
                    <SearchBar />
                </div>
                {/* search div ends  */}
                <div className="selectCountryDiv">
                    <div className="selectCountry">
                        <ReactCountryFlag
                            countryCode="US"
                            svg
                            style={{
                                width: '1.5em',
                                height: '1.5em',
                            }}
                            title="US"
                        />
                        <FaCaretDown />
                    </div>

                </div>
                <div className="signinDiv">
                    <h6>Hello, Sign In</h6>
                    <div className="listDiv">
                        <h5>Account and Lists</h5>
                        <FaCaretDown />
                    </div>
                </div>
                <div className="signinUserIcon">

                </div>
                <div className="orderDiv">
                    <h6>Returns</h6>
                    <h5>& Orders</h5>
                </div>
                <div className="cartDiv">
                    <FaUser className="userIcon" />
                    <MdOutlineShoppingCart className="cartIcon" />
                    <h5>Cart</h5>
                </div>
            </nav>
            <div className="searchdiv2">
                <SearchBar />
            </div>

        </>
    )
}

export default Navbar;