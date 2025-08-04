// WhyChooseCherish.jsx
import React from 'react';
import './WhyChooseCherish.css';

const WhyChooseCherish = () => {
  return (
    <section id="features" className="why-choose">
      <h2>Why Choose <span>Cherish?</span></h2>
      <p className="subtitle">
        Experience travel like never before with our comprehensive platform that
        connects you to memories, places, and people
      </p>
      <div className="features">
        <div className="feature-card blue-bg">
          <div className="icon">👥</div>
          <h3>Memory Sharing<br />Community</h3>
          <p>Connect with fellow travelers, share your incredible journeys, and discover hidden gems.</p>
          <ul>
            <li>✔️ Photo & story sharing</li>
            <li>✔️ Community discussions</li>
            <li>✔️ Travel buddy matching</li>
          </ul>
        </div>

        <div className="feature-card orange-bg">
          <div className="icon">🍽️</div>
          <h3>Hotel & Restaurant<br />Discovery</h3>
          <p>Find the perfect accommodations and dining experiences with personalized picks.</p>
          <ul>
            <li>✔️ Curated recommendations</li>
            <li>✔️ Real-time availability</li>
            <li>✔️ Exclusive deals</li>
          </ul>
        </div>

        <div className="feature-card green-bg">
          <div className="icon">🧭</div>
          <h3>Tourist Guide<br />Connections</h3>
          <p>Connect with verified local guides who offer personalized and authentic experiences.</p>
          <ul>
            <li>✔️ Verified local guides</li>
            <li>✔️ Custom itineraries</li>
            <li>✔️ 24/7 support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCherish;
