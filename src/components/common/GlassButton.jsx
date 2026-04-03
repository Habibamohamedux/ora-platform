import React from 'react';
import './GlassButton.css';

const GlassButton = ({ text, onClick, className = "" }) => {
  return (
    <button className={`glass-btn ${className}`} onClick={onClick}>
      <span className="glass-btn-content">{text}</span>
      <div className="glass-btn-shine"></div>
    </button>
  );
};

export default GlassButton;