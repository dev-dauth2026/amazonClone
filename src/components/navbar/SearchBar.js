import React from 'react';
import { GoSearch } from "react-icons/go"
const SearchBar=()=>{
    return(
        <>
             
                    {/* select button of Search  */}
                    <select className="selectButton">
                        <option value="All">All</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                    </select>
                    {/* input field  */}
                    <input type="search" className="search" />
                    {/* search button  */}
                    <button className="searchButton">
                        <GoSearch className="searchIcon" />
                    </button>
                
        </>
    )
}
export default SearchBar;