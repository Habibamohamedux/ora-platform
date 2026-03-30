import React from 'react';
import Logo from '../common/Logo';
import NavActions from '../common/NavActions';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Logo />
        <NavActions />
      </div>
    </nav>
  );
};

export default Navbar;