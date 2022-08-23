import React from 'react';
import Navbar from './Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Menu from './menu/Menu';
import All from './menu/All';
import BestSeller from './menu/Bestseller';
import './style.css';
import List from './List';
import { FaBars } from 'react-icons/fa'
import { FaCaretDown } from 'react-icons/fa'
import Home from './menu/home';
import CustomerService from './menu/CustomerService';
import TodayDeal from './menu/TodayDeal';
import Prime from './menu/Prime';
import NewRelease from './menu/NewRelease';
import Music from './menu/Music';
import KindleBook from './menu/KindleBook';
import Books from './menu/Books';
import Fashion from './menu/Fashion';
import Electronics from './menu/Electronics';
import ToyGame from './menu/ToyGame';
import Slider from './menu/Slider';

const App = () => {
  return (
    <>
    <div className="main">
      <Navbar />

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
        <Route path="/" element={<Home />} />
        <Route path="all" element={<All />} />
        <Route path="bestseller" element={<BestSeller />} />
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
