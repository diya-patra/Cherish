import React from 'react';
import HelpCard from './HelpCard';
import travelPostImage from '../assets/Srijayeeimages/travel-post.jpg';
import profilesetupImage from '../assets/Srijayeeimages/profile-setup.jpg';
import privacySettingsImage from '../assets/Srijayeeimages/privacy-settings.jpg';
import mobileappImage from '../assets/Srijayeeimages/mobile-app.jpg';
import { FaRocket } from 'react-icons/fa';

const GettingStartedSection = () => {
  return (
    <div id="getting-started" className="section">
      <h2 
        className="section-title" 
        style={{
          fontWeight: 'bold',
          color: 'black',
          display: 'flex',
          alignItems: 'center',
          gap: '8px' // space between icon and text
        }}
      >
        <FaRocket 
          style={{ 
            fontSize: '1em',  // Matches text height
            color: 'blue',
            verticalAlign: 'middle'
          }} 
        />
        Getting Started
      </h2>
      
      <div className="cards-grid">
        <HelpCard 
          imageSrc={travelPostImage}
          title="Creating Your First Travel Post"
          description="Learn how to share your travel moments with stunning photos and engaging stories."
          readTime="5 min read"
          link="#"
        />
        <HelpCard 
          imageSrc={profilesetupImage}
          title="Setting Up Your Travel Profile"
          description="Customize your profile to connect with fellow travelers and showcase your journey."
          readTime="3 min read"
          link="#"
        />
        <HelpCard 
          imageSrc={privacySettingsImage}
          title="Understanding Privacy Settings"
          description="Control who sees your content and manage your privacy preferences."
          readTime="4 min read"
          link="#"
        />
        <HelpCard 
          imageSrc={mobileappImage}
          title="Mobile App Features"
          description="Discover all the features available in our mobile app for on-the-go travel sharing."
          readTime="6 min read"
          link="#"
        />
      </div>
    </div>
  );
};

export default GettingStartedSection;
