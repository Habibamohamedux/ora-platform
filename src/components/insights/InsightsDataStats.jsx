import React, { useEffect, useRef, useState } from 'react';
import './InsightsDataStats.css';

const COUNTERS = [
  { value: 87, suffix: '%', label: 'Detection Accuracy', change: '+12% vs last year', icon: '🎯' },
  { value: 3.2, suffix: '×', label: 'Fewer Adverse Outcomes', change: '+0.4× improvement', icon: '📉' },
  { value: 94, suffix: '%', label: 'Wearable Adoption Rate', change: '+23% this quarter', icon: '📈' },
  { value: 1200, suffix: '+', label: 'Patients in Trials', change: 'Across 3 countries', icon: '🌍' },
];

const BAR_DATA = [
  { label: 'AI Risk Detection', pct: 87 },
  { label: 'Remote Monitoring', pct: 74 },
  { label: 'Early Intervention', pct: 91 },
  { label: 'Data Accuracy', pct: 96 },
  { label: 'Patient Engagement', pct: 68 },
];

const LEGEND = [
  { color: 'var(--pink)', label: 'AI-Assisted Detection (87%)' },
  { color: 'rgba(103,102,124,0.6)', label: 'Traditional Methods (60%)' },
];

const useCounter = (target, duration = 1600, isVisible = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(Number.isInteger(target) ? Math.floor(start) : parseFloat(start.toFixed(1)));
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isVisible]);
  return count;
};

const CounterItem = ({ item, isVisible }) => {
  const value = useCounter(item.value, 1600, isVisible);
  return (
    <div className="data-stats__counter-item">
      <div className="data-stats__counter-icon">
        <span style={{ fontSize: '18px' }}>{item.icon}</span>
      </div>
      <span className="data-stats__counter-value">
        {value}<span className="data-stats__counter-suffix">{item.suffix}</span>
      </span>
      <span className="data-stats__counter-label">{item.label}</span>
      <div className="data-stats__counter-change">
        <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
          <path d="M18 15l-6-6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {item.change}
      </div>
    </div>
  );
};

const InsightsDataStats = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="data-stats" ref={sectionRef}>
      <div className="data-stats__inner">
        {/* Header */}
        <div className="data-stats__header">
          <span className="data-stats__tag">By the Numbers</span>
          <h2 className="data-stats__title">Data-Driven<br />Insights</h2>
          <p className="data-stats__subtitle">
            Real-world evidence from our clinical programs, wearable deployments,
            and AI validation studies.
          </p>
        </div>

        {/* Counters */}
        <div className="data-stats__counters">
          {COUNTERS.map((item, i) => (
            <CounterItem key={i} item={item} isVisible={isVisible} />
          ))}
        </div>

        {/* Charts */}
        <div className="data-stats__charts">
          {/* Bar Chart */}
          <div className="data-stats__chart-card">
            <div className="data-stats__chart-header">
              <h3 className="data-stats__chart-title">Performance Metrics</h3>
              <p className="data-stats__chart-desc">ORA AI Platform vs. industry benchmarks — Q1 2025</p>
            </div>
            <div className="data-stats__bar-chart">
              {BAR_DATA.map((row, i) => (
                <div className="data-stats__bar-row" key={i}>
                  <span className="data-stats__bar-label">{row.label}</span>
                  <div className="data-stats__bar-track">
                    <div
                      className="data-stats__bar-fill"
                      style={{
                        width: `${row.pct}%`,
                        animationDelay: `${i * 0.12 + 0.2}s`,
                      }}
                    />
                  </div>
                  <span className="data-stats__bar-pct">{row.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donut */}
          <div className="data-stats__chart-card">
            <div className="data-stats__chart-header">
              <h3 className="data-stats__chart-title">Detection Rate</h3>
              <p className="data-stats__chart-desc">AI vs. traditional methods</p>
            </div>
            <div className="data-stats__donut-wrap">
              <div className="data-stats__donut">
                <svg width="160" height="160" viewBox="0 0 160 160">
                  <circle className="data-stats__donut-track" cx="80" cy="80" r="65" />
                  <circle className="data-stats__donut-fill--2" cx="80" cy="80" r="65" />
                  <circle className="data-stats__donut-fill" cx="80" cy="80" r="65" />
                </svg>
                <div className="data-stats__donut-label">
                  <span className="data-stats__donut-pct">87%</span>
                  <span className="data-stats__donut-sublabel">AI-Assisted</span>
                </div>
              </div>
              <div className="data-stats__donut-legend">
                {LEGEND.map((l, i) => (
                  <div className="data-stats__legend-item" key={i}>
                    <div className="data-stats__legend-dot" style={{ background: l.color }} />
                    {l.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsDataStats;