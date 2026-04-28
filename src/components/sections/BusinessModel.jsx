import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../i18n/LanguageContext';
import './BusinessModel.css';

gsap.registerPlugin(ScrollTrigger);

const BusinessModel = () => {
  const mainRef = useRef(null);
  const { t } = useLanguage();
  const layers = t('businessModel.layers');

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Intro animation
      gsap.from('.ora-biz-intro-container', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ora-biz-intro-container',
          start: 'top 85%',
        },
      });

      // Card entrance animations
      const cards = gsap.utils.toArray('.ora-biz-layer-card');
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          y: 70,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });

      // Final summary animation
      gsap.from('.ora-biz-final-summary', {
        scrollTrigger: {
          trigger: '.ora-biz-final-summary',
          start: 'top 85%',
        },
        scale: 0.92,
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'back.out(1.2)',
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ora-biz-section" ref={mainRef}>
      {/* Intro */}
      <div className="ora-biz-intro-container">
        <div className="ora-biz-badge">{t('businessModel.badge')}</div>
        <h2 className="ora-biz-title">{t('businessModel.title')}</h2>
        <div className="ora-biz-text-grid">
          <p className="ora-biz-para lead">
            {t('businessModel.lead')}
          </p>
          <div className="ora-biz-para-stack">
            <p className="ora-biz-para">
              {t('businessModel.body')}
            </p>
          </div>
        </div>
      </div>

      {/* Stacking cards container */}
      <div className="ora-biz-cards-container">
        {/* Card 1 */}
        <div className="ora-biz-layer-card stack-1">
          <div className="ora-layer-visual">
            <div className="data-particles-mock"></div>
          </div>
          <div className="ora-layer-content">
            <span className="ora-layer-num">01</span>
            <h3 className="ora-layer-title">{layers?.[0]?.title}</h3>
            <p className="ora-layer-desc">{layers?.[0]?.desc}</p>
            <ul className="ora-layer-micro-data">
              <li>{layers?.[0]?.bullets?.[0]}</li>
              <li>{layers?.[0]?.bullets?.[1]}</li>
              <li>{layers?.[0]?.bullets?.[2]}</li>
            </ul>
          </div>
        </div>

        {/* Card 2 (reverse layout) */}
        <div className="ora-biz-layer-card reverse-layout stack-2">
          <div className="ora-layer-visual">
            <div className="pulse-ring-mock"></div>
          </div>
          <div className="ora-layer-content">
            <span className="ora-layer-num">02</span>
            <h3 className="ora-layer-title">{layers?.[1]?.title}</h3>
            <p className="ora-layer-desc">{layers?.[1]?.desc}</p>
            <ul className="ora-layer-micro-data">
              <li>{layers?.[1]?.bullets?.[0]}</li>
              <li>{layers?.[1]?.bullets?.[1]}</li>
              <li>{layers?.[1]?.bullets?.[2]}</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="ora-biz-layer-card stack-3">
          <div className="ora-layer-visual">
            <div className="network-grid-mock"></div>
          </div>
          <div className="ora-layer-content">
            <span className="ora-layer-num">03</span>
            <h3 className="ora-layer-title">{layers?.[2]?.title}</h3>
            <p className="ora-layer-desc">{layers?.[2]?.desc}</p>
            <ul className="ora-layer-micro-data">
              <li>{layers?.[2]?.bullets?.[0]}</li>
              <li>{layers?.[2]?.bullets?.[1]}</li>
              <li>{layers?.[2]?.bullets?.[2]}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final summary */}
      <div className="ora-biz-final-summary">
        <h3 className="ora-final-title">{t('businessModel.finalTitle')}</h3>
        <p className="ora-final-desc">{t('businessModel.finalDesc')}</p>
        <button
          className="ora-biz-cta"
          onClick={() => alert(t('businessModel.ctaAlert'))}
        >
          {t('businessModel.cta')} <span className="arrow">→</span>
        </button>
        <p className="ora-final-closing">{t('businessModel.closing')}</p>
      </div>
    </section>
  );
};

export default BusinessModel;
