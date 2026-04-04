import React from 'react';
import '../../pages/OraLegalCenter.css';

const LegalTitle = ({ children, className = "" }) => {
  return (
    <h1 className={`legal-title ${className}`}>
      {children}
    </h1>
  );
};

export default LegalTitle;