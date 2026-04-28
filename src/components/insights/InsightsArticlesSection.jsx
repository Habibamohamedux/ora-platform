import React, { useState } from 'react';
import './InsightsArticlesSection.css';

const CATEGORIES = ['All', 'Maternal Health', 'AI in Healthcare', 'Wellness', 'Technology'];

const ARTICLES = [
  {
    id: 1,
    category: 'Maternal Health',
    date: 'Apr 22, 2025',
    readTime: '6 min read',
    author: 'Dr. Layla Hassan',
    authorInitials: 'LH',
    title: 'Understanding Preeclampsia: Early Signs Every Expectant Mother Should Know',
    excerpt: 'Preeclampsia affects 5–8% of pregnancies worldwide. Early recognition of warning signs can dramatically reduce maternal and fetal complications.',
    tags: ['Pregnancy', 'Risk'],
  },
  {
    id: 2,
    category: 'AI in Healthcare',
    date: 'Apr 18, 2025',
    readTime: '8 min read',
    author: 'Dr. Mark Osei',
    authorInitials: 'MO',
    title: 'How Machine Learning Models Are Redefining Obstetric Risk Assessment',
    excerpt: 'A deep-dive into the transformer-based architectures now being validated in clinical OB/GYN workflows, and what it means for the future of prenatal care.',
    tags: ['AI', 'ML'],
  },
  {
    id: 3,
    category: 'Wellness',
    date: 'Apr 14, 2025',
    readTime: '5 min read',
    author: 'Dr. Amira Nour',
    authorInitials: 'AN',
    title: 'Mental Health in Pregnancy: Breaking the Silence Around Perinatal Anxiety',
    excerpt: 'One in five pregnant women experience anxiety disorders. This editorial explores evidence-based strategies and digital tools for early detection and support.',
    tags: ['Mental Health', 'Wellness'],
  },
  {
    id: 4,
    category: 'Technology',
    date: 'Apr 9, 2025',
    readTime: '7 min read',
    author: 'Dr. Sofia Karam',
    authorInitials: 'SK',
    title: 'Wearable Biosensors: The Next Frontier in Continuous Fetal Monitoring',
    excerpt: 'From photoplethysmography to impedance cardiography — a technical review of wearable sensor modalities being deployed in high-risk obstetric populations.',
    tags: ['Wearables', 'Tech'],
  },
  {
    id: 5,
    category: 'Maternal Health',
    date: 'Apr 5, 2025',
    readTime: '4 min read',
    author: 'Dr. Hana Yusuf',
    authorInitials: 'HY',
    title: 'Nutrition Protocols During High-Risk Pregnancies: What Evidence Says',
    excerpt: 'Reviewing the latest RCT data on micronutrient supplementation, gestational weight gain management, and dietary interventions for improved fetal outcomes.',
    tags: ['Nutrition', 'Diet'],
  },
  {
    id: 6,
    category: 'AI in Healthcare',
    date: 'Mar 29, 2025',
    readTime: '10 min read',
    author: 'Dr. James Liu',
    authorInitials: 'JL',
    title: 'Federated Learning in Maternal Health: Privacy-Preserving AI at Scale',
    excerpt: 'How distributed machine learning frameworks enable training on sensitive obstetric data without compromising patient privacy — with case studies from three hospital networks.',
    tags: ['Privacy', 'AI'],
  },
];

const ArticleIcon = () => (
  <svg className="article-card__icon" width="64" height="64" fill="none" viewBox="0 0 64 64">
    <rect x="12" y="8" width="40" height="48" rx="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M20 22h24M20 30h24M20 38h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const InsightsArticlesSection = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeTab);

  return (
    <section className="articles-section">
      <div className="articles-section__inner">
        {/* Header */}
        <div className="articles-section__header">
          <div>
            <span className="articles-section__tag">Editorial</span>
            <h2 className="articles-section__title">Articles &amp;<br />Perspectives</h2>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="articles-section__tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`articles-section__tab${activeTab === cat ? ' active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="articles-section__grid">
          {filtered.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-card__image-wrap">
                <ArticleIcon />
                <span className="article-card__category-badge">{article.category}</span>
                <span className="article-card__read-time">{article.readTime}</span>
              </div>
              <div className="article-card__body">
                <div className="article-card__meta">
                  <div className="article-card__author">
                    <div className="article-card__author-avatar">{article.authorInitials}</div>
                    <span className="article-card__author-name">{article.author}</span>
                  </div>
                  <span className="article-card__date">{article.date}</span>
                </div>
                <h3 className="article-card__title">{article.title}</h3>
                <p className="article-card__excerpt">{article.excerpt}</p>
                <div className="article-card__footer">
                  <button className="article-card__read-link">
                    Read Article
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="article-card__tags">
                    {article.tags.map((t) => (
                      <span key={t} className="article-card__tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Browse All */}
        <div className="articles-section__browse">
          <button className="articles-section__browse-btn">
            Browse All Articles
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsArticlesSection;