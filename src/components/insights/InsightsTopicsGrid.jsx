import React from 'react';
import './InsightsTopicsGrid.css';

const TOPICS = [
  { icon: '🌱', name: 'Pregnancy Stages', count: '48 articles' },
  { icon: '💓', name: 'Health Monitoring', count: '36 articles' },
  { icon: '🤖', name: 'AI & Innovation', count: '42 articles' },
  { icon: '🥗', name: 'Nutrition', count: '29 articles' },
  { icon: '🧠', name: 'Mental Health', count: '31 articles' },
  { icon: '🔬', name: 'Clinical Research', count: '54 articles' },
  { icon: '📡', name: 'Wearable Tech', count: '27 articles' },
  { icon: '👩‍⚕️', name: 'Expert Opinions', count: '22 articles' },
  { icon: '💊', name: 'Pharmacology', count: '18 articles' },
  { icon: '🌍', name: 'Global Health', count: '15 articles' },
];

const InsightsTopicsGrid = () => {
  return (
    <section className="topics-grid">
      <div className="topics-grid__inner">
        <div className="topics-grid__header">
          <span className="topics-grid__tag">Categories</span>
          <h2 className="topics-grid__title">Explore by Topic</h2>
          <p className="topics-grid__subtitle">
            Dive deep into any subject. Every topic is backed by verified
            research and expert-reviewed content.
          </p>
        </div>

        <div className="topics-grid__cards">
          {TOPICS.map((topic, i) => (
            <div className="topic-card" key={i} style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="topic-card__bg" />
              <div className="topic-card__icon">{topic.icon}</div>
              <h3 className="topic-card__name">{topic.name}</h3>
              <span className="topic-card__count">{topic.count}</span>
              <div className="topic-card__arrow">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsTopicsGrid;