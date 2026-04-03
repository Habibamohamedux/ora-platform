import React from 'react';
import './minititle.css';

const MiniTitle = ({ text, className = "" }) => {
  return (
    <h5 className={`sub-label ${className}`}>
      {text}
    </h5>
  );
};

export default MiniTitle;