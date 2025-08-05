import React from "react";
import "./Founders.css";

import diyaImg from "../assets/diya.jpg";
import srijayeeImg from "../assets/srijayee.jpeg";
import deboleenaImg from "../assets/debolina.jpg";
import arunimaImg from "../assets/arunima.jpg";
import priyankaImg from "../assets/priyanka.jpg";

// Images should be placed inside the 'public/images/' folder
const founders = [
  {
    name: "Diya Patra",
    role: "Frontend Developer & UI Designer",
    img:  diyaImg,
    desc: "Creative front-end enthusiast focused on UI/UX design and responsive web development.",
  },
  {
    name: "Srijayee Ghosh",
    role: "Full Stack Developer",
    img: srijayeeImg,
    desc: "Experienced in MERN stack development with a passion for building scalable web applications.",
  },
  {
    name: "Deboleena Paul",
    role: "Backend Developer",
    img: deboleenaImg,
    desc: "Backend developer with interest in databases, APIs, and efficient data handling.",
  },
  {
    name: "Arunima Das",
    role: "AI & ML Enthusiast",
    img: arunimaImg,
    desc: "Aspiring ML engineer passionate about intelligent systems and ethical AI practices.",
  },
  {
    name: "Priyanka Bhattacharya",
    role: "UI/UX & Research Analyst",
    img: priyankaImg,
    desc: "UX researcher and design thinker focused on usability and impactful digital experiences.",
  },
];

const FoundersSection = () => {
  return (
    <section id="about" className="founders-section">
      <h2 className="section-title">Meet Our Founders</h2>
      <p className="section-subtitle">
        Passionate tech enthusiasts shaping Cherish into a smarter, student-driven travel platform.
      </p>
      <div className="founders-container">
        {founders.map((founder, index) => (
          <div key={index} className="founder-card">
            <img src={founder.img} alt={founder.name} className="founder-img" />
            <h3 className="founder-name">{founder.name}</h3>
            <p className="founder-role">{founder.role}</p>
            <p className="founder-desc">{founder.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoundersSection;
