// import React from "react";
// import "./PhotoVideoFeaturesSection.css";
// import cameraImage from "../assets/Srijayeeimages/camera.jpg"; // Make sure the image path matches

// const PhotoVideoFeaturesSection = () => {
//   return (
//     <section className="photo-video-section">
//       <h2 className="section-title">📷 Photo & Video Features</h2>

//       <div className="photo-video-container">
//         <div className="features-text">
//           <h3>Capture & Share Your Adventures</h3>
//           <ul className="feature-list">
//             <li>
//               <span className="tick">✔</span>
//               <strong> High-Quality Photo Uploads</strong>
//               <br />
//               <span className="description">
//                 Upload photos up to 4K resolution with automatic optimization
//               </span>
//             </li>
//             <li>
//               <span className="tick">✔</span>
//               <strong> Video Stories</strong>
//               <br />
//               <span className="description">
//                 Create engaging video stories with built-in editing tools
//               </span>
//             </li>
//             <li>
//               <span className="tick">✔</span>
//               <strong> Filter & Effects</strong>
//               <br />
//               <span className="description">
//                 Apply travel-themed filters and effects to enhance your content
//               </span>
//             </li>
//           </ul>

//           <button className="guide-button">View Complete Photo Guide</button>
//         </div>

//         <div className="features-image">
//           <img src={cameraImage} alt="Camera" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PhotoVideoFeaturesSection;


import React from "react";
import "./PhotoVideoFeaturesSection.css";
import { FiCamera } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";
import cameraImage from "../assets/Srijayeeimages/camera.jpg"; // Ensure the image path is correct

const PhotoVideoFeaturesSection = () => {
  return (
    <section className="photo-video-wrapper">
      <h2 className="photo-video-title">
        <FiCamera className="camera-icon" />
        &nbsp;Photo & Video Features
      </h2>

      <div className="photo-video-card">
        <div className="photo-video-left">
          <h3 className="photo-video-heading">Capture & Share Your Adventures</h3>
          <ul className="photo-video-features">
            <li>
              <BsCheckCircleFill className="tick-icon" />
              <div>
                <strong>High-Quality Photo Uploads</strong>
                <p>Upload photos up to 4K resolution with automatic optimization</p>
              </div>
            </li>
            <li>
              <BsCheckCircleFill className="tick-icon" />
              <div>
                <strong>Video Stories</strong>
                <p>Create engaging video stories with built-in editing tools</p>
              </div>
            </li>
            <li>
              <BsCheckCircleFill className="tick-icon" />
              <div>
                <strong>Filter & Effects</strong>
                <p>Apply travel-themed filters and effects to enhance your content</p>
              </div>
            </li>
          </ul>

          <button className="photo-video-button">View Complete Photo Guide</button>
        </div>

        <div className="photo-video-right">
          <div className="features-image">
           <img src={cameraImage} alt="Camera" />
         </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoVideoFeaturesSection;
