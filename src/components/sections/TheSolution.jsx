import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TheSolution.css';

// Image Imports (Adjust path if your folder is spelled 'assests')
import imgAI from '../../assests/Imgs/Solution_AI.png';
import imgPulse from '../../assests/Imgs/Solution_Pulse.png';
import imgCompanion from '../../assests/Imgs/Solution_Companion.png';
import imgClinical from '../../assests/Imgs/Solution_Clinical.png';

gsap.registerPlugin(ScrollTrigger);

const ecosystemData = [
  {
    id: 'intelligence',
    tabName: 'Intelligence',
    title: 'Intelligence (AI System)',
    description: 'Transforms continuous health data into predictive insights using advanced AI models. Enables early detection of risks and supports informed, real-time decision-making.',
    cta: 'Learn More',
    link: '/intelligence',
    img: imgAI,
  },
  {
    id: 'pulse',
    tabName: 'Pulse',
    title: 'Pulse (Bracelet)',
    description: 'A wearable device that continuously tracks vital health signals such as heart rate, sleep patterns, and stress levels, providing real-time biometric monitoring beyond clinical visits.',
    cta: 'View Pulse',
    link: '/pulse',
    img: imgPulse,
  },
  {
    id: 'companion',
    tabName: 'Companion',
    title: 'Companion (App)',
    description: 'A personalized digital interface that delivers daily insights, tracking tools, and guidance, helping users stay informed and supported throughout their journey.',
    cta: 'Explore Companion',
    link: '/companion',
    img: imgCompanion,
  },
  {
    id: 'clinical',
    tabName: 'Clinical',
    title: 'Clinical (Doctor System)',
    description: 'A connected dashboard for healthcare providers offering live patient data, alerts, and monitoring tools, enabling faster response and better clinical outcomes.',
    cta: 'Discover Clinical',
    link: '/clinical',
    img: imgClinical,
  }
];

const TheSolution = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [isChanging, setIsChanging] = useState(false);

  // Scroll Reveal Animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    tl.fromTo(".ora-sol-title", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".ora-sol-intro-p", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.6")
      .fromTo(".ora-sol-showcase", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.4");
      
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  // Smooth crossfade when switching tabs
  const handleTabClick = (index) => {
    if (index === activeIdx || isChanging) return;
    setIsChanging(true);

    gsap.to(contentRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.25,
      onComplete: () => {
        setActiveIdx(index);
        gsap.to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => setIsChanging(false)
        });
      }
    });
  };

  const activeItem = ecosystemData[activeIdx];

  return (
    <section className="ora-sol-section" ref={sectionRef}>
      <div className="ora-sol-container">
        
        {/* TOP HEADER (Inspired by KAIB Layout) */}
        <div className="ora-sol-header">
          <div className="ora-sol-header-left">
            <h2 className="ora-sol-title">A Unified Health Ecosystem</h2>
          </div>
          <div className="ora-sol-header-right">
            <p className="ora-sol-intro-p highlight-p">
              ORA brings together artificial intelligence, wearable technology, and clinical systems into a single connected ecosystem designed for continuous maternal monitoring.
            </p>
            <p className="ora-sol-intro-p">
              By integrating real-time biometric data, predictive insights, and doctor oversight, ORA transforms fragmented healthcare into a seamless and intelligent experience.
            </p>
            <p className="ora-sol-intro-p">
              This unified approach enables earlier detection, proactive care, and a more connected journey for both mothers and healthcare providers.
            </p>
          </div>
        </div>

        {/* INTERACTIVE SHOWCASE */}
        <div className="ora-sol-showcase">
          
          {/* Custom Tabs */}
          <div className="ora-sol-tabs">
            {ecosystemData.map((tab, index) => (
              <button 
                key={tab.id}
                className={`ora-sol-tab-btn ${activeIdx === index ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
              >
                {tab.tabName}
              </button>
            ))}
          </div>

          {/* Active Panel (The Dark High-Contrast Card) */}
          <div className="ora-sol-panel" ref={contentRef}>
            <div className="ora-sol-panel-image">
              {/* Fallback gray box if image is broken/missing, otherwise shows image */}
              <div className="image-placeholder">
                <img src={activeItem.img} alt={activeItem.title} className="panel-img" />
              </div>
            </div>
            
            <div className="ora-sol-panel-content">
              <h3 className="panel-title">{activeItem.title}</h3>
              <p className="panel-desc">{activeItem.description}</p>
              
              <a href={activeItem.link} className="panel-cta">
                <span className="cta-text">{activeItem.cta}</span>
                <span className="cta-circle-arrow">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheSolution;