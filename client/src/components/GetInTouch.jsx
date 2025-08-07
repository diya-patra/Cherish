import React from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <section id = "contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Ready to start your journey with Cherish? Have questions? We'd love to hear from you!
      </p>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Enter your first name" className="input" required />
          <input type="text" placeholder="Enter your last name" className="input" required />
        </div>

        <input type="email" placeholder="Enter your email address" className="input full-width" required />

        <label htmlFor="interest" className="form-label">I'm interested in</label>
        <select className="input full-width" id="interest" required>
          <option>Select your primary interest</option>
          <option>Best Travel Packages</option>
          <option>Tourist Guide informations</option>
          <option>Solo or Group Travel guide</option>
          <option>Technical support</option>
          <option>Travel Memories</option>
          <option>Others</option>
        </select>

        <textarea
          rows="5"
          className="input full-width"
          placeholder="Tell us about your travel goals or any questions you have..."
          required
        ></textarea>

        <label className="checkbox-container">
          <input type="checkbox" />
          Subscribe to our newsletter for travel tips and platform updates
        </label>

        <button type="submit" className="submit-btn">📨 Send Message</button>
      </form>
    </section>
  );
};

export default GetInTouch;
