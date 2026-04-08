import React, { useEffect, useRef } from "react";
import { Database, ShieldCheck, Lock, EyeOff } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../pages/Trust.css";

gsap.registerPlugin(ScrollTrigger);

const PRIVACY_ITEMS = [
  {
    Icon: Database,
    title: "Minimal Data",
    desc: "We only collect what is strictly necessary to deliver meaningful insights.",
  },
  {
    Icon: ShieldCheck,
    title: "User Control",
    desc: "You decide how your data is used with full transparency at every step.",
  },
  {
    Icon: Lock,
    title: "Built-In Protection",
    desc: "Advanced secure architecture and encryption at every single layer.",
  },
  {
    Icon: EyeOff,
    title: "Misuse Prevention",
    desc: "Active monitoring and strict protocols to ensure your data is always safe.",
  },
];

const PrivacyByDesign = () => {
  const sectionRef = useRef(null);

  const renderAnimatedTitle = (line1, line2) => {
    const renderWords = (text) =>
      text.split(" ").map((word, i) => {
        const isPink = word.toLowerCase() === "protect.";
        return (
          <span
            key={i}
            className={`word-animated${isPink ? " word-pink-default" : ""}`}
          >
            {word}{" "}
          </span>
        );
      });

    return (
      <>
        <span className="title-line">{renderWords(line1)}</span>
        <br />
        <span className="title-line">{renderWords(line2)}</span>
      </>
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".privacy-left > *", {
        opacity: 0,
        y: 50,
        stagger: 0.18,
        duration: 1.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".privacy-item", {
        opacity: 0,
        x: 50,
        stagger: 0.12,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".privacy-right",
          start: "top 85%",
        },
      });

      gsap.from(".cta-container", {
        opacity: 0,
        scale: 0.92,
        duration: 1.2,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: ".cta-container",
          start: "top 95%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="privacy-section">
      <div className="privacy-container">
        {/* LEFT */}
        <div className="privacy-left">
          <div className="privacy-eyebrow">Privacy Policy</div>
          <h1 className="privacy-title">
            {renderAnimatedTitle("Privacy, by design.", "We protect.")}
          </h1>
          <p className="privacy-description">
            At <a href="/" className="ora-tag">ORA</a>, privacy is not an add-on —
            it is built into every interaction. Every layer of our architecture
            is crafted to secure your health journey with total transparency.
          </p>
        </div>

        {/* RIGHT */}
        <div className="privacy-right">
          {PRIVACY_ITEMS.map(({ Icon, title, desc }) => (
            <div className="privacy-item" key={title}>
              <div className="icon-circle">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <div className="item-content">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container">
        <a href="/legal" className="privacy-cta-button">
          <span>Read Privacy Policy</span>
          <span className="cta-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default PrivacyByDesign;