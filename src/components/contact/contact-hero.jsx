import { useEffect, useState } from "react";
import "./contact-hero.css";
import contactVideo from "../../assests/video/contact.mp4";
import { useLanguage } from "../../i18n/LanguageContext";

function useTyper(words) {
  const [state, setState] = useState({ text: "", word: 0, char: 0, del: false });
  
  useEffect(() => {
    const { word, char, del } = state;
    const current = words[word];
    const id = setTimeout(() => {
      if (!del) {
        if (char < current.length)
          setState((s) => ({ ...s, char: s.char + 1, text: current.slice(0, s.char + 1) }));
        else
          setTimeout(() => setState((s) => ({ ...s, del: true })), 2000);
      } else {
        if (char > 0)
          setState((s) => ({ ...s, char: s.char - 1, text: current.slice(0, s.char - 1) }));
        else
          setState((s) => ({ ...s, del: false, word: (s.word + 1) % words.length }));
      }
    }, del ? 40 : 80);
    
    return () => clearTimeout(id);
  }, [state, words]);
  
  return state.text;
}

export default function ContactHero() {
  const { t } = useLanguage();
  const words = t('contactHero.words');
  const typed = useTyper(words);
  const stats = t('contactHero.stats');

  return (
    <section className="cho-section">
      <div className="cho-video-wrapper">
        <video 
          className="cho-video-bg"
          autoPlay 
          loop 
          muted 
          playsInline
          src={contactVideo}
        />
        <div className="cho-video-overlay" />
      </div>

      <div className="cho-inner">
        <div className="cho-badge">
          <span className="cho-dot" />
          {t('contactHero.badge')}
        </div>

        <h1 className="cho-title">
          {t('contactHero.titleLead')}<br />
          {t('contactHero.titleTail')}{" "}
          <span className="cho-typed">
            {typed}
            <span className="cho-cursor" />
          </span>
        </h1>

        <p className="cho-sub">
          {t('contactHero.subtitle')}
        </p>

        <div className="cho-btns">
          <a href="#contact-form" className="cho-btn cho-btn--fill">{t('contactHero.primary')}</a>
          <a href="#contact-faq" className="cho-btn cho-btn--outline">{t('contactHero.secondary')}</a>
        </div>

        <div className="cho-stats">
          {[
            ["< 3h", stats[0]],
            ["24/7", stats[1]],
            ["12", stats[2]],
            ["99%", stats[3]],
          ].map(([v, l]) => (
            <div key={l} className="cho-stat">
              <span className="cho-stat__v">{v}</span>
              <span className="cho-stat__l">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="cho-scroll">
        <div className="cho-scroll__bar" />
      </div>
    </section>
  );
}
