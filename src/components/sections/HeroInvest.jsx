import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // Import GSAP
import './HeroInvest.css';
import heroVideo from '../../assests/video/invest.mp4'; 

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

const HeroInvest = () => {
  const sectionRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const ctaGroupRef = useRef(null);

  useEffect(() => {
    // 1. Prepare Text (Split title and subtitle into words for individual control)
    const prepareText = (ref, splitClass) => {
      if (ref.current) {
        const text = ref.current.textContent;
        ref.current.textContent = ''; // Clear original text
        text.split(' ').forEach((word) => {
          const span = document.createElement('span');
          span.classList.add('word-wrapper'); // Outter container for hiding overflow
          span.innerHTML = `<span class="word ${splitClass}">${word}&nbsp;</span>`; // Inner actual word
          ref.current.appendChild(span);
        });
      }
    };

    prepareText(titleLine1Ref, 'title-word');
    prepareText(titleLine2Ref, 'highlight-word');
    prepareText(subtitleRef, 'subtitle-word');

    // 2. Setup GSAP Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Initial state setup (hiding elements with GSAP)
    gsap.set('.word', { yPercent: 100, opacity: 0 }); // Move words "down" inside their overflow hidden wrapper
    gsap.set(ctaGroupRef.current, { y: 20, opacity: 0 });

    // 3. Define the Impressive Sequence
    tl.to('.title-word', {
      duration: 1.1,
      yPercent: 0,
      opacity: 1,
      stagger: 0.1, // Stagger words 0.1s apart
    })
    .to('.highlight-word', {
      duration: 1.1,
      yPercent: 0,
      opacity: 1,
      stagger: 0.1,
    }, "-=1.0") // Overlay this animation starting 1.0s early
    .to('.subtitle-word', {
      duration: 0.8,
      yPercent: 0,
      opacity: 1,
      stagger: 0.04, // Very fast stagger for subtitle
    }, "-=0.9")
    .to(ctaGroupRef.current, {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'back.out(1.4)', // Add an elastic "snap" to the buttons
    }, "-=0.6");

    return () => tl.kill(); // Cleanup on unmount
  }, []);

  return (
    <section className="hero-invest" ref={sectionRef}>
      <div className="hero-video-container">
        <video autoPlay muted loop playsInline className="hero-video-element">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <div ref={titleLine1Ref}>Invest in the</div>
          <div ref={titleLine2Ref} className="text-highlight">Future of Maternal Care</div>
        </h1>
        
        {/* Subtitle words are generated in useEffect */}
        <p className="hero-subtitle" ref={subtitleRef}>
          ORA is redefining maternal health through AI, wearable technology, 
          and clinical integration.
        </p>

        <div className="hero-cta-group" ref={ctaGroupRef}>
          <HeroButton text="Request Investment Deck" variant="primary" />
          <HeroButton text="Partner With ORA" variant="outline" />
        </div>
      </div>
    </section>
  );
};

export default HeroInvest;