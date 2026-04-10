import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroInvest from '../components/sections/HeroInvest';
import trustVideo from '../assests/video/Trust.mp4'; 
import PrivacyByDesign from '../components/trust/PrivacybyDesign';
import DataProtection from '../components/trust/DataProtection';
import EthicalResearch from '../components/trust/EthicalResearch';
import ClinicalData from '../components/trust/ClinicalData';
import Transparency from '../components/trust/Transparency';
import LegalFramework from '../components/trust/LegalFramework';
import './Trust.css';

const Trust = () => {
  return (
    <div className="trust-page-wrapper">
        <Navbar />
        
        {/* Use the Hero component with Trust-specific content */}
        <HeroInvest 
          videoSrc={trustVideo}
          titleLine1="Built on a"
          titleLine2="Foundation of Trust"
          subtitle="At ORA, we prioritize data privacy and ethical integrity to ensure the highest standards of maternal care."
          primaryBtnText="Our Privacy Policy"
          secondaryBtnText="Security Standards"
          onPrimaryClick={() => console.log("Privacy clicked")}
          onSecondaryClick={() => console.log("Security clicked")}
        />

        <PrivacyByDesign />
        <DataProtection />
        <EthicalResearch />
        <ClinicalData />
        <Transparency />
        <LegalFramework />
    </div>
  );
};

export default Trust;