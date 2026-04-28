import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./contact-channels.css";

// Enterprise-grade SVG icons
const Icons = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
};

const CHANNELS = [
  {
    id: "enterprise", icon: "shield", label: "Enterprise Support",
    value: "priority@ora.care", sub: "Dedicated technical and clinical assistance for healthcare institutions.",
    badge: "Priority", resp: "Avg. response: < 1 hr",
    href: "mailto:priority@ora.care", copyable: true, primary: true,
  },
  {
    id: "portal", icon: "lock", label: "Secure Client Portal",
    value: "ORA CMS", sub: "End-to-end encrypted messaging for sensitive patient data & records.",
    badge: "HIPAA Compliant", resp: "Monitored 24/7",
    href: "#secure-portal", copyable: false,
  },
  {
    id: "global", icon: "globe", label: "Global Hotline",
    value: "+1 (800) ORA-CARE", sub: "Multi-lingual routing for international clinics and corporate offices.",
    badge: null, resp: "Available 24/7",
    href: "tel:+18006722273", copyable: true,
  },
  {
    id: "partnerships", icon: "briefcase", label: "Partnerships & Press",
    value: "alliances@ora.care", sub: "For business inquiries, system integrations, and media relations.",
    badge: null, resp: "Avg. response: 1-2 Business Days",
    href: "mailto:alliances@ora.care", copyable: true,
  },
];

export default function ContactChannels() {
  const [copied, setCopied] = useState(null);
  const { t } = useLanguage();
  const channelCopy = t("contactChannels.channels");

  function handleCopy(ch) {
    if (!ch.copyable) return;
    navigator.clipboard.writeText(ch.value).then(() => {
      setCopied(ch.id);
      setTimeout(() => setCopied(null), 2500);
    });
  }

  return (
    <section className="cch-section" id="contact-channels">
      <div className="cch-bg-pattern" />
      <div className="cch-inner">
        <div className="cch-header">
          <span className="cch-eyebrow">{t("contactChannels.eyebrow")}</span>
          <h2 className="cch-title">{t("contactChannels.line1")}<br />{t("contactChannels.line2")}</h2>
          <p className="cch-desc">
            {t("contactChannels.desc")}
          </p>
        </div>

        <div className="cch-grid">
          {CHANNELS.map((ch, i) => (
            // Values and links remain operational constants while the copy is localized.
            <div 
              key={ch.id} 
              className={`cch-card ${ch.primary ? "cch-card--primary" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {channelCopy[ch.id].badge && <div className="cch-badge">{channelCopy[ch.id].badge}</div>}

              <div className="cch-card__top">
                <div className={`cch-icon ${ch.primary ? "cch-icon--primary" : ""}`}>
                  {Icons[ch.icon]}
                </div>
              </div>

              <div className="cch-card__content">
                <div className="cch-card__label">{channelCopy[ch.id].label}</div>
                <div className="cch-card__value">{ch.value}</div>
                <div className="cch-card__sub">{channelCopy[ch.id].sub}</div>
                <div className="cch-resp">{channelCopy[ch.id].resp}</div>
              </div>

              <div className="cch-card__actions">
                <a 
                  href={ch.href} 
                  className={`cch-btn ${ch.primary ? "cch-btn--main" : "cch-btn--secondary"}`}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {ch.id === "portal" ? t("contactChannels.accessPortal") : t("contactChannels.connect")}
                </a>
                {ch.copyable && (
                  <button 
                    className={`cch-btn cch-btn--copy ${copied === ch.id ? "cch-btn--copied" : ""}`}
                    onClick={() => handleCopy(ch)}
                  >
                    {copied === ch.id ? t("contactChannels.copied") : t("contactChannels.copy")}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
