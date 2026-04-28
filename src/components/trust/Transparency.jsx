import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from "../../i18n/LanguageContext";
import "../../pages/Trust.css";

const Transparency = () => {
  const { t } = useLanguage();
  // Framer Motion Animation Variants
  const cardLeft = {
    offscreen: { x: -50, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 1 } }
  };

  const cardRight = {
    offscreen: { x: 50, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 1 } }
  };

  const textUp = {
    offscreen: { y: 40, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 1 } }
  };

  const scaleUp = {
    offscreen: { scale: 0.95, opacity: 0, y: 30 },
    onscreen: { scale: 1, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 1.2 } }
  };

  return (
    <section className="transparency-section">
      {/* Overarching Section Title */}
      <motion.div 
        className="transparency-main-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="transparency-super-title">{t("trustTransparency.superTitle")}</h1>
        <p className="transparency-super-subtitle">{t("trustTransparency.superSubtitle")}</p>
      </motion.div>

      {/* Continuous Central Flow Line */}
      <div className="transparency-vertical-line">
        <div className="transparency-line-glow"></div>
      </div>

      <div className="transparency-container">
        
        {/* SECTION 1: Transparent Controls */}
        <div className="transparency-row">
          <div className="transparency-node transparency-center-node"></div>
          
          <motion.div 
            className="transparency-visual transparency-visual-left"
            initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.4 }} variants={cardLeft}
          >
            <div className="transparency-glass-card transparency-card-isometric">
              <div className="transparency-credential-leak">
                <div className="transparency-user-info">
                  <div className="transparency-avatar-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--white)" stroke="var(--slate)" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <span className="transparency-email-text">user@ora.so</span>
                </div>
                <div className="transparency-status-tag">{t("trustTransparency.secureVault")}</div>
                <div className="transparency-password-pill">
                  <span className="transparency-lock-icon">🛡️</span> {t("trustTransparency.dataEncrypted")}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="transparency-text transparency-text-right"
            initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.4 }} variants={textUp}
          >
            <div className="transparency-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h2 className="transparency-headline">{t("trustTransparency.controlTitle")}</h2>
            <p className="transparency-description">
              {t("trustTransparency.controlDesc")}
            </p>
          </motion.div>
        </div>

        {/* SECTION 2: Validated Access */}
        <div className="transparency-row transparency-reverse-mobile">
          <div className="transparency-node transparency-center-node"></div>

          <motion.div 
            className="transparency-text transparency-text-left"
            initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.4 }} variants={textUp}
          >
            <div className="transparency-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h2 className="transparency-headline">{t("trustTransparency.validatedTitle")}</h2>
            <p className="transparency-description">
              {t("trustTransparency.validatedDesc")}
            </p>
          </motion.div>

          <motion.div 
            className="transparency-visual transparency-visual-right"
            initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.4 }} variants={cardRight}
          >
              <div className="transparency-stacked-cards">
              <div className="transparency-stacked-card transparency-card-back">
                <span className="transparency-mute-text">{t("trustTransparency.blockedRequest")}</span>
              </div>
              <div className="transparency-stacked-card transparency-card-middle">
                <span className="transparency-mute-text">{t("trustTransparency.unauthorizedScope")}</span>
              </div>
              <div className="transparency-stacked-card transparency-card-front transparency-glass-card">
                <div className="transparency-alert-header">
                  <span className="transparency-alert-icon">✅</span> 
                  <span className="transparency-alert-title">{t("trustTransparency.accessGranted")}</span>
                </div>
                <p className="transparency-alert-sub">{t("trustTransparency.verifiedPermissions")}</p>
                <div className="transparency-alert-footer">
                  <span className="transparency-user-id">Session_8x***</span>
                  <span className="transparency-alert-tag safe">{t("trustTransparency.secureConnection")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION 3: Tailored Intelligence */}
        <div className="transparency-row">
          <div className="transparency-node transparency-center-node"></div>

          <motion.div 
            className="transparency-visual transparency-visual-left"
            initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.4 }} variants={cardLeft}
          >
             <div className="transparency-glass-card transparency-dashboard-card">
                <h3 className="transparency-dashboard-title">{t("trustTransparency.dashboardTitle")}</h3>
                <div className="transparency-dashboard-stats">
                  <span className="transparency-threat-actor">{t("trustTransparency.activeScope")} <span className="transparency-highlight">{t("trustTransparency.readOnly")}</span></span>
                  <span className="transparency-attempt-count">{t("trustTransparency.permissionsGranted")}</span>
                </div>
                <div className="transparency-dashboard-chart-area">
                   <div className="transparency-ring-chart"></div>
                   <div className="transparency-chart-legend">
                      <div className="transparency-legend-item"><span className="transparency-dot transparency-dot-ghost"></span> {t("trustTransparency.anonymousData")}</div>
                      <div className="transparency-legend-item"><span className="transparency-dot transparency-dot-white"></span> {t("trustTransparency.systemMetrics")}</div>
                      <div className="transparency-legend-item"><span className="transparency-dot transparency-dot-pink"></span> {t("trustTransparency.personalIdentifiers")}</div>
                   </div>
                </div>
             </div>
          </motion.div>

          <motion.div 
            className="transparency-text transparency-text-right"
            initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.4 }} variants={textUp}
          >
            <div className="transparency-icon-box">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h2 className="transparency-headline">{t("trustTransparency.tailoredTitle")}</h2>
            <p className="transparency-description">
              {t("trustTransparency.tailoredDesc")}
            </p>
          </motion.div>
        </div>

        {/* FINAL SECTION: Wide CTA Card */}
        <motion.div 
          className="transparency-final-cta-wrapper"
          initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.3 }} variants={scaleUp}
        >
          {/* The line drops directly into this node */}
          <div className="transparency-node transparency-cta-top-node"></div>

          <div className="transparency-cta-card">
            {/* Corner Decorative Dots */}
            <div className="transparency-corner-dot cta-tl"></div>
            <div className="transparency-corner-dot cta-tr"></div>
            <div className="transparency-corner-dot cta-bl"></div>
            <div className="transparency-corner-dot cta-br"></div>

            <div className="transparency-cta-content">
              <h2 className="transparency-cta-headline">
                {t("trustTransparency.ctaLine1")}<br/>
                <span className="transparency-cta-highlight">{t("trustTransparency.ctaHighlight")}</span>
              </h2>
              <p className="transparency-cta-subtext">
                {t("trustTransparency.ctaBody")}
              </p>
              
              <button className="transparency-cta-button">
                {t("trustTransparency.ctaButton")}
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Transparency;
