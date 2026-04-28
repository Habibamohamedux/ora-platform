import React, { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./circle-discussions-section4.css";

const categories = [
  {
    id: "health",
    icon: "♡",
    label: "Health Questions",
    color: "#c94060",
    desc: "Symptoms, checkups, medications — ask openly.",
    threads: 342,
    hot: true,
  },
  {
    id: "emotional",
    icon: "✦",
    label: "Emotional Support",
    color: "#9b6fa8",
    desc: "Processing fears, joys, and everything between.",
    threads: 519,
    hot: true,
  },
  {
    id: "daily",
    icon: "◷",
    label: "Daily Life",
    color: "#5b8f7a",
    desc: "Work, sleep, diet, relationships, and routines.",
    threads: 211,
    hot: false,
  },
  {
    id: "advice",
    icon: "◎",
    label: "Advice & Tips",
    color: "#c97040",
    desc: "Tried-and-true wisdom from those ahead of you.",
    threads: 287,
    hot: false,
  },
];

const recentPosts = [
  {
    cat: "health",
    title: "Anyone else get round ligament pain at 14 weeks?",
    replies: 23,
    time: "2h",
  },
  {
    cat: "emotional",
    title: "How do you manage the fear between appointments?",
    replies: 41,
    time: "4h",
  },
  {
    cat: "advice",
    title: "Best pregnancy pillow — genuinely life-changing",
    replies: 67,
    time: "6h",
  },
];

export default function DiscussionSpaces() {
  const [hovered, setHovered] = useState(null);
  const { t } = useLanguage();
  const categoryCopy = t("circleDiscussions.categories");
  const postCopy = t("circleDiscussions.posts");

  return (
    <section className="ds4-section">
      {/* Mesh background */}
      <div className="ds4-mesh" />

      <div className="ds4-inner">
        <div className="ds4-header">
          <span className="ds4-eyebrow">{t("circleDiscussions.eyebrow")}</span>
          <div className="ds4-head-row">
            <h2 className="ds4-title">
              {t("circleDiscussions.titleLine1")}
              <br />
              {t("circleDiscussions.titleLine2")}
            </h2>
            <p className="ds4-subtitle">{t("circleDiscussions.subtitle")}</p>
          </div>
        </div>

        {/* Category grid */}
        <div className="ds4-grid">
          {categories.map((c, index) => (
            <div
              key={c.id}
              className={`ds4-card ${hovered === c.id ? "ds4-card--hov" : ""}`}
              style={{ "--ccolor": c.color }}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {c.hot && <span className="ds4-hot">{t("circleDiscussions.active")}</span>}
              <div className="ds4-card-icon">{c.icon}</div>
              <h3 className="ds4-card-label">{categoryCopy[index].label}</h3>
              <p className="ds4-card-desc">{categoryCopy[index].desc}</p>
              <div className="ds4-card-footer">
                <span className="ds4-threads">{c.threads} {t("circleDiscussions.threads")}</span>
                <a href="/circle/discussions" className="ds4-card-arrow">→</a>
              </div>
              <div className="ds4-card-glow" />
            </div>
          ))}
        </div>

        {/* Recent posts ticker */}
        <div className="ds4-recent">
          <span className="ds4-recent-label">{t("circleDiscussions.recent")}</span>
          <div className="ds4-recent-list">
            {recentPosts.map((p, i) => {
              const cat = categories.find((c) => c.id === p.cat);
              return (
                <div key={i} className="ds4-recent-item">
                  <span
                    className="ds4-recent-dot"
                    style={{ background: cat.color }}
                  />
                  <span className="ds4-recent-title">{postCopy[i]}</span>
                  <span className="ds4-recent-meta">
                    {p.replies} {t("circleDiscussions.replies")} · {p.time} {t("circleDiscussions.ago")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTAs */}
        <div className="ds4-ctas">
          <a href="/circle/discussions" className="ds4-btn ds4-btn--primary">
            {t("circleDiscussions.join")}
          </a>
          <a href="/circle/new-post" className="ds4-btn ds4-btn--outline">
            {t("circleDiscussions.start")}
          </a>
        </div>
      </div>
    </section>
  );
}
