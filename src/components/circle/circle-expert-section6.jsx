import React, { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./circle-expert-section6.css";

const experts = [
  {
    id: 1,
    name: "Dr. Amira Haddad",
    role: "OB-GYN",
    initials: "AH",
    color: "#c94060",
    answers: 214,
    verified: true,
  },
  {
    id: 2,
    name: "Yasmin Khoury",
    role: "Certified Midwife",
    initials: "YK",
    color: "#9b6fa8",
    answers: 189,
    verified: true,
  },
  {
    id: 3,
    name: "Dr. Rania Farouk",
    role: "Maternal-Fetal Medicine",
    initials: "RF",
    color: "#5b8f7a",
    answers: 97,
    verified: true,
  },
];

const featuredQAs = [
  {
    q: "Is it normal to feel baby movement slow down around week 28?",
    a: "Movement patterns change as your baby grows and space decreases — but any significant reduction warrants a call to your provider. Count kicks daily and trust your instincts.",
    expert: "Dr. Amira Haddad",
    role: "OB-GYN",
    tag: "Movement",
    color: "#c94060",
  },
  {
    q: "Can I continue running in my second trimester?",
    a: "For most low-risk pregnancies, gentle running is perfectly safe through the second trimester. Listen to your body, stay hydrated, and avoid overheating.",
    expert: "Yasmin Khoury",
    role: "Certified Midwife",
    tag: "Exercise",
    color: "#9b6fa8",
  },
];

export default function ExpertGuidance() {
  const [activeQA, setActiveQA] = useState(0);
  const { t } = useLanguage();
  const expertRoles = t("circleExpert.experts");
  const qaCopy = t("circleExpert.qa");

  return (
    <section className="eg6-section">
      <div className="eg6-accent-bar" />

      <div className="eg6-inner">
        {/* Header */}
        <div className="eg6-header">
          <span className="eg6-eyebrow">{t("circleExpert.eyebrow")}</span>
          <div className="eg6-head-split">
            <h2 className="eg6-title">
              {t("circleExpert.titleLine1")}
              <br />
              {t("circleExpert.titleLine2")}
            </h2>
            <p className="eg6-subtitle">{t("circleExpert.subtitle")}</p>
          </div>
        </div>

        <div className="eg6-body">
          {/* Experts */}
          <div className="eg6-experts">
            {experts.map((e, index) => (
              <div key={e.id} className="eg6-expert-card">
                <div
                  className="eg6-expert-avatar"
                  style={{ background: e.color }}
                >
                  {e.initials}
                  {e.verified && (
                    <span className="eg6-verified" title={t("circleExpert.verified")}>✓</span>
                  )}
                </div>
                <div className="eg6-expert-info">
                  <div className="eg6-expert-name">{e.name}</div>
                  <div className="eg6-expert-role">{expertRoles[index]}</div>
                </div>
                <div
                  className="eg6-expert-count"
                  style={{ color: e.color }}
                >
                  {e.answers}<br />
                  <span>{t("circleExpert.answers")}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Q&As */}
          <div className="eg6-qa-block">
            <div className="eg6-qa-tabs">
              {featuredQAs.map((qa, i) => (
                <button
                  key={i}
                  className={`eg6-qa-tab ${activeQA === i ? "eg6-qa-tab--active" : ""}`}
                  style={{ "--qcolor": featuredQAs[i].color }}
                  onClick={() => setActiveQA(i)}
                >
                  <span
                    className="eg6-qa-tab-dot"
                    style={{ background: featuredQAs[i].color }}
                  />
                  {qaCopy[i].tag}
                </button>
              ))}
            </div>

            <div className="eg6-qa-panel" key={activeQA} style={{ "--qcolor": featuredQAs[activeQA].color }}>
              <div className="eg6-q-row">
                <span className="eg6-q-label">Q</span>
                <p className="eg6-q-text">{qaCopy[activeQA].q}</p>
              </div>
              <div className="eg6-a-row">
                <span className="eg6-a-label">A</span>
                <p className="eg6-a-text">{qaCopy[activeQA].a}</p>
              </div>
              <div className="eg6-qa-author">
                <div
                  className="eg6-qa-avatar"
                  style={{ background: featuredQAs[activeQA].color }}
                >
                  {featuredQAs[activeQA].expert[0]}
                </div>
                <div>
                  <div className="eg6-qa-name">{featuredQAs[activeQA].expert}</div>
                  <div className="eg6-qa-role">{qaCopy[activeQA].role} · {t("circleExpert.verified")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="eg6-ctas">
          <a href="/circle/experts" className="eg6-btn eg6-btn--primary">
            {t("circleExpert.ask")}
          </a>
          <a href="/circle/expert-feed" className="eg6-btn eg6-btn--ghost">
            {t("circleExpert.view")}
          </a>
        </div>
      </div>
    </section>
  );
}
