import React, { useState } from 'react';
import './InsightsNewsletter.css';

const INTERESTS = ['Maternal Health', 'AI & Tech', 'Clinical Research', 'Wellness', 'Wearables'];

const PERKS = [
  'Weekly research digests & new study alerts',
  'Exclusive expert Q&As and interviews',
  'Early access to ORA platform updates',
];

const CheckIcon = () => (
  <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InsightsNewsletter = () => {
  const [selected, setSelected] = useState(['Maternal Health']);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (tag) => {
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="insights-newsletter">
      <div className="insights-newsletter__band">
        <div className="insights-newsletter__card">
          <div className="insights-newsletter__pattern" />

          {/* Left */}
          <div className="insights-newsletter__left">
            <div className="insights-newsletter__tag">
              <span className="insights-newsletter__tag-dot" />
              Stay Informed
            </div>

            <h2 className="insights-newsletter__title">
              Knowledge drives<br />
              <em>better care.</em>
            </h2>

            <p className="insights-newsletter__desc">
              Get the latest research, insights, and updates from ORA —
              curated for clinicians, researchers, and curious minds.
            </p>

            <div className="insights-newsletter__perks">
              {PERKS.map((p, i) => (
                <div className="insights-newsletter__perk" key={i}>
                  <div className="insights-newsletter__perk-icon">
                    <CheckIcon />
                  </div>
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="insights-newsletter__right">
            <div className="insights-newsletter__form-card">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: 'var(--white)', marginBottom: '8px' }}>
                    You&apos;re in!
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(250,248,249,0.55)' }}>
                    Welcome to the ORA research community. Watch your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="insights-newsletter__form-title">Subscribe</div>
                  <div className="insights-newsletter__form-subtitle">Join 18,000+ healthcare professionals</div>

                  <div className="insights-newsletter__field">
                    <input
                      type="text"
                      className="insights-newsletter__input"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="insights-newsletter__field">
                    <input
                      type="email"
                      className="insights-newsletter__input"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="insights-newsletter__interests">
                    <span className="insights-newsletter__interests-label">Your interests</span>
                    <div className="insights-newsletter__interest-tags">
                      {INTERESTS.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className={`insights-newsletter__interest-tag${selected.includes(tag) ? ' selected' : ''}`}
                          onClick={() => toggleInterest(tag)}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="submit" className="insights-newsletter__submit">
                    Subscribe to ORA Insights
                  </button>
                  <p className="insights-newsletter__privacy">
                    No spam. Unsubscribe anytime. Your data is protected.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsNewsletter;