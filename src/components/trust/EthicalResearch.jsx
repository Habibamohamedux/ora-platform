import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import "../../pages/Trust.css";

const EthicalResearch = () => {
  const [activeTab, setActiveTab] = useState("ethical");
  const { t } = useLanguage();
  const tabContent = t("trustEthical.content");
  const tabs = t("trustEthical.tabs");
  const titleLines = t("trustEthical.title").split("\n");

  // Get the current content based on the active tab state
  const currentData = tabContent[activeTab];

  return (
    <section className="ethical-research-section">
      {/* Top Header Section */}
      <div className="ethical-research-header">
        <div className="ethical-research-headline-col">
          <h2 className="ethical-research-title">
            {titleLines[0]} <br /> {titleLines[1]}
          </h2>
        </div>
        <div className="ethical-research-desc-col">
          <p className="ethical-research-intro-bold">
            {t("trustEthical.introBold")}
          </p>
          <p className="ethical-research-intro-text">
            {t("trustEthical.introText")}
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="ethical-research-tabs-wrapper">
        <div className="ethical-research-tabs">
          <button
            className={`ethical-research-tab ${
              activeTab === "ethical" ? "active" : ""
            }`}
            onClick={() => setActiveTab("ethical")}
          >
            {tabs.ethical}
          </button>
          <button
            className={`ethical-research-tab ${
              activeTab === "consent" ? "active" : ""
            }`}
            onClick={() => setActiveTab("consent")}
          >
            {tabs.consent}
          </button>
          <button
            className={`ethical-research-tab ${
              activeTab === "oversight" ? "active" : ""
            }`}
            onClick={() => setActiveTab("oversight")}
          >
            {tabs.oversight}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="ethical-research-content-area">
        {/* Left Column: Dynamic Main Content & CTA */}
        <div className="ethical-research-content-left">
          {/* Subtle geometric watermark */}
          <div className="ethical-research-watermark">
            <div className="ethical-research-shape-1"></div>
            <div className="ethical-research-shape-2"></div>
          </div>

          <div className="ethical-research-left-inner">
            <h3 className="ethical-research-content-title">
              {currentData.title}
            </h3>
            <p className="ethical-research-content-body">
              {currentData.body}
            </p>

            <a href="#learn-more" className="ethical-research-cta">
              <span className="ethical-research-cta-text">
                {currentData.ctaText}
              </span>
              <div className="ethical-research-cta-icon">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic List */}
        <div className="ethical-research-content-right">
          <h4 className="ethical-research-list-heading">{t("trustEthical.listHeading")}</h4>
          <ul className="ethical-research-list">
            {currentData.commitments.map((item, index) => (
              <li key={index} className="ethical-research-list-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EthicalResearch;
