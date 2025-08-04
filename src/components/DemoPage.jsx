import React from 'react';
import { useNavigate } from 'react-router-dom';
import demoVideo from '../assets/demo.mp4'; // Make sure this file exists in your assets

const DemoPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <button onClick={() => navigate('/')} style={styles.closeBtn}>⟵ Back to Home</button>
      
      <div style={styles.videoWrapper}>
        <video width="100%" controls autoPlay>
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '10vh',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  closeBtn: {
    background: '#2563eb',
    color: '#fff',
    border: 'none',
    padding: '10px 18px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '20px'
  },
  videoWrapper: {
    maxWidth: '960px',
    width: '100%',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.3)',
    borderRadius: '12px',
    overflow: 'hidden'
  }
};

export default DemoPage;
