import React from 'react';
import '../../pages/OraLegalCenter.css';

const LegalSidebar = ({ sections, activeSectionId }) => {
  return (
    <aside className="legal-sidebar">
      {/* Table of Contents */}
      <div className="toc-container">
        <h4 className="toc-title">Contents</h4>
        <ul className="toc-list">
          {sections.map((section) => (
            <li 
              key={section.id} 
              className={`toc-item ${activeSectionId === section.id ? 'active' : ''}`}
            >
              <a href={`#${section.id}`}>{section.menuLabel}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Download PDF Card */}
      <div className="download-pdf-card">
        <div className="pdf-icon">🖨️</div> {/* Replace with actual SVG/Icon */}
        <p className="download-text">DOWNLOAD FULL POLICY AS PDF</p>
        <a href="#" className="download-link">DOWNLOAD PDF &rarr;</a>
      </div>

      {/* Contact Information */}
      <div className="legal-contact-info">
        <p>FOR QUESTIONS REGARDING THIS PRIVACY POLICY OR ORA'S DATA PRACTICES, PLEASE CONTACT US.</p>
        <p>ORA TECHNOLOGIES — PRIVACY OFFICE</p>
        
        <div className="contact-block">
          <span>EMAIL:</span>
          <a href="mailto:PRIVACY@ORA-HEALTHTECH.COM">PRIVACY@ORA-HEALTHTECH.COM</a>
        </div>
        
        <div className="contact-block">
          <span>SUPPORT:</span>
          <a href="mailto:SUPPORT@ORA-HEALTHTECH.COM">SUPPORT@ORA-HEALTHTECH.COM</a>
        </div>

        <div className="contact-block">
          <span>HEAD OFFICE:</span>
          <span>ORA TECHNOLOGIES</span>
          <span>HEALTH INNOVATION DISTRICT</span>
          <span>CAIRO, EGYPT</span>
        </div>
      </div>
    </aside>
  );
};

export default LegalSidebar;