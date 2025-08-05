import React from 'react';
import './Navbar.css';
import whitelogo from '../assets/logo-white.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={whitelogo} alt="Cherish Logo" className="navbar-logo-image" />
        <span className="navbar-logo-text">Cherish</span>
      </div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;
