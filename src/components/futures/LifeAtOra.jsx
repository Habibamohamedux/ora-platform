import React, { useState, useEffect } from "react";
import "../../pages/Futures.css";

// Import UI Images
import img1 from "../../assests/Imgs/careers/life_01.png";
import img2 from "../../assests/Imgs/careers/life_02.png";
import img3 from "../../assests/Imgs/careers/life_03.png";
import img4 from "../../assests/Imgs/careers/life_04.png";

// Import Team Voices Images
import sarahImg from "../../assests/Imgs/careers/worker_06.png";
import worker01 from "../../assests/Imgs/careers/worker_01.png";
import worker02 from "../../assests/Imgs/careers/worker_02.png";
import worker03 from "../../assests/Imgs/careers/worker_03.png";
import worker04 from "../../assests/Imgs/careers/worker_04.png";

const wideCards = [
  {
    id: 1,
    tag: "Engineering",
    title: "FROM WHITEBOARDS TO DELIVERY ROOMS",
    text: "Our engineers work directly with OB-GYNs to understand real clinical workflows. Every feature is tested in simulation labs before deployment.",
    img: img1,
  },
  {
    id: 4,
    tag: "Research",
    title: "RESEARCH MEETS REALITY",
    text: "We publish peer-reviewed research while shipping production code — bridging academic rigor with startup velocity.",
    img: img4,
  },
];

const portraitCards = [
  {
    id: 2,
    badge: "Product",
    subtag: "Weekly Collaboration",
    title: "DESIGNING WITH DOCTORS",
    text: "Our product team collaborates weekly with healthcare professionals, ensuring solutions meet clinical standards while staying beautifully usable.",
    img: img2,
  },
  {
    id: 3,
    badge: "Security",
    subtag: "HIPAA Compliant Core",
    title: "SECURITY-FIRST ENGINEERING",
    text: "Every system built with HIPAA compliance at its core. Quarterly audits and continuous monitoring keep your data safe.",
    img: img3,
  },
];

const stats = [
  { num: "120+", label: "Team Members" },
  { num: "12", label: "Countries" },
  { num: "4.9", label: "Glassdoor Rating" },
  { num: "98%", label: "Would Recommend" },
];

const teamVoices = [
  {
    id: 1,
    name: "SARAH CHEN",
    role: "Sr. Backend Engineer",
    color: "#c94060",
    img: worker01,
    quote: "Every feature I ship could end up in a delivery room. That weight makes every PR feel meaningful.",
  },
  {
    id: 2,
    name: "MARK ADEL",
    role: "Product Designer",
    color: "#378ADD",
    img: worker02,
    quote: "I used to design apps for fun. Now I design tools doctors trust with their patients. The bar is completely different.",
  },
  {
    id: 3,
    name: "LAYLA RIFAI",
    role: "ML Engineer",
    color: "#1D9E75",
    img: worker03,
    quote: "Our models are reviewed by clinicians before production. That rigor is rare — I'd never go back to traditional tech.",
  },
  {
    id: 4,
    name: "JAMES KIM",
    role: "Security Lead",
    color: "#BA7517",
    img: worker04,
    quote: "Protecting health data isn't just compliance here. Security is baked in from day one.",
  },
];

