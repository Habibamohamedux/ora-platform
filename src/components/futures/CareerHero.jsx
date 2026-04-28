import "../../pages/Futures.css";
import img1 from "../../assests/Imgs/careers/life_01.png";
import img2 from "../../assests/Imgs/careers/life_02.png";
import img3 from "../../assests/Imgs/careers/life_03.png";
import img4 from "../../assests/Imgs/careers/life_04.png";
import img5 from "../../assests/Imgs/careers/life_07.PNG";
import { useLanguage } from "../../i18n/LanguageContext";

const CareerHero = () => {
  const { t } = useLanguage();
  const stats = t('careerHero.stats');
  const tags = t('careerHero.tags');

  return (
    <section className="CH-hero">
      {/* ── Ambient background blobs ── */}
      <div className="CH-blob CH-blob--1" aria-hidden="true" />
      <div className="CH-blob CH-blob--2" aria-hidden="true" />

      {/* ── Left column: text + CTA ── */}
      <div className="CH-content">
        <span className="CH-eyebrow">
          <span className="CH-eyebrow-dot" />
          {t('careerHero.eyebrow')}
        </span>

        <h1 className="CH-headline">
          <span className="CH-headline-outline">{t('careerHero.line1')}</span>
          <br />
          <span className="CH-headline-solid">{t('careerHero.line2')}</span>
          <br />
          <span className="CH-headline-accent">{t('careerHero.line3')}</span>
          <br />
          <span className="CH-headline-outline">{t('careerHero.line4')}</span>
        </h1>

        <p className="CH-sub">
          {t('careerHero.subtitle')}
        </p>

        <div className="CH-actions">
          <a href="#positions" className="CH-btn CH-btn--primary">
            <span className="CH-btn-dot" />
            {t('careerHero.primary')}
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="CH-btn CH-btn--ghost"
          >
            <svg
              className="CH-btn-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            {t('careerHero.secondary')}
          </a>
        </div>

        {/* ── Stats strip ── */}
        <div className="CH-stats">
          {[
            { value: "120+", label: stats[0] },
            { value: "14", label: stats[1] },
            { value: "3", label: stats[2] },
          ].map(({ value, label }) => (
            <div className="CH-stat" key={label}>
              <span className="CH-stat-value">{value}</span>
              <span className="CH-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right column: image mosaic ── */}
      <div className="CH-mosaic" aria-hidden="true">
        <div className="CH-mosaic-col CH-mosaic-col--left">
          <div className="CH-mosaic-card CH-mosaic-card--tall">
            <img src={img1} alt="ORA team working" loading="lazy" />
            <div className="CH-mosaic-overlay">
              <span className="CH-mosaic-tag">{tags[0]}</span>
            </div>
          </div>
          <div className="CH-mosaic-card CH-mosaic-card--short">
            <img src={img2} alt="ORA lab" loading="lazy" />
            <div className="CH-mosaic-overlay">
              <span className="CH-mosaic-tag">{tags[1]}</span>
            </div>
          </div>
        </div>

        <div className="CH-mosaic-col CH-mosaic-col--center">
          <div className="CH-mosaic-card CH-mosaic-card--feature">
            <img src={img3} alt="Women's health device" loading="lazy" />
            <div className="CH-mosaic-overlay CH-mosaic-overlay--feature">
              <span className="CH-mosaic-tag">{tags[2]}</span>
            </div>
          </div>
        </div>

        <div className="CH-mosaic-col CH-mosaic-col--right">
          <div className="CH-mosaic-card CH-mosaic-card--short">
            <img src={img4} alt="ORA meeting" loading="lazy" />
            <div className="CH-mosaic-overlay">
              <span className="CH-mosaic-tag">{tags[3]}</span>
            </div>
          </div>
          <div className="CH-mosaic-card CH-mosaic-card--tall">
            <img src={img5} alt="ORA innovation hub" loading="lazy" />
            <div className="CH-mosaic-overlay">
              <span className="CH-mosaic-tag">{tags[4]}</span>
            </div>
          </div>
        </div>

        {/* Decorative accent line */}
        <div className="CH-mosaic-accent" aria-hidden="true" />
      </div>

      {/* ── Scroll cue ── */}
      <div className="CH-scroll-cue" aria-hidden="true">
        <span className="CH-scroll-line" />
        <span className="CH-scroll-label">{t('careerHero.scroll')}</span>
      </div>
    </section>
  );
};

export default CareerHero;
