import React from "react";
import "./Testimonials.css";
import emma from "../assets/emma.jpg";
import brook from "../assets/brook.jpg";
import maria from "../assets/maria.jpg";
import sophie from "../assets/sophie.jpg";

const testimonials = [
  {
    name: "Emma Wilson",
    role: "Adventure Blogger",
    text: "Cherish transformed how I share my travel experiences...",
    stars: 5,
    avatar: emma,
  },
  {
    name: "James Park",
    role: "Business Traveler",
    text: "Finding local guides through Cherish made my trip unforgettable...",
    stars: 5,
    avatar: brook,
  },
  {
    name: "Maria Garcia",
    role: "Food Enthusiast",
    text: "Who knew that weekend discovery tours are amazing! I found local spots...",
    stars: 5,
    avatar: maria,
  },
  {
    name: "Sophie Anderson",
    role: "Solo Traveler",
    text: "As a solo female traveler, connecting with the Cherish community...",
    stars: 5,
    avatar: sophie,
  },
];

const Testimonials = () => {
  return (
    <section id = "reviews" className="testimonials-section">
      <h2 className="testimonials-title">What Travelers Say</h2>
      <p className="testimonials-subtitle">
        Hear from our amazing community of travelers who’ve discovered, shared, and connected through Cherish
      </p>

      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">{"⭐".repeat(t.stars)}</div>
            <p className="testimonial-text">"{t.text}"</p>
            <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
            <p className="testimonial-name"><strong>{t.name}</strong></p>
            <p className="testimonial-role">{t.role}</p>
          </div>
        ))}
      </div>

      <button className="testimonial-button">Read More Reviews</button>
    </section>
  );
};

export default Testimonials;
