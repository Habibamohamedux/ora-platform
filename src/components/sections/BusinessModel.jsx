import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BusinessModel.css';

gsap.registerPlugin(ScrollTrigger);

const BusinessModel = () => {
  const mainRef = useRef(null);

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
        <div className="ora-biz-badge">One Ecosystem. Multiple Revenue Streams.</div>
        <h2 className="ora-biz-title">A Sustainable Growth Model</h2>
        <div className="ora-biz-text-grid">
          <p className="ora-biz-para lead">
            ORA operates on a multi-layered business model designed for scalability
            across both consumer and healthcare markets.
          </p>
          <div className="ora-biz-para-stack">
            <p className="ora-biz-para">
              By combining subscription‑based services, wearable technology, and
              clinical partnerships, ORA creates a sustainable ecosystem where value
              grows with every user, device, and data point.
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
            <h3 className="ora-layer-title">Subscription Intelligence</h3>
            <p className="ora-layer-desc">
              Personalized AI insights, continuous monitoring, and advanced health
              analytics delivered through a recurring subscription model.
            </p>
            <ul className="ora-layer-micro-data">
              <li>Monthly / yearly plans</li>
              <li>AI‑powered insights</li>
              <li>Continuous engagement</li>
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
            <h3 className="ora-layer-title">Connected Hardware</h3>
            <p className="ora-layer-desc">
              ORA Pulse enables real‑time biometric tracking, creating a seamless
              bridge between physical health signals and digital intelligence.
            </p>
            <ul className="ora-layer-micro-data">
              <li>One‑time device purchase</li>
              <li>Continuous data stream</li>
              <li>Device‑to‑app integration</li>
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
            <h3 className="ora-layer-title">Clinical Integration</h3>
            <p className="ora-layer-desc">
              ORA partners with clinics and healthcare providers to deliver advanced
              monitoring tools, patient insights, and data‑driven care systems.
            </p>
            <ul className="ora-layer-micro-data">
              <li>Clinic subscriptions</li>
              <li>Patient monitoring dashboards</li>
              <li>Healthcare system integration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final summary */}
      <div className="ora-biz-final-summary">
        <h3 className="ora-final-title">A Unified Revenue Ecosystem</h3>
        <p className="ora-final-desc">
          Each layer strengthens the other, creating a scalable, intelligent, and
          sustainable growth model.
        </p>
        <button
          className="ora-biz-cta"
          onClick={() => alert('Full strategy deck — coming soon.')}
        >
          View Full Strategy <span className="arrow">→</span>
        </button>
        <p className="ora-final-closing">
          Growth powered by intelligence, connectivity, and care.
        </p>
      </div>
    </section>
  );
};

export default BusinessModel;