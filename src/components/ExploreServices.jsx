import React from "react";
import "./ExploreServices.css";
import cameraImg from "../assets/camera.jpg";
import resortImg from "../assets/resort.jpg";

const ExploreServices = () => {
  return (
    <div className="explore-section">
      <h2>Explore Our Services</h2>
      <p>
        Discover how Cherish transforms your travel experience with innovative features
      </p>

      <div className="services-grid">
        {/* Left Column */}
<div className="left-content">
  <div className="text-block">
    <h3>Memory Sharing Made Simple</h3>
    <p>
      Upload your travel photos, write compelling stories, and connect with a
      community of passionate travellers. Share your unique perspective and inspire others to explore.
    </p>
    <ul>
      <li>📤 Upload unlimited photos & videos</li>
      <li>📝 Create engaging travel stories</li>
      <li>❤️ Receive likes & comments from community</li>
    </ul>
  </div>

  <div className="image-card">
    <img src={cameraImg} alt="Travel Camera" className="img-right" />
    <span className="like-tag">❤️ 12k+ likes</span>
  </div>
</div>

        {/* Right Column */}
        <div className="right-content">
          <div className="resort-card">
            <span className="rating">⭐ 4.9</span>
            <img src={resortImg} alt="Resort" />
          </div>
          <div className="smart-discovery">
            <h3>Smart Discovery Engine</h3>
            <p>
              Our AI-powered recommendation system learns your preferences to suggest the perfect hotels, restaurants, and activities tailored to your travel style and budget.
            </p>
            <div className="options">
              <div className="option-card">🏨 Hotels<br /><span>10,000+ verified properties</span></div>
              <div className="option-card">🍽️ Restaurants<br /><span>8,500+ dining options</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;
