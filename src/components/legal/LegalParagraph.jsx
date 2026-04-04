import React from 'react';
import '../../pages/OraLegalCenter.css';

const LegalParagraph = ({ children, className = "" }) => {
  return (
    <p className={`legal-paragraph ${className}`}>
      {children}
    </p>
  );
};

export default LegalParagraph;