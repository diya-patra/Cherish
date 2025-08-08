import React from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';
import './HelpNavbar.css';

function HelpNavbar() {
  return (
    <div className="help-navbar">
      {/* Left Section: Logo + Text */}
      <div className="navbar-left">
        <div className="logo-circle">C</div>
        <div className="brand-wrapper">
          <span className="brand-name">Cherish</span>
          <span className="help-text">Help Center</span>
        </div>
      </div>

      {/* Middle Section: Search Box */}
      <div className="navbar-center">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search help articles..."
            className="search-input"
          />
        </div>
      </div>

      {/* Right Section: Bell + Button */}
      <div className="navbar-right">
        <FaBell className="bell-icon" />
        <button className="support-button">Contact Support</button>
      </div>
    </div>
  );
}

export default HelpNavbar;
