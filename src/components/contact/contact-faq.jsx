import { useState, useMemo } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./contact-faq.css";

// Professional SVG Icons
const Icons = {
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  close: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  chevron: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  empty: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  arrowRight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
};

export default function ContactFaq() {
  const [open, setOpen] = useState(null);
  const [query, setQuery] = useState("");
  const { t } = useLanguage();
  const faqs = t("contactFaq.faqs").map((faq, index) => ({ ...faq, id: index + 1 }));

  const filtered = useMemo(() => {
    if (!query.trim()) return faqs;
    const q = query.toLowerCase();
    return faqs.filter((f) => 
      f.q.toLowerCase().includes(q) || 
      f.a.toLowerCase().includes(q) ||
      f.tag.toLowerCase().includes(q)
    );
  }, [faqs, query]);

  return (
    <section className="cfq-section" id="contact-faq">
      <div className="cfq-bg-fade" />
      <div className="cfq-inner">

        {/* Left: Sticky Context */}
        <div className="cfq-left">
          <div className="cfq-sticky">
            <span className="cfq-eyebrow">{t("contactFaq.eyebrow")}</span>
            <h2 className="cfq-title">{t("contactFaq.titleLead")}<br /><em>{t("contactFaq.titleEm")}</em></h2>
            <p className="cfq-desc">{t("contactFaq.desc")}</p>
            <a href="#contact-form" className="cfq-cta">
              <span>{t("contactFaq.cta")}</span>
              <span className="cfq-cta__icon">{Icons.arrowRight}</span>
            </a>
          </div>
        </div>

        {/* Right: Interactive FAQ Content */}
        <div className="cfq-right">
          
          {/* Premium Search Command Bar */}
          <div className="cfq-search-wrap">
            <span className="cfq-search__icon">{Icons.search}</span>
            <input
              className="cfq-search"
              type="text"
              placeholder={t("contactFaq.searchPlaceholder")}
              value={query}
              onChange={(e) => { setQuery(e.target.value); setOpen(null); }}
            />
            {query && (
              <button className="cfq-search__clear" onClick={() => setQuery("")} aria-label={t("contactFaq.clearSearch")}>
                {Icons.close}
              </button>
            )}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="cfq-empty">
              <div className="cfq-empty__icon">{Icons.empty}</div>
              <p className="cfq-empty__text">{t("contactFaq.emptyPrefix")} "{query}".</p>
              <a href="#contact-form" className="cfq-empty__link">{t("contactFaq.emptyLink")}</a>
            </div>
          )}

          {/* Accordion List */}
          <div className="cfq-list">
            {filtered.map((item, i) => {
              const isOpen = open === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`cfq-item ${isOpen ? "cfq-item--open" : ""}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <button 
                    className="cfq-q" 
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="cfq-q__content">
                      <span className={`cfq-tag cfq-tag--${item.tag.toLowerCase()}`}>{item.tag}</span>
                      <span className="cfq-q__text">{item.q}</span>
                    </div>
                    <span className="cfq-icon">{Icons.chevron}</span>
                  </button>
                  <div className="cfq-ans-wrap">
                    <div className="cfq-ans-inner">
                      <p className="cfq-ans">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cfq-footer">
            {t("contactFaq.footer", { count: filtered.length, total: faqs.length })}
          </div>
        </div>

      </div>
    </section>
  );
}
