import React, { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./circle-shared-section3.css";

const groups = [
  {
    id: "symptoms",
    label: "First Symptoms",
    icon: "✦",
    color: "#c94060",
    count: "2.4k",
    items: [
      "Exhaustion like never before",
      "Smell sensitivity overnight",
      "Spotting and confusion",
      "Nausea before the test",
    ],
  },
  {
    id: "scan",
    label: "First Scan",
    icon: "◎",
    color: "#9b6fa8",
    count: "1.8k",
    items: [
      "Seeing the flicker for the first time",
      "Holding breath until the screen lights up",
      "Crying with the sonographer",
      "That photo on the fridge",
    ],
  },
  {
    id: "emotional",
    label: "Emotional Ups & Downs",
    icon: "〜",
    color: "#c97040",
    count: "3.1k",
    items: [
      "Random sobbing — totally normal",
      "Rage about dishes",
      "Waves of joy and fear together",
      "Second-guessing everything",
    ],
  },
  {
    id: "daily",
    label: "Daily Routines",
    icon: "◷",
    color: "#5b8f7a",
    count: "1.2k",
    items: [
      "Morning ritual: crackers first",
      "The 3 AM bathroom shuffle",
      "Vitamin timers everywhere",
      "Nap schedules as self-care",
    ],
  },
];

export default function SharedExperiences() {
  const [active, setActive] = useState("symptoms");
  const { t } = useLanguage();
  const groupsCopy = t("circleShared.groups");
  const activeGroup = groups.find((g) => g.id === active);
  const activeIndex = groups.findIndex((g) => g.id === active);
  const activeGroupCopy = groupsCopy[activeIndex];

  return (
    <section className="se3-section">
      <div className="se3-diagonal-bg" />

      <div className="se3-inner">
        {/* Left: header + tabs */}
        <div className="se3-left">
          <span className="se3-eyebrow">{t("circleShared.eyebrow")}</span>
          <h2 className="se3-title">
            {t("circleShared.titleLine1")}
            <br />
            {t("circleShared.titleLine2")}
          </h2>
          <p className="se3-subtitle">{t("circleShared.subtitle")}</p>

          <nav className="se3-tabs">
            {groups.map((g, index) => (
              <button
                key={g.id}
                className={`se3-tab ${active === g.id ? "se3-tab--active" : ""}`}
                style={{ "--gcolor": g.color }}
                onClick={() => setActive(g.id)}
              >
                <span className="se3-tab-icon">{g.icon}</span>
                <span className="se3-tab-label">{groupsCopy[index].label}</span>
                <span className="se3-tab-count">{g.count}</span>
              </button>
            ))}
          </nav>

          <div className="se3-ctas">
            <a href="/circle/experiences" className="se3-btn se3-btn--primary">
              {t("circleShared.explore")}
            </a>
          </div>
        </div>

        {/* Right: experience panel */}
        <div className="se3-right">
          <div
            className="se3-panel"
            key={active}
            style={{ "--gcolor": activeGroup.color }}
          >
            <div className="se3-panel-header">
              <span className="se3-panel-icon">{activeGroup.icon}</span>
              <div>
                <div className="se3-panel-label">{activeGroupCopy.label}</div>
                <div className="se3-panel-count">
                  {activeGroup.count} {t("circleShared.sharedMoments")}
                </div>
              </div>
            </div>

            <ul className="se3-list">
              {activeGroupCopy.items.map((item, i) => (
                <li key={i} className="se3-list-item" style={{ animationDelay: `${i * 80}ms` }}>
                  <span className="se3-list-bullet" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="se3-panel-cta">
              <a href="/circle/experiences" className="se3-inline-link">
                {t("circleShared.seeAll", { label: activeGroupCopy.label })} →
              </a>
            </div>

            {/* decorative corner accent */}
            <div className="se3-corner-accent" />
          </div>

          {/* Floating stat bubbles */}
          <div className="se3-bubble se3-bubble--1">
            <strong>7.5k+</strong>
            <span>{t("circleShared.bubbleShared")}</span>
          </div>
          <div className="se3-bubble se3-bubble--2">
            <strong>4</strong>
            <span>{t("circleShared.bubbleTypes")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
