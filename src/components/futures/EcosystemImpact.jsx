import React, { useEffect, useRef, useState, useCallback } from "react";
import "../../pages/Futures.css";
import ORA1 from "../../assests/Imgs/careers/ORA-01.png";
import ORA2 from "../../assests/Imgs/careers/ORA-02.png";
import ORA3 from "../../assests/Imgs/careers/ORA-03.png";
import ORA4 from "../../assests/Imgs/careers/ORA-04.png";

/* ─────────────────────────────────────────────────────────
   Hooks
───────────────────────────────────────────────────────── */

/** Fires once when element enters viewport */
function useInView(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/** Counts up from 0 → target when `visible` becomes true */
function useCounter(target, visible, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let startTime = null;
    const raf = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [visible, target, duration]);
  return val;
}

/* ─────────────────────────────────────────────────────────
   SVG Icons
───────────────────────────────────────────────────────── */
const BraceletIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="7" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="2"  x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="2"  y1="12" x2="5"  y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
  </svg>
);

const AppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <line x1="9" y1="7"  x2="15" y2="7" />
    <line x1="9" y1="11" x2="15" y2="11" />
    <line x1="9" y1="18" x2="15" y2="18" />
  </svg>
);

const DoctorIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2z" />
    <path d="M4 22c0-4.418 3.582-8 8-8s8 3.582 8 8" />
    <line x1="17" y1="16" x2="21" y2="16" />
    <line x1="19" y1="14" x2="19" y2="18" />
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <polyline points="9,2 4,7 9,12" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <polyline points="5,2 10,7 5,12" />
  </svg>
);

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */
const SLIDES = [
  { src: ORA1, alt: "ORA Health Campus – View 1" },
  { src: ORA2, alt: "ORA Health Campus – View 2" },
  { src: ORA3, alt: "ORA Health Campus – View 3" },
  { src: ORA4, alt: "ORA Health Campus – View 4" },
];

const STATS = [
  { value: 5000,  suffix: "+", label: "Patients Monitored",     delay: 0 },
  { value: 2500,  suffix: "+", label: "Doctors Using ORA",      delay: 1 },
  { value: 10000, suffix: "+", label: "Data Points Processed",  delay: 2 },
];

const CARDS = [
  {
    id: "bracelet",
    icon: <BraceletIcon />,
    title: "BRACELET",
    sub: "Hardware",
    desc: "Continuous health monitoring, worn daily",
  },
  {
    id: "app",
    icon: <AppIcon />,
    title: "APP",
    sub: "Patient Platform",
    desc: "Simple insights for mothers",
  },
  {
    id: "doctor",
    icon: <DoctorIcon />,
    title: "DOCTOR SYSTEM",
    sub: "Clinical Platform",
    desc: "Smarter care through connected data",
  },
];

