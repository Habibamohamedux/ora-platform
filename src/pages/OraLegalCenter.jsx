import React, { useState } from "react";
import "./OraLegalCenter.css"; 
import NavbarLegal from '../components/layout/NavbarLegal';
import LegalTitle from '../components/legal/LegalTitle';
import LegalDate from '../components/legal/LegalDate';
import LegalUpdates from '../components/legal/LegalUpdates';
import LegalParagraph from '../components/legal/LegalParagraph';
import LegalSidebar from '../components/legal/LegalSidebar';
import LegalSectionBlock from '../components/legal/LegalSectionBlock';

// Inline data replacing the external import
const policyData = [
  {
    id: 'introduction',
    menuLabel: '1. INTRODUCTION',
    sectionTitle: 'INTRODUCTION',
    sectionSubtitle: null,
    cards: [
      {
        cardTitle: null,
        content: (
          <>
            <p>ORA develops digital healthcare technologies designed to improve women’s health monitoring, research, and clinical decision support. By accessing our website or services, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
            <p style={{ marginTop: '12px' }}>This policy applies to all visitors, registered users, healthcare partners, and researchers who interact with the ORA platform.</p>
          </>
        )
      }
    ]
  },
  {
    id: 'information-we-collect',
    menuLabel: '2. INFORMATION WE COLLECT',
    sectionTitle: 'INFORMATION WE COLLECT',
    sectionSubtitle: 'ORA MAY COLLECT SEVERAL TYPES OF INFORMATION TO PROVIDE AND IMPROVE OUR SERVICES.',
    cards: [
      {
        cardTitle: 'PERSONAL INFORMATION',
        content: (
          <>
            <p>Information that can identify you personally, including:</p>
            <ul className="legal-list">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Professional credentials (for healthcare providers)</li>
            </ul>
          </>
        )
      },
      {
        cardTitle: 'ACCOUNT INFORMATION',
        content: (
          <>
            <p>When creating an ORA account we may collect:</p>
            <ul className="legal-list">
              <li>Username and password</li>
              <li>Profile preferences</li>
              <li>Account activity logs</li>
            </ul>
          </>
        )
      }
    ]
  },
  {
    id: 'device-information',
    menuLabel: '3. DEVICE INFORMATION',
    sectionTitle: 'DEVICE INFORMATION',
    sectionSubtitle: null,
    cards: [
      {
        cardTitle: 'DEVICE INFORMATION',
        content: (
          <>
            <p>We may automatically collect technical data including:</p>
            <ul className="legal-list">
              <li>Device type</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Device identifiers</li>
            </ul>
          </>
        )
      }
    ]
  }
];

const OraLegalCenter = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    // Smooth Scroll Function
    const handleSectionClick = (id) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            // Calculates position and subtracts 40px to account for sticky spacing
            const y = element.getBoundingClientRect().top + window.scrollY - 40;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <>
            <NavbarLegal />
            <section className="ora-legal-center">
                <div className="legal-header-row">
                    <LegalTitle>ORA — PRIVACY POLICY</LegalTitle>
                    <div className="legal-meta-group">
                        <LegalDate monthYear="March 2026" />
                        <LegalUpdates monthYear="March 2026" />
                    </div>
                </div>

                <LegalParagraph>
                    ORA Technologies (“<strong>ORA</strong>”, “<strong>we</strong>”, “<strong>our</strong>”, or “<strong>us</strong>”) 
                    is committed to protecting the privacy and security of our users, including patients, healthcare professionals, and researchers. This Privacy Policy explains how we collect, use, process, and protect information when you access the ORA website, digital platforms, and connected healthcare technologies.
                </LegalParagraph>
                <div className="legal-gradient-hr" />

                <div className="legal-layout-grid">
                    {/* Left Column now receives the scroll function */}
                    <LegalSidebar 
                      sections={policyData} 
                      activeSectionId={activeSection} 
                      onSectionClick={handleSectionClick}
                    />

                    {/* Right Column */}
                    <div className="legal-main-content">
                        {policyData.map((section) => (
                            <LegalSectionBlock key={section.id} sectionData={section} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default OraLegalCenter;