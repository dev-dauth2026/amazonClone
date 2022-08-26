import React from 'react';

import { GoSearch } from "react-icons/go"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaCaretDown } from "react-icons/fa"
import { MdOutlineShoppingCart } from "react-icons/md"
import Amazonlogo from "./image/amazon logo.png"
import ReactCountryFlag from "react-country-flag"
const Navbar = () => {
    return (
        <>
            <nav className='navbar' >
                <div className="logoDiv">
                    <img src={Amazonlogo} alt="amazonlogo" className="logo" />


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
                    <select className="selectButton">
                        <option value="All">All</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                    </select>
                    <input type="search" className="search" />
                    <button className="searchButton">
                        <GoSearch className="searchIcon" />
                    </button>
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
                <div className="orderDiv">
                    <h6>Returns</h6>
                    <h5>& Orders</h5>
                </div>
                <div className="cartDiv">
                    <MdOutlineShoppingCart className="cartIcon" />
                    <h5>Cart</h5>
                </div>
            </nav>

        </>
    )
}

export default Navbar;