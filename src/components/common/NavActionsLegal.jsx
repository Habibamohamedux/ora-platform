import React from 'react';
import { Link } from 'react-router-dom';
import './NavActionsLegal.css';

const NavActionsLegal = () => {
  const links = [
    { label: 'PRIVACY POLICY', path: '/privacy-policy' },
    { label: 'TERMS OF USE', path: '/terms-of-use' },
    { label: 'COOKIE POLICY', path: '/cookie-policy' },
    { label: 'RESEARCH ETHICS', path: '/research-ethics' },
    { label: 'CLINICAL DATA HANDLING', path: '/clinical-data-handling' },
  ];

  return (
    <nav className="nav-legal-wrapper">
      <div className="nav-legal-container">
        {links.map((link, index) => (
          <React.Fragment key={link.label}>
            <Link to={link.path} className="nav-legal-link">
              {link.label}
            </Link>
            <div className="nav-legal-divider"></div>
          </React.Fragment>
        ))}
        
        {/* Special "BACK TO ORA" link with arrow */}
        <Link to="/" className="nav-legal-link back-link">
          BACK TO ORA
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="arrow-icon"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default NavActionsLegal;