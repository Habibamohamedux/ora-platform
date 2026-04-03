import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import gsap from 'gsap';
import './mascotnormal.css';
const MascotNormal = forwardRef((props, ref) => {
  const [eyeState, setEyeState] = useState('eye');
  const [showMessage, setShowMessage] = useState(false);
  
  const orbRef = useRef(null);
  const liquidRef = useRef(null);
  const mascotEyesRef = useRef(null);

  useImperativeHandle(ref, () => ({
    mascotEyes: mascotEyesRef.current,
    liquid: liquidRef.current,
    orb: orbRef.current
  }));

  useEffect(() => {
    // 1. ORB BREATHE & SOFT SCALE
    gsap.to(orbRef.current, {
      scale: 1.04,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // 2. INTERNAL RICHNESS SWIRL
    // Rotates the yellow/pink blur layers for dynamic "depth"
    gsap.to(".internal-fluid", {
      rotate: 360,
      duration: 25,
      repeat: -1,
      ease: "none"
    });

    // 3. EYE BLINK/WINK LOGIC (Unchanged as requested)
    const eyeInterval = setInterval(() => {
      const rand = Math.random();
      if (rand > 0.8) {
        setEyeState('wink');
        setTimeout(() => setEyeState('eye'), 600);
      } else {
        setEyeState('blink');
        setTimeout(() => setEyeState('eye'), 150);
      }
    }, 4500);

    return () => {
      gsap.killTweensOf(orbRef.current);
      clearInterval(eyeInterval);
    };
  }, []);

  const handleMascotClick = () => {
    // 1. Show the message
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);

    // 2. Physical "Squish" Interaction
    gsap.fromTo(orbRef.current, 
      { scaleX: 1.15, scaleY: 0.85 }, 
      { scaleX: 1, scaleY: 1, duration: 0.8, ease: "elastic.out(1, 0.3)" }
    );
  };

  const renderEye = (side) => {
    if (eyeState === 'blink' || (eyeState === 'wink' && side === 'right')) {
      return (
        <svg viewBox="0 0 112 60" className="wink-svg">
          <path d="M4.53494 54.725C1.17642 53.5162 -0.774179 49.9703 0.292122 46.5639C4.37056 33.5348 11.3995 22.186 20.5823 13.9218C31.1581 4.40405 43.9892 -0.480692 57.0526 0.0377151C70.116 0.556122 82.6686 6.44819 92.7314 16.785C101.452 25.7433 107.873 37.5984 111.276 50.8935C112.172 54.3948 109.962 57.862 106.478 58.8214V58.8214C102.513 59.9131 98.4992 57.3458 97.3106 53.4085C94.5712 44.3342 89.9566 36.256 83.8822 30.0162C76.19 22.1146 66.5946 17.6107 56.6088 17.2144C46.6229 16.8181 36.8147 20.5521 28.7304 27.8276C22.4103 33.5154 17.425 41.1147 14.2187 49.8418C12.7695 53.7867 8.48933 56.1482 4.53494 54.725V54.725Z" fill="white"/>
        </svg>
      );
    }
    return <div className="eye-oval"></div>;
  };

  return (
    <div className="mascot-wrapper" style={{ position: 'relative' }}>
      {/* Clickable Bubble Message */}
      {showMessage && (
        <div className="mascot-speech-bubble">
          Hey there! 
        </div>
      )}

      <div 
        className="vibrant-orb" 
        ref={orbRef} 
        onClick={handleMascotClick}
        style={{ cursor: 'pointer', overflow: 'hidden' }}
      >
        {/* The "Rich" Internal Body Layers */}
        <div className="internal-fluid" ref={liquidRef}>
          <div className="blur-blob pink-core"></div>
          <div className="blur-blob yellow-core"></div>
          <div className="blur-blob white-fluff"></div>
        </div>

        {/* The Eyes */}
        <div className="eyes-layer" ref={mascotEyesRef}>
          {renderEye('left')}
          {renderEye('right')}
        </div>
      </div>
    </div>
  );
});

export default MascotNormal;