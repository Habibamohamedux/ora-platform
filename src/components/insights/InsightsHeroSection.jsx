import React, { useState } from 'react';
import './InsightsHeroSection.css';
import { useLanguage } from '../../i18n/LanguageContext';

const InsightsHeroSection = ({ onFilterChange, onSearch }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchValue, setSearchValue] = useState('');
  const { t } = useLanguage();
  const filterLabels = t('insightsHero.filters');
  const FILTERS = [
    { id: 'all', label: filterLabels[0] },
    { id: 'clinical', label: filterLabels[1] },
    { id: 'ai', label: filterLabels[2] },
    { id: 'maternal', label: filterLabels[3] },
    { id: 'wearable', label: filterLabels[4] },
    { id: 'expert', label: filterLabels[5] },
  ];
  const stats = t('insightsHero.stats');

  const handleFilter = (id) => {
    setActiveFilter(id);
    if (onFilterChange) onFilterChange(id);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchValue);
  };

  return (
    <section className="insights-hero">
      <div className="insights-hero__grid-bg" />
      <div className="insights-hero__orb insights-hero__orb--1" />
      <div className="insights-hero__orb insights-hero__orb--2" />

      <div className="insights-hero__content">
        <div className="insights-hero__eyebrow">
          <span className="insights-hero__eyebrow-dot" />
          {t('insightsHero.eyebrow')}
        </div>

        <h1 className="insights-hero__title">
          {t('insightsHero.title1')}<br />
          <em>{t('insightsHero.title2')}</em>
        </h1>

        <p className="insights-hero__subtitle">
          {t('insightsHero.subtitle')}
        </p>

        {/* Search */}
        <div className="insights-hero__search-wrapper">
          <form className="insights-hero__search-box" onSubmit={handleSearch}>
            <svg className="insights-hero__search-icon" width="20" height="20" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              className="insights-hero__search-input"
              placeholder={t('insightsHero.searchPlaceholder')}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className="insights-hero__search-btn">
              {t('insightsHero.search')}
            </button>
          </form>
        </div>

        {/* Category Filters */}
        <div className="insights-hero__filters">
          <span className="insights-hero__filter-label">{t('insightsHero.browse')}</span>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`insights-hero__filter-tag${activeFilter === f.id ? ' active' : ''}`}
              onClick={() => handleFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="insights-hero__stats">
          <div className="insights-hero__stat">
            <span className="insights-hero__stat-num">240+</span>
            <span className="insights-hero__stat-label">{stats[0]}</span>
          </div>
          <div className="insights-hero__stat-divider" />
          <div className="insights-hero__stat">
            <span className="insights-hero__stat-num">48</span>
            <span className="insights-hero__stat-label">{stats[1]}</span>
          </div>
          <div className="insights-hero__stat-divider" />
          <div className="insights-hero__stat">
            <span className="insights-hero__stat-num">32</span>
            <span className="insights-hero__stat-label">{stats[2]}</span>
          </div>
          <div className="insights-hero__stat-divider" />
          <div className="insights-hero__stat">
            <span className="insights-hero__stat-num">18K+</span>
            <span className="insights-hero__stat-label">{stats[3]}</span>
          </div>
        </div>
      </div>

      <div className="insights-hero__scroll-hint">
        <span>{t('insightsHero.scroll')}</span>
        <div className="insights-hero__scroll-line" />
      </div>
    </section>
  );
};

export default InsightsHeroSection;
