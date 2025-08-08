import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import HelpNavbar from '../components/HelpNavbar'; // Updated Header to HelpNavbar
import GettingStartedSection from '../components/GettingStartedSection';
import PhotoVideoFeatures from '../components/PhotoVideoFeaturesSection';
import FAQ from '../components/FAQ';
// import SupportHelpSection from '../components/SupportHelpSection'; // Importing SupportHelpSection
import './Helpcentre.css';
// import travelPostImage from '../assets/travel-post.jpg';
// import profilesetupImage from '../assets/profile-setup.jpg';
// import privacySettingsImage from '../assets/privacy-settings.jpg';
// import mobileappImage from '../assets/mobile-app.jpg';

const HelpCenter = () => {
  return (
    <div className="help-center-page">
      <HelpNavbar />  {/* Navbar at top */}
      
      <div className="help-center-body">
        <Sidebar />  {/* Sidebar on the left */}
        
        <div className="help-center-content">
          <Header />
          <GettingStartedSection />
          <PhotoVideoFeatures />
          <FAQ />
          {/* <SupportHelpSection /> Support section at the bottom */}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
