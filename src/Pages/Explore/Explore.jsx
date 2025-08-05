import React from 'react';
import '../../assets/styles/Hero.css';
import { FaUmbrellaBeach, FaTree, FaMountain } from 'react-icons/fa';
import bgImage from '../../assets/images/bg.jpg';
import Maldives from '../../assets/images/Maldives.jpg';
import Mountain from '../../assets/images/Mountain.jpg';
import Urban from '../../assets/images/Urban.jpg';
import Alpine from '../../assets/images/Alpine.jpg';
import seaside from '../../assets/images/seaside.jpg';
import BeachBar from '../../assets/images/BeachBar.jpg';
import Santorini from '../../assets/images/Santorini.jpg';
import London from '../../assets/images/London.jpg';
import Oceanresort from '../../assets/images/Oceanresort.jpg';

const destinations = [
  {
    name: 'Maldives Paradise',
    description: 'Crystal clear waters and overwater bungalows in tropical paradise',
    price: '$2,499',
    image: Maldives,
  },
  {
    name: 'Santorini, Greece',
    description: 'Iconic white buildings and stunning sunset views over the Aegean Sea',
    price: '$1,699',
    image: Santorini,
  },
  {
    name: 'London',
    description: 'Turquoise lagoon surrounded by coral reefs and tropical mountains',
    price: '$1,299',
    image: London,
  },
];

const hotels = [
  {
    name: "Ocean Vista Resort",
    location: "Maldives",
    price: "$599/night",
    rating: "4.6★",
    image: Oceanresort,
  },
  {
    name: "Alpine Grand Lodge",
    location: "Swiss Alps",
    price: "$459/night",
    rating: "4.7★",
    image: Alpine,
  },
  {
    name: "Urban Boutique",
    location: "New York City",
    price: "$329/night",
    rating: "4.8★",
    image: Urban
  },
];

const restaurants = [
  {
    name: "Seaside Bistro",
    tag: "Ocean View",
    cuisine: "Fresh Seafood • Mediterranean",
    rating: "4.8★",
    image: seaside,
  },
  {
    name: "Alpine Heights",
    tag: "Mountain Retreat",
    cuisine: "Fine Dining • French",
    rating: "4.9★",
    image: Mountain,
  },
  {
    name: "Sunset Grill",
    tag: "Beach Bar",
    cuisine: "Tropical • Cocktails",
    rating: "4.6★",
    image: BeachBar,
  },
];

const Hero = () => {
  return (
    <div className="page-container">
      {/* 🔥 Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-overlay">
          <div className="glass-box">
            <div className="hero-content">
              <h1 className="hero-title">Discover Your Perfect Vacation</h1>
              <p>Explore breathtaking destinations from serene beaches to majestic mountains</p>
              <button className="hero-btn">Start Exploring</button>

              <div className="category-buttons">
                <button className="category active"><FaUmbrellaBeach className="icon" /> Beach</button>
                <button className="category"><FaTree className="icon" /> Forest</button>
                <button className="category"><FaMountain className="icon" /> Mountain</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✨ Featured Destinations */}
      <section className="featured-section">
        <h2>Featured Destinations</h2>
        <div className="destination-cards">
          {destinations.map((dest, idx) => (
            <div className="card" key={idx}>
              <img src={dest.image} alt={dest.name} className="card-image" />
              <div className="card-body">
                <h3>{dest.name}</h3>
                <p>{dest.description}</p>
                <div className="card-footer">
                  <span className="price">{dest.price}</span>
                  <button className="details-btn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-wrapper">
          <a href="#" className="view-all-btn">View All Destinations →</a>
        </div>
      </section>
      {/* 🏨 Luxury Hotels */}
      <section className="luxury-hotels">
        <h2 className="section-title">Luxury Hotels</h2>
        <div className="hotel-cards">
          {hotels.map((hotel, idx) => (
            <div className="hotel-card" key={idx}>
              <img src={hotel.image} alt={hotel.name} />
              <div className="hotel-info">
                <span className="rating">{hotel.rating}</span>
                <h3>{hotel.name}</h3>
                <p>{hotel.location}</p>
                <p className="price">{hotel.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-wrapper">
          <a href="#" className="view-all-btn">View All Destinations →</a>
        </div>
      </section>

      {/* 🍽️ Vacation Restaurants */}
      <section className="restaurants">
        <h2 className="section-title">Top Vacation Restaurants</h2>
        <div className="restaurant-cards">
          {restaurants.map((restaurant, idx) => (
            <div key={idx} className="card">
              <div className="card-image-container">
                <img src={restaurant.image} alt={restaurant.name} className="card-image" />
                {restaurant.tag && <div className="top-tag">{restaurant.tag}</div>}
              </div>
              <div className="card-body">
                <h3>{restaurant.name}</h3>
                <p>{restaurant.cuisine}</p>
                <div className="card-footer">
                  <span className="price">{restaurant.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-wrapper">
          <a href="#" className="view-all-btn">View All Destinations →</a>
        </div>
      </section>
    </div>

  );
};

export default Hero;
