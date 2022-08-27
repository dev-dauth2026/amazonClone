import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import { FaCaretDown } from 'react-icons/fa'
import Navbar from './components/navbar/Navbar';
import Home from './components/menu/home/home';
import All from './components/menu/All';
import BestSeller from './components/menu/Bestseller';
import CustomerService from './components/menu/CustomerService';
import TodayDeal from './components/menu/TodayDeal';
import Prime from './components/menu/Prime';
import NewRelease from './components/menu/NewRelease';
import Music from './components/menu/Music';
import KindleBook from './components/menu/KindleBook';
import Books from './components/menu/Books';
import Fashion from './components/menu/Fashion';
import Electronics from './components/menu/Electronics';
import ToyGame from './components/menu/ToyGame';
import "./style.css";

const App = () => {
  return (
    <>
    <div className="main">
      <Navbar/>

      {/* menu list  */}
      <div className="menu">


        {/* left menu  */}
        <div className="leftMenu">
          <ul className="menuItem">

            <li>
              <Link to="all">
                <FaBars /> All
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
        </div>

        {/* right menu  */}
        <div className="rightColumn">
          <h4>Movies and TV Showes</h4>
        </div>


      </div>


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="all" element={<All />} />
        <Route path="bestseller" element={<BestSeller/>} /> 
        <Route path="customer-service" element={<CustomerService />} />
        <Route path="today-deal" element={<TodayDeal />} />
        <Route path="prime" element={<Prime />} />
        <Route path="new-release" element={<NewRelease />} />
        <Route path="music" element={<Music />} />
        <Route path="kindle-book" element={<KindleBook />} />
        <Route path="books" element={<Books />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="toys-game" element={<ToyGame />} />
      </Routes>
      



    </div>
    </>
  )
}

export default App;
