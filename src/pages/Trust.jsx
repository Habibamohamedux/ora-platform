import React from 'react';
import Navbar from '../components/layout/Navbar';
import PrivacyByDesign from '../components/trust/PrivacybyDesign';
import './Trust.css';


const Trust = () => {
  return (
    <div className="trust-page-wrapper">
      <Navbar />
      
      <PrivacyByDesign />

 

    </div>
  );
};

export default Trust;
