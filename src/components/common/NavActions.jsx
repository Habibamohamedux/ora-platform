import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1️⃣ Import useNavigate
import { useLanguage } from '../../i18n/LanguageContext';
import './NavActions.css';

const menuData = [
  {
    category: 'system',
    items: [
      { key: 'ecosystem', path: '/ecosystem' },
      { key: 'intelligence', path: '/intelligence' },
      { key: 'clinical', path: '/clinical' },
    ],
  },
  {
    category: 'experience',
    items: [
      { key: 'companion', path: '/companion' },
      { key: 'pulse', path: '/pulse' },
    ],
  },
  {
    category: 'foundation',
    items: [
      { key: 'origin', path: '/origin' },
    ],
  },
  {
    category: 'knowledge',
    items: [
      { key: 'insights', path: '/insights' },
      { key: 'guidance', path: '/guidance' },
    ],
  },
  {
    category: 'connection',
    items: [
      { key: 'contact', path: '/contact' },
      { key: 'circle', path: '/circle' },
    ],
  },
  {
    category: 'trust',
    items: [
      { key: 'trust', path: '/trust' },
    ],
  },
  {
    category: 'business',
    items: [
      { key: 'invest', path: '/invest' },
    ],
  },
  {
    category: 'careers',
    items: [
      { key: 'futures', path: '/futures' },
    ],
  },
];

const LANGUAGE_OPTIONS = [
  { code: 'en', enabled: true },
  { code: 'fr', enabled: true },
  { code: 'ar', enabled: true },
];

/* ─────────────────────────────────────────────
   StaggeredChars — per-letter slide-up animation
───────────────────────────────────────────── */
const StaggeredChars = ({ text, isActive }) => (
  <>
    {text.split('').map((char, i) => (
      <span
        key={i}
        style={{
          display: 'inline-block',
          transform: isActive ? 'translateY(0%)' : 'translateY(110%)',
          opacity:   isActive ? 1 : 0,
          transition: 'transform 0.48s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.36s ease',
          transitionDelay: isActive
            ? `${i * 0.026}s`
            : `${Math.max(0, (text.length - i - 1) * 0.016)}s`,
          whiteSpace: char === ' ' ? 'pre' : 'normal',
        }}
      >
        {char}
      </span>
    ))}
  </>
);

// 3️⃣ Added onClick prop to MenuItem
const MenuItem = ({ item, globalIndex, isMenuOpen, onHover, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="menu-item"
      onMouseEnter={() => { setHovered(true); onHover(item); }}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(item.path)} // Trigger navigation on click
      style={{
        cursor: 'pointer', // Ensure it looks clickable
        transform:  isMenuOpen ? 'translateX(0)'   : 'translateX(-28px)',
        opacity:    isMenuOpen ? 1                  : 0,
        transition: `transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${0.18 + globalIndex * 0.04}s,
                     opacity   0.50s ease                           ${0.13 + globalIndex * 0.04}s`,
      }}
    >
      <div className="item-inner">
        <span className="item-rest">{item.title}</span>
        <span className="item-hover" aria-hidden="true">
          <StaggeredChars text={item.title} isActive={hovered} />
        </span>
      </div>
    </li>
  );
};

