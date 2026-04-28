import React, { useEffect, useRef } from "react";
import { ShieldCheck, FileText, Scale, Lock, FileKey } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import "../../pages/Trust.css";

const LegalFramework = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  const docs = t("trustLegal.docs");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="legal-framework-section" ref={sectionRef}>
      <div className="legal-container">
        
        {/* Left Side: Perfected Animated Object Graphic */}
        <div className="legal-graphic-wrapper">
          <div className="abstract-graphic">
            {/* Spinning/Pulsing Background Rings */}
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
            
            {/* Central Main Object: Security Shield */}
            <div className="central-object">
              <div className="central-glow"></div>
              <ShieldCheck size={56} className="icon-main" strokeWidth={1.5} />
            </div>

            {/* Relatable Floating Objects from Library */}
            <div className="floating-object obj-1">
              <FileText size={22} strokeWidth={1.5} />
            </div>
            <div className="floating-object obj-2">
              <Scale size={24} strokeWidth={1.5} />
            </div>
            <div className="floating-object obj-3">
              <Lock size={18} strokeWidth={1.5} />
            </div>
            <div className="floating-object obj-4">
              <FileKey size={20} strokeWidth={1.5} />
            </div>

            {/* Tiny aesthetic data dots */}
            <div className="floating-dot dot-12"></div>
            <div className="floating-dot dot-13"></div>
          </div>
        </div>

        {/* Right Side: Content and CTA */}
        <div className="legal-content">
          <div className="section-label">{t("trustLegal.sectionLabel")}</div>
          <h2 className="legal-headline">{t("trustLegal.line1")} <br />{t("trustLegal.line2")}</h2>
          
          <p className="legal-body">
            {t("trustLegal.body")}
          </p>

          <a href="/legal-center" className="legal-main-cta">
            {t("trustLegal.cta")} <span className="arrow">→</span>
          </a>

          {/* Document list */}
          <div className="legal-documents-list">
            <p className="doc-list-title">{t("trustLegal.docListTitle")}</p>
            <ul>
              {docs.map((doc) => (
                <li key={doc}><span className="doc-bullet"></span> {doc}</li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default LegalFramework;