/* ─────────────────────────────────────────────────────────
   Stat Item  (counter lives here so each has its own hook)
───────────────────────────────────────────────────────── */
function StatItem({ value, suffix, label, visible, delay }) {
  const count = useCounter(value, visible, 1700 + delay * 250);
  return (
    <div className="EcosystemImpact__stat">
      <span className="EcosystemImpact__statNumber">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="EcosystemImpact__statLabel">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Component
───────────────────────────────────────────────────────── */
export default function EcosystemImpact() {
  /* slideshow */
  const [current, setCurrent]     = useState(0);
  const [paused, setPaused]       = useState(false);
  const intervalRef               = useRef(null);

  const goTo = useCallback((index) => {
    setCurrent((index + SLIDES.length) % SLIDES.length);
  }, []);

  const startInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
  }, []);

  useEffect(() => {
    if (!paused) startInterval();
    return () => clearInterval(intervalRef.current);
  }, [paused, startInterval]);

  const handleNav = (dir) => {
    goTo(current + dir);
    setPaused(true);
    setTimeout(() => setPaused(false), 8000);
  };

  /* in-view triggers */
  const [statsRef, statsVisible] = useInView(0.3);
  const [cardsRef, cardsVisible] = useInView(0.2);

  /* active card */
  const [activeCard, setActiveCard] = useState(null);
  const toggleCard = (id) => setActiveCard((prev) => (prev === id ? null : id));

  return (
    <section className="EcosystemImpact" aria-label="Our Impact and Ecosystem">

      {/* ══════════════ IMPACT ══════════════ */}
      <div className="EcosystemImpact__impact">

        <p className="EcosystemImpact__sectionLabel">Impact</p>
        <h2 className="EcosystemImpact__impactHeading">OUR IMPACT</h2>

        {/* ── Slideshow ── */}
        <div
          className="EcosystemImpact__imageCard"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="EcosystemImpact__slides">
            {SLIDES.map((slide, i) => (
              <div
                key={slide.alt}
                className={`EcosystemImpact__slide${i === current ? " EcosystemImpact__slide--active" : ""}`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="EcosystemImpact__slideImg"
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
                <div className="EcosystemImpact__slideOverlay" aria-hidden="true" />
              </div>
            ))}

            {/* prev / next */}
            <button
              className="EcosystemImpact__navBtn EcosystemImpact__navBtn--prev"
              onClick={() => handleNav(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <button
              className="EcosystemImpact__navBtn EcosystemImpact__navBtn--next"
              onClick={() => handleNav(1)}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>

            {/* dots */}
            <div className="EcosystemImpact__dots" role="tablist" aria-label="Slide indicators">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`EcosystemImpact__dot${i === current ? " EcosystemImpact__dot--active" : ""}`}
                  onClick={() => { goTo(i); setPaused(true); setTimeout(() => setPaused(false), 8000); }}
                />
              ))}
            </div>
          </div>

          {/* ── Stats row (below image, inside card) ── */}
          <div className="EcosystemImpact__stats" ref={statsRef}>
            {STATS.map((s) => (
              <StatItem
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                visible={statsVisible}
                delay={s.delay}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════ ECOSYSTEM ══════════════ */}
      <div className="EcosystemImpact__ecosystem">

        {/* decorative rings */}
        <span className="EcosystemImpact__ecoRing EcosystemImpact__ecoRing--1" aria-hidden="true" />
        <span className="EcosystemImpact__ecoRing EcosystemImpact__ecoRing--2" aria-hidden="true" />
        <span className="EcosystemImpact__ecoRing EcosystemImpact__ecoRing--3" aria-hidden="true" />

        {/* left */}
        <div className="EcosystemImpact__ecoLeft">
          <p className="EcosystemImpact__infoBadge">
            <span className="EcosystemImpact__infoDot" aria-hidden="true" />
            Info
          </p>

          <h3 className="EcosystemImpact__ecoTitle">
            ONE<br />ECOSYSTEM
          </h3>

          <p className="EcosystemImpact__ecoBody">
            Data flows seamlessly between hardware, patient experience, and
            clinical decision-making. Build the connective tissue of women's
            healthcare.
          </p>

          <span className="EcosystemImpact__shimmerBar" aria-hidden="true" />
        </div>

        {/* right – cards */}
        <div className="EcosystemImpact__cards" ref={cardsRef}>
          {CARDS.map((card) => (
            <div
              key={card.id}
              role="button"
              tabIndex={0}
              aria-pressed={activeCard === card.id}
              className={[
                "EcosystemImpact__card",
                cardsVisible  ? "EcosystemImpact__card--visible" : "",
                activeCard === card.id ? "EcosystemImpact__card--active"  : "",
              ].filter(Boolean).join(" ")}
              onClick={() => toggleCard(card.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleCard(card.id);
                }
              }}
            >
              <div className="EcosystemImpact__cardIcon">{card.icon}</div>

              <div className="EcosystemImpact__cardText">
                <div className="EcosystemImpact__cardTitle">{card.title}</div>
                <div className="EcosystemImpact__cardSub">{card.sub}</div>
                <div className="EcosystemImpact__cardDesc">{card.desc}</div>
              </div>

              <div className="EcosystemImpact__cardArrow" aria-hidden="true">
                <ChevronRight />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}