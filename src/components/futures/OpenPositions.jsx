import React, { useState, useEffect, useRef, useMemo } from "react";
import "../../pages/Futures.css";

/* ── Job data ── */
const JOBS = [
  {
    id: 1,
    title: "Senior Hardware Engineer",
    dept: "Hardware",
    location: "Cairo",
    type: "Hybrid",
    division: "ORA Bracelet & Digitals",
    blurb: "Design and iterate on next-gen maternal wearable PCBs, sensor arrays, and low-power embedded circuits.",
  },
  {
    id: 2,
    title: "Embedded Systems Developer",
    dept: "Firmware",
    location: "Cairo",
    type: "Hybrid",
    division: "ORA Bracelet & Digitals",
    blurb: "Write production-grade firmware in C/C++ for real-time biometric signal acquisition on ARM Cortex-M devices.",
  },
  {
    id: 3,
    title: "iOS Mobile Developer",
    dept: "Mobile",
    location: "Cairo",
    type: "Hybrid",
    division: "ORA App Division",
    blurb: "Build Swift/SwiftUI features that translate complex health data into clear, compassionate patient experiences.",
  },
  {
    id: 4,
    title: "Product Designer",
    dept: "Design",
    location: "Cairo",
    type: "Hybrid",
    division: "ORA App Division",
    blurb: "Shape end-to-end user flows for both the patient app and the clinical dashboard — accessibility-first always.",
  },
  {
    id: 5,
    title: "Backend Engineer",
    dept: "Backend",
    location: "Cairo",
    type: "Hybrid",
    division: "ORA Doctor OB-GYN",
    blurb: "Architect HIPAA-grade APIs and event-driven microservices handling real-time biometric streams at scale.",
  },
  {
    id: 6,
    title: "Clinical Software Architect",
    dept: "Architecture",
    location: "Cairo",
    type: "Hybrid",
    division: "ORA Doctor OB-GYN",
    blurb: "Lead the technical design of EMR integrations and clinical decision-support engines with medical advisors.",
  },
  {
    id: 7,
    title: "Data Scientist",
    dept: "ML/AI",
    location: "Cairo",
    type: "Hybrid",
    division: "ORA App Division",
    blurb: "Train predictive models on longitudinal maternal health data — from anomaly detection to risk stratification.",
  },
  {
    id: 8,
    title: "DevOps Engineer",
    dept: "Infrastructure",
    location: "Cairo",
    type: "Hybrid",
    division: "ORA Doctor OB-GYN",
    blurb: "Own CI/CD pipelines, Kubernetes clusters, and observability stacks for a zero-downtime clinical platform.",
  },
  {
    id: 9,
    title: "Security Engineer",
    dept: "Security",
    location: "Cairo",
    type: "Hybrid",
    division: "ORA Bracelet & Digitals",
    blurb: "Audit, harden, and automate security across our full stack — device firmware through cloud infrastructure.",
  },
  {
    id: 10,
    title: "ML / Signal Processing Engineer",
    dept: "ML/AI",
    location: "Cairo",
    type: "Hybrid",
    division: "ORA Bracelet & Digitals",
    blurb: "Extract clinically meaningful patterns from raw PPG, ECG, and accelerometer streams using DSP and deep learning.",
  },
];

const DEPTS = ["All", ...Array.from(new Set(JOBS.map((j) => j.dept)))];

/* ── Icon helpers ── */
const IconPin = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconBriefcase = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
  </svg>
);
const IconChevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IconSearch = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

