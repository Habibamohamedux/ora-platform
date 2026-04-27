import { useState, useMemo } from "react";
import "./contact-faq.css";

// Professional SVG Icons
const Icons = {
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  close: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  chevron: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  empty: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  arrowRight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
};

// Added contextual tags for better UX scannability
const FAQS = [
  { id: 1, tag: "Support", q: "How quickly will I get a response?", a: "Our support team replies within 3 hours during working hours (Sun–Thu, 9 AM–6 PM EET). Urgent medical concerns are prioritised and routed to available doctors. If you haven't heard back in 3 hours, reply to our acknowledgment email and we'll escalate immediately." },
  { id: 2, tag: "Privacy", q: "Is my information kept private?", a: "Absolutely. All messages are end-to-end encrypted and only handled by our internal team. We never share, sell, or use your personal information for advertising. You can request deletion of all your data at any time by emailing privacy@ora.care." },
  { id: 3, tag: "Clinical", q: "Can I speak directly with a doctor?", a: "Yes. Through ORA Circle you can join doctor-led sessions, ask questions in live rooms, or request a one-on-one consultation. Our verified medical team is available every evening from 7–10 PM. Select 'Medical Support' in the contact form to be connected faster." },
  { id: 4, tag: "Technical", q: "I'm having a technical issue — what do I do?", a: "Use the contact form and select 'Technical Issue'. Include your device type, OS version, and a brief description of what happened. Screenshots or screen recordings are extremely helpful (attach them in the form). Our tech team resolves most issues within 6 hours." },
  { id: 5, tag: "Safety", q: "Can I report content or a user in a Circle?", a: "Yes. Every circle has a built-in report button next to each message. You can also email safety@ora.care. We review all reports within 2 hours and take immediate action when needed — including suspension and permanent bans for serious violations." },
  { id: 6, tag: "Partnerships", q: "How do I join as a doctor or healthcare provider?", a: "We'd love to have you. Select 'Partnerships' in the contact form, or email doctors@ora.care with your medical credentials and specialty. Our partnerships team reviews applications within 48 hours. Verified doctors receive a special badge and access to hosted session tools." },
  { id: 7, tag: "General", q: "Is ORA available in Arabic?", a: "Yes — ORA is fully bilingual. Switch between English and Arabic from any screen. Our support team also responds in Arabic, and all doctor-led sessions can be conducted in either language. More languages are coming in 2025." },
  { id: 8, tag: "Urgent", q: "What if I'm in an emergency?", a: "ORA is not an emergency service. If you or someone you know is in immediate danger or medical distress, please call your local emergency number immediately. For urgent pregnancy complications, go to the nearest hospital. Once you're safe, we're here to help with follow-up support and resources." },
];

export default function ContactFaq() {
  const [open, setOpen] = useState(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return FAQS;
    const q = query.toLowerCase();
    return FAQS.filter((f) => 
      f.q.toLowerCase().includes(q) || 
      f.a.toLowerCase().includes(q) ||
      f.tag.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="cfq-section" id="contact-faq">
      <div className="cfq-bg-fade" />
      <div className="cfq-inner">

        {/* Left: Sticky Context */}
        <div className="cfq-left">
          <div className="cfq-sticky">
            <span className="cfq-eyebrow">Knowledge Base</span>
            <h2 className="cfq-title">Common<br /><em>Questions</em></h2>
            <p className="cfq-desc">
              Browse our most frequently asked questions. Need specific guidance? Our specialists are ready to assist you.
            </p>
            <a href="#contact-form" className="cfq-cta">
              <span>Submit an Inquiry</span>
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
              placeholder="Search questions, topics, or keywords..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setOpen(null); }}
            />
            {query && (
              <button className="cfq-search__clear" onClick={() => setQuery("")} aria-label="Clear search">
                {Icons.close}
              </button>
            )}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="cfq-empty">
              <div className="cfq-empty__icon">{Icons.empty}</div>
              <p className="cfq-empty__text">We couldn't find anything matching "{query}".</p>
              <a href="#contact-form" className="cfq-empty__link">Ask our team directly</a>
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
            Showing {filtered.length} of {FAQS.length} results
          </div>
        </div>

      </div>
    </section>
  );
}