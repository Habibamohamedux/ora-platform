import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { useLanguage } from '../../i18n/LanguageContext';
import './SiteFooter.css';

const SiteFooter = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'TikTok', href: '#' },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__shell">
        <section className="site-footer__content">
          <div className="site-footer__brand">
            <Logo name="ORA" />
            <p className="site-footer__brand-copy">{t('footer.description')}</p>
          </div>

          <div className="site-footer__links">
            <div className="site-footer__group">
              <h3>{t('footer.sitemap')}</h3>
              <div className="site-footer__group-links">
                <Link to="/">{t('nav.items.ecosystem.title')}</Link>
                <Link to="/contact">{t('nav.items.contact.title')}</Link>
                <Link to="/circle">{t('nav.items.circle.title')}</Link>
                <Link to="/insights">{t('nav.items.insights.title')}</Link>
                <Link to="/privacy-policy">{t('footer.privacy')}</Link>
                <Link to="/terms-of-use">{t('footer.terms')}</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="site-footer__meta">
          <div className="site-footer__socials">
            <span className="site-footer__social-label">{t('footer.follow')}</span>
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} className="site-footer__social">
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section className="site-footer__bottom">
          <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
        </section>
      </div>
    </footer>
  );
};

export default SiteFooter;
