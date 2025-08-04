import { useState } from 'react';
import '../assets/styles/Feed.css';
import clg from '../assets/images/clg.jpeg';
import searchIcon from '../assets/images/search.png';
import alertIcon from '../assets/images/alert.png';

const Feed = () => {
  const [rating, setRating] = useState(0);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);

  const handleStoryClick = (index) => {
    setSelectedStoryIndex(index);
    setShowStoryModal(true);
  };

  const handleCloseModal = () => {
    setShowStoryModal(false);
    setSelectedStoryIndex(null);
  };

  // Sample post images array (can be dynamic)
  const postImages = [
    clg, clg, clg, clg, clg, clg, clg, clg, clg, clg, clg, clg
  ];

  return (
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
            <button className="create-post-btn">Create Post</button>
            <img src={clg} alt="User Profile" className="user-profile-icon" />
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
        {[...Array(6)].map((_, i) => (
          <button key={i} className="story-circle" onClick={() => handleStoryClick(i)}>
            <img src={clg} alt={`story ${i + 1}`} />
          </button>
        ))}
      </div>

      {/* Feed */}
      <h3 className="feed-title">Feed</h3>
      <div className="post-card">
        {/* User Info */}
        <div className="post-header">
          <div className="user-info">
            <img src={clg} alt="User Profile" className="user-avatar" />
            <div>
              <span className="username">User</span>
              <span className="post-date">Date</span>
            </div>
          </div>
          <button className="follow-btn">Follow</button>
        </div>

        {/* Caption */}
        <p className="post-text">Lorem ipsum</p>

        {/* Image Grid */}
        <div className="post-image-grid">
          {postImages.slice(0, 4).map((img, index) => (
            <img key={index} src={img} alt="" className="grid-image" />
          ))}
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

        {/* Actions */}
        <div className="actions">
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
      </div>

      {/* Story Modal */}
      {showStoryModal && selectedStoryIndex !== null && (
        <div className="story-modal-overlay">
          <div className="story-modal-content">
            <button className="story-modal-close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <img src={clg} alt={`story content ${selectedStoryIndex + 1}`} className="story-modal-image" />
          </div>
        </div>  
      )}
      {/* 🔻 Load More Posts Button goes here */}
      <div className="load-more-container">
        <button className="load-more-btn">Load More Posts</button>
      </div>
    
    </div>

    
  );
};

export default Feed;
