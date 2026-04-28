import React, { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./circle-connections-section7.css";

const connections = [
  { initials: "LM", stage: "Week 12", color: "#c94060", x: 18, y: 22 },
  { initials: "SK", stage: "Week 28", color: "#9b6fa8", x: 72, y: 14 },
  { initials: "NA", stage: "Week 8",  color: "#5b8f7a", x: 44, y: 44 },
  { initials: "DR", stage: "Week 34", color: "#c97040", x: 12, y: 58 },
  { initials: "MT", stage: "Week 20", color: "#c94060", x: 80, y: 50 },
  { initials: "RL", stage: "Week 16", color: "#9b6fa8", x: 55, y: 72 },
  { initials: "AK", stage: "Week 36", color: "#5b8f7a", x: 30, y: 80 },
  { initials: "FH", stage: "Week 24", color: "#c97040", x: 88, y: 76 },
];

const groups = [
  { label: "First Trimester Tribe", members: 1240, color: "#c94060" },
  { label: "Twin Mamas Circle",     members: 380,  color: "#9b6fa8" },
  { label: "High-Risk Journeys",    members: 620,  color: "#c97040" },
  { label: "Natural Birth Prep",    members: 910,  color: "#5b8f7a" },
];

export default function CircleConnections() {
  const [hovered, setHovered] = useState(null);
  const { t } = useLanguage();
  const groupLabels = t("circleConnections.groups");
  const stages = t("circleConnections.stages");

  return (
    <section className="cc7-section">
      <div className="cc7-bg-ring cc7-ring1" />
      <div className="cc7-bg-ring cc7-ring2" />

      <div className="cc7-inner">
        {/* Left: copy */}
        <div className="cc7-copy">
          <span className="cc7-eyebrow">{t("circleConnections.eyebrow")}</span>
          <h2 className="cc7-title">
            {t("circleConnections.titleLine1")}
            <br />
            <span>{t("circleConnections.titleLine2")}</span>
            <br />
            {t("circleConnections.titleLine3")}
          </h2>
          <p className="cc7-body">{t("circleConnections.body")}</p>

          <div className="cc7-groups">
            {groups.map((g, i) => (
              <div
                key={i}
                className={`cc7-group-row ${hovered === i ? "cc7-group-row--hov" : ""}`}
                style={{ "--gcolor": g.color }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="cc7-group-dot" style={{ background: g.color }} />
                <span className="cc7-group-label">{groupLabels[i]}</span>
                <span className="cc7-group-count">{g.members.toLocaleString()} {t("circleConnections.members")}</span>
              </div>
            ))}
          </div>

          <div className="cc7-ctas">
            <a href="/circle/connect" className="cc7-btn cc7-btn--primary">
              {t("circleConnections.find")}
            </a>
            <a href="/circle/groups" className="cc7-btn cc7-btn--ghost">
              {t("circleConnections.create")}
            </a>
          </div>
        </div>

        {/* Right: constellation map */}
        <div className="cc7-map-wrap">
          <div className="cc7-map">
            {/* SVG connection lines */}
            <svg className="cc7-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
              {connections.map((c, i) =>
                connections.slice(i + 1, i + 3).map((d, j) => (
                  <line
                    key={`${i}-${j}`}
                    x1={`${c.x}%`} y1={`${c.y}%`}
                    x2={`${d.x}%`} y2={`${d.y}%`}
                    stroke="rgba(201,64,96,0.15)"
                    strokeWidth="0.5"
                  />
                ))
              )}
            </svg>

            {connections.map((c, i) => (
              <div
                key={i}
                className="cc7-node"
                style={{
                  left: `${c.x}%`,
                  top: `${c.y}%`,
                  "--ncolor": c.color,
                  "--delay": `${i * 0.15}s`,
                }}
              >
                <div className="cc7-node-avatar" style={{ background: c.color }}>
                  {c.initials}
                </div>
                <div className="cc7-node-stage">{stages[i]}</div>
                <div className="cc7-node-pulse" />
              </div>
            ))}

            {/* Center YOU node */}
            <div className="cc7-you-node">
              <div className="cc7-you-ring" />
              <div className="cc7-you-ring cc7-you-ring2" />
              <div className="cc7-you-core">{t("circleConnections.you")}</div>
            </div>
          </div>

          {/* Stat */}
          <div className="cc7-stat">
            <strong>12,400+</strong>
            <span>{t("circleConnections.womenConnected")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
