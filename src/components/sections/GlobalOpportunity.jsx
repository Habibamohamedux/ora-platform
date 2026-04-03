import React, { useEffect, useRef, useState } from 'react';
import './GlobalOpportunity.css';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasStarted(true); },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    
    if (hasStarted) {
      let start = 0;
      const endValue = parseInt(end.replace(/\D/g, ''));
      const suffix = end.replace(/[0-9]/g, '');
      const totalFrames = 60;
      const increment = endValue / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue + suffix);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start) + suffix);
        }
      }, duration / totalFrames);
      return () => clearInterval(timer);
    }
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count || `0${end.replace(/[0-9]/g, '')}`}</span>;
};

const GlobalOpportunity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Reveal Observer
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const stats = [
    { n: '700+', t: 'Women die daily from preventable pregnancy complications' },
    { n: '90%+', t: 'Of maternal deaths occur in low-resource settings' },
    { n: '75%', t: 'Receive adequate prenatal care (4+ visits)' },
    { n: '3×', t: 'Higher global mortality rate vs UN target' }
  ];

  return (
    <section className={`ora-opp-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="ora-opp-container">
        <div className="ora-opp-content-side">
          <h2 className="ora-opp-title">
            <span className="reveal-line">A Global</span>
            <span className="reveal-line">Opportunity</span>
          </h2>
          <div className="ora-opp-description">
            <p className="ora-opp-p-lead">Maternal health remains one of the most underserved areas in global healthcare.</p>
            <p className="ora-opp-p">ORA addresses this gap by transforming fragmented health data into real-time, actionable intelligence through AI.</p>
          </div>
        </div>

        <div className="ora-opp-stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="ora-opp-stat-card" style={{transitionDelay: `${(i + 3) * 150}ms`}}>
              <div className="card-border-glow"></div>
              <h3 className="stat-number"><CountUp end={s.n} /></h3>
              <p className="stat-label">{s.t}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ora-opp-footer">
        <div className="footer-cta-wrapper">
          <button className="ora-button ecosystem-btn">Explore ORA Ecosystem →</button>
          <span className="btn-tiny-text">Join the movement toward proactive maternal care.</span>
        </div>
        <p className="ora-opp-closing">A shift from reactive care to <span className="pink-span">continuous intelligence.</span></p>
      </div>
    </section>
  );
};

export default GlobalOpportunity;