/* ── Animated counter ── */
function Counter({ target }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = null;
    const duration = 600;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.round(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return <>{val}</>;
}

/* ── Single expandable row ── */
function JobRow({ job, index, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  return (
    <li
      className={`op-row ${isOpen ? "op-row--open" : ""}`}
      style={{ "--op-i": index }}
    >
      <button className="op-row-head" onClick={onToggle} aria-expanded={isOpen}>
        {/* left */}
        <div className="op-row-left">
          <span className="op-row-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="op-row-title">{job.title}</span>
          <span className="op-row-dept">{job.dept}</span>
        </div>
        {/* right */}
        <div className="op-row-right">
          <span className="op-badge op-badge--loc"><IconPin />{job.location}</span>
          <span className="op-badge op-badge--type"><IconBriefcase />{job.type}</span>
          <span className={`op-chevron ${isOpen ? "op-chevron--open" : ""}`}><IconChevron /></span>
        </div>
      </button>

      {/* expanded body */}
      <div
        className="op-row-body"
        ref={bodyRef}
        style={{ maxHeight: isOpen ? bodyRef.current?.scrollHeight + "px" : "0px" }}
      >
        <div className="op-row-body-inner">
          <div className="op-row-division">
            <span className="op-division-dot" />
            {job.division}
          </div>
          <p className="op-row-blurb">{job.blurb}</p>
          <button className="op-apply-btn" type="button">
            Apply Now <IconArrow />
          </button>
        </div>
      </div>
    </li>
  );
}

/* ── Main component ── */
export default function OpenPositions() {
  const [activeDept, setActiveDept]   = useState("All");
  const [query, setQuery]             = useState("");
  const [openId, setOpenId]           = useState(null);
  const [visible, setVisible]         = useState(false);
  const sectionRef                    = useRef(null);

  /* Scroll reveal */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.06 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  /* Filtered list */
  const filtered = useMemo(() => {
    return JOBS.filter((j) => {
      const deptMatch = activeDept === "All" || j.dept === activeDept;
      const qMatch    = !query || j.title.toLowerCase().includes(query.toLowerCase()) ||
                        j.dept.toLowerCase().includes(query.toLowerCase());
      return deptMatch && qMatch;
    });
  }, [activeDept, query]);

  /* Close open row when filter changes */
  useEffect(() => setOpenId(null), [activeDept, query]);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      className={`op-root ${visible ? "op-visible" : ""}`}
      ref={sectionRef}
    >
      {/* bg decorations */}
      <div className="op-bg-dot"   aria-hidden="true" />
      <div className="op-bg-line"  aria-hidden="true" />
      <div className="op-bg-glow"  aria-hidden="true" />

      {/* ── HEADER ── */}
      <header className="op-header">
        <p className="op-eyebrow">
          <span className="op-eyebrow-bar" />We're Hiring<span className="op-eyebrow-bar" />
        </p>
        <h2 className="op-heading">
          <span className="op-heading-word">See Our</span>
          <span className="op-heading-word op-heading-word--pink"> Open</span>
          <br />
          <span className="op-heading-word">Positions</span>
        </h2>
        <p className="op-sub">
          Choose your <strong>department</strong> &amp; <strong>location</strong> of interest
        </p>
      </header>

      {/* ── CONTROLS ── */}
      <div className="op-controls">
        {/* Search */}
        <div className="op-search-wrap">
          <span className="op-search-icon"><IconSearch /></span>
          <input
            className="op-search"
            type="text"
            placeholder="Search roles…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search positions"
          />
          {query && (
            <button className="op-search-clear" onClick={() => setQuery("")} aria-label="Clear search">✕</button>
          )}
        </div>

        {/* Dept filters */}
        <div className="op-filters" role="group" aria-label="Filter by department">
          {DEPTS.map((d) => (
            <button
              key={d}
              className={`op-filter ${activeDept === d ? "op-filter--active" : ""}`}
              onClick={() => setActiveDept(d)}
              type="button"
            >
              {d}
              <span className="op-filter-count">
                {d === "All" ? JOBS.length : JOBS.filter((j) => j.dept === d).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── RESULTS BAR ── */}
      <div className="op-meta">
        <span className="op-count">
          <Counter target={filtered.length} /> result{filtered.length !== 1 ? "s" : ""}
        </span>
        <span className="op-meta-line" />
        <span className="op-meta-text">Cairo · Hybrid</span>
      </div>

      {/* ── JOB LIST ── */}
      <ul className="op-list">
        {filtered.length > 0 ? (
          filtered.map((job, i) => (
            <JobRow
              key={job.id}
              job={job}
              index={i}
              isOpen={openId === job.id}
              onToggle={() => toggle(job.id)}
            />
          ))
        ) : (
          <li className="op-empty">
            <span>No positions match — try a different filter.</span>
          </li>
        )}
      </ul>

      {/* ── FOOTER CTA ── */}
      <div className="op-footer">
        <button className="op-view-all" type="button">
          View All Openings <IconArrow />
        </button>
      </div>
    </section>
  );
}