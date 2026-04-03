import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './JointheFuture.css';

gsap.registerPlugin(ScrollTrigger);

const JoinTheFuture = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });

    // Animate Left Side (Text)
    tl.fromTo(leftRef.current, 
      { opacity: 0, x: -30 }, 
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
    )
    // Animate Right Side (Form Card)
    .fromTo(rightRef.current, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 
      "-=0.5"
    );

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section className="ora-join-section" ref={sectionRef}>
      <div className="ora-join-container">
        
        <div className="ora-join-grid">
          
          {/* --- LEFT SIDE: EDITORIAL TEXT --- */}
          <div className="ora-join-left" ref={leftRef}>
            <h2 className="ora-join-title">Join the Future of Maternal Care</h2>
            <h3 className="ora-join-subtitle">To our future partners...</h3>
            
            <p className="ora-join-para">
              ORA is building a smarter, safer, and more connected pregnancy experience. 
              By seamlessly integrating artificial intelligence with real-time biometric tracking, 
              we are creating an ecosystem where critical health data bridges the gap between 
              mothers and healthcare providers.
            </p>
            <p className="ora-join-para">
              We invite forward-thinking investors, medical professionals, and strategic partners 
              who share our vision of transforming global maternal health to join us on this journey.
            </p>

            {/* Secondary CTA */}
            <div className="ora-join-actions">
              <span className="ora-join-action-text">For general inquiries or partnerships:</span>
              <a href="/access" className="ora-join-secondary-cta">
                Contact Our Team <span className="ora-join-arrow">→</span>
              </a>
            </div>

            {/* Editorial Disclaimer (matches reference image style) */}
            <p className="ora-join-disclaimer">
              Disclaimer: The information provided in our investor materials is intended for prospective 
              partners and accredited investors to gain insight into ORA’s technology and business model. 
              It does not constitute a formal solicitation.
            </p>
          </div>

          {/* --- RIGHT SIDE: GRID FORM CARD --- */}
          <div className="ora-join-right" ref={rightRef}>
            <div className="ora-join-form-card">
              <div className="ora-join-form-content">
                <h3 className="ora-join-form-title">Request Investment Deck</h3>
                <p className="ora-join-form-desc">
                  Enter your details to receive our comprehensive investor presentation and stay updated on our progress.
                </p>

                <form className="ora-join-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="ora-join-input-group-row">
                    <input type="text" className="ora-join-input" placeholder="First Name*" required />
                    <input type="text" className="ora-join-input" placeholder="Last Name*" required />
                  </div>
                  <input type="email" className="ora-join-input" placeholder="Email Address*" required />
                  <input type="text" className="ora-join-input" placeholder="Company / Organization" />
                  
                  <button type="submit" className="ora-join-submit-btn">
                    Submit Request
                  </button>
                </form>

                <p className="ora-join-form-footer">
                  *Your information is secure and will only be used to send relevant ORA materials.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default JoinTheFuture;