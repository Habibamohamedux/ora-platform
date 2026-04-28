import React from 'react';
import './InsightsExpertContributions.css';

const FEATURED = {
  initials: 'LH',
  name: 'Dr. Layla Hassan',
  role: 'Chief of Maternal-Fetal Medicine, Cairo University Hospital',
  quote:
    'The integration of continuous wearable monitoring with AI analysis has fundamentally changed how we approach high-risk obstetric care. We are no longer reacting — we are predicting, and that difference is measured in lives saved.',
};

const EXPERTS = [
  {
    initials: 'MO',
    name: 'Dr. Mark Osei',
    role: 'AI & Healthcare Researcher',
    preview: 'Examining the intersection of federated learning and maternal health data — privacy by design in clinical AI.',
    articles: '14 articles',
  },
  {
    initials: 'AN',
    name: 'Dr. Amira Nour',
    role: 'Perinatal Psychiatrist',
    preview: 'Advancing digital screening tools for perinatal anxiety and depression — closing the treatment gap.',
    articles: '9 articles',
  },
  {
    initials: 'SK',
    name: 'Dr. Sofia Karam',
    role: 'Biomedical Engineer, MIT',
    preview: 'Designing next-generation photoplethysmographic patches for ambulatory fetal monitoring.',
    articles: '11 articles',
  },
];

const MINI = [
  { initials: 'HY', name: 'Dr. Hana Yusuf', spec: 'Maternal Nutrition' },
  { initials: 'JL', name: 'Dr. James Liu', spec: 'Clinical Data Science' },
  { initials: 'RP', name: 'Dr. Rania Patel', spec: 'Neonatology' },
];

const VerifiedIcon = () => (
  <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InsightsExpertContributions = () => {
  return (
    <section className="expert-contributions">
      <div className="expert-contributions__inner">
        {/* Header */}
        <div className="expert-contributions__header">
          <div>
            <span className="expert-contributions__tag">From the Field</span>
            <h2 className="expert-contributions__title">From Medical<br />Experts</h2>
          </div>
          <button className="expert-contributions__view-all">
            View Expert Insights
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Main Layout */}
        <div className="expert-contributions__layout">
          {/* Featured */}
          <div className="expert-featured">
            <div className="expert-featured__bg" />
            <div className="expert-featured__pattern" />
            <div className="expert-featured__avatar-area">
              <div className="expert-featured__avatar">{FEATURED.initials}</div>
              <div className="expert-featured__verified">
                <VerifiedIcon /> Verified MD
              </div>
            </div>
            <div className="expert-featured__body">
              <p className="expert-featured__quote">{FEATURED.quote}</p>
              <div className="expert-featured__name">{FEATURED.name}</div>
              <div className="expert-featured__role">{FEATURED.role}</div>
              <button className="expert-featured__cta">
                Read Full Interview
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Expert List */}
          <div className="expert-list">
            {EXPERTS.map((e, i) => (
              <div className="expert-card" key={i}>
                <div className="expert-card__avatar">{e.initials}</div>
                <div className="expert-card__content">
                  <div className="expert-card__name">{e.name}</div>
                  <div className="expert-card__role">{e.role}</div>
                  <p className="expert-card__preview">{e.preview}</p>
                  <div className="expert-card__meta">
                    <span className="expert-card__articles">{e.articles}</span>
                    <div className="expert-card__verified">
                      <VerifiedIcon /> Verified
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Cards */}
        <div className="expert-contributions__bottom">
          {MINI.map((m, i) => (
            <div className="expert-mini-card" key={i}>
              <div className="expert-mini-card__avatar">{m.initials}</div>
              <div>
                <div className="expert-mini-card__name">{m.name}</div>
                <div className="expert-mini-card__spec">{m.spec}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsExpertContributions;