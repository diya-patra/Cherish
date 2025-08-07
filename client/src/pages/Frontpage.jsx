// 

// src/pages/FrontPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Import here

import Navbar from '../components/Navbar';
import Whychooseus from '../components/Whychooseus';
import ExploreServices from '../components/ExploreServices';
import FoundersSection from '../components/Founders';
import Testimonials from '../components/Testimonials';
import GetInTouch from '../components/GetInTouch';
import StartJourney from '../components/StartJourney';
import Footer from '../components/Footer';
import './FrontPage.css';

const FrontPage = () => {
  const navigate = useNavigate(); // 👈 useNavigate hook

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Complete<br /><span>Travel Platform</span></h1>
          <p>
            Share memories, discover amazing places, connect with local guides, 
            and build lasting travel experiences with our vibrant community
          </p>
          <div className="hero-buttons">
            <button className="start-btn">🚀 Start Your Journey</button>
            <button className="demo-btn" onClick={() => navigate('/demo')}>
              ▶️ Watch Demo
            </button>
          </div>
        </div>

        {/* Floating Stats Card */}
        <div className="hero-stats">
          <div className="stat-box">
            <h2>50K+</h2>
            <p>Travel Memories</p>
          </div>
          <div className="stat-box">
            <h2>15K+</h2>
            <p>Destinations</p>
          </div>
          <div className="stat-box">
            <h2>8K+</h2>
            <p>Local Guides</p>
          </div>
          <div className="stat-box">
            <h2>25K+</h2>
            <p>Happy Travelers</p>
          </div>
        </div>
      </section>

      <Whychooseus />
      <ExploreServices />
      <FoundersSection />
      <Testimonials />
      <GetInTouch />
      <StartJourney />
      <Footer />
    </div>
  );
};

export default FrontPage;
