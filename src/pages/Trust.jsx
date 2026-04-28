import React from 'react';
import Navbar from '../components/layout/Navbar';
import Seo from '../components/seo/Seo';
import HeroInvest from '../components/sections/HeroInvest';
import trustVideo from '../assests/video/Trust.mp4'; 
import PrivacyByDesign from '../components/trust/PrivacybyDesign';
import DataProtection from '../components/trust/DataProtection';
import EthicalResearch from '../components/trust/EthicalResearch';
import ClinicalData from '../components/trust/ClinicalData';
import Transparency from '../components/trust/Transparency';
import LegalFramework from '../components/trust/LegalFramework';
import { useLanguage } from '../i18n/LanguageContext';
import './Trust.css';

const Trust = () => {
  const { t } = useLanguage();

  return (
    <div className="trust-page-wrapper">
        <Seo
          title="Trust & Privacy | ORA Maternal Health Platform"
          description="Learn how ORA protects maternal health data with privacy-by-design, ethical AI, secure cloud storage, clinical safeguards, and transparent legal standards."
          keywords={[
            'maternal health privacy',
            'health data security',
            'ethical AI healthcare',
            'privacy by design',
          ]}
          schemaType="AboutPage"
        />
        <Navbar />
        
        {/* Use the Hero component with Trust-specific content */}
        <HeroInvest 
          videoSrc={trustVideo}
          titleLine1={t("trustPage.titleLine1")}
          titleLine2={t("trustPage.titleLine2")}
          subtitle={t("trustPage.subtitle")}
          primaryBtnText={t("trustPage.primary")}
          secondaryBtnText={t("trustPage.secondary")}
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
