import React, { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./circle-anonymous-section5.css";

export default function AnonymousSupport() {
  const [flipped, setFlipped] = useState(false);
  const { t } = useLanguage();
  const stories = t("circleAnonymous.stories");
  const frontLines = t("circleAnonymous.front").split("\n");

  return (
    <section className="as5-section">
      {/* Animated particle dots */}
      <div className="as5-particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="as5-particle" style={{ "--i": i }} />
        ))}
      </div>

      <div className="as5-inner">
        {/* Left: visual mask card */}
        <div className="as5-visual">
          <div
            className={`as5-mask-card ${flipped ? "as5-mask-card--reveal" : ""}`}
            onClick={() => setFlipped((f) => !f)}
          >
            <div className="as5-mask-front">
              <div className="as5-mask-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="24" cy="18" r="3" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
              <p>{frontLines[0]}<br />{frontLines[1]}</p>
              <span className="as5-flip-hint">{t("circleAnonymous.tap")}</span>
            </div>
            <div className="as5-mask-back">
              <blockquote>
                "{t("circleAnonymous.quote")}"
              </blockquote>
              <p className="as5-mask-sub">{t("circleAnonymous.member")}</p>
            </div>
          </div>

          {/* Story cards */}
          <div className="as5-stories">
            {stories.map((s, i) => (
              <div key={i} className="as5-story-card" style={{ "--delay": `${i * 0.12}s` }}>
                <div className="as5-story-top">
                  <span className="as5-story-tag">{s.tag}</span>
                  <span className="as5-story-ago">{s.ago}</span>
                </div>
                <p className="as5-story-text">"{s.text}"</p>
                <div className="as5-story-anon">{t("circleAnonymous.anonymous")}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: copy */}
        <div className="as5-copy">
          <span className="as5-eyebrow">{t("circleAnonymous.eyebrow")}</span>
          <h2 className="as5-title">
            {t("circleAnonymous.titleLine1")}<br />
            <span>{t("circleAnonymous.titleLine2")}</span>
          </h2>
          <p className="as5-body">{t("circleAnonymous.body")}</p>

          <div className="as5-badges">
            <div className="as5-badge">
              <span className="as5-badge-icon">🔒</span>
              {t("circleAnonymous.identity")}
            </div>
            <div className="as5-badge">
              <span className="as5-badge-icon">✦</span>
              {t("circleAnonymous.safe")}
            </div>
            <div className="as5-badge">
              <span className="as5-badge-icon">♡</span>
              {t("circleAnonymous.kind")}
            </div>
          </div>

          <div className="as5-ctas">
            <a href="/circle/anonymous" className="as5-btn as5-btn--primary">
              {t("circleAnonymous.ask")}
            </a>
            <a href="/circle/anonymous-feed" className="as5-btn as5-btn--ghost">
              {t("circleAnonymous.view")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
