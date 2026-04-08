import React from 'react';
import Navbar from '../components/layout/Navbar';
import PrivacyByDesign from '../components/trust/PrivacybyDesign';
import DataProtection from '../components/trust/DataProtection';
import EthicalResearch from '../components/trust/EthicalResearch';
import ClinicalData from '../components/trust/ClinicalData';
import './Trust.css';


const Trust = () => {
  return (
    <div className="trust-page-wrapper">
      <Navbar />
      
      <PrivacyByDesign />
        <DataProtection />
        <EthicalResearch />
        <ClinicalData />

    </div>
  );
};

export default Trust;
