import React, { useState, useEffect } from 'react';
import './NotificationCookies.css';

const NotificationCookies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already accepted/closed it
    const consent = localStorage.getItem('ora-cookie-consent');
    if (!consent) {
      // Delay entrance slightly for a premium feel
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem('ora-cookie-consent', 'accepted');
  };

  const handleClose = () => {
    setIsVisible(false);
    // Optional: Keep it hidden for the current session only
    localStorage.setItem('ora-cookie-consent', 'dismissed');
  };

  if (!isVisible) return null;

  return (
    <div className={`cookie-notification ${isVisible ? 'slide-up' : ''}`}>
      <div className="cookie-content">
        <div className="cookie-icon-wrapper">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cookie-icon">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M11 11H11.01M15 13H15.01M9 15H9.01M13 17H13.01M8 9H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M21 12C21 12 19 11 18 9C17 7 18 3 18 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        
        <p className="cookie-text">
          We use third-party cookies to provide you the best user experience and for performance analytics.
        </p>

        <div className="cookie-actions">
          <button className="cookie-accept-btn" onClick={handleAccept}>
            Accept
          </button>
          <button className="cookie-close-btn" onClick={handleClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationCookies;