import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BusinessModel.css';

gsap.registerPlugin(ScrollTrigger);

const BusinessModel = () => {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const layersContainerRef = useRef(null);
  
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const finalSummaryRef = useRef(null);

  useEffect(() => {
    // 1. Initial Intro Fade In
    gsap.fromTo(introRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }}
    );

    // 2. Setup Initial States using GSAP Percentages (Perfect Centering)
    // xPercent/yPercent keeps them perfectly centered while we animate 'y'
    gsap.set([layer1Ref.current, layer2Ref.current, layer3Ref.current], { 
      xPercent: -50, 
      yPercent: -50, 
      y: window.innerHeight, // Start below the screen
      opacity: 0 
    });
    
    gsap.set(finalSummaryRef.current, { 
      xPercent: -50, 
      yPercent: -50, 
      opacity: 0, 
      scale: 0.8, 
      pointerEvents: "none" 
    });

    // 3. The Pinned Scroll Experience Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: layersContainerRef.current,
        start: "top top", 
        end: "+=3000", // The scrolling distance
        scrub: 1,      // Smooth link to the scrollbar
        pin: true,     // Locks the screen
        anticipatePin: 1,
      }
    });

    // Step 1: Layer 1 slides up to center (y: 0)
    tl.to(layer1Ref.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
    
    // Step 2: Layer 1 pushed back, Layer 2 slides up
    .to(layer1Ref.current, { scale: 0.9, y: -40, opacity: 0.5, duration: 1 }, "+=0.5")
    .to(layer2Ref.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "<")

    // Step 3: Layers 1 & 2 pushed back, Layer 3 slides up
    .to(layer1Ref.current, { scale: 0.8, y: -80, opacity: 0.2, duration: 1 }, "+=0.5")
    .to(layer2Ref.current, { scale: 0.9, y: -40, opacity: 0.5, duration: 1 }, "<")
    .to(layer3Ref.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "<")

    // Step 4: All layers fade out and fly up, Final Summary pops in
    .to([layer1Ref.current, layer2Ref.current, layer3Ref.current], { opacity: 0, y: -200, duration: 1 }, "+=0.5")
    .to(finalSummaryRef.current, { opacity: 1, scale: 1, pointerEvents: "auto", duration: 1, ease: "back.out(1.5)" }, "<");

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section className="ora-biz-section" ref={sectionRef}>
      
      {/* --- TOP INTRO (Normal Scroll) --- */}
      <div className="ora-biz-intro-container" ref={introRef}>
        <div className="ora-biz-badge">One Ecosystem. Multiple Revenue Streams.</div>
        <h2 className="ora-biz-title">A Sustainable Growth Model</h2>
        
        <div className="ora-biz-text-grid">
          <p className="ora-biz-para lead">
            ORA operates on a multi-layered business model designed for scalability across both consumer and healthcare markets.
          </p>
          <div className="ora-biz-para-stack">
            <p className="ora-biz-para">
              By combining subscription-based services, wearable technology, and clinical partnerships, ORA creates a sustainable ecosystem where value grows with every user, device, and data point.
            </p>
            <p className="ora-biz-para">
              Each layer contributes to a unified system that supports long-term growth, recurring revenue, and global expansion.
            </p>
          </div>
        </div>
      </div>

      {/* --- THE PINNED SCROLL EXPERIENCE --- */}
      <div className="ora-biz-layers-pin" ref={layersContainerRef}>
        
        {/* Layer 1: Subscription */}
        <div className="ora-biz-layer-card" ref={layer1Ref} style={{ zIndex: 1 }}>
          <div className="ora-layer-visual sub-visual">
            <div className="data-particles-mock"></div>
          </div>
          <div className="ora-layer-content">
            <span className="ora-layer-num">01</span>
            <h3 className="ora-layer-title">Subscription Intelligence</h3>
            <p className="ora-layer-desc">Personalized AI insights, continuous monitoring, and advanced health analytics delivered through a recurring subscription model.</p>
            <ul className="ora-layer-micro-data">
              <li>Monthly / yearly plans</li>
              <li>AI-powered insights</li>
              <li>Continuous engagement</li>
            </ul>
          </div>
        </div>

        {/* Layer 2: Hardware */}
        <div className="ora-biz-layer-card" ref={layer2Ref} style={{ zIndex: 2 }}>
          <div className="ora-layer-visual hw-visual">
            <div className="pulse-ring-mock"></div>
          </div>
          <div className="ora-layer-content">
            <span className="ora-layer-num">02</span>
            <h3 className="ora-layer-title">Connected Hardware</h3>
            <p className="ora-layer-desc">ORA Pulse enables real-time biometric tracking, creating a seamless bridge between physical health signals and digital intelligence.</p>
            <ul className="ora-layer-micro-data">
              <li>One-time device purchase</li>
              <li>Continuous data stream</li>
              <li>Device-to-app integration</li>
            </ul>
          </div>
        </div>

        {/* Layer 3: B2B */}
        <div className="ora-biz-layer-card" ref={layer3Ref} style={{ zIndex: 3 }}>
          <div className="ora-layer-visual b2b-visual">
            <div className="network-grid-mock"></div>
          </div>
          <div className="ora-layer-content">
            <span className="ora-layer-num">03</span>
            <h3 className="ora-layer-title">Clinical Integration</h3>
            <p className="ora-layer-desc">ORA partners with clinics and healthcare providers to deliver advanced monitoring tools, patient insights, and data-driven care systems.</p>
            <ul className="ora-layer-micro-data">
              <li>Clinic subscriptions</li>
              <li>Patient monitoring dashboards</li>
              <li>Healthcare system integration</li>
            </ul>
          </div>
        </div>

        {/* FINAL MERGED STATE */}
        <div className="ora-biz-final-summary" ref={finalSummaryRef} style={{ zIndex: 10 }}>
          <h3 className="ora-final-title">A Unified Revenue Ecosystem</h3>
          <p className="ora-final-desc">
            Each layer strengthens the other, creating a scalable, intelligent, and sustainable growth model.
          </p>
          <button className="ora-biz-cta">
            View Full Strategy <span className="arrow">→</span>
          </button>
          <p className="ora-final-closing">Growth powered by intelligence, connectivity, and care.</p>
        </div>

      </div>
    </section>
  );
};

export default BusinessModel;