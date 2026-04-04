import React from 'react';
import '../../pages/OraLegalCenter.css';

const LegalDate = ({ monthYear }) => {
  return (
    <div className="legal-info-container">
      <span className="legal-label">Effective Date: </span>
      <span className="legal-value grey-bold">{monthYear}</span>
    </div>
  );
};

export default LegalDate;