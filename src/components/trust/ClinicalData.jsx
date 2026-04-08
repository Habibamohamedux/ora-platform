import React, { useState } from "react";
import { ArrowUpRight, Shield, UserCheck, Globe2 } from "lucide-react";
import "../../pages/Trust.css";


// Dynamic data mapping for each tab
const clinicalTabsContent = {
  records: {
    label: "Medical Records Security",
    leftTitle: "Secure Handling of Medical Records",
    leftBody: "ORA implements multi-layered encryption, robust data segregation, and extensive lifecycle management to guarantee the total security of sensitive patient information.",
    rightListHeading: "RECORD SECURITY",
    rightList: ["Encryption At Rest", "Encryption In Transit", "Lifecycle Monitoring", "Secure Storage Protocols"],
    icon: Shield,
  },
  access: {
    label: "Controlled Professional Access",
    leftTitle: "Strictly Controlled Access for Professionals",
    leftBody: "ORA strictly manages system permissions, ensuring that only authorized healthcare personnel can access relevant medical information under defined least-privilege principles.",
    rightListHeading: "ACCESS CONTROLS",
    rightList: ["Role-Based Access Control (RBAC)", "Multifactor Authentication (MFA)", "User Activity Logging", "Session Management"],
    icon: UserCheck,
  },
  compliance: {
    label: "Global Health Data Compliance",
    leftTitle: "Adherence to Global Health Data Practices",
    leftBody: "Our systems and protocols are rigorously designed to meet or exceed relevant data privacy and security standards from various jurisdictions worldwide.",
    rightListHeading: "COMPLIANCE STANDARDS",
    rightList: ["HIPAA (US)", "GDPR (EU)", "PHIPA (Canada)", "PDPA (Singapore)"],
    icon: Globe2,
  }
};

const ClinicalData = () => {
  const [activeTabKey, setActiveTabKey] = useState("records");

  const currentTabContent = clinicalTabsContent[activeTabKey];
  const IconComponent = currentTabContent.icon;

  return (
    <section className="ora-clinical-data-wrapper">
      {/* Pink particle glow at the top, full width, like the inspo but pink */}
      <div className="ora-clinical-data-glow ora-clinical-data-glow-top"></div>
      
      <div className="ora-clinical-data-container">
        {/* Main Oversized Split Header */}
        <div className="ora-clinical-data-oversized-header">
          <div className="ora-clinical-data-headline-col">
            <h4 className="ora-clinical-data-numbered-title">5. Clinical Data Responsibility</h4>
            <h2 className="ora-clinical-data-main-headline">Handling Health Data with Care.</h2>
          </div>
          <div className="ora-clinical-data-intro-col">
            <p className="ora-clinical-data-intro-text">
              Health data requires the highest level of responsibility. ORA works with structured clinical data protocols to ensure accuracy, confidentiality, and compliance with healthcare standards.
            </p>
          </div>
        </div>

        {/* Tabbed Navigation */}
        <div className="ora-clinical-data-tabs-line-wrapper">
          <div className="ora-clinical-data-tabs">
            {Object.keys(clinicalTabsContent).map((key) => (
              <button
                key={key}
                className={`ora-clinical-data-tab ${activeTabKey === key ? "active" : ""}`}
                onClick={() => setActiveTabKey(key)}
              >
                {clinicalTabsContent[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Columns */}
        <div className="ora-clinical-data-content-area">
          {/* Left Column with title, text, and specific icon (Shield, User, or Globe) */}
          <div className="ora-clinical-data-content-left">
            {/* Watermark in the background */}
            <div className="ora-clinical-data-watermark ora-clinical-data-ora-pattern"></div>
            
            <div className="ora-clinical-data-left-details">
              <h3 className="ora-clinical-data-content-title">
                {currentTabContent.leftTitle}
              </h3>
              <p className="ora-clinical-data-content-body">
                {currentTabContent.leftBody}
              </p>
              
              <div className="ora-clinical-data-icon-frame">
                 <IconComponent size={64} strokeWidth={1.5} className="ora-clinical-data-pink-icon" />
              </div>

              {/* CTA with the pink circle and arrow */}
              <a href="#data-handling" className="ora-clinical-data-cta">
                <span className="ora-clinical-data-cta-text">→ Clinical Data Handling.</span>
                <div className="ora-clinical-data-cta-button ora-clinical-data-cta-pink-glow">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column with the detailed detailed list, like a list of measures */}
          <div className="ora-clinical-data-content-right">
            <h4 className="ora-clinical-data-list-heading">
              {currentTabContent.rightListHeading}
            </h4>
            <ul className="ora-clinical-data-prioritized-list">
              {currentTabContent.rightList.map((item, index) => (
                <li key={index} className="ora-clinical-data-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Pink particle glow at the bottom, full width, like the inspo but pink */}
      <div className="ora-clinical-data-glow ora-clinical-data-glow-bottom"></div>
    </section>
  );
};

export default ClinicalData;