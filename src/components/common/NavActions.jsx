import React, { useState } from 'react';
import './NavActions.css';

const menuData = {
  SYSTEM: [
    { title: "Ecosystem", desc: "A unified overview of how ORA connects AI, wearable technology, and clinical care." },
    { title: "Intelligence", desc: "The AI engine powering predictions, insights, and real-time maternal health analysis." },
    { title: "Clinical", desc: "A dedicated layer for doctors to monitor patients and manage risks." }
  ],
  EXPERIENCE: [
    { title: "Companion", desc: "Your everyday interface for tracking, guidance, and personalized pregnancy support." },
    { title: "Pulse", desc: "Real-time biometric monitoring through ORA’s wearable technology." }
  ],
  KNOWLEDGE: [
    { title: "Insights", desc: "Research, articles, and data-driven content grounded in medical evidence." },
    { title: "Guidance", desc: "Practical resources and step-by-step support throughout the journey." }
  ]
};

const NavActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeDetail, setActiveDetail] = useState(null);

  const isState02 = isOpen || isHovered;

  return (
    <div className="ora-navigation">
      {/* TRIGGER BAR */}
      <div 
        className="nav-trigger"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`nav-label ${isState02 ? 'active' : ''}`}>
          {isState02 ? "ORA SYSTEM NAVIGATION" : "SYSTEM"}
        </span>
        
        <div className={`dot-grid ${isState02 ? 'state-02' : 'state-01'}`}>
          {[...Array(9)].map((_, i) => (
            <span key={i} className={`dot dot-${i + 1}`}></span>
          ))}
        </div>
      </div>

      {/* FULL SCREEN MENU */}
      <div className={`side-menu-overlay ${isOpen ? 'show' : ''}`}>
        <div className="menu-container">
          <div className="menu-columns">
            {Object.entries(menuData).map(([category, items]) => (
              <div key={category} className="menu-group">
                <h5 className="category-title">{category}</h5>
                <ul className="item-list">
                  {items.map((item) => (
                    <li 
                      key={item.title}
                      onMouseEnter={() => setActiveDetail(item)}
                      className="menu-item"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* PARALLAX DESCRIPTION BOX */}
          <div className="description-panel">
            {activeDetail && (
              <div className="detail-content">
                <h2 className="detail-title">{activeDetail.title}</h2>
                <p className="detail-text">{activeDetail.desc}</p>
              </div>
            )}
          </div>
        </div>
        
        {/* CLOSE BUTTON (Visual only, click anywhere or trigger to close) */}
        <button className="close-overlay" onClick={() => setIsOpen(false)}>CLOSE</button>
      </div>
    </div>
  );
};

export default NavActions;