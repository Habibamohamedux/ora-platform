import React, { useRef, useEffect, useState } from "react";
import "./circle-community-section2.css";

const stories = [
  {
    id: 1,
    tag: "Week 12",
    title: "The moment I finally heard the heartbeat",
    excerpt:
      "I had waited three weeks for that appointment. When the sound filled the room, I couldn't stop crying — and neither could my midwife.",
    author: "Lena M.",
    avatar: "LM",
    type: "milestone",
  },
  {
    id: 2,
    tag: "Morning Sickness",
    title: "Six weeks of crackers and ginger tea",
    excerpt:
      "Nobody warned me it could hit at 2 PM every single day. I learned every bathroom in my office building intimately.",
    author: "Sara K.",
    avatar: "SK",
    type: "challenge",
  },
  {
    id: 3,
    tag: "Emotional",
    title: "I cried at a dog food commercial",
    excerpt:
      "The hormones are real. Completely, undeniably, hilariously real. I've made peace with it.",
    author: "Dina R.",
    avatar: "DR",
    type: "emotional",
  },
  {
    id: 4,
    tag: "Third Trimester",
    title: "Finding sleep again — sort of",
    excerpt:
      "Between the kicks and the back aches, I invented a pillow fortress. It's a masterpiece of architecture.",
    author: "Nour A.",
    avatar: "NA",
    type: "milestone",
  },
  {
    id: 5,
    tag: "Anxiety",
    title: "When the fear doesn't go away",
    excerpt:
      "I kept refreshing the doppler app every night. Sharing it here helped me realize I wasn't alone.",
    author: "Maya T.",
    avatar: "MT",
    type: "emotional",
  },
];

const typeColors = {
  milestone: "var(--pink)",
  challenge: "#9b6fa8",
  emotional: "#c97040",
};

export default function CommunityStories() {
  const trackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % stories.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".cs2-card");
    if (!card) return;
    const cardW = card.offsetWidth + 20;
    track.scrollTo({ left: activeIdx * cardW, behavior: "smooth" });
  }, [activeIdx]);

  return (
    <section className="cs2-section">
      {/* Background texture */}
      <div className="cs2-bg-grain" />
      <div className="cs2-bg-blob cs2-blob1" />
      <div className="cs2-bg-blob cs2-blob2" />

      <div className="cs2-inner">
        {/* Header */}
        <div className="cs2-header">
          <span className="cs2-eyebrow">Community</span>
          <h2 className="cs2-title">
            Real Stories
            <br />
            <em>from Real Journeys</em>
          </h2>
          <p className="cs2-subtitle">
            Milestones, struggles, laughs, and tears — shared by women just
            like you.
          </p>
        </div>

        {/* Cards Track */}
        <div
          className="cs2-track-wrap"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="cs2-track" ref={trackRef}>
            {stories.map((s, i) => (
              <article
                key={s.id}
                className={`cs2-card ${i === activeIdx ? "cs2-card--active" : ""}`}
                onClick={() => setActiveIdx(i)}
                style={{ "--accent": typeColors[s.type] }}
              >
                <div className="cs2-card-top">
                  <span className="cs2-tag">{s.tag}</span>
                  <div
                    className="cs2-type-dot"
                    style={{ background: typeColors[s.type] }}
                  />
                </div>
                <h3 className="cs2-card-title">{s.title}</h3>
                <p className="cs2-card-excerpt">{s.excerpt}</p>
                <div className="cs2-card-author">
                  <div
                    className="cs2-avatar"
                    style={{ background: typeColors[s.type] }}
                  >
                    {s.avatar}
                  </div>
                  <span>{s.author}</span>
                </div>
                <div className="cs2-card-line" />
              </article>
            ))}
          </div>
          {/* Fade edges */}
          <div className="cs2-fade cs2-fade--left" />
          <div className="cs2-fade cs2-fade--right" />
        </div>

        {/* Dots */}
        <div className="cs2-dots">
          {stories.map((_, i) => (
            <button
              key={i}
              className={`cs2-dot ${i === activeIdx ? "cs2-dot--active" : ""}`}
              onClick={() => setActiveIdx(i)}
            />
          ))}
        </div>

        {/* CTAs */}
        <div className="cs2-ctas">
          <a href="/circle/stories" className="cs2-btn cs2-btn--primary">
            Read Stories
          </a>
          <a href="/circle/share" className="cs2-btn cs2-btn--ghost">
            Share Your Story
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}