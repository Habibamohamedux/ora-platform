// components/sections/TrustSection.jsx
import React from 'react';

const TrustSection = ({ headline, content, points, cta, id, href }) => {
  return (
    <section className="trust-section" id={id}>
      <div className="trust-container">
        <h2 className="trust-headline">{headline}</h2>
        <div className="trust-content">
          <p className="trust-text">{content}</p>
          
          {points && (
            <ul className="trust-points">
              {points.map((point, index) => (
                <li key={index} className="trust-point-item">
                  <span className="dot-icon" /> {point}
                </li>
              ))}
            </ul>
          )}
          
          {href ? (
            <a href={href} className="trust-cta">
              {cta}
            </a>
          ) : (
            <span className="trust-cta">{cta}</span>
          )}
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
};

export default TrustSection;
