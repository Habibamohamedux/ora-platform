import React, { useState } from "react";
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
  const activeGroup = groups.find((g) => g.id === active);

  return (
    <section className="se3-section">
      <div className="se3-diagonal-bg" />

      <div className="se3-inner">
        {/* Left: header + tabs */}
        <div className="se3-left">
          <span className="se3-eyebrow">Shared Experiences</span>
          <h2 className="se3-title">
            Moments That
            <br />
            Connect Us
          </h2>
          <p className="se3-subtitle">
            From first butterflies to the daily grind — you've lived these moments, and so have thousands of others.
          </p>

          <nav className="se3-tabs">
            {groups.map((g) => (
              <button
                key={g.id}
                className={`se3-tab ${active === g.id ? "se3-tab--active" : ""}`}
                style={{ "--gcolor": g.color }}
                onClick={() => setActive(g.id)}
              >
                <span className="se3-tab-icon">{g.icon}</span>
                <span className="se3-tab-label">{g.label}</span>
                <span className="se3-tab-count">{g.count}</span>
              </button>
            ))}
          </nav>

          <div className="se3-ctas">
            <a href="/circle/experiences" className="se3-btn se3-btn--primary">
              Explore Experiences
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
                <div className="se3-panel-label">{activeGroup.label}</div>
                <div className="se3-panel-count">
                  {activeGroup.count} shared moments
                </div>
              </div>
            </div>

            <ul className="se3-list">
              {activeGroup.items.map((item, i) => (
                <li key={i} className="se3-list-item" style={{ animationDelay: `${i * 80}ms` }}>
                  <span className="se3-list-bullet" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="se3-panel-cta">
              <a href="/circle/experiences" className="se3-inline-link">
                See all {activeGroup.label} stories →
              </a>
            </div>

            {/* decorative corner accent */}
            <div className="se3-corner-accent" />
          </div>

          {/* Floating stat bubbles */}
          <div className="se3-bubble se3-bubble--1">
            <strong>7.5k+</strong>
            <span>moments shared</span>
          </div>
          <div className="se3-bubble se3-bubble--2">
            <strong>4</strong>
            <span>experience types</span>
          </div>
        </div>
      </div>
    </section>
  );
}