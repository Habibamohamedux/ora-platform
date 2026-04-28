import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ShieldCheck, Cloud, Activity } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import "../../pages/Trust.css";


const DataProtection = () => {
  const { t } = useLanguage();
  const cards = t("trustDataProtection.cards");
  // Initialize the particle engine
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Particle configuration tailored for the pink/white theme
  const particlesOptions = {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#c94060", // var(--pink)
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "bottom", // Flows downward like the inspo
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Interacts with mouse
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <section className="data-protection-section">
      {/* Animated Background */}
      <div className="data-protection-canvas-container">
        <Particles
          id="tsparticles-data-protection"
          init={particlesInit}
          options={particlesOptions}
          className="data-protection-particles"
        />
        {/* A gradient overlay to fade out the particles at the bottom */}
        <div className="data-protection-fade-overlay"></div>
      </div>

      {/* Foreground Content */}
      <div className="data-protection-container">
        <div className="data-protection-header">
          <h2 className="data-protection-headline">
            {t("trustDataProtection.headline")}
          </h2>
          <p className="data-protection-body">
            {t("trustDataProtection.body")}
          </p>
        </div>

        <div className="data-protection-grid">
          {/* Card 1 */}
          <div className="data-protection-card">
            <div className="data-protection-icon-wrapper">
              <ShieldCheck size={28} strokeWidth={2} />
            </div>
            <h3 className="data-protection-card-title">{cards[0].title}</h3>
            <p className="data-protection-card-desc">
              {cards[0].desc}
            </p>
          </div>

          {/* Card 2 */}
          <div className="data-protection-card">
            <div className="data-protection-icon-wrapper">
              <Cloud size={28} strokeWidth={2} />
            </div>
            <h3 className="data-protection-card-title">{cards[1].title}</h3>
            <p className="data-protection-card-desc">
              {cards[1].desc}
            </p>
          </div>

          {/* Card 3 */}
          <div className="data-protection-card">
            <div className="data-protection-icon-wrapper">
              <Activity size={28} strokeWidth={2} />
            </div>
            <h3 className="data-protection-card-title">{cards[2].title}</h3>
            <p className="data-protection-card-desc">
              {cards[2].desc}
            </p>
          </div>
        </div>

        <div className="data-protection-cta-wrapper">
          <button className="data-protection-button">
            &rarr; {t("trustDataProtection.cta")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DataProtection;
