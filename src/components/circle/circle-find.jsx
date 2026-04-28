import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./circle-find.css";

const FILTERS = [
  { id: "first" },
  { id: "highrisk" },
  { id: "newmom" },
  { id: "partner" },
  { id: "postpartum" },
  { id: "loss" },
];

const CIRCLES = [
  {
    id: 1, filter: "first",
    name: "First Time Mamas",
    members: 1240, active: 38,
    desc: "Every question is valid. Share what no one told you.",
    tags: ["first", "newmom"],
  },
  {
    id: 2, filter: "highrisk",
    name: "High-Risk Hearts",
    members: 672, active: 14,
    desc: "For mothers navigating complicated pregnancies with grace.",
    tags: ["highrisk"],
  },
  {
    id: 3, filter: "partner",
    name: "Partners in Waiting",
    members: 890, active: 22,
    desc: "Because partners carry this journey too.",
    tags: ["partner"],
  },
  {
    id: 4, filter: "postpartum",
    name: "After the Storm",
    members: 1580, active: 51,
    desc: "Postpartum recovery — emotional, physical, honest.",
    tags: ["postpartum", "newmom"],
  },
  {
    id: 5, filter: "loss",
    name: "Still Held",
    members: 430, active: 9,
    desc: "Gentle space for those carrying invisible grief.",
    tags: ["loss"],
  },
  {
    id: 6, filter: "first",
    name: "Week-by-Week",
    members: 2100, active: 74,
    desc: "Track every milestone together, one week at a time.",
    tags: ["first", "highrisk"],
  },
];

export default function CircleFind() {
  const [active, setActive] = useState("first");
  const { t } = useLanguage();
  const filters = t("circleFind.filters");
  const circlesCopy = t("circleFind.circles");

  const visible = CIRCLES.filter((c) => c.tags.includes(active));

  return (
    <section className="cf-section">
      <div className="cf-orb" />

      <div className="cf-inner">
        <div className="cf-header">
          <span className="cf-eyebrow">{t("circleFind.eyebrow")}</span>
          <h2 className="cf-title">{t("circleFind.title")}</h2>
          <p className="cf-desc">{t("circleFind.desc")}</p>
        </div>

        {/* Filter bar */}
        <div className="cf-filters">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`cf-filter ${active === f.id ? "cf-filter--on" : ""}`}
              onClick={() => setActive(f.id)}
            >
              {filters[FILTERS.indexOf(f)]}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="cf-grid">
          {visible.map((circle, i) => (
            // Structural data stays stable while copy is localized.
            <div
              className="cf-card"
              key={circle.id}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="cf-card__top">
                <div className="cf-card__avatar">
                  {circle.name.charAt(0)}
                </div>
                <div className="cf-card__live">
                  <span className="cf-card__dot" />
                  {circle.active} {t("circleFind.online")}
                </div>
              </div>
              <h3 className="cf-card__name">{circlesCopy[circle.id - 1].name}</h3>
              <p className="cf-card__desc">{circlesCopy[circle.id - 1].desc}</p>
              <div className="cf-card__footer">
                <span className="cf-card__members">{circle.members.toLocaleString()} {t("circleFind.members")}</span>
                <button className="cf-card__join">{t("circleFind.join")} →</button>
              </div>
            </div>
          ))}
        </div>

        <p className="cf-hint">{t("circleFind.hint")}</p>
      </div>
    </section>
  );
}
