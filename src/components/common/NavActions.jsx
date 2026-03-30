import React, { useState } from 'react';
import './NavActions.css';

const NavActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-actions">
      <a href="#vision" className="vision-link hover-target">Vision</a>
      
      <button 
        className={`menu-toggle hover-target ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>
    </div>
  );
};

export default NavActions;