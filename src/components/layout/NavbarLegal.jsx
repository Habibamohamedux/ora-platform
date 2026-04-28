import React from 'react';
import LogoLegal from '../common/LogoLegal.jsx';
import NavActionsLegal from '../common/NavActionsLegal';
import './NavbarLegal.css';
import LegalContactBtn from '../common/LegalContactBtn';
import { useLanguage } from '../../i18n/LanguageContext';

const NavbarLegal = () => {
  const { t } = useLanguage();
  return (
    <nav className="navbar2">
      <div className="navbar-inner">
        <LogoLegal name={t('legal.center')} />
        <NavActionsLegal />
        <LegalContactBtn text={t('legal.contactUs')} />
      </div>
    </nav>
  );
};

export default NavbarLegal;
