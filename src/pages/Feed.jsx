import { useState } from 'react';
import '../assets/styles/Feed.css';
import user from '../assets/styles/user.jpg'
import story3 from '../assets/styles/story3.jpg';
import story5 from '../assets/styles/story5.jpg';
import story1 from '../assets/styles/story1.jpg'
import pic from '../assets/styles/pic.jpg'
import searchIcon from '../assets/styles/search.png';
import alertIcon from '../assets/styles/alert.png';
import love from '../assets/styles/love.png'
import heart from '../assets/styles/heart.png'
import userp from '../assets/styles/userp.png'
import followed from '../assets/styles/followed.png'
import plusIcon from '../assets/styles/plus.png'
import comment from '../assets/styles/comment.png'
import send from '../assets/styles/send.png'
import Banaras from '../assets/styles/Banaras.jpeg';
import Goa from '../assets/styles/Goa.jpg';
import Jaipur from '../assets/styles/Jaipur.jpg';
import Agra from '../assets/styles/Agra.jpeg';
import Shimla from '../assets/styles/Shimla.jpeg';
import Coimbatore from '../assets/styles/Coimbatore.jpg';
import people from '../assets/styles/people.jpg'
import woman from '../assets/styles/woman.jpg'


const Feed = () => {
  const [rating, setRating] = useState(0);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);
  const [liked, setLiked] = useState (false);
  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollowClick = () => {
  setIsFollowing(!isFollowing);
};


  const handleStoryClick = (index) => {
    setSelectedStoryIndex(index);
    setShowStoryModal(true);
  };

  const handleCloseModal = () => {
    setShowStoryModal(false);
    setSelectedStoryIndex(null);
  };

  // Sample post images array (can be dynamic)
  // Inside the Feed component

// Story images
const storyImages = [story1, story3,story5];

// Feed post image
const postImages = [pic];


  return (
  <> 
    <div className="feed-wrapper">
      {/* Header */}
      <div className="feed-header">
        <div className="header-top">
          <h1>Hello User,</h1>
          <div className="header-actions">
          <button className="notifications-btn">
            {/* <span>Notification</span> */}
            <img src={alertIcon} alt="alert" className="alert-icon" />
          </button>
          <button className="create-post-btn">
            <img src={plusIcon} alt="plus" className="plus-icon" />
          </button>
          <img src={user} alt="User Profile" className="user-profile-icon" />
          </div>
        </div>

        {/* Search */}
        <div className="search-container">
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      {/* Stories */}
      <h3 className="stories-title">Stories</h3>
      <div className="stories-section">
  {storyImages.map((image, i) => (
    <button key={i} className="story-circle" onClick={() => handleStoryClick(i)}>
      <img src={image} alt={`story ${i + 1}`} />
    </button>
  ))}
</div>


      {/* Feed */}
      <h3 className="feed-title">Feed</h3>
      <div className="post-card">
        {/* User Info */}
        <div className="post-header">
          <div className="user-info">
            <img src={user} alt="User Profile" className="user-avatar" />
            <div>
            <span className="username">User</span>
            <span className="post-date">Date</span>
            </div>
            <div className="follow-block">
              <img
              src={isFollowing ? followed : userp}
              alt="Follow"
              className="follow-icon"
              onClick={handleFollowClick}
            />
          </div>
        </div>
      </div>
        
        {/* Caption */}
        <p className="post-text">Lorem ipsum</p>

        {/* Image Grid */}
        <div className="post-image-grid">
  <img src={pic} alt="Post" className="feed-image" />
</div>

          
          {postImages.length > 4 && (
            <img
              src={postImages[4]}
              alt=""
              className="grid-image more-overlay"
              data-overlay={`+${postImages.length - 4}`}
            />
          )}
        </div>

        {/* Rating */}
        <div className="rating">
          <span>Rate this post:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? 'filled' : ''}`}
              onClick={() => setRating(star)}
              aria-label={`${star} star${star > 1 ? 's' : ''}`}
            >
              ★
            </span>
          ))}
          <span className="score" aria-live="polite">{rating}.0</span>
        </div>

    <div className="actions">
  <button
    className="heart-btn"
    onClick={() => setLiked(!liked)}
  >
    <img
      src={liked ? heart : love}
      alt="Like"
      className="heart-icon"
    />
  </button>

    <button className='comment-btn'>
      <img src={comment} alt="comment" className="comment" />
    </button>

  <button className='send-btn'>
    <img src={send} alt="send" className="send" />
  </button>

  
</div>

      
      {/* Story Modal */}
      {showStoryModal && selectedStoryIndex !== null && (
        <div className="story-modal-overlay">
          <div className="story-modal-content">
            <button className="story-modal-close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <img src={user} alt={`story content ${selectedStoryIndex + 1}`} className="story-modal-image" />
          </div>
        </div>  
      )}
      

      {/* 🔻 Load More Posts Button goes here */}
      <div className="load-more-container">
        <button className="load-more-btn">Load More Posts</button>
      </div>
    </div>
    

    {/* 🔥 Discover Section */}
    <div className="discover-section">
      <div className="discover-header">
        <h3>Discover</h3>
        <span className="see-all">See all</span>
      </div>
      <div className="discover-grid">
        {[
          { name: "Banaras", image: Banaras },
          { name: "Goa", image: Goa },
          { name: "Jaipur", image: Jaipur },
          { name: "Agra", image: Agra },
          { name: "Shimla", image: Shimla },
          { name: "Coimbatore", image: Coimbatore },
        ].map((place, index) => (
          <div key={index} className="discover-card">
            <img src={place.image} alt={place.name} />
            <p>{place.name}</p>
          </div>
        ))}
      </div>
    </div>
<div className="top-travelers-section">
  <div className="top-travelers-header">
    <h3>Top Travelers</h3>
    <span className="see-all">See all</span>
  </div>

  <div className="traveler-list">
    <div className="traveler-card">
      <img src="https://media.istockphoto.com/id/1395880805/photo/indoor-close-up-portrait-of-beauty-asian-indian-serene-young-woman-sitting-near-the-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=2CcRB-iYMbc8OLkoFq8EYbAvOSyykd7sPwC7scsN0JY=" alt="TravelWithMe" />
      <div className="traveler-info">
        <h4>TravelWithMe</h4>
        <p>Exploring hidden gems in India 🌐 1M+ followers</p>
      </div>
      <button className="follow-btn">Follow</button>
    </div>

    <div className="traveler-card">
      <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D" alt="LuxuryTraveler" />
      <div className="traveler-info">
        <h4>LuxuryTraveler</h4>
        <p>5-star hotels & resorts expert ✨ 850K followers</p>
      </div>
      <button className="follow-btn">Follow</button>
    </div>

    <div className="traveler-card">
      <img src={woman} alt="BudgetTrips" />
      <div className="traveler-info">
        <h4>BudgetTrips</h4>
        <p>Traveling India 🏅 500K followers</p>
      </div>
      <button className="follow-btn">Follow</button>
    </div>

    <div className="traveler-card">
      <img src={people} alt="FoodieAdventures" />
      <div className="traveler-info">
        <h4>FoodieAdventures</h4>
        <p>Best local eats around Banaras 🍜 720K followers</p>
      </div>
      <button className="follow-btn">Follow</button>
    </div>
  </div>
  
</div>
 </>  
  );
  
};

export default Feed;
