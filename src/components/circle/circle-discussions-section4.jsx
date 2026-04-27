import React, { useState } from "react";
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

  return (
    <section className="ds4-section">
      {/* Mesh background */}
      <div className="ds4-mesh" />

      <div className="ds4-inner">
        <div className="ds4-header">
          <span className="ds4-eyebrow">Discussions</span>
          <div className="ds4-head-row">
            <h2 className="ds4-title">
              Open
              <br />
              Conversations
            </h2>
            <p className="ds4-subtitle">
              No judgment, no wrong questions. Every stage, every feeling — find your thread.
            </p>
          </div>
        </div>

        {/* Category grid */}
        <div className="ds4-grid">
          {categories.map((c) => (
            <div
              key={c.id}
              className={`ds4-card ${hovered === c.id ? "ds4-card--hov" : ""}`}
              style={{ "--ccolor": c.color }}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {c.hot && <span className="ds4-hot">Active</span>}
              <div className="ds4-card-icon">{c.icon}</div>
              <h3 className="ds4-card-label">{c.label}</h3>
              <p className="ds4-card-desc">{c.desc}</p>
              <div className="ds4-card-footer">
                <span className="ds4-threads">{c.threads} threads</span>
                <a href="/circle/discussions" className="ds4-card-arrow">→</a>
              </div>
              <div className="ds4-card-glow" />
            </div>
          ))}
        </div>

        {/* Recent posts ticker */}
        <div className="ds4-recent">
          <span className="ds4-recent-label">Recent</span>
          <div className="ds4-recent-list">
            {recentPosts.map((p, i) => {
              const cat = categories.find((c) => c.id === p.cat);
              return (
                <div key={i} className="ds4-recent-item">
                  <span
                    className="ds4-recent-dot"
                    style={{ background: cat.color }}
                  />
                  <span className="ds4-recent-title">{p.title}</span>
                  <span className="ds4-recent-meta">
                    {p.replies} replies · {p.time} ago
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTAs */}
        <div className="ds4-ctas">
          <a href="/circle/discussions" className="ds4-btn ds4-btn--primary">
            Join Discussions
          </a>
          <a href="/circle/new-post" className="ds4-btn ds4-btn--outline">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}