import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-banner">
      <div className="header-content">
        <h1 className="header-title">Welcome to the Help Center</h1>
        <p className="header-subtitle">
          Find guides, tips, and resources to get the most out of your experience.
        </p>
        <div className="header-buttons">
          <button className="header-button primary">Get Started</button>
          <button className="header-button secondary">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
