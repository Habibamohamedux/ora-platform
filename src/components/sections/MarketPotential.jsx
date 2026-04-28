import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../i18n/LanguageContext';
import './MarketPotential.css';

gsap.registerPlugin(ScrollTrigger);

// Custom Animated Counter Component
const CountUp = ({ end, suffix = "", duration = 2000 }) => {
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
      const totalFrames = 60;
      const increment = endValue / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, duration / totalFrames);
      return () => clearInterval(timer);
    }
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const MarketPotential = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  const statsLabels = t('marketPotential.stats');
  const nodes = t('marketPotential.nodes');
  const growthSteps = t('marketPotential.growthSteps');

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    // Reveal Intro
    tl.fromTo(".ora-market-badge", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(".ora-market-title", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .fromTo(".ora-market-para", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
      // Reveal Stats
      .fromTo(".ora-market-stat-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }, "-=0.2")
      // Reveal Bottom Section
      .fromTo(".ora-market-bottom-grid", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.4");

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  const stats = [
    { num: '140', suffix: 'M+', label: statsLabels?.[0] },
    { num: '600', suffix: 'B+', label: statsLabels?.[1] },
    { num: '75', suffix: '%+', label: statsLabels?.[2] },
    { num: '3', suffix: '×', label: statsLabels?.[3] }
  ];

  const networkNodes = [
    { title: nodes?.[0]?.title, desc: nodes?.[0]?.desc },
    { title: nodes?.[1]?.title, desc: nodes?.[1]?.desc },
    { title: nodes?.[2]?.title, desc: nodes?.[2]?.desc },
    { title: nodes?.[3]?.title, desc: nodes?.[3]?.desc }
  ];

  return (
    <section className="ora-market-section" ref={sectionRef}>
      <div className="ora-market-container">
        
        {/* --- TOP: INTRO --- */}
        <div className="ora-market-top">
          <div className="ora-market-badge">
            <span className="pulse-dot"></span>
            {t('marketPotential.badge')}
          </div>
          <h2 className="ora-market-title">{t('marketPotential.title')}</h2>
          
          <div className="ora-market-text-grid">
            <p className="ora-market-para lead">
              {t('marketPotential.lead')}
            </p>
            <p className="ora-market-para">
              {t('marketPotential.body')}
            </p>
          </div>
        </div>

        {/* --- MIDDLE: BIG NUMBERS UI --- */}
        <div className="ora-market-stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="ora-market-stat-card">
              <h3 className="stat-big-number">
                <CountUp end={stat.num} suffix={stat.suffix} />
              </h3>
              <p className="stat-label">{stat.label}</p>
              <div className="stat-hover-line"></div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM: ECOSYSTEM & GROWTH LOOP --- */}
        <div className="ora-market-bottom-grid">
          
          {/* Left: Ecosystem Nodes */}
          <div className="ora-market-network-box">
            <h4 className="box-title">{t('marketPotential.ecosystemTitle')}</h4>
            <div className="network-nodes-container">
              {networkNodes.map((node, i) => (
                <div key={i} className="network-node">
                  <div className="node-point"></div>
                  <div className="node-content">
                    <h5 className="node-title">{node.title}</h5>
                    <p className="node-desc">→ {node.desc}</p>
                  </div>
                </div>
              ))}
              {/* The connecting vertical line */}
              <div className="network-connection-line"></div>
            </div>
          </div>

          {/* Right: AI Scalability Loop */}
          <div className="ora-market-growth-box">
            <h4 className="box-title">{t('marketPotential.growthTitle')}</h4>
            <p className="growth-intro">{t('marketPotential.growthIntro')}</p>
            
            <div className="growth-loop-flow">
              <div className="loop-step"><span>{growthSteps?.[0]?.[0]}</span> {growthSteps?.[0]?.[1]}</div>
              <div className="loop-arrow">↓</div>
              <div className="loop-step"><span>{growthSteps?.[1]?.[0]}</span> {growthSteps?.[1]?.[1]}</div>
              <div className="loop-arrow">↓</div>
              <div className="loop-step"><span>{growthSteps?.[2]?.[0]}</span> {growthSteps?.[2]?.[1]}</div>
              <div className="loop-arrow">↓</div>
              <div className="loop-step highlight"><span>{growthSteps?.[3]?.[0]}</span></div>
            </div>
          </div>

        </div>

        {/* --- CTA & CLOSING --- */}
        <div className="ora-market-footer">
          <button className="ora-market-cta">
            {t('marketPotential.cta')} <span className="arrow">→</span>
          </button>
          <p className="ora-market-closing">
            {t('marketPotential.closingPrefix')}{' '}
            <span className="pink-text">{t('marketPotential.closingHighlight')}</span>{' '}
            {t('marketPotential.closingSuffix')}
          </p>
        </div>

      </div>
    </section>
  );
};

export default MarketPotential;
