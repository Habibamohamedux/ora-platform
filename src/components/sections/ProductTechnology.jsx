import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../i18n/LanguageContext';
import './ProductTechnology.css';

gsap.registerPlugin(ScrollTrigger);

const techBlueprint = [
  {
    number: '01',
  },
  {
    number: '02',
  },
  {
    number: '03',
  },
  {
    number: '04',
  }
];

const ProductTechnology = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const detailRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const { t } = useLanguage();
  const items = t('productTechnology.items');
  const techItems = techBlueprint.map((item, index) => ({
    ...item,
    title: items?.[index]?.title,
    description: items?.[index]?.desc,
    facts: items?.[index]?.facts || [],
  }));

  // 1. Initial Scroll Reveal
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    tl.fromTo(".ora-tech-title", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".ora-tech-intro", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .fromTo(".ora-tech-items", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.4")
      .fromTo(".ora-tech-active-display", { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3");

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  useEffect(() => {
    if (detailRef.current) {
      const tl = gsap.timeline();
      
      // Animate the main container
      tl.fromTo(detailRef.current, 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      )
      // Stagger the 3 facts in one by one for a premium feel
      .fromTo(".fact-item", 
        { opacity: 0, x: -10 }, 
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
        "-=0.2" // Overlap with the container reveal
      );
    }
  }, [activeIdx]);

  // 3. Background Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.2; 
      }
      update() {
        this.x += this.speedX; this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0; else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0; else if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = `rgba(201, 64, 96, ${this.opacity})`;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
      }
    }

    const init = () => { for (let i = 0; i < 60; i++) particles.push(new Particle()); };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize(); init(); animate();
    return () => window.removeEventListener('resize', resize);
  }, []);

  const activeItem = techItems[activeIdx];

  return (
    <section className="ora-tech-section" ref={sectionRef}>
      <canvas ref={canvasRef} className="ora-tech-canvas" />
      
      <div className="ora-tech-container">
        
        <div className="ora-tech-header">
          <div className="ora-tech-header-left">
            <h2 className="ora-tech-title">{t('productTechnology.title')}</h2>
          </div>
          <div className="ora-tech-header-right">
            <p className="ora-tech-intro">
              {t('productTechnology.intro')}
            </p>
          </div>
        </div>

        {/* SHAPE-SHIFTING CLICKABLE TABS */}
        <div className="ora-tech-items">
          {techItems.map((item, index) => (
            <div 
              key={index} 
              className="ora-tech-item-wrapper"
              onClick={() => setActiveIdx(index)}
            >
              <div className={`ora-tech-item-shape ${activeIdx === index ? 'active' : ''}`}>
                <span className="shape-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* DYNAMIC DETAILS DISPLAY */}
        <div className="ora-tech-active-display" ref={detailRef}>
          <div className="active-display-left">
            <span className="active-number">{activeItem.number}</span>
          </div>
          
          <div className="active-display-right">
            <h3 className="active-item-title">{activeItem.title}</h3>
            <p className="active-item-desc">{activeItem.description}</p>
            

            <div className="ora-tech-facts-grid">
              {activeItem.facts.map((fact, i) => (
                <div key={i} className="fact-item">
                  <div className="fact-icon">
     
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="fact-text">{fact}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProductTechnology;
