import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Seo from '../components/seo/Seo';
import { useLanguage } from '../i18n/LanguageContext';
import './ErrorPage.css';

const ErrorPage = () => {
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <main className="ora-error-page">
      <Seo
        title="Page Not Found | ORA"
        description="The page you requested could not be found. Explore ORA's maternal health platform, legal center, community, and support pages."
        keywords={['ORA 404', 'page not found', 'maternal health platform']}
        noIndex
      />
      <Navbar />

      <section className="ora-error-hero" aria-labelledby="ora-error-title">
        <div className="ora-error-content">
          <p className="ora-error-eyebrow">{t('errorPage.eyebrow')}</p>
          <h1 id="ora-error-title">{t('errorPage.title')}</h1>
          <p className="ora-error-message">{t('errorPage.message')}</p>

          <div className="ora-error-actions" aria-label={t('errorPage.actionsLabel')}>
            <Link className="ora-error-button ora-error-button--primary" to="/">
              {t('errorPage.home')}
            </Link>
            <Link className="ora-error-button" to="/circle">
              {t('errorPage.circle')}
            </Link>
            <Link className="ora-error-button" to="/invest">
              {t('errorPage.invest')}
            </Link>
            <Link className="ora-error-button" to="/trust">
              {t('errorPage.trust')}
            </Link>
            <Link className="ora-error-button" to="/contact">
              {t('errorPage.contact')}
            </Link>
            <Link className="ora-error-button" to="/privacy-policy">
              {t('errorPage.privacy')}
            </Link>
          </div>

          <p className="ora-error-path">
            {t('errorPage.requestedRoute')} <span>{location.pathname}</span>
          </p>
        </div>

        <div className="ora-error-visual" aria-hidden="true">
          <div className="ora-error-code">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </div>

          <div className="ora-error-signal">
            <span className="signal-dot signal-dot--start" />
            <span className="signal-line signal-line--a" />
            <span className="signal-step signal-step--up" />
            <span className="signal-line signal-line--b" />
            <span className="signal-step signal-step--down" />
            <span className="signal-line signal-line--c" />
            <span className="signal-dot signal-dot--end" />
          </div>

          <div className="ora-error-grid">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
