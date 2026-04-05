import React from 'react';
import { Link } from 'react-router-dom';
import './OraLegalFooter.css';
import LogoLegal from '../common/LogoLegal.jsx';

const OraLegalFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="ora-legal-footer">
      {/* Animated Glowing Top Border */}
      <div className="footer-glow-line"></div>

      <div className="footer-container">
        <div className="footer-top">
          {/* Brand Section */}
          <div className="footer-brand">
            <LogoLegal name="ORA Legal Center" />
            <p className="footer-tagline">
              Innovating women's health through intelligent technology and ethical research.
            </p>
          </div>

          {/* Quick Contact & Action */}
          <div className="footer-actions">
            <a href="mailto:privacy@ora-healthtech.com" className="footer-contact-link">
              <span className="link-text">privacy@ora-healthtech.com</span>
              <div className="link-underline"></div>
            </a>
            
            <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
              <span className="arrow-up">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              </span>
              <span className="btn-text">TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {new Date().getFullYear()} ORA Technologies Ltd. All rights reserved.
            </p>
            <div className="footer-mini-links">
              <Link to="/privacy-policy" onClick={scrollToTop}>Privacy</Link>
              <span className="dot">•</span>
              <Link to="/terms-of-use" onClick={scrollToTop}>Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default OraLegalFooter;