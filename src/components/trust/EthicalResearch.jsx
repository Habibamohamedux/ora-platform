import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "../../pages/Trust.css";
const tabContent = {
  ethical: {
    title: "Responsible Innovation, Always.",
    body: "ORA’s AI and data systems are developed under strict ethical guidelines. We ensure that all research and data usage respects user consent, transparency, and medical responsibility in women's digital health.",
    ctaText: "View Research Ethics",
    commitments: [
      "Ethical AI decision-making",
      "Transparent research practices",
      "Respecting human oversight in healthcare",
    ],
  },
  consent: {
    title: "Your Data, Your Control.",
    body: "We believe privacy is a fundamental right. ORA empowers users with absolute control over their reproductive and maternal health data, ensuring it is never shared or utilized without explicit, informed consent.",
    ctaText: "Read Privacy Policy",
    commitments: [
      "End-to-end data encryption",
      "Strict opt-in only data sharing",
      "The right to be forgotten",
    ],
  },
  oversight: {
    title: "Guided by Experts.",
    body: "Our technology is built to assist, not replace, medical professionals. Every feature, algorithm, and health insight is rigorously vetted by our board of certified advisors specializing in maternal and postnatal care.",
    ctaText: "Meet Our Advisors",
    commitments: [
      "Clinical validation protocols",
      "Board-certified advisory panel",
      "Evidence-based health insights",
    ],
  },
};

const EthicalResearch = () => {
  const [activeTab, setActiveTab] = useState("ethical");

  // Get the current content based on the active tab state
  const currentData = tabContent[activeTab];

  return (
    <section className="ethical-research-section">
      {/* Top Header Section */}
      <div className="ethical-research-header">
        <div className="ethical-research-headline-col">
          <h2 className="ethical-research-title">
            Ethical Research <br /> & AI Use.
          </h2>
        </div>
        <div className="ethical-research-desc-col">
          <p className="ethical-research-intro-bold">
            {/* Keeping this static as the overarching theme, or you can make it dynamic too */}
            Advancing Care with Integrity.
          </p>
          <p className="ethical-research-intro-text">
            Explore how ORA maintains the highest standards of safety, privacy, 
            and clinical accuracy across our entire platform.
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
            Ethical Frameworks
          </button>
          <button
            className={`ethical-research-tab ${
              activeTab === "consent" ? "active" : ""
            }`}
            onClick={() => setActiveTab("consent")}
          >
            Consent & Privacy
          </button>
          <button
            className={`ethical-research-tab ${
              activeTab === "oversight" ? "active" : ""
            }`}
            onClick={() => setActiveTab("oversight")}
          >
            Medical Oversight
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
          <h4 className="ethical-research-list-heading">COMMITMENTS</h4>
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