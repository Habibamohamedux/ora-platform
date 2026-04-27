import { useEffect, useState } from "react";
import "./contact-hero.css";
import contactVideo from "../../assests/video/contact.mp4";

const WORDS = ["clinicians", "patients", "partners", "families", "you"];

function useTyper(words) {
  const [state, setState] = useState({ display: "", word: 0, char: 0, del: false });
  
  useEffect(() => {
    const { display, word, char, del } = state;
    const current = words[word];
    const id = setTimeout(() => {
      if (!del) {
        if (char < current.length)
          setState((s) => ({ ...s, char: s.char + 1, display: current.slice(0, s.char + 1) }));
        else
          setTimeout(() => setState((s) => ({ ...s, del: true })), 2000);
      } else {
        if (char > 0)
          setState((s) => ({ ...s, char: s.char - 1, display: current.slice(0, s.char - 1) }));
        else
          setState((s) => ({ ...s, del: false, word: (s.word + 1) % words.length }));
      }
    }, del ? 40 : 80);
    
    return () => clearTimeout(id);
  }, [state, words]);
  
  return state.display;
}

export default function ContactHero() {
  const typed = useTyper(WORDS);

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
          Active Support · Available 24/7
        </div>

        <h1 className="cho-title">
          We're Here<br />
          For{" "}
          <span className="cho-typed">
            {typed}
            <span className="cho-cursor" />
          </span>
        </h1>

        <p className="cho-sub">
          Comprehensive support for the ORA ecosystem. Dedicated assistance, tailored to your clinical and personal needs.
        </p>

        <div className="cho-btns">
          <a href="#contact-form" className="cho-btn cho-btn--fill">Contact Support</a>
          <a href="#contact-faq" className="cho-btn cho-btn--outline">Browse Documentation</a>
        </div>

        <div className="cho-stats">
          {[
            ["< 3h", "Average Response"],
            ["24/7", "System Monitoring"],
            ["12", "Supported Languages"],
            ["99%", "Resolution Rate"],
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