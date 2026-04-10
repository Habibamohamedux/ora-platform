import React from 'react';
import '../../pages/Futures.css'; 
import img1 from '../../assests/Imgs/careers/life_01.png';
import img2 from '../../assests/Imgs/careers/life_02.png';
import img3 from '../../assests/Imgs/careers/life_03.png';
import img4 from '../../assests/Imgs/careers/life_04.png';
import sarahImg from '../../assests/Imgs/careers/worker_06.png';
const wideCards = [
  { id:1, tag:'Engineering', title:'FROM WHITEBOARDS TO DELIVERY ROOMS', text:'Our engineers work directly with OB-GYNs to understand real clinical workflows. Every feature is tested in simulation labs before deployment.', img:img1 },
  { id:4, tag:'Research', title:'RESEARCH MEETS REALITY', text:'We publish peer-reviewed research while shipping production code — bridging academic rigor with startup velocity.', img:img4 },
];

const portraitCards = [
  { id:2, badge:'Product', subtag:'Weekly Collaboration', title:'DESIGNING WITH DOCTORS', text:'Our product team collaborates weekly with healthcare professionals, ensuring solutions meet clinical standards while staying beautifully usable.', img:img2 },
  { id:3, badge:'Security', subtag:'HIPAA Compliant Core', title:'SECURITY-FIRST ENGINEERING', text:'Every system built with HIPAA compliance at its core. Quarterly audits and continuous monitoring keep your data safe.', img:img3 },
];

