import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assests/Imgs/careers/life_07.PNG";
import "../../pages/Futures.css";

/* ── SVG icons (no emoji) ── */
const Icons = {
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6"  />
      <circle cx="12" cy="12" r="2"  />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
};

const pillars = [
  {
    icon: Icons.target,
    label: "01",
    title: "Push the Boundaries",
    sub: "of Healthcare Technology",
    body: "We combine real-time biometric data, predictive modeling, and medical expertise — building tools that don't just monitor health, they anticipate it.",
  },
  {
    icon: Icons.heart,
    label: "02",
    title: "Impact-Driven",
    sub: "Mission",
    body: "Every system we design supports real women navigating pregnancy, fertility, and daily health decisions. Measurable, human, deeply personal.",
  },
  {
    icon: Icons.shield,
    label: "03",
    title: "High-Security",
    sub: "Health Tech",
    body: "Medical-grade data protection, encryption protocols, and privacy-first architecture. Security is foundational here — never an afterthought.",
  },
  {
    icon: Icons.zap,
    label: "04",
    title: "Startup Agility",
    sub: "+ Clinical Depth",
    body: "We move fast, but never recklessly. Every feature is developed with medical consultation and evidence-based validation at its core.",
  },
];

export default function CareerFuture() {
  const sectionRef = useRef(null);
  const imageRef   = useRef(null);
  const pillarsRef = useRef([]);
  const [imgLoaded, setImgLoaded] = useState(false);

  /* Intersection observer */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("cf-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    if (imageRef.current)   io.observe(imageRef.current);
    pillarsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Parallax */
  useEffect(() => {
    const wrap = imageRef.current;
    if (!wrap) return;
    const onScroll = () => {
      const rect  = wrap.getBoundingClientRect();
      const ratio = rect.top / window.innerHeight;
      const img   = wrap.querySelector(".cf-img");
      if (img) img.style.transform = `scale(1.08) translateY(${ratio * 36}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="cf-root" ref={sectionRef}>

      <div className="cf-fade cf-fade--top" />

      {/* ── IMAGE HERO ── */}
      <div className="cf-image-wrap" ref={imageRef}>

        <img
          src={img1}
          alt="ORA team collaborating — engineers, researchers, and medical advisors"
          className={`cf-img${imgLoaded ? " cf-img--loaded" : ""}`}
          onLoad={() => setImgLoaded(true)}
        />

        <div className="cf-overlay cf-overlay--dark" />
        <div className="cf-overlay cf-overlay--vignette" />

        {/* eyebrow */}
        <div className="cf-eyebrow">
          <span className="cf-eyebrow-tick" />
          <span className="cf-eyebrow-text">Life at ORA</span>
          <span className="cf-eyebrow-tick" />
        </div>

        {/* headline */}
        <div className="cf-title-wrap">
          <p className="cf-pre-title">Where Vision</p>
          <h2 className="cf-title">
            {"Meets".split("").map((ch, i) => (
              <span key={i} className="cf-char" style={{ "--ci": i }}>
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
            <em className="cf-title-em">&nbsp;Vitality</em>
          </h2>
          <p className="cf-post-title">
            Four principles that shape everything we build.
          </p>
        </div>

        {/* scroll cue */}
        <div className="cf-scroll-cue">
          <span className="cf-scroll-line" />
          <span className="cf-scroll-label">Scroll</span>
        </div>

        {/* ── SVG CURVE TRANSITION ── */}
        <svg
          className="cf-wave"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Pink accent curve just above the fill */}
          <path
            className="cf-wave-line"
            d="M0,55 C320,110 720,0 1440,72"
            fill="none"
            stroke="var(--pink)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          {/* White fill that becomes the pillars background */}
          <path
            d="M0,60 C320,115 720,5 1440,75 L1440,110 L0,110 Z"
            fill="var(--white)"
          />
        </svg>
      </div>

      {/* ── PILLARS ── */}
      <div className="cf-pillars">
        {pillars.map((p, i) => (
          <article
            key={i}
            className="cf-pillar"
            ref={(el) => (pillarsRef.current[i] = el)}
            style={{ "--d": `${i * 0.11 + 0.04}s` }}
          >
            <span className="cf-pillar-num">{p.label}</span>

            <div className="cf-pillar-icon">{p.icon}</div>

            <div className="cf-pillar-text">
              <h3 className="cf-pillar-title">
                {p.title}
                <span className="cf-pillar-sub">{p.sub}</span>
              </h3>
              <p className="cf-pillar-body">{p.body}</p>
            </div>

            <span className="cf-pillar-bar" />
          </article>
        ))}
      </div>

      <div className="cf-fade cf-fade--bottom" />
    </section>
  );
}