// Data array for the rotating main testimonial
const rotatingTestimonials = [
  {
    id: 1,
    quote: "At ORA, I'm not just building software – I'm creating tools that save lives. Every sprint review includes feedback from actual doctors using our systems.",
    name: "SARAH CHEN",
    role: "Senior Backend Engineer",
    img: sarahImg,
  },
  {
    id: 2,
    quote: "The potential here at ORA to make a difference is what drives me every day. We aren't just shipping features; we're crafting tools that directly contribute to better patient care. The collaboration with clinical staff ensures our work is both cutting-edge and deeply practical.",
    name: "MARK ADEL",
    role: "Product Designer",
    img: worker02,
  },
  {
    id: 3,
    quote: "Data privacy in women's health isn't a feature, it's the foundation. We've built an architecture that ensures patient data is anonymized and encrypted at every single touchpoint.",
    name: "JAMES KIM",
    role: "Security Lead",
    img: worker04,
  }
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M1 7h12M8 2l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DotsPattern = () => (
  <svg
    className="life-section-portrait-pattern"
    viewBox="0 0 320 460"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <pattern id="ora-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="12" cy="12" r="1.5" fill="#c94060" />
      </pattern>
    </defs>
    <rect width="320" height="460" fill="url(#ora-dots)" />
    <circle cx="160" cy="160" r="100" fill="none" stroke="#c94060" strokeWidth="0.8" opacity="0.4" />
    <circle cx="160" cy="160" r="60" fill="none" stroke="#c94060" strokeWidth="0.5" opacity="0.25" />
    <line x1="0" y1="0" x2="320" y2="460" stroke="#c94060" strokeWidth="0.5" opacity="0.3" />
  </svg>
);

const GridPattern = () => (
  <svg
    className="life-section-portrait-pattern"
    viewBox="0 0 320 460"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <pattern id="ora-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="32" height="32" fill="none" stroke="#c94060" strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="320" height="460" fill="url(#ora-grid)" />
    <circle cx="160" cy="200" r="130" fill="none" stroke="#c94060" strokeWidth="1" opacity="0.35" />
    <circle cx="160" cy="200" r="80" fill="none" stroke="#c94060" strokeWidth="0.7" opacity="0.25" />
    <circle cx="160" cy="200" r="40" fill="rgba(201,64,96,.1)" />
    <line x1="320" y1="0" x2="0" y2="460" stroke="#c94060" strokeWidth="0.5" opacity="0.25" />
  </svg>
);

const LifeAtOra = () => {
  // State to manage the rotating testimonial
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Change quote every 6.5 seconds
    const interval = setInterval(() => {
      setIsFading(true); // 1. Start fading out

      // 2. Wait for fade out CSS transition (500ms) to complete, then swap content
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % rotatingTestimonials.length);
        setIsFading(false); // 3. Start fading back in
      }, 500); 
      
    }, 6500); 

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const activeTestimonial = rotatingTestimonials[activeIndex];

  return (
    <section className="life-section-wrapper">
      <div className="life-section-bg-glow glow-1" />
      <div className="life-section-bg-glow glow-2" />
      <div className="life-section-container">
        
        {/* Header */}
        <div className="life-section-header">
          <div className="life-section-title-group">
            <span className="life-section-eyebrow">Our Culture</span>
            <h2 className="life-section-heading">LIFE AT ORA</h2>
          </div>
          <button className="life-section-cta">
            Join Our Team <ArrowIcon />
          </button>
        </div>

        {/* Stats */}
        <div className="life-section-stats">
          {stats.map((s) => (
            <div className="life-section-stat" key={s.label}>
              <span className="life-section-stat-num">{s.num}</span>
              <span className="life-section-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="life-section-grid">
          <div className="life-section-card life-section-card-wide" style={{ animationDelay: "0.15s" }}>
            <div className="life-section-card-img-wrapper">
              <img src={wideCards[0].img} alt={wideCards[0].title} className="life-section-card-img" />
            </div>
            <div className="life-section-card-content">
              <span className="life-section-card-tag">{wideCards[0].tag}</span>
              <h3 className="life-section-card-title">{wideCards[0].title}</h3>
              <p className="life-section-card-text">{wideCards[0].text}</p>
              <span className="life-section-card-arrow">Learn More <ArrowIcon /></span>
            </div>
          </div>
          <div className="life-section-card life-section-card-portrait" style={{ animationDelay: "0.27s" }}>
            <img src={portraitCards[0].img} alt={portraitCards[0].title} className="life-section-portrait-img" />
            <DotsPattern />
            <div className="life-section-portrait-overlay" />
            <div className="life-section-portrait-stripe" />
            <span className="life-section-portrait-badge">{portraitCards[0].badge}</span>
            <div className="life-section-portrait-content">
              <span className="life-section-portrait-tag">{portraitCards[0].subtag}</span>
              <h3 className="life-section-portrait-title">{portraitCards[0].title}</h3>
              <p className="life-section-portrait-text">{portraitCards[0].text}</p>
              <span className="life-section-portrait-arrow">Learn More <ArrowIcon /></span>
            </div>
          </div>
          <div className="life-section-card life-section-card-portrait" style={{ animationDelay: "0.39s" }}>
            <img src={portraitCards[1].img} alt={portraitCards[1].title} className="life-section-portrait-img" />
            <GridPattern />
            <div className="life-section-portrait-overlay" />
            <div className="life-section-portrait-stripe" />
            <span className="life-section-portrait-badge">{portraitCards[1].badge}</span>
            <div className="life-section-portrait-content">
              <span className="life-section-portrait-tag">{portraitCards[1].subtag}</span>
              <h3 className="life-section-portrait-title">{portraitCards[1].title}</h3>
              <p className="life-section-portrait-text">{portraitCards[1].text}</p>
              <span className="life-section-portrait-arrow">Learn More <ArrowIcon /></span>
            </div>
          </div>
          <div className="life-section-card life-section-card-wide" style={{ animationDelay: "0.51s" }}>
            <div className="life-section-card-img-wrapper">
              <img src={wideCards[1].img} alt={wideCards[1].title} className="life-section-card-img" />
            </div>
            <div className="life-section-card-content">
              <span className="life-section-card-tag">{wideCards[1].tag}</span>
              <h3 className="life-section-card-title">{wideCards[1].title}</h3>
              <p className="life-section-card-text">{wideCards[1].text}</p>
              <span className="life-section-card-arrow">Learn More <ArrowIcon /></span>
            </div>
          </div>
        </div>

        {/* Rotating Testimonial */}
        <div className="life-section-testimonial">
          <div className="life-section-testimonial-body">
            
            {/* The wrapper that handles the fade animation */}
            <div className={`testimonial-fade-wrapper ${isFading ? "fade-out" : "fade-in"}`}>
              <p className="life-section-quote">
                "{activeTestimonial.quote}"
              </p>
              <div className="life-section-author-box">
                <img
                  src={activeTestimonial.img}
                  alt={activeTestimonial.name}
                  className="life-section-author-img"
                />
                <div className="life-section-author-details">
                  <span className="life-section-author-name">{activeTestimonial.name}</span>
                  <span className="life-section-author-role">{activeTestimonial.role}</span>
                </div>
              </div>
            </div>

          </div>
          <div className="life-section-testimonial-accent" />
        </div>

        {/* Team Voices Section */}
        <div className="voices-section">
          <div className="voices-header">
            <h2 className="voices-title">VOICES FROM THE TEAM</h2>
            <div className="voices-line" />
            <span className="voices-count">4 Members</span>
          </div>

          <div className="voices-grid">
            {teamVoices.map((person, i) => (
              <div className="vcard" key={person.id} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <div className="vcard-bar" style={{ background: person.color }} />
                <div className="vcard-photo">
                  <img src={person.img} alt={person.name} className="vcard-img" />
                  <div className="vcard-photo-grad" />
                  <div className="vcard-photo-info">
                    <div className="vcard-name">{person.name}</div>
                    <div className="vcard-role">{person.role}</div>
                  </div>
                </div>
                <div className="vcard-quote">
                  <div className="vcard-stripe" style={{ background: person.color }} />
                  <p className="vcard-quote-text">"{person.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LifeAtOra;