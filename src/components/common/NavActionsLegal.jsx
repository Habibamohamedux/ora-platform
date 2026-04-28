import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import './NavActionsLegal.css';

const NavActionsLegal = () => {
  const { t } = useLanguage();
  const links = [
    { label: t('legal.privacy'), path: '/privacy-policy' },
    { label: t('legal.terms'), path: '/terms-of-use' },
    { label: t('legal.cookies'), path: '/cookie-policy' },
    { label: t('legal.research'), path: '/research-ethics' },
    { label: t('legal.clinical'), path: '/clinical-data-handling' },
  ];

  return (
    <nav className="nav-legal-wrapper">
      <div className="nav-legal-container">
        {links.map((link, index) => (
          <React.Fragment key={link.label}>
            <NavLink 
              to={link.path} 
              className={({ isActive }) => 
                isActive ? "nav-legal-link active-legal-link" : "nav-legal-link"
              }
            >
              {link.label}
            </NavLink>
            {/* Render divider only if it's not the last link */}
            {index < links.length - 1 && <div className="nav-legal-divider"></div>}
          </React.Fragment>
        ))}
        
        {/* Separator for the Back Link */}
        <div className="nav-legal-divider"></div>

        <NavLink to="/" className="nav-legal-link back-link">
          {t('legal.back')}
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
        </NavLink>
      </div>
    </nav>
  );
};

export default NavActionsLegal;
