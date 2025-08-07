import React from 'react';
import './StartJourney.css';
import { FaUserPlus } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';

const StartJourney = () => {
  return (
    <section className="start-journey-section">
      <div className="start-journey-content">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of travelers who are already sharing memories,
          discovering amazing places, and connecting with local guides on Cherish.
        </p>
        <div className="cta-buttons">
          <button className="btn orange-btn">
            <FaUserPlus className="btn-icon" /> Create Free Account
          </button>
          {/* <button className="btn white-btn">
            <BsDownload className="btn-icon" /> Download App
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default StartJourney;
