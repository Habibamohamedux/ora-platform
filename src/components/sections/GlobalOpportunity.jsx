import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
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
  const { t } = useLanguage();
  const statsLabels = t('globalOpportunity.stats');

  useEffect(() => {
    // Reveal Observer
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const stats = [
    { n: '700+', t: statsLabels?.[0] },
    { n: '90%+', t: statsLabels?.[1] },
    { n: '75%', t: statsLabels?.[2] },
    { n: '3×', t: statsLabels?.[3] }
  ];

  return (
    <section className={`ora-opp-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="ora-opp-container">
        <div className="ora-opp-content-side">
          <h2 className="ora-opp-title">
            <span className="reveal-line">{t('globalOpportunity.title1')}</span>
            <span className="reveal-line">{t('globalOpportunity.title2')}</span>
          </h2>
          <div className="ora-opp-description">
            <p className="ora-opp-p-lead">{t('globalOpportunity.lead')}</p>
            <p className="ora-opp-p">{t('globalOpportunity.body')}</p>
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
          <button className="ora-button ecosystem-btn">{t('globalOpportunity.cta')} →</button>
          <span className="btn-tiny-text">{t('globalOpportunity.ctaNote')}</span>
        </div>
        <p className="ora-opp-closing">
          {t('globalOpportunity.closingPrefix')}{' '}
          <span className="pink-span">{t('globalOpportunity.closingHighlight')}</span>
        </p>
      </div>
    </section>
  );
};

export default GlobalOpportunity;
