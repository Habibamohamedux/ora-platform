import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../i18n/LanguageContext';
import './TheSolution.css';

// Image Imports (Adjust path if your folder is spelled 'assests')
import imgAI from '../../assests/Imgs/Solution_AI.png';
import imgPulse from '../../assests/Imgs/Solution_Pulse.png';
import imgCompanion from '../../assests/Imgs/Solution_Companion.png';
import imgClinical from '../../assests/Imgs/Solution_Clinical.png';

gsap.registerPlugin(ScrollTrigger);

const ecosystemItems = [
  {
    id: 'intelligence',
    link: '/intelligence',
    img: imgAI,
  },
  {
    id: 'pulse',
    link: '/pulse',
    img: imgPulse,
  },
  {
    id: 'companion',
    link: '/companion',
    img: imgCompanion,
  },
  {
    id: 'clinical',
    link: '/clinical',
    img: imgClinical,
  }
];

const TheSolution = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [isChanging, setIsChanging] = useState(false);
  const { t } = useLanguage();
  const tabs = t('theSolution.tabs');
  const ecosystemData = ecosystemItems.map((item, index) => ({
    ...item,
    tabName: tabs?.[index]?.tab,
    title: tabs?.[index]?.title,
    description: tabs?.[index]?.desc,
    cta: tabs?.[index]?.cta,
  }));

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
            <h2 className="ora-sol-title">{t('theSolution.title')}</h2>
          </div>
          <div className="ora-sol-header-right">
            <p className="ora-sol-intro-p highlight-p">
              {t('theSolution.introLead')}
            </p>
            <p className="ora-sol-intro-p">
              {t('theSolution.introBody1')}
            </p>
            <p className="ora-sol-intro-p">
              {t('theSolution.introBody2')}
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
