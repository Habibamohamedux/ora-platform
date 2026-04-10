import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1️⃣ Import useNavigate
import './NavActions.css';

// 2️⃣ Added 'path' to each item so the router knows where to go
// 2️⃣ Added 'path' to each item so the router knows where to go
const menuData = [
  {
    category: 'SYSTEM',
    items: [
      { title: 'Ecosystem', path: '/ecosystem', desc: 'A unified overview of how ORA connects AI, wearable technology, and clinical care into one seamless system.' },
      { title: 'Intelligence', path: '/intelligence', desc: 'The AI engine powering predictions, insights, and real-time maternal health analysis.' },
      { title: 'Clinical', path: '/clinical', desc: 'A dedicated layer for doctors to monitor patients, manage risks, and provide informed care.' },
    ],
  },
  {
    category: 'EXPERIENCE',
    items: [
      { title: 'Companion', path: '/companion', desc: 'Your everyday interface for tracking, guidance, and personalized pregnancy support.' },
      { title: 'Pulse', path: '/pulse', desc: "Real-time biometric monitoring through ORA's wearable technology, capturing vital health signals." },
    ],
  },
  {
    category: 'FOUNDATION',
    items: [
      { title: 'Origin', path: '/origin', desc: "The story, vision, and purpose behind ORA and its mission to redefine maternal care." },
    ],
  },
  {
    category: 'KNOWLEDGE',
    items: [
      { title: 'Insights', path: '/insights', desc: 'Research, articles, and data-driven content grounded in medical evidence and innovation.' },
      { title: 'Guidance', path: '/guidance', desc: 'Practical resources, educational content, and step-by-step support throughout the maternal journey.' },
    ],
  },
  {
    category: 'CONNECTION',
    items: [
      { title: 'Circle', path: '/circle', desc: 'A supportive space for shared experiences, community stories, and emotional connection.' },
    ],
  },
  {
    category: 'TRUST',
    items: [
      { title: 'Trust', path: '/trust', desc: 'Privacy, data protection, and the ethical standards that ensure your information is always secure.' },
    ],
  },
  {
    category: 'BUSINESS',
    items: [
      { title: 'Invest', path: '/invest', desc: 'Opportunities to partner, collaborate, and support the future of maternal health technology.' },
    ],
  },
  {
    category: 'CAREERS',
    items: [
      { title: 'Futures', path: '/futures', desc: 'Join our mission to revolutionize maternal health. Explore opportunities to build the future of care with ORA.' },
    ],
  },
];

/* ─────────────────────────────────────────────
   StaggeredChars — per-letter slide-up animation
───────────────────────────────────────────── */
const StaggeredChars = ({ text, isActive }) => (
  <>
    {text.split('').map((char, i) => (
      <span
        key={i}
        style={{
          display: 'inline-block',
          transform: isActive ? 'translateY(0%)' : 'translateY(110%)',
          opacity:   isActive ? 1 : 0,
          transition: 'transform 0.48s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.36s ease',
          transitionDelay: isActive
            ? `${i * 0.026}s`
            : `${Math.max(0, (text.length - i - 1) * 0.016)}s`,
          whiteSpace: char === ' ' ? 'pre' : 'normal',
        }}
      >
        {char}
      </span>
    ))}
  </>
);

// 3️⃣ Added onClick prop to MenuItem
const MenuItem = ({ item, globalIndex, isMenuOpen, onHover, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="menu-item"
      onMouseEnter={() => { setHovered(true); onHover(item); }}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(item.path)} // Trigger navigation on click
      style={{
        cursor: 'pointer', // Ensure it looks clickable
        transform:  isMenuOpen ? 'translateX(0)'   : 'translateX(-28px)',
        opacity:    isMenuOpen ? 1                  : 0,
        transition: `transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${0.18 + globalIndex * 0.04}s,
                     opacity   0.50s ease                           ${0.13 + globalIndex * 0.04}s`,
      }}
    >
      <div className="item-inner">
        <span className="item-rest">{item.title}</span>
        <span className="item-hover" aria-hidden="true">
          <StaggeredChars text={item.title} isActive={hovered} />
        </span>
      </div>
    </li>
  );
};

