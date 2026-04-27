import "./contact-team.css";
import nadiaImg from "../../assests/Imgs/contact/Nadia.png";
import emyImg from "../../assests/Imgs/contact/emy.png";
import kazemImg from "../../assests/Imgs/contact/kazem.png";
import lailaImg from "../../assests/Imgs/contact/laila.png";
// Professional SVG Icons
const Icons = {
  mail: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  arrow: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
};

const TEAM = [
  {
    name: "Dr. Nadia Ahmed",
    role: "Chief Medical Officer",
    tag: "Clinical Escalations",
    image: nadiaImg,
    bio: "Oversees all medical inquiries and ensures critical concerns are routed to our specialist network instantly.",
    email: "nadia@ora.care",
  },
  {
    name: "Emy Mostafa",
    role: "Head of Patient Care",
    tag: "Community Support",
    image: emyImg,
    bio: "Leads our maternal wellness initiatives and manages daily support operations for mothers and partners.",
    email: "emy@ora.care",
  },
  {
    name: "Kazem Nasser",
    role: "Platform Operations",
    tag: "Technical Support",
    image: kazemImg,
    bio: "Ensures the ORA ecosystem remains accessible, highly secure, and bug-free across all devices.",
    email: "kazem@ora.care",
  },
  {
    name: "Laila Hassan",
    role: "Clinical Partnerships",
    tag: "Provider Network",
    image: lailaImg,
    bio: "Manages onboarding, compliance, and integrations for independent practitioners and hospital networks.",
    email: "laila@ora.care",
  },
];

export default function ContactTeam() {
  return (
    <section className="ctm-section" id="contact-team">
      <div className="ctm-ambient-glow" />

      <div className="ctm-inner">
        <div className="ctm-header">
          <span className="ctm-eyebrow">Dedicated Leadership</span>
          <h2 className="ctm-title">
            Real Experts,
            <br />
            <em>Real Care</em>
          </h2>
          <p className="ctm-desc">
            When you reach out to ORA, your inquiries aren't handled by bots.
            They are reviewed and resolved by our dedicated department
            specialists.
          </p>
        </div>

        <div className="ctm-grid">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className="ctm-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="ctm-card__img-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="ctm-card__img"
                  loading="lazy"
                />
                <div className="ctm-card__overlay">
                  <a
                    href={`mailto:${member.email}`}
                    className="ctm-mail-btn"
                    aria-label={`Email ${member.name}`}
                  >
                    {Icons.mail}
                  </a>
                </div>
              </div>

              <div className="ctm-card__content">
                <span className="ctm-tag">{member.tag}</span>
                <h3 className="ctm-name">{member.name}</h3>
                <div className="ctm-role">{member.role}</div>
                <p className="ctm-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ctm-footer">
          <p className="ctm-footer-text">
            Our full support infrastructure spans 18 medical and technical
            professionals.
          </p>
          <a href="/team" className="ctm-full-team-btn">
            <span>Meet the Entire Team</span>
            <span className="ctm-full-team-icon">{Icons.arrow}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