const stats = [
  { num:'120+', label:'Team Members' },
  { num:'12',   label:'Countries' },
  { num:'4.9',  label:'Glassdoor Rating' },
  { num:'98%',  label:'Would Recommend' },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Decorative SVG patterns layered over portrait card photos */
const DotsPattern = () => (
  <svg className="life-section-portrait-pattern" viewBox="0 0 320 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <pattern id="ora-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="12" cy="12" r="1.5" fill="#c94060"/>
      </pattern>
    </defs>
    <rect width="320" height="460" fill="url(#ora-dots)"/>
    <circle cx="160" cy="160" r="100" fill="none" stroke="#c94060" strokeWidth="0.8" opacity="0.4"/>
    <circle cx="160" cy="160" r="60"  fill="none" stroke="#c94060" strokeWidth="0.5" opacity="0.25"/>
    <line x1="0" y1="0" x2="320" y2="460" stroke="#c94060" strokeWidth="0.5" opacity="0.3"/>
  </svg>
);

const GridPattern = () => (
  <svg className="life-section-portrait-pattern" viewBox="0 0 320 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <pattern id="ora-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="32" height="32" fill="none" stroke="#c94060" strokeWidth="0.6"/>
      </pattern>
    </defs>
    <rect width="320" height="460" fill="url(#ora-grid)"/>
    <circle cx="160" cy="200" r="130" fill="none" stroke="#c94060" strokeWidth="1"   opacity="0.35"/>
    <circle cx="160" cy="200" r="80"  fill="none" stroke="#c94060" strokeWidth="0.7" opacity="0.25"/>
    <circle cx="160" cy="200" r="40"  fill="rgba(201,64,96,.1)"/>
    <line x1="320" y1="0" x2="0" y2="460" stroke="#c94060" strokeWidth="0.5" opacity="0.25"/>
  </svg>
);

const LifeAtOra = () => (
  <section className="life-section-wrapper">
    <div className="life-section-bg-glow glow-1"/>
    <div className="life-section-bg-glow glow-2"/>

    <div className="life-section-container">

      {/* Header: title LEFT · button RIGHT */}
      <div className="life-section-header">
        <div className="life-section-title-group">
          <span className="life-section-eyebrow">Our Culture</span>
          <h2 className="life-section-heading">LIFE AT ORA</h2>
        </div>
        <button className="life-section-cta">Join Our Team <ArrowIcon/></button>
      </div>

      {/* Stats strip */}
      <div className="life-section-stats">
        {stats.map(s => (
          <div className="life-section-stat" key={s.label}>
            <span className="life-section-stat-num">{s.num}</span>
            <span className="life-section-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Z-pattern grid */}
      <div className="life-section-grid">

        {/* Card 1 — Wide */}
        <div className="life-section-card life-section-card-wide" style={{animationDelay:'0.15s'}}>
          <div className="life-section-card-img-wrapper">
            <img src={wideCards[0].img} alt={wideCards[0].title} className="life-section-card-img"/>
          </div>
          <div className="life-section-card-content">
            <span className="life-section-card-tag">{wideCards[0].tag}</span>
            <h3 className="life-section-card-title">{wideCards[0].title}</h3>
            <p className="life-section-card-text">{wideCards[0].text}</p>
            <span className="life-section-card-arrow">Learn More <ArrowIcon/></span>
          </div>
        </div>

        {/* Card 2 — Portrait overlay */}
        <div className="life-section-card life-section-card-portrait" style={{animationDelay:'0.27s'}}>
          <img src={portraitCards[0].img} alt={portraitCards[0].title} className="life-section-portrait-img"/>
          <DotsPattern/>
          <div className="life-section-portrait-overlay"/>
          <div className="life-section-portrait-stripe"/>
          <span className="life-section-portrait-badge">{portraitCards[0].badge}</span>
          <div className="life-section-portrait-content">
            <span className="life-section-portrait-tag">{portraitCards[0].subtag}</span>
            <h3 className="life-section-portrait-title">{portraitCards[0].title}</h3>
            <p className="life-section-portrait-text">{portraitCards[0].text}</p>
            <span className="life-section-portrait-arrow">Learn More <ArrowIcon/></span>
          </div>
        </div>

        {/* Card 3 — Portrait overlay */}
        <div className="life-section-card life-section-card-portrait" style={{animationDelay:'0.39s'}}>
          <img src={portraitCards[1].img} alt={portraitCards[1].title} className="life-section-portrait-img"/>
          <GridPattern/>
          <div className="life-section-portrait-overlay"/>
          <div className="life-section-portrait-stripe"/>
          <span className="life-section-portrait-badge">{portraitCards[1].badge}</span>
          <div className="life-section-portrait-content">
            <span className="life-section-portrait-tag">{portraitCards[1].subtag}</span>
            <h3 className="life-section-portrait-title">{portraitCards[1].title}</h3>
            <p className="life-section-portrait-text">{portraitCards[1].text}</p>
            <span className="life-section-portrait-arrow">Learn More <ArrowIcon/></span>
          </div>
        </div>

        {/* Card 4 — Wide */}
        <div className="life-section-card life-section-card-wide" style={{animationDelay:'0.51s'}}>
          <div className="life-section-card-img-wrapper">
            <img src={wideCards[1].img} alt={wideCards[1].title} className="life-section-card-img"/>
          </div>
          <div className="life-section-card-content">
            <span className="life-section-card-tag">{wideCards[1].tag}</span>
            <h3 className="life-section-card-title">{wideCards[1].title}</h3>
            <p className="life-section-card-text">{wideCards[1].text}</p>
            <span className="life-section-card-arrow">Learn More <ArrowIcon/></span>
          </div>
        </div>

      </div>

      {/* Testimonial */}
      <div className="life-section-testimonial">
        <div className="life-section-testimonial-body">
          <p className="life-section-quote">
            "At ORA, I'm not just building software – I'm creating tools that save lives.
            Every sprint review includes feedback from actual doctors using our systems."
          </p>
          <div className="life-section-author-box">
            <img src={sarahImg} alt="Sarah Chen" className="life-section-author-img"/>
            <div className="life-section-author-details">
              <span className="life-section-author-name">SARAH CHEN</span>
              <span className="life-section-author-role">Senior Backend Engineer</span>
            </div>
          </div>
        </div>
        <div className="life-section-testimonial-accent"/>
      </div>

    </div>
  </section>
);

export default LifeAtOra;