import React, { useEffect, useRef } from "react";
import "./circle-final-cta-section8.css";

const words = ["Connect", "Support", "Empower"];

export default function FinalCTA() {
  const cycleRef = useRef(null);
  const wordRef = useRef(null);
  const wordIndexRef = useRef(0);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;

    cycleRef.current = setInterval(() => {
      el.classList.add("s8-word--exit");
      setTimeout(() => {
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
        el.textContent = words[wordIndexRef.current];
        el.classList.remove("s8-word--exit");
        el.classList.add("s8-word--enter");
        setTimeout(() => el.classList.remove("s8-word--enter"), 400);
      }, 300);
    }, 2400);

    return () => clearInterval(cycleRef.current);
  }, []);

  return (
    <section className="s8-section">
      {/* Animated rings */}
      <div className="s8-rings">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`s8-ring s8-ring--${i}`} />
        ))}
      </div>

      {/* Grain overlay */}
      <div className="s8-grain" />

      <div className="s8-inner">
        <div className="s8-badge">Be Part of Something Supportive</div>

        <h2 className="s8-title">
          Circle is built to
          <br />
          <span className="s8-word" ref={wordRef}>Connect</span>
          <br />
          every journey.
        </h2>

        <p className="s8-body">
          Thousands of women are already here — sharing milestones, finding answers, and building the community they never knew they needed.
        </p>

        {/* Social proof strip */}
        <div className="s8-proof">
          <div className="s8-avatars">
            {["LM","SK","NA","DR","MT"].map((a, i) => (
              <div
                key={i}
                className="s8-proof-avatar"
                style={{ "--bg": ["#c94060","#9b6fa8","#5b8f7a","#c97040","#c94060"][i], "--z": 5 - i }}
              >
                {a}
              </div>
            ))}
          </div>
          <span>12,400+ women have joined</span>
        </div>

        {/* CTAs */}
        <div className="s8-ctas">
          <a href="/circle/join" className="s8-btn s8-btn--primary">
            <span>Join Now</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/app" className="s8-btn s8-btn--app">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="3" y="1" width="12" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="9" cy="14" r="1" fill="currentColor"/>
            </svg>
            Download App
          </a>
        </div>

        {/* Bottom tagline */}
        <div className="s8-tagline">
          Free to join · Anonymous options · Expert-verified answers
        </div>
      </div>

      {/* Bottom wave */}
      <div className="s8-wave" />
    </section>
  );
}
