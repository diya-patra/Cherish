import React from 'react';
import './Footer.css';
import darklogo from '../assets/styles/Logo.jpeg'; // Adjust the path as necessary

// Import icons from react-icons
import { FaFacebookF, FaInstagram, FaTwitter ,FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo + Description */}
        <div className="footer-brand">
          <div className="logo">
            <img src={darklogo} alt="Cherish Logo" className="footer-logo-image" />
        <span className="footer-logo-text">Cherish</span>
          </div>
          <p>
            Your complete travel platform for sharing memories, discovering places, 
            and connecting with local guides worldwide.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Platform Links */}
        <div className="footer-column">
          <h4>Platform</h4>
          <ul>
            <li><a href="#">Memory Sharing</a></li>
            <li><a href="#">Hotel Discovery</a></li>
            <li><a href="#">Restaurant Finder</a></li>
            <li><a href="#">Local Guides</a></li>
            <li><a href="#">Mobile App</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <p>© 2025 Cherish. All rights reserved.</p>
        <div className="policies">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;