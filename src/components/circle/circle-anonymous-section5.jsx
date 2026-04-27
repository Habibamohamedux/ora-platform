import React, { useState } from "react";
import "./circle-anonymous-section5.css";

const anonStories = [
  {
    text: "I was terrified to ask about my symptoms online because everyone would know it was me. Coming here felt like finally being able to breathe.",
    tag: "Week 8",
    ago: "1h ago",
  },
  {
    text: "I wasn't ready to tell anyone I was pregnant, but I needed someone to talk to. Anonymously sharing here saved me.",
    tag: "First Trimester",
    ago: "3h ago",
  },
  {
    text: "Asked a question I was embarrassed about and got 14 kind responses. No one judged me. I cried happy tears.",
    tag: "Second Trimester",
    ago: "5h ago",
  },
];

export default function AnonymousSupport() {
  const [flipped, setFlipped] = useState(false);

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
              <p>Your identity stays hidden.<br />Your story can still be told.</p>
              <span className="as5-flip-hint">Tap to reveal →</span>
            </div>
            <div className="as5-mask-back">
              <blockquote>
                "I finally said the thing I couldn't say to anyone."
              </blockquote>
              <p className="as5-mask-sub">Anonymous Circle Member</p>
            </div>
          </div>

          {/* Story cards */}
          <div className="as5-stories">
            {anonStories.map((s, i) => (
              <div key={i} className="as5-story-card" style={{ "--delay": `${i * 0.12}s` }}>
                <div className="as5-story-top">
                  <span className="as5-story-tag">{s.tag}</span>
                  <span className="as5-story-ago">{s.ago}</span>
                </div>
                <p className="as5-story-text">"{s.text}"</p>
                <div className="as5-story-anon">Anonymous ✦</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: copy */}
        <div className="as5-copy">
          <span className="as5-eyebrow">Anonymous Support</span>
          <h2 className="as5-title">
            Speak Freely,<br />
            <span>Without Judgment</span>
          </h2>
          <p className="as5-body">
            Some things are hard to say with your name attached. Circle gives you the space to ask, share, and process — completely anonymously.
          </p>

          <div className="as5-badges">
            <div className="as5-badge">
              <span className="as5-badge-icon">🔒</span>
              Identity never revealed
            </div>
            <div className="as5-badge">
              <span className="as5-badge-icon">✦</span>
              Moderated & safe
            </div>
            <div className="as5-badge">
              <span className="as5-badge-icon">♡</span>
              Always met with kindness
            </div>
          </div>

          <div className="as5-ctas">
            <a href="/circle/anonymous" className="as5-btn as5-btn--primary">
              Ask Anonymously
            </a>
            <a href="/circle/anonymous-feed" className="as5-btn as5-btn--ghost">
              View Anonymous Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}