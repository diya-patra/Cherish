import React from 'react';
import './HelpCard.css';

const HelpCard = ({ imageSrc, title, description, readTime, link }) => {
  return (
    <div className="help-card">
      <img src={imageSrc} alt={title} className="help-card-image" />
      <div className="help-card-content">
        <h3 className="help-card-title">{title}</h3>
        <p className="help-card-description">{description}</p>
        <div className="help-card-footer">
          <span className="help-card-readtime">{readTime}</span>
          <a href={link} className="help-card-link">Read More →</a>
        </div>
      </div>
    </div>
  );
};

export default HelpCard;
