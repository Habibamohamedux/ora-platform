import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../i18n/LanguageContext';
import './TheGap.css';

gsap.registerPlugin(ScrollTrigger);

// Clean, futuristic SVG Icons built directly into the code
const Icons = {
  RealTime: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animated-svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Alert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animated-svg delay-1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  Oversight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animated-svg delay-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Fragmented: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animated-svg delay-3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  Globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animated-svg delay-1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  Search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animated-svg delay-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
};

const GapCard = ({ title, description, icon, isVisible, delayIndex }) => (
  <div className={`ora-gap-card ${isVisible ? 'reveal-up' : ''}`} style={{ transitionDelay: `${delayIndex * 0.15}s` }}>
    <div className="card-top-accent"></div>
    <div className="ora-icon-container">
      {icon}
      <div className="icon-glow-ring"></div>
    </div>
    <h3 className="card-gap-title">{title}</h3>
    <p className="card-gap-desc">{description}</p>
  </div>
);

const TheGap = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [gridVisible, setGridVisible] = useState(false);
  const { t } = useLanguage();
  const cards = t('theGap.cards');

  useEffect(() => {
    // Normal, simple text fade-up (No masks!)
    gsap.fromTo(".simple-reveal", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        ease: "power3.out", 
        duration: 1, 
        stagger: 0.15,
        scrollTrigger: { trigger: ".ora-gap-title", start: "top 85%" }
      }
    );

    // Paragraph Fade
    gsap.fromTo(".ora-gap-paragraph", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3,
        scrollTrigger: { trigger: ".ora-gap-title", start: "top 85%" }
      }
    );

    // Trigger grid visibility state
    ScrollTrigger.create({
      trigger: gridRef.current,
      start: "top 80%",
      onEnter: () => setGridVisible(true),
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  const gapData = [
    { title: cards?.[0]?.title, description: cards?.[0]?.desc, icon: Icons.RealTime },
    { title: cards?.[1]?.title, description: cards?.[1]?.desc, icon: Icons.Alert },
    { title: cards?.[2]?.title, description: cards?.[2]?.desc, icon: Icons.Oversight },
    { title: cards?.[3]?.title, description: cards?.[3]?.desc, icon: Icons.Fragmented },
    { title: cards?.[4]?.title, description: cards?.[4]?.desc, icon: Icons.Globe },
    { title: cards?.[5]?.title, description: cards?.[5]?.desc, icon: Icons.Search },
  ];

  return (
    <section className="ora-gap-section" ref={sectionRef}>
      <div className="ora-gap-container">
        
        <div className="ora-gap-intro">
          <h2 className="ora-gap-title">
            <span className="simple-reveal">{t('theGap.title1')}</span>
            <span className="simple-reveal">{t('theGap.title2')}</span>
          </h2>
          <p className="ora-gap-paragraph">
            {t('theGap.body')}
          </p>
        </div>

        <div className="ora-gap-grid" ref={gridRef}>
          {gapData.map((gap, index) => (
            <GapCard 
              key={index}
              title={gap.title}
              description={gap.description}
              icon={gap.icon}
              isVisible={gridVisible}
              delayIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheGap;
