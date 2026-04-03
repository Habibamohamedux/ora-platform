import React from 'react';
import './lightparagraph.css';

const LightParagraph = ({ text, width = "100%", className = "" }) => {
  return (
    <p 
      className={`roboto-p ${className}`} 
      style={{ maxWidth: width }}
    >
      {text}
    </p>
  );
};

export default LightParagraph;