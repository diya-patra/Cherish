import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaComments } from 'react-icons/fa';

import './SupportHelpSection.css';


const SupportHelpSection = () => {
  const [showChat, setShowChat] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  // Chat Toggle
  const handleChatToggle = () => {
    setShowChat(!showChat);
    setShowContactForm(false); // hide contact form if chat is shown
  };

  // Contact Toggle
  const handleContactToggle = () => {
    setShowContactForm(!showContactForm);
    setShowChat(false); // hide chat if contact form is shown
  };

  // Send chat message
  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const userMessage = {
        username: "You",
        message: inputMessage,
        time: new Date().toLocaleTimeString()
      };
      socket.emit('send_message', userMessage);
      setMessages((prev) => [...prev, userMessage]);
      setInputMessage('');
    }
  };

  // Receive chat messages
  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off('receive_message');
    };
  }, []);

  // Handle contact form changes
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle contact form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormStatus('✅ Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Optional: POST to backend here
  };

  return (
    <section className="support-help-section">
      <div className="support-left">
        <h3>Still Need Help?</h3>
        <p>
          Our support team is here to help you make the most of your Cherish experience.
          Get personalized assistance for any questions or issues.
        </p>
        <div className="support-buttons">
          <button className="support-btn contact-btn" onClick={handleContactToggle}>
            <FaEnvelope className="icon" />
            Contact Support
          </button>
          <button className="support-btn chat-btn" onClick={handleChatToggle}>
            <FaComments className="icon" />
            Live Chat
          </button>
        </div>
      </div>

      {showChat && (
        <div className="chat-box">
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.username === 'You' ? 'user-msg' : 'support-msg'}`}>
                <strong>{msg.username}:</strong> {msg.message}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}

      {showContactForm && (
        <div className="contact-support-box">
          <h4>Contact Support</h4>
          <form onSubmit={handleFormSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleFormChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleFormChange}
              rows={4}
              required
            />
            <button type="submit">Send Message</button>
          </form>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
      )}
    </section>
  );
};

export default SupportHelpSection;
