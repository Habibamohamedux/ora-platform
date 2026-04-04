import React from 'react';
import './LegalContactBtn.css';

// Added variant prop: can be "pink" or "grey"
const LegalContactBtn = ({ onClick, text = "CONTACT US", showIcon = true, variant = "pink" }) => {
  return (
    <button className={`legal-contact-btn ${variant}`} onClick={onClick}>
      {text}
      {showIcon && (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="contact-icon"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )}
    </button>
  );
};

export default LegalContactBtn;