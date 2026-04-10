import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './HeroInvest.css';

const HeroButton = ({ text, variant = 'primary', onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    if (onClick) onClick(e);
  };

  return (
    <button 
      className={`ora-button ${variant} ${isClicked ? 'button-active' : ''}`} 
      onClick={handleClick}
    >
      <span className="button-text">{text}</span>
    </button>
  );
};

const HeroInvest = ({ 
  videoSrc, 
  titleLine1 = "Invest in the", 
  titleLine2 = "Future of Care", 
  subtitle = "Default subtitle text goes here.",
  primaryBtnText = "Get Started",
  secondaryBtnText = "Learn More",
  onPrimaryClick,
  onSecondaryClick
}) => {
  const sectionRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const ctaGroupRef = useRef(null);

  useEffect(() => {
    // Helper to split text into spans for GSAP
    const prepareText = (ref, splitClass) => {
      if (ref.current) {
        const text = ref.current.textContent;
        ref.current.innerHTML = ''; 
        text.split(' ').forEach((word) => {
          const span = document.createElement('span');
          span.classList.add('word-wrapper'); 
          span.innerHTML = `<span class="word ${splitClass}">${word}&nbsp;</span>`;
          ref.current.appendChild(span);
        });
      }
    };

    prepareText(titleLine1Ref, 'title-word');
    prepareText(titleLine2Ref, 'highlight-word');
    prepareText(subtitleRef, 'subtitle-word');

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    gsap.set('.word', { yPercent: 100, opacity: 0 });
    gsap.set(ctaGroupRef.current, { y: 20, opacity: 0 });

    tl.to('.title-word', {
      duration: 1.1,
      yPercent: 0,
      opacity: 1,
      stagger: 0.1,
    })
    .to('.highlight-word', {
      duration: 1.1,
      yPercent: 0,
      opacity: 1,
      stagger: 0.1,
    }, "-=1.0")
    .to('.subtitle-word', {
      duration: 0.8,
      yPercent: 0,
      opacity: 1,
      stagger: 0.04,
    }, "-=0.9")
    .to(ctaGroupRef.current, {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'back.out(1.4)',
    }, "-=0.6");

    return () => tl.kill();
  }, [titleLine1, titleLine2, subtitle]); // Re-run if content changes

  return (
    <section className="hero-invest" ref={sectionRef}>
      <div className="hero-video-container">
        {videoSrc && (
          <video autoPlay muted loop playsInline className="hero-video-element">
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        <div className="video-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <div ref={titleLine1Ref}>{titleLine1}</div>
          <div ref={titleLine2Ref} className="text-highlight">{titleLine2}</div>
        </h1>
        
        <p className="hero-subtitle" ref={subtitleRef}>
          {subtitle}
        </p>

        <div className="hero-cta-group" ref={ctaGroupRef}>
          <HeroButton 
            text={primaryBtnText} 
            variant="primary" 
            onClick={onPrimaryClick} 
          />
          <HeroButton 
            text={secondaryBtnText} 
            variant="outline" 
            onClick={onSecondaryClick} 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroInvest;