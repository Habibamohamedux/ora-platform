import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    { num: '140', suffix: 'M+', label: 'Pregnancies globally each year' },
    { num: '600', suffix: 'B+', label: 'Global digital health market' },
    { num: '75', suffix: '%+', label: 'Preventable complications' },
    { num: '3', suffix: '×', label: 'Wearable health adoption growth' }
  ];

  const networkNodes = [
    { title: 'Pregnant Women', desc: 'Continuous monitoring' },
    { title: 'Doctors', desc: 'Real-time patient insights' },
    { title: 'Clinics & Hospitals', desc: 'Integrated systems' },
    { title: 'Partners & Families', desc: 'Support layer' }
  ];

  return (
    <section className="ora-market-section" ref={sectionRef}>
      <div className="ora-market-container">
        
        {/* --- TOP: INTRO --- */}
        <div className="ora-market-top">
          <div className="ora-market-badge">
            <span className="pulse-dot"></span>
            Every Pregnancy is a Data Point. ORA Connects Them.
          </div>
          <h2 className="ora-market-title">Scaling Maternal Health Globally</h2>
          
          <div className="ora-market-text-grid">
            <p className="ora-market-para lead">
              ORA operates at the intersection of maternal health, artificial intelligence, and digital care—three of the fastest-growing sectors globally.
            </p>
            <p className="ora-market-para">
              With over 140 million births each year, pregnancy represents a continuous, high-impact health journey that remains largely underserved by real-time monitoring solutions. As digital health adoption accelerates, ORA is positioned to scale globally, connecting users, healthcare providers, and data into one intelligent system.
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
            <h4 className="box-title">Connected Users Across the Ecosystem</h4>
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
            <h4 className="box-title">A Scalable Intelligence Network</h4>
            <p className="growth-intro">As more users join the ORA ecosystem, the system becomes exponentially more intelligent.</p>
            
            <div className="growth-loop-flow">
              <div className="loop-step"><span>More Users</span> generate</div>
              <div className="loop-arrow">↓</div>
              <div className="loop-step"><span>More Data</span> improves</div>
              <div className="loop-arrow">↓</div>
              <div className="loop-step"><span>Better Predictions</span> lead to</div>
              <div className="loop-arrow">↓</div>
              <div className="loop-step highlight"><span>Improved Outcomes</span></div>
            </div>
          </div>

        </div>

        {/* --- CTA & CLOSING --- */}
        <div className="ora-market-footer">
          <button className="ora-market-cta">
            Explore ORA Ecosystem <span className="arrow">→</span>
          </button>
          <p className="ora-market-closing">
            ORA is not just a product — it is a growing <span className="pink-text">intelligence network</span> for maternal health.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MarketPotential;