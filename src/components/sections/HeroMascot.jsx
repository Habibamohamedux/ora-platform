import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AudioIcon from '../common/audioicon'; 
import ScrollToExplore from '../common/scrolltoexplore'; 
import GlassButton from '../common/GlassButton';
import H1Light from '../common/h1-light';
import Minititle from '../common/minititle';
import LightParagraph from '../common/lightparagraph';
import MascotNormal from '../common/mascotnormal';
import { useLanguage } from '../../i18n/LanguageContext';
import './HeroMascot.css';

const HeroMascot = () => {
  const circlesRef = useRef([]);
  const mascotRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    // BACKGROUND CIRCLES PULSE
    const circlePulseTL = gsap.timeline({ repeat: -1 });
    circlePulseTL
      .to(circlesRef.current, {
        scale: 1.06,
        opacity: 0.25,
        duration: 3,
        ease: "power2.inOut",
        stagger: 0.15
      })
      .to(circlesRef.current, {
        scale: 1,
        opacity: 0.08,
        duration: 3,
        ease: "power2.inOut",
        stagger: 0.15
      })
      .to({}, { duration: 24 });

    return () => {
      circlePulseTL.kill();
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!mascotRef.current) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xMult = (clientX / innerWidth - 0.5) * 40;
    const yMult = (clientY / innerHeight - 0.5) * 40;

    // Access child refs exposed via useImperativeHandle
    gsap.to(mascotRef.current.mascotEyes, {
      x: xMult,
      y: yMult,
      duration: 0.3,
      ease: "power2.out"
    });

    gsap.to(mascotRef.current.liquid, {
      x: -xMult * 0.6,
      y: -yMult * 0.6,
      duration: 1,
      ease: "power1.out"
    });
  };

  return (
    <div className="ora-hero-root" onMouseMove={handleMouseMove}>
      {/* Background Layer */}
      <div className="bg-circles-layer">
        {[...Array(6)].map((_, i) => (
          <div key={i} ref={el => circlesRef.current[i] = el} className={`bg-line l-${i+1}`}></div>
        ))}
      </div>

      {/* The Mascot Component */}
      <MascotNormal ref={mascotRef} />

      {/* UI Content Layer */}
      <div className="ui-text-layer">
        <div className="left-group">
          <Minititle text={t('home.miniTitle')}/>
          <H1Light text={t('home.title')} />
          <GlassButton 
            text={t('home.cta')} 
            onClick={() => console.log("Button Clicked!")} 
          />
        </div>

        <div className="right-group">
            <LightParagraph text={t('home.paragraph')} />
        </div>

        <div className="hero-footer01">
          <ScrollToExplore />
          <AudioIcon />
        </div>
      </div>
    </div>
  );
};

export default HeroMascot;
