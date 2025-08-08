import React, { useState } from "react";
import "./FAQ.css";
import { AiOutlineDown } from "react-icons/ai";
import { FaRegQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    question: "How do I upload multiple photos at once?",
    answer:
      "You can upload multiple photos by using our bulk upload feature. On the upload screen, simply tap the “Add Photos” button and select multiple images from your device’s gallery. On desktop, hold down the Ctrl (or Cmd on Mac) key while clicking photos to select several at once. Our platform supports drag-and-drop too, making it easy to add large batches of memories in one go. The upload progress will be shown in real-time, and you can reorder or remove any image before publishing."
  },
  {
    question: "Can I find hotels and restaurants through the app?",
    answer:
      "Yes! The app includes an integrated Explore Nearby feature. Based on your location or the destination you search for, you’ll get personalized recommendations for hotels, restaurants, cafes, and attractions. Listings include ratings, photos, reviews, pricing, and direct booking options (where available). You can also filter by budget, cuisine, or distance. This ensures you find the perfect places that match your trip preferences—whether you're looking for a cozy bed & breakfast or a luxury hotel."
  },
  {
    question: "How do I connect with local guides?",
    answer:
     "To connect with a local guide, navigate to the “Local Guides” section in the app. There you’ll find verified guides listed by city or interest (e.g., historical tours, food walks, adventure trails). Each profile includes a short bio, availability calendar, pricing, languages spoken, and user reviews. Tap the “Connect” button to chat with them directly, ask questions, or schedule a session. Payment and bookings can be handled securely within the app, ensuring a smooth and safe experience."
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely. Your privacy and security are top priorities. Our app uses end-to-end encryption, secure HTTPS connections, and adheres to GDPR and local data protection regulations. Personal data like email, phone number, and uploaded content is stored securely in encrypted databases. We never sell or share your information without consent. You also have full control to manage your data under Settings > Privacy, where you can download, delete, or update your information anytime."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">
        <FaRegQuestionCircle className="faq-icon" />
        &nbsp;Frequently Asked Questions
      </h2>

      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <AiOutlineDown className={`dropdown-icon ${openIndex === index ? "rotate" : ""}`} />
            </div>
            <div
              className={`faq-answer-wrapper ${openIndex === index ? "show" : ""}`}
            >
              <p className="faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
