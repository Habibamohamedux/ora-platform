import React, { useEffect, useState } from 'react';
import './BackToTopButton.css';
import { useLanguage } from '../../i18n/LanguageContext';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 420);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`insights-back-top ora-back-top${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t('backTop.label')}
      type="button"
    >
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 19V5M5 12l7-7 7 7"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BackToTopButton;
