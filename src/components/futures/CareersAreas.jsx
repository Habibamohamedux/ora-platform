import React, { useEffect, useRef } from "react";
import "../../pages/Futures.css";

/* ── Data ── */
const areas = [
  {
    id: "01",
    name: "ORA App Division",
    tag: "Mobile & Web",
    focus: "Patient experience, dashboards, AI-powered pregnancy insights",
    roles: ["Frontend Engineer", "UX Designer", "AI/ML Engineer"],
    color: "var(--ca-pink-a)",
    svg: (
      <svg className="ca-illustration" viewBox="0 0 220 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Phone body */}
        <rect className="ca-svg-draw" x="50" y="20" width="120" height="220" rx="18" strokeWidth="2.5" stroke="currentColor" fill="none" strokeDasharray="600" strokeDashoffset="600"/>
        {/* Screen */}
        <rect className="ca-svg-draw ca-svg-draw--d1" x="62" y="50" width="96" height="140" rx="6" strokeWidth="1.5" stroke="currentColor" fill="none" strokeDasharray="450" strokeDashoffset="450"/>
        {/* UI rows */}
        <rect className="ca-svg-draw ca-svg-draw--d2" x="72" y="64"  width="60" height="8"  rx="3" strokeWidth="1.5" stroke="currentColor" fill="none" strokeDasharray="150" strokeDashoffset="150"/>
        <rect className="ca-svg-draw ca-svg-draw--d2" x="72" y="80"  width="76" height="6"  rx="3" strokeWidth="1.5" stroke="currentColor" fill="none" strokeDasharray="170" strokeDashoffset="170"/>
        <rect className="ca-svg-draw ca-svg-draw--d3" x="72" y="95"  width="76" height="28" rx="5" strokeWidth="1.5" stroke="currentColor" fill="none" strokeDasharray="210" strokeDashoffset="210"/>
        <rect className="ca-svg-draw ca-svg-draw--d3" x="72" y="132" width="35" height="22" rx="5" strokeWidth="1.5" stroke="currentColor" fill="none" strokeDasharray="120" strokeDashoffset="120"/>
        <rect className="ca-svg-draw ca-svg-draw--d3" x="114" y="132" width="34" height="22" rx="5" strokeWidth="1.5" stroke="currentColor" fill="none" strokeDasharray="120" strokeDashoffset="120"/>
        <rect className="ca-svg-draw ca-svg-draw--d4" x="72" y="162" width="76" height="18" rx="5" strokeWidth="1.5" stroke="currentColor" fill="none" strokeDasharray="190" strokeDashoffset="190"/>
        {/* Home button */}
        <circle className="ca-svg-draw ca-svg-draw--d4" cx="110" cy="222" r="9" strokeWidth="1.5" stroke="currentColor" fill="none" strokeDasharray="60" strokeDashoffset="60"/>
        {/* Pulse dot */}
        <circle className="ca-pulse-dot" cx="140" cy="68" r="4" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "02",
    name: "ORA Doctor OB-GYN",
    tag: "Clinical Systems",
    focus: "Secure EMR systems, patient history, clinical decision support",
    roles: ["Backend Engineer", "Clinical UX", "Data Architect"],
    color: "var(--ca-pink-b)",
    svg: (
      <svg className="ca-illustration" viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Monitor body */}
        <rect className="ca-svg-draw" x="20" y="10" width="220" height="155" rx="12" strokeWidth="2.5" stroke="currentColor" fill="none" strokeDasharray="800" strokeDashoffset="800"/>
        {/* Screen inner */}
        <rect className="ca-svg-draw ca-svg-draw--d1" x="34" y="24" width="192" height="127" rx="6" strokeWidth="1.5" stroke="currentColor" fill="none" strokeDasharray="660" strokeDashoffset="660"/>
        {/* Grid lines */}
        <line className="ca-svg-draw ca-svg-draw--d2" x1="34" y1="60"  x2="226" y2="60"  strokeWidth="0.8" stroke="currentColor" strokeDasharray="192" strokeDashoffset="192" strokeOpacity="0.35"/>
        <line className="ca-svg-draw ca-svg-draw--d2" x1="34" y1="88"  x2="226" y2="88"  strokeWidth="0.8" stroke="currentColor" strokeDasharray="192" strokeDashoffset="192" strokeOpacity="0.35"/>
        <line className="ca-svg-draw ca-svg-draw--d2" x1="34" y1="116" x2="226" y2="116" strokeWidth="0.8" stroke="currentColor" strokeDasharray="192" strokeDashoffset="192" strokeOpacity="0.35"/>
        {/* ECG line — animated */}
        <polyline
          className="ca-ecg"
          points="34,88 60,88 72,88 80,40 90,135 100,88 112,88 124,60 134,115 142,88 160,88 180,88 195,88 226,88"
          strokeWidth="2.2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="700"
          strokeDashoffset="700"
        />
        {/* Stand */}
        <line className="ca-svg-draw ca-svg-draw--d3" x1="130" y1="165" x2="130" y2="195" strokeWidth="2.5" stroke="currentColor" strokeDasharray="30" strokeDashoffset="30"/>
        <rect className="ca-svg-draw ca-svg-draw--d3" x="90" y="195" width="80" height="10" rx="5" strokeWidth="2" stroke="currentColor" fill="none" strokeDasharray="180" strokeDashoffset="180"/>
        {/* Status dots */}
        <circle className="ca-svg-draw ca-svg-draw--d4" cx="108" cy="152" r="4" strokeWidth="1.5" stroke="currentColor" fill="none" strokeDasharray="25" strokeDashoffset="25"/>
        <circle className="ca-svg-draw ca-svg-draw--d4" cx="130" cy="152" r="4" strokeWidth="1.5" stroke="currentColor" fill="none" strokeDasharray="25" strokeDashoffset="25"/>
        <circle className="ca-pulse-dot" cx="152" cy="152" r="4" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "03",
    name: "ORA Bracelet & Digitals",
    tag: "Wearable Tech",
    focus: "Smart maternal monitoring, wearable data tracking, secure signal transmission",
    roles: ["Embedded Engineer", "Signal Processing", "Industrial Designer"],
    color: "var(--ca-pink-c)",
    svg: (
      <svg className="ca-illustration" viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring — pulse circles */}
        <circle className="ca-ring ca-ring--3" cx="120" cy="120" r="100" strokeWidth="0.8" stroke="currentColor" strokeDasharray="628" strokeDashoffset="628" strokeOpacity="0.2"/>
        <circle className="ca-ring ca-ring--2" cx="120" cy="120" r="80"  strokeWidth="1"   stroke="currentColor" strokeDasharray="502" strokeDashoffset="502" strokeOpacity="0.35"/>
        <circle className="ca-ring ca-ring--1" cx="120" cy="120" r="62"  strokeWidth="1.5" stroke="currentColor" strokeDasharray="390" strokeDashoffset="390"/>
        {/* Wrist band top + bottom */}
        <path className="ca-svg-draw ca-svg-draw--d1" d="M74,78 Q60,55 80,40 Q100,26 120,28 Q140,26 160,40 Q180,55 166,78" strokeWidth="2.5" stroke="currentColor" fill="none" strokeDasharray="200" strokeDashoffset="200"/>
        <path className="ca-svg-draw ca-svg-draw--d1" d="M74,162 Q60,185 80,200 Q100,214 120,212 Q140,214 160,200 Q180,185 166,162" strokeWidth="2.5" stroke="currentColor" fill="none" strokeDasharray="200" strokeDashoffset="200"/>
        {/* Device face */}
        <rect className="ca-svg-draw ca-svg-draw--d2" x="78" y="82" width="84" height="76" rx="14" strokeWidth="2" stroke="currentColor" fill="none" strokeDasharray="340" strokeDashoffset="340"/>
        {/* Screen data */}
        <line className="ca-svg-draw ca-svg-draw--d3" x1="91" y1="105" x2="149" y2="105" strokeWidth="1.2" stroke="currentColor" strokeDasharray="58" strokeDashoffset="58" strokeOpacity="0.5"/>
        <line className="ca-svg-draw ca-svg-draw--d3" x1="91" y1="120" x2="149" y2="120" strokeWidth="1.2" stroke="currentColor" strokeDasharray="58" strokeDashoffset="58" strokeOpacity="0.5"/>
        {/* Heart rate mini */}
        <polyline className="ca-ecg ca-ecg--small" points="91,135 100,135 105,122 110,147 115,135 124,135 149,135" strokeWidth="1.8" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" strokeDashoffset="200"/>
        {/* Centre pulse dot */}
        <circle className="ca-pulse-dot" cx="120" cy="97" r="4" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function CareersAreas() {
  const sectionRef = useRef(null);
  const cardRefs   = useRef([]);

  /* ── Scroll reveal ── */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("ca-visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.07 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    cardRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  /* ── 3-D mouse-tilt per card ── */
  useEffect(() => {
    const cleanup = cardRefs.current.map((card) => {
      if (!card) return null;
      const onMove = (e) => {
        const r   = card.getBoundingClientRect();
        const x   = (e.clientX - r.left) / r.width  - 0.5;
        const y   = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) translateY(-8px) scale(1.02)`;
        const glow = card.querySelector(".ca-card-glow");
        if (glow) {
          glow.style.left = `${(x + 0.5) * 100}%`;
          glow.style.top  = `${(y + 0.5) * 100}%`;
        }
      };
      const onLeave = () => {
        card.style.transform = "";
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      return () => { card.removeEventListener("mousemove", onMove); card.removeEventListener("mouseleave", onLeave); };
    });
    return () => cleanup.forEach((fn) => fn && fn());
  }, []);

  return (
    <section className="ca-root" ref={sectionRef}>

      {/* ── Background decoration ── */}
      <div className="ca-bg-grid" aria-hidden="true" />
      <div className="ca-bg-orb ca-bg-orb--1" aria-hidden="true" />
      <div className="ca-bg-orb ca-bg-orb--2" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="ca-header">
        <div className="ca-header-eyebrow">
          <span className="ca-eyebrow-dot" />
          <span>Explore Divisions</span>
          <span className="ca-eyebrow-dot" />
        </div>
        <h2 className="ca-heading">
          <span className="ca-heading-row">Featured</span>
          <span className="ca-heading-row ca-heading-row--stroke">Career</span>
          <span className="ca-heading-row">Areas</span>
        </h2>
        <p className="ca-subheading">
          Three specialised divisions. One shared mission — redefining maternal health.
        </p>
        <div className="ca-header-line" />
      </header>

      {/* ── Cards ── */}
      <div className="ca-cards">
        {areas.map((area, i) => (
          <article
            key={area.id}
            className="ca-card"
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ "--ca-color": area.color, "--ca-d": `${i * 0.15}s` }}
          >
            {/* Moving glow spot */}
            <div className="ca-card-glow" aria-hidden="true" />

            {/* Top bar */}
            <div className="ca-card-top">
              <span className="ca-card-num">{area.id}</span>
              <span className="ca-card-tag">{area.tag}</span>
            </div>

            {/* SVG illustration */}
            <div className="ca-card-illus">{area.svg}</div>

            {/* Bottom content */}
            <div className="ca-card-body">
              <div className="ca-card-divider" />
              <h3 className="ca-card-name">{area.name}</h3>
              <p className="ca-card-label">Focus</p>
              <p className="ca-card-focus">{area.focus}</p>

              {/* Roles — reveal on hover */}
              <ul className="ca-card-roles">
                {area.roles.map((r) => (
                  <li key={r} className="ca-card-role">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>

              <button className="ca-card-btn" type="button">
                Explore Roles
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}