/* ─────────────────────────────────────────────
   NavActions
───────────────────────────────────────────── */
const NavActions = ({ onMenuChange }) => {
  const [isOpen,         setIsOpen]         = useState(false);
  const [triggerHovered, setTriggerHovered] = useState(false);
  const [activeDetail,   setActiveDetail]   = useState(null);
  const [animKey,        setAnimKey]        = useState(0);
  const { language, setLanguage, t } = useLanguage();

  const navigate = useNavigate(); // 4️⃣ Initialize the router navigation

  const isActive = isOpen || triggerHovered;

  const handleHover = (item) => {
    setActiveDetail(item);
    setAnimKey(k => k + 1);
  };

  const handleOpen  = () => {
    setIsOpen(true);
    setActiveDetail(null);
    onMenuChange?.(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setActiveDetail(null);
    onMenuChange?.(false);
  };

  // 5️⃣ Create a function to handle the click: Close menu, then navigate
  const handleItemClick = (path) => {
    handleClose(); // Close the overlay first
    setTimeout(() => {
      navigate(path); // Navigate to the new page
    }, 300); // Optional: tiny delay so the menu closing animation can start before the page swaps
  };

  const handleLanguageSelect = (code) => {
    setLanguage(code);
  };

  let globalIndex = 0;

  return (
    <div className="ora-nav">
      <div
        className={`nav-trigger${isActive ? ' active' : ''}`}
        onMouseEnter={() => setTriggerHovered(true)}
        onMouseLeave={() => setTriggerHovered(false)}
        onClick={handleOpen}
        role="button"
        aria-label="Open ORA navigation"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleOpen()}
      >
        <div className="trigger-label-wrap">
          <span className={`trigger-text row-a${isActive ? ' hide' : ''}`}>
            {t('nav.trigger')}
          </span>
          <span className={`trigger-text row-b${isActive ? ' show' : ''}`}>
            {t('nav.menuTitle')}
          </span>
        </div>

        {/* 9-dot grid — 32×32px box via CSS */}
        <div className={`dot-grid${isActive ? ' s2' : ''}`}>
          {[...Array(9)].map((_, i) => (
            <span key={i} className={`dot dot-${i + 1}`} />
          ))}
        </div>
      </div>
      <div
        className={`menu-overlay${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="ORA System Navigation menu"
      >
        <div className="glow g1" />
        <div className="glow g2" />
        <div className="glow g3" />

        {/* Header */}
        <div className="mh">
          <span className="mh-brand">{t('nav.brand')}</span>
          <span className="mh-center">{t('nav.menuTitle')}</span>

          <div className="mh-actions">
            <div className="mh-language" aria-label={t('nav.language')}>
              {LANGUAGE_OPTIONS.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  className={`mh-language__option${language === option.code ? ' is-active' : ''}${option.enabled ? '' : ' is-disabled'}`}
                  onClick={() => handleLanguageSelect(option.code)}
                  disabled={!option.enabled}
                  title={!option.enabled ? `${t(`languages.${option.code}`)} · ${t('languages.arSoon')}` : t(`languages.${option.code}`)}
                >
                  {option.code.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="close-btn" onClick={handleClose} aria-label={t('nav.close')}>
              {t('nav.close')}
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="mb">

          <div className="ml">
            {menuData.map(({ category, items }) => (
              <div key={category}>
                <p className="cat-label">{t(`nav.categories.${category}`)}</p>
                <ul className="item-list">
                  {items.map((item) => {
                    const idx = globalIndex++;
                    const translatedItem = {
                      ...item,
                      title: t(`nav.items.${item.key}.title`),
                      desc: t(`nav.items.${item.key}.desc`),
                    };
                    return (
                      <MenuItem
                        key={item.key}
                        item={translatedItem}
                        globalIndex={idx}
                        isMenuOpen={isOpen}
                        onHover={handleHover}
                        onClick={handleItemClick} // 6️⃣ Pass the function down
                      />
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mdiv" aria-hidden="true" />

          <div className="mr">
            {activeDetail ? (
              <div key={animKey}>
                <p className="d-eye">— {t('nav.overview')}</p>
                <h2 className="d-title">{activeDetail.title}</h2>
                <div className="d-rule" />
                <p className="d-desc">{activeDetail.desc}</p>
              </div>
            ) : (
              <p className="d-placeholder" style={{ opacity: isOpen ? 1 : 0 }}>
                {t('nav.hoverPlaceholder').split('\n').map((line, index, arr) => (
                  <React.Fragment key={line}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="mf">
          <div className="mf-meta">
            <span>{t('nav.copyright')}</span>
            <span>{t('nav.languageNote')}</span>
          </div>
          <span>{t('nav.tagline')}</span>
        </div>

      </div>
    </div>
  );
};

export default NavActions;
