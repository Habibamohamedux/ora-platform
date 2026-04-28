import "./contact-cta.css";
import { useLanguage } from "../../i18n/LanguageContext";

// Premium SVG Icon Suite
const Icons = {
  mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  download: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  // Social Icons
  instagram: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  tiktok: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a7 7 0 1 1-7-7v3a4 4 0 0 0 0 8 4 4 0 0 0 4-4v-7"/></svg>,
  x: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  facebook: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  youtube: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>,
};

const SOCIALS = [
  { label: "Instagram", handle: "@ora.care",  href: "#", icon: "instagram" },
  { label: "TikTok",    handle: "@ora.care",  href: "#", icon: "tiktok" },
  { label: "X",         handle: "@oracare",   href: "#", icon: "x" },
  { label: "LinkedIn",  handle: "ORA Health", href: "#", icon: "linkedin" },
  { label: "Facebook",  handle: "ORA Health", href: "#", icon: "facebook" },
  { label: "YouTube",   handle: "ORA Care",   href: "#", icon: "youtube" },
];

const LINKS = [
  { href: "#" },
  { href: "#" },
  { href: "#" },
  { href: "#" },
];

export default function ContactCta() {
  const { t } = useLanguage();
  const featureList = t("contactCta.features");
  const linkLabels = t("contactCta.links");

  return (
    <section className="cct-section" id="contact-cta">
      <div className="cct-inner">
        
        {/* Massive Immersive Hero CTA */}
        <div className="cct-hero-card">
          <div className="cct-hero-bg-orb cct-hero-bg-orb--1" />
          <div className="cct-hero-bg-orb cct-hero-bg-orb--2" />
          <div className="cct-hero-bg-grid" />

          <div className="cct-hero-content">
            <span className="cct-hero-eyebrow">{t("contactCta.eyebrow")}</span>
            <h2 className="cct-hero-title">
              {t("contactCta.line1")}<br />{t("contactCta.line2")}<br /><em>{t("contactCta.line3")}</em>
            </h2>
            <p className="cct-hero-sub">{t("contactCta.sub")}</p>
            <div className="cct-hero-btns">
              <a href="mailto:hello@ora.care" className="cct-btn cct-btn--primary">
                <span className="cct-btn__ic">{Icons.mail}</span>
                {t("contactCta.primary")}
              </a>
              <a href="#app" className="cct-btn cct-btn--secondary">
                <span className="cct-btn__ic">{Icons.download}</span>
                {t("contactCta.secondary")}
              </a>
            </div>
          </div>
        </div>

        {/* Creative Bento Box Grid Layout */}
        <div className="cct-bento-grid">
          
          {/* Bento Box 1: App Features */}
          <div className="cct-bento-card cct-bento-card--features">
            <h4 className="cct-bento-heading">{t("contactCta.appHeading")}</h4>
            <ul className="cct-feature-list">
              {featureList.map((feat) => (
                <li key={feat} className="cct-feature-item">
                  <span className="cct-feature-ic">{Icons.check}</span>
                  <span className="cct-feature-text">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bento Box 2: Quick Links */}
          <div className="cct-bento-card cct-bento-card--links">
            <h4 className="cct-bento-heading">{t("contactCta.linksHeading")}</h4>
            <ul className="cct-link-list">
              {LINKS.map((l, index) => (
                <li key={l.label}>
                  <a href={l.href} className="cct-list-link">
                    {linkLabels[index]}
                    <span className="cct-list-link__arr">{Icons.arrow}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bento Box 3: Social Media Network */}
          <div className="cct-bento-card cct-bento-card--socials">
            <h4 className="cct-bento-heading">{t("contactCta.socialHeading")}</h4>
            <div className="cct-social-grid">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="cct-social-pill">
                  <div className="cct-social-pill__ic">{Icons[s.icon]}</div>
                  <div className="cct-social-pill__text">
                    <span className="cct-social-pill__label">{s.label}</span>
                    <span className="cct-social-pill__handle">{s.handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
