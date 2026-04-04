import React from 'react';
import '../../pages/OraLegalCenter.css';

const LegalUpdates = ({ monthYear }) => {
  return (
    <div className="legal-info-container">
      <span className="legal-label">Last Updated: </span>
      <span className="legal-value green-bold">{monthYear}</span>
    </div>
  );
};

export default LegalUpdates;