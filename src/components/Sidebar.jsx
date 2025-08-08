import React, { useState, useEffect } from 'react';
import { FaRocket, FaCamera, FaMapMarkerAlt, FaUser, FaQuestionCircle, FaComments } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Getting Started');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: 'Getting Started', icon: <FaRocket /> },
    { name: 'Photo & Video Features', icon: <FaCamera /> },
    { name: 'Finding Places', icon: <FaMapMarkerAlt /> },
    { name: 'Account Management', icon: <FaUser /> },
    { name: 'FAQ', icon: <FaQuestionCircle /> },
  ];

  return (
    <div className={`sidebar ${mounted ? 'mounted' : ''}`}>
      <div className="sidebar-title">HELP CATEGORIES</div>
      <ul className="sidebar-list">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`sidebar-item ${activeItem === item.name ? 'active' : ''}`}
            onClick={() => setActiveItem(item.name)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>

      <div className="quick-actions">
        <div className="quick-actions-title">QUICK ACTIONS</div>
        <button className="quick-action-button">
          <span className="quick-action-icon"><FaComments /></span>
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
