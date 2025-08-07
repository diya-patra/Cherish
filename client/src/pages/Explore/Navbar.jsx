import React from 'react';
import './Navbar.css';
import { FaBell, FaUserCircle, FaHeart, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaHeart className="icon" />
        <span>Cherish</span>
      </div>
      <div className="navbar-search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search destinations..." />
      </div>
      <div className="navbar-icons">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
