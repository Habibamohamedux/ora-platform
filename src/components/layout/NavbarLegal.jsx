import React from 'react';
import LogoLegal from '../common/LogoLegal.jsx';
import NavActionsLegal from '../common/NavActionsLegal';
import './NavbarLegal.css';
import LegalContactBtn from '../common/LegalContactBtn';

const NavbarLegal = () => {
  return (
    <nav className="navbar2">
      <div className="navbar-inner">
<LogoLegal name="ORA Legal Center" />
        <NavActionsLegal />
        <LegalContactBtn />
      </div>
    </nav>
  );
};

export default NavbarLegal;