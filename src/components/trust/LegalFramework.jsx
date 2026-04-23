import React, { useEffect, useRef } from "react";
import { ShieldCheck, FileText, Scale, Lock, FileKey } from "lucide-react";
import "../../pages/Trust.css";

const LegalFramework = () => {
  const sectionRef = useRef(null);

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
          <div className="section-label">7. Our Legal Framework</div>
          <h2 className="legal-headline">Clear Policies, <br />No Hidden Terms</h2>
          
          <p className="legal-body">
            ORA’s legal framework is designed to be transparent, accessible, and easy to understand. We provide clear documentation covering all aspects of privacy, usage, and data handling so you can make informed decisions.
          </p>

          <a href="/legal-center" className="legal-main-cta">
            Explore ORA Legal Center <span className="arrow">→</span>
          </a>

          {/* Document list */}
          <div className="legal-documents-list">
            <p className="doc-list-title">Included Documentation:</p>
            <ul>
              <li><span className="doc-bullet"></span> Privacy Policy</li>
              <li><span className="doc-bullet"></span> Terms of Use</li>
              <li><span className="doc-bullet"></span> Cookie Policy</li>
              <li><span className="doc-bullet"></span> Research Ethics</li>
              <li><span className="doc-bullet"></span> Clinical Data Handling</li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default LegalFramework;