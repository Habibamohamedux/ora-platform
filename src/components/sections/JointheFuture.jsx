import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../i18n/LanguageContext';
import './JointheFuture.css';

gsap.registerPlugin(ScrollTrigger);

const JoinTheFuture = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const { t } = useLanguage();

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
            <h2 className="ora-join-title">{t('joinFuture.title')}</h2>
            <h3 className="ora-join-subtitle">{t('joinFuture.subtitle')}</h3>
            
            <p className="ora-join-para">
              {t('joinFuture.body1')}
            </p>
            <p className="ora-join-para">
              {t('joinFuture.body2')}
            </p>

            {/* Secondary CTA */}
            <div className="ora-join-actions">
              <span className="ora-join-action-text">{t('joinFuture.actionText')}</span>
              <Link to="/contact" className="ora-join-secondary-cta">
                {t('joinFuture.actionCta')} <span className="ora-join-arrow">→</span>
              </Link>
            </div>

            {/* Editorial Disclaimer (matches reference image style) */}
            <p className="ora-join-disclaimer">
              {t('joinFuture.disclaimer')}
            </p>
          </div>

          {/* --- RIGHT SIDE: GRID FORM CARD --- */}
          <div className="ora-join-right" ref={rightRef}>
            <div className="ora-join-form-card">
              <div className="ora-join-form-content">
                <h3 className="ora-join-form-title">{t('joinFuture.formTitle')}</h3>
                <p className="ora-join-form-desc">
                  {t('joinFuture.formDesc')}
                </p>

                <form className="ora-join-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="ora-join-input-group-row">
                    <input type="text" className="ora-join-input" placeholder={t('joinFuture.placeholders.first')} required />
                    <input type="text" className="ora-join-input" placeholder={t('joinFuture.placeholders.last')} required />
                  </div>
                  <input type="email" className="ora-join-input" placeholder={t('joinFuture.placeholders.email')} required />
                  <input type="text" className="ora-join-input" placeholder={t('joinFuture.placeholders.company')} />
                  
                  <button type="submit" className="ora-join-submit-btn">
                    {t('joinFuture.submit')}
                  </button>
                </form>

                <p className="ora-join-form-footer">
                  {t('joinFuture.footer')}
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
