import React from "react";
import "../../pages/Futures.css";

// Updated image imports
import img1 from "../../assests/Imgs/careers/Innovation_01.png";
import img2 from "../../assests/Imgs/careers/Innovation_02.png";
import img3 from "../../assests/Imgs/careers/Innovation_03.png";
import img4 from "../../assests/Imgs/careers/Innovation_04.png";
import img5 from "../../assests/Imgs/careers/Innovation_05.png";
import img6 from "../../assests/Imgs/careers/Innovation_06.png";

// SVG Icons to replace emojis
const Icons = {
  flask: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 3H15M10 3V14L5.5 20.5C5.17 20.97 5.48 22 6.06 22H17.94C18.52 22 18.83 20.97 18.5 20.5L14 14V3M10 14H14" />
    </svg>
  ),
  code: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  hospital: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  ),
  users: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  chart: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  chat: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
};

const eventsData = [
  {
    id: 1,
    title: "HARDWARE TESTING LABS",
    frequency: "EVERY TUESDAY",
    freqType: "weekly",
    icon: Icons.flask,
    description:
      "Hands-on laboratories where engineers test and refine ORA wearable technology. Devices are evaluated for accuracy, comfort, and reliability to ensure safe continuous monitoring for mothers.",
    image: img1,
  },
  {
    id: 2,
    title: "HACK THE HEALTH HACKATHON",
    frequency: "ANNUAL",
    freqType: "annual",
    icon: Icons.code,
    description:
      "A fast-paced innovation event where teams collaborate to build new ideas, prototypes, and digital solutions aimed at solving real challenges in maternal health.",
    image: img2,
  },
  {
    id: 3,
    title: "CLINICAL INNOVATION WORKSHOPS",
    frequency: "MONTHLY",
    freqType: "monthly",
    icon: Icons.hospital,
    description:
      "Interactive sessions where participants learn about digital health systems, wearable technology, and innovative tools designed to improve maternal healthcare.",
    image: img3,
  },
  {
    id: 4,
    title: "MEDICAL-TECH FELLOWSHIP PROGRAM",
    frequency: "MONTHLY",
    freqType: "monthly",
    icon: Icons.users,
    description:
      "A professional fellowship that brings together doctors, engineers, and designers to collaborate on next-generation healthcare technologies for maternal care.",
    image: img4,
  },
  {
    id: 5,
    title: "MATERNAL MONITORING LABS",
    frequency: "ONGOING",
    freqType: "ongoing",
    icon: Icons.chart,
    description:
      "Advanced clinical simulations where continuous monitoring systems are put to the test in real-world scenarios, ensuring the highest standards of care for expecting mothers.",
    image: img5,
  },
  {
    id: 6,
    title: "WOMEN IN HEALTHTECH ROUNDTABLES",
    frequency: "QUARTERLY",
    freqType: "quarterly",
    icon: Icons.chat,
    description:
      "Small discussion sessions that bring together female leaders, researchers, and innovators to share insights and shape the future of women-focused medical technology.",
    image: img6,
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M1 7h12M8 2l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const InnovationEvents = () => {
  return (
    <section className="InnovationEvents-section">
      <div className="InnovationEvents-container">
        {/* Updated Header Layout */}
        <div className="life-section-header">
          <div className="life-section-title-group">
            <span className="life-section-eyebrow">Community & Growth</span>
            <h2 className="life-section-heading">
              INNOVATION EVENTS & WORKING LABS
            </h2>
          </div>
          <button className="life-section-cta">
            Explore All Events
            <ArrowIcon />
          </button>
        </div>

        <div className="InnovationEvents-grid">
          {eventsData.map((event) => (
            <article key={event.id} className="InnovationEvents-card">
              <div className="InnovationEvents-imageWrapper">
                <img
                  src={event.image}
                  alt={event.title}
                  className="InnovationEvents-image"
                />
                <div className="InnovationEvents-overlay"></div>
              </div>

              <div className="InnovationEvents-content">
                <div className="InnovationEvents-meta">
                  <h3 className="InnovationEvents-cardTitle">{event.title}</h3>
                  {/* Dynamic class added based on freqType */}
                  <span
                    className={`InnovationEvents-badge badge-${event.freqType}`}
                  >
                    <span className="InnovationEvents-badgeIcon">
                      {event.icon}
                    </span>
                    {event.frequency}
                  </span>
                </div>
                <p className="InnovationEvents-description">
                  {event.description}
                </p>

                <div className="InnovationEvents-action">
                  <span className="InnovationEvents-link">
                    Explore Lab &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationEvents;