/* ─────────────────────────────────────────────
   NavActions
───────────────────────────────────────────── */
const NavActions = () => {
  const [isOpen,         setIsOpen]         = useState(false);
  const [triggerHovered, setTriggerHovered] = useState(false);
  const [activeDetail,   setActiveDetail]   = useState(null);
  const [animKey,        setAnimKey]        = useState(0);

  const navigate = useNavigate(); // 4️⃣ Initialize the router navigation

  const isActive = isOpen || triggerHovered;

  const handleHover = (item) => {
    setActiveDetail(item);
    setAnimKey(k => k + 1);
  };

  const handleOpen  = () => { setIsOpen(true);  setActiveDetail(null); };
  const handleClose = () => { setIsOpen(false); setActiveDetail(null); };

  // 5️⃣ Create a function to handle the click: Close menu, then navigate
  const handleItemClick = (path) => {
    handleClose(); // Close the overlay first
    setTimeout(() => {
      navigate(path); // Navigate to the new page
    }, 300); // Optional: tiny delay so the menu closing animation can start before the page swaps
  };

  let globalIndex = 0;

  return (
    <div className="ora-nav">
      <div
        className="nav-trigger"
        onMouseEnter={() => setTriggerHovered(true)}
        onMouseLeave={() => setTriggerHovered(false)}
        onClick={handleOpen}
        role="button"
        aria-label="Open ORA navigation"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleOpen()}
      >
        <div className="trigger-label-wrap">
          <span className={`trigger-text row-a${isActive ? ' hide' : ''}`}>
            SYSTEM
          </span>
          <span className={`trigger-text row-b${isActive ? ' show' : ''}`}>
            ORA SYSTEM NAVIGATION
          </span>
        </div>

        {/* 9-dot grid — 32×32px box via CSS */}
        <div className={`dot-grid${isActive ? ' s2' : ''}`}>
          {[...Array(9)].map((_, i) => (
            <span key={i} className={`dot dot-${i + 1}`} />
          ))}
        </div>
      </div>
      <div
        className={`menu-overlay${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="ORA System Navigation menu"
      >
        <div className="glow g1" />
        <div className="glow g2" />
        <div className="glow g3" />

        {/* Header */}
        <div className="mh">
          <span className="mh-brand">ORA · Maternal Health</span>
          <span className="mh-center">ORA SYSTEM NAVIGATION</span>
          <button className="close-btn" onClick={handleClose} aria-label="Close navigation">
            Close
          </button>
        </div>

        {/* Body */}
        <div className="mb">

          <div className="ml">
            {menuData.map(({ category, items }) => (
              <div key={category}>
                <p className="cat-label">{category}</p>
                <ul className="item-list">
                  {items.map((item) => {
                    const idx = globalIndex++;
                    return (
                      <MenuItem
                        key={item.title}
                        item={item}
                        globalIndex={idx}
                        isMenuOpen={isOpen}
                        onHover={handleHover}
                        onClick={handleItemClick} // 6️⃣ Pass the function down
                      />
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mdiv" aria-hidden="true" />

          <div className="mr">
            {activeDetail ? (
              <div key={animKey}>
                <p className="d-eye">— Overview</p>
                <h2 className="d-title">{activeDetail.title}</h2>
                <div className="d-rule" />
                <p className="d-desc">{activeDetail.desc}</p>
              </div>
            ) : (
              <p className="d-placeholder" style={{ opacity: isOpen ? 1 : 0 }}>
                Hover any item<br />to explore.
              </p>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="mf">
          <span>© {new Date().getFullYear()} ORA Health — All rights reserved</span>
          <span>Redefining Maternal Care</span>
        </div>

      </div>
    </div>
  );
};

export default NavActions;