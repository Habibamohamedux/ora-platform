import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ShieldCheck, Cloud, Activity } from "lucide-react";
import "../../pages/Trust.css";


const DataProtection = () => {
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
            Enterprise-Level Security Standards
          </h2>
          <p className="data-protection-body">
            We use advanced security protocols to protect your data from unauthorized
            access, loss, or misuse. Our infrastructure follows modern encryption
            standards and secure cloud practices to ensure reliability and safety at
            all times.
          </p>
        </div>

        <div className="data-protection-grid">
          {/* Card 1 */}
          <div className="data-protection-card">
            <div className="data-protection-icon-wrapper">
              <ShieldCheck size={28} strokeWidth={2} />
            </div>
            <h3 className="data-protection-card-title">End-to-end encryption</h3>
            <p className="data-protection-card-desc">
              Safeguard your communications and stored data with military-grade encryption protocols.
            </p>
          </div>

          {/* Card 2 */}
          <div className="data-protection-card">
            <div className="data-protection-icon-wrapper">
              <Cloud size={28} strokeWidth={2} />
            </div>
            <h3 className="data-protection-card-title">Secure cloud storage</h3>
            <p className="data-protection-card-desc">
              Scale confidently on cloud-native infrastructure built to withstand high traffic and prevent data loss.
            </p>
          </div>

          {/* Card 3 */}
          <div className="data-protection-card">
            <div className="data-protection-icon-wrapper">
              <Activity size={28} strokeWidth={2} />
            </div>
            <h3 className="data-protection-card-title">Continuous monitoring</h3>
            <p className="data-protection-card-desc">
              Real-time threat detection and active infrastructure monitoring to catch issues before they happen.
            </p>
          </div>
        </div>

        <div className="data-protection-cta-wrapper">
          <button className="data-protection-button">
            &rarr; Learn About Data Protection
          </button>
        </div>
      </div>
    </section>
  );
};

export default DataProtection;