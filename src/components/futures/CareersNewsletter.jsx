import React, { useState } from 'react';
import '../../pages/Futures.css'; 
import bg1 from '../../assests/Imgs/careers/careers_01.png';
import bg2 from '../../assests/Imgs/careers/careers_02.png';
import bg3 from '../../assests/Imgs/careers/careers_03.png';
import bg4 from '../../assests/Imgs/careers/careers_04.png';
import bg5 from '../../assests/Imgs/careers/careers_05.png';
import bg6 from '../../assests/Imgs/careers/careers_06.png';
const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6];

const CareersNewsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <section className="clinical-section-newsletter">
      
      <div className="clinical-section-bg-wrapper">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className="clinical-section-bg-layer"
            style={{
              backgroundImage: `url(${img})`,
              animationDelay: `${index * 6}s` 
            }}
          />
        ))}
      </div>

      <div className="clinical-section-newsletter-content">
        <h2 className="clinical-section-heading">JOIN THE ORA TALENT NETWORK</h2>
        <p className="clinical-section-text">
          Don't see the perfect role? Join our talent network and be the first to know about new opportunities.
        </p>

        {/* NEW: Wrapper added here to prevent height jumping */}
        <div className="clinical-section-action-wrapper">
          {isSubmitted ? (
            <div className="clinical-section-success-message">
              <span className="clinical-section-success-icon">✓</span>
              <div>
                <p className="clinical-section-success-title">You're on the list!</p>
                <p className="clinical-section-success-subtitle">We'll reach out when the right opportunity opens up.</p>
              </div>
            </div>
          ) : (
            <form className="clinical-section-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="clinical-section-input"
                placeholder="ENTER YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="clinical-section-button">
                GET STARTED
              </button>
            </form>
          )}
        </div>

        <p className="clinical-section-disclaimer">
          WE RESPECT YOUR PRIVACY. UNSUBSCRIBE ANYTIME.
        </p>
      </div>
    </section>
  );
};

export default CareersNewsletter;