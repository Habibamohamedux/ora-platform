import React, { useState, useEffect } from 'react';
import { useLanguage } from "../../i18n/LanguageContext";
import "../../pages/Trust.css";
// Added slight staggering so the float feels organic and random
const PILL_LAYOUT = [
  { top: '15%', left: '12%', delay: '0s' },
  { top: '18%', right: '14%', delay: '0.2s' },
  { top: '45%', left: '6%', delay: '0.4s' },
  { top: '40%', right: '8%', delay: '0.6s' },
  { top: '72%', left: '16%', delay: '0.8s' },
  { top: '68%', right: '18%', delay: '1.0s' },
  { top: '80%', right: '42%', delay: '1.2s' }, 
];

const STATS = [
  { value: '99', sup: '%', label: 'Data accuracy rate' },
  { value: '50', sup: '+', label: 'Healthcare systems integrated' },
  { value: '100', sup: '%', label: 'HIPAA & GDPR compliant' },
  { value: '3', sup: null, label: 'Layers of access control' },
];

const PARTNERS = [
  { name: 'HL7', badge: 'FHIR' },
  { name: 'DICOM', badge: 'v3.0' },
  { name: 'ISO', badge: '27001' },
  { name: 'HIPAA', badge: 'CFR' },
  { name: 'OpenEHR', badge: 'R1' },
];

// Helper component to animate the numbers smoothly
const AnimatedStat = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const duration = 2000; // Increased to 2 seconds for a smoother count
    const target = parseInt(endValue, 10);

    if (isNaN(target)) {
      setCount(endValue);
      return;
    }

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Extremely smooth custom ease-out calculation
      const easeProgress = 1 - Math.pow(1 - percentage, 4); 
      
      setCount(Math.floor(easeProgress * target));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue]);

  return <>{count}</>;
};

export default function ClinicalData() {
  const { t } = useLanguage();
  const pills = t("trustClinical.pills");
  const stats = t("trustClinical.stats");
  const line2Words = t("trustClinical.line2").split(" ");
  const line2Prefix = line2Words.slice(0, -1).join(" ");
  const line2Highlight = line2Words.slice(-1)[0];

  return (
    <section className="clinical-section-wrapper">
      
      {/* ── HERO ── */}
      <div className="clinical-section-hero">
        {/* Floating Pills */}
        <div className="clinical-section-pills" aria-hidden="true">
          {PILL_LAYOUT.map((pill, idx) => (
            <span 
              key={idx} 
              className="clinical-section-pill" 
              style={{ 
                top: pill.top, 
                left: pill.left, 
                right: pill.right,
                animationDelay: `${pill.delay}, ${pill.delay}` // Syncs entrance & float delays
              }}
            >
              {pills[idx]}
            </span>
          ))}
        </div>

        {/* Central Content */}
        <div className="clinical-section-hero-content">
          <h2 className="clinical-section-headline">
            {t("trustClinical.line1")}
            <br />
            {line2Prefix ? `${line2Prefix} ` : ""}
            <em>{line2Highlight}</em>
          </h2>
          <p className="clinical-section-sub">
            {t("trustClinical.subtitle")}
          </p>
          <button className="clinical-section-cta">
            {t("trustClinical.cta")} <span className="clinical-section-cta-arrow">→</span>
          </button>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="clinical-section-stats">
        {STATS.map(({ value, sup }, index) => (
          <div key={stats[index]} className="clinical-section-stat-item">
            <div className="clinical-section-stat-number">
              <AnimatedStat endValue={value} />
              {sup && <span className="clinical-section-stat-symbol">{sup}</span>}
            </div>
            <p className="clinical-section-stat-label">{stats[index]}</p>
          </div>
        ))}
      </div>

      {/* ── TRUST SECTION ── */}
      <div className="clinical-section-trust">
        <span className="clinical-section-trust-label">{t("trustClinical.trustLabel")}</span>
        <div className="clinical-section-trust-logos">
          {PARTNERS.map(({ name, badge }) => (
            <div key={name} className="clinical-section-trust-logo-item">
              <span className="clinical-section-trust-logo-name">{name}</span>
              <span className="clinical-section-trust-badge">{badge}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
