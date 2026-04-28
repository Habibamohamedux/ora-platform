import React from 'react';
import './InsightsFeaturedResearch.css';

const RESEARCH = [
  {
    id: 1,
    type: 'primary',
    badge: 'Featured Study',
    category: 'Clinical Research',
    date: 'April 2025',
    title: 'AI-Assisted Preeclampsia Detection in Low-Resource Settings',
    summary:
      'A landmark multicenter trial evaluating the efficacy of continuous wearable monitoring combined with machine learning algorithms in identifying early preeclampsia markers across 1,200 participants in three countries.',
    findings: [
      '87% sensitivity in early-stage detection (before 28 weeks)',
      '3.2× reduction in adverse maternal outcomes',
      'Validated across diverse ethnic populations',
    ],
  },
  {
    id: 2,
    type: 'secondary',
    badge: 'New',
    category: 'AI Technology',
    date: 'March 2025',
    title: 'Wearable Biometrics and Fetal Heart Rate Variability: A Longitudinal Analysis',
    summary:
      'This study examines the correlation between maternal continuous biometric data and fetal wellbeing indicators across 840 high-risk pregnancies, establishing new benchmarks for remote monitoring protocols.',
    findings: [
      '94% concordance with clinical CTG readings',
      'Significant cost reduction in hospital visits',
    ],
  },
];

const ResearchIcon = () => (
  <svg width="80" height="80" fill="none" viewBox="0 0 80 80">
    <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1.5" />
    <path d="M26 40 h28M40 26 v28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const InsightsFeaturedResearch = () => {
  return (
    <section className="featured-research">
      <div className="featured-research__inner">
        {/* Header */}
        <div className="featured-research__header">
          <div className="featured-research__header-left">
            <span className="featured-research__tag">Latest Research</span>
            <h2 className="featured-research__title">Research<br />Highlights</h2>
          </div>
          <button className="featured-research__view-all">
            View All Research
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Grid */}
        <div className="featured-research__grid">
          {RESEARCH.map((item) => (
            <article key={item.id} className={`featured-research__card featured-research__card--${item.type}`}>
              <div className="featured-research__card-image">
                <div className="featured-research__card-image-placeholder">
                  <ResearchIcon />
                </div>
                <span className="featured-research__card-badge">{item.badge}</span>
              </div>
              <div className="featured-research__card-body">
                <div className="featured-research__card-meta">
                  <span className="featured-research__card-category">{item.category}</span>
                  <span className="featured-research__card-date">{item.date}</span>
                </div>
                <h3 className="featured-research__card-title">{item.title}</h3>
                <p className="featured-research__card-summary">{item.summary}</p>

                <div className="featured-research__findings">
                  <div className="featured-research__findings-title">Key Findings</div>
                  <ul className="featured-research__findings-list">
                    {item.findings.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <button className="featured-research__card-cta">
                  Read Full Research
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsFeaturedResearch;