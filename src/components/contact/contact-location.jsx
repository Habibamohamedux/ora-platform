import { useState } from "react";
import "./contact-location.css";

// Import your local images
import cairoImg from "../../assests/Imgs/contact/Location01.png";
import dubaiImg from "../../assests/Imgs/contact/Location02.png";
import berlinImg from "../../assests/Imgs/contact/Location03.png";
import parisImg from "../../assests/Imgs/contact/Location04.png";

// Premium SVG Icon Suite
const Icons = {
  mapPin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  phone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  // Facility Icons
  lab: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><circle cx="12" cy="16" r="1"/></svg>,
  headset: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
};

const OFFICES = [
  {
    id: "cairo",
    city: "Cairo",
    country: "Egypt",
    type: "Global Headquarters",
    image: cairoImg,
    address: "26 Tahrir Square, Downtown Cairo, 11511",
    hours: "Sun – Thu, 9:00 AM – 6:00 PM (EET)",
    phone: "+20 2 2795 0000",
    mapsUrl: "https://maps.google.com/?q=Tahrir+Square+Cairo",
    facilities: [
      { icon: "lab", text: "Clinical R&D Lab" },
      { icon: "headset", text: "24/7 Global Dispatch" },
      { icon: "users", text: "Care Training Hub" }
    ]
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    type: "Regional Hub",
    image: dubaiImg,
    address: "DIFC Gate Building, Level 4, Dubai",
    hours: "Mon – Fri, 9:00 AM – 6:00 PM (GST)",
    phone: "+971 4 000 0000",
    mapsUrl: "https://maps.google.com/?q=DIFC+Dubai",
    facilities: [
      { icon: "users", text: "Multilingual Support" },
      { icon: "shield", text: "Regional Compliance" },
      { icon: "lab", text: "Provider Network Center" }
    ]
  },
  {
    id: "berlin",
    city: "Berlin",
    country: "Germany",
    type: "European Tech Ops",
    image: berlinImg,
    address: "Potsdamer Platz 10, 10785 Berlin",
    hours: "Mon – Fri, 9:00 AM – 5:00 PM (CET)",
    phone: "+49 30 0000 0000",
    mapsUrl: "https://maps.google.com/?q=Potsdamer+Platz+Berlin",
    facilities: [
      { icon: "shield", text: "EU Privacy & Data Center" },
      { icon: "lab", text: "Platform Engineering" },
      { icon: "heart", text: "European Partnerships" }
    ]
  },
  {
    id: "paris",
    city: "Paris",
    country: "France",
    type: "Wellness Design Center",
    image: parisImg,
    address: "15 Rue de la Paix, 75002 Paris",
    hours: "Mon – Fri, 9:30 AM – 6:30 PM (CET)",
    phone: "+33 1 00 00 00 00",
    mapsUrl: "https://maps.google.com/?q=Rue+de+la+Paix+Paris",
    facilities: [
      { icon: "heart", text: "Maternal Wellness Design" },
      { icon: "users", text: "Boutique Care Experience" },
      { icon: "shield", text: "EU Clinical Relations" }
    ]
  }
];

export default function ContactLocation() {
  const [activeId, setActiveId] = useState("cairo");
  const activeOffice = OFFICES.find((o) => o.id === activeId);

  return (
    <section className="clc-section" id="contact-location">
      <div className="clc-bg-glow" />
      
      <div className="clc-inner">
        <div className="clc-header">
          <span className="clc-eyebrow">Our Network</span>
          <h2 className="clc-title">Global Presence,<br /><em>Local Care</em></h2>
          <p className="clc-desc">
            Explore our state-of-the-art hubs around the world. Every ORA location is designed to innovate, support, and elevate maternal healthcare.
          </p>
        </div>

        <div className="clc-layout">
          
          {/* Navigation Sidebar */}
          <div className="clc-nav">
            {OFFICES.map((office) => {
              const isActive = office.id === activeId;
              return (
                <button 
                  key={office.id} 
                  className={`clc-nav-item ${isActive ? "clc-nav-item--active" : ""}`}
                  onClick={() => setActiveId(office.id)}
                >
                  <div className="clc-nav-item__content">
                    <span className="clc-nav-item__city">{office.city}</span>
                    <span className="clc-nav-item__country">{office.country}</span>
                  </div>
                  <div className="clc-nav-item__arrow">{Icons.arrow}</div>
                </button>
              );
            })}
          </div>

          {/* Master Detail Stage */}
          <div className="clc-stage-wrapper">
            <div className="clc-stage" key={activeOffice.id}>
              
              <div className="clc-stage__image-wrap">
                <img 
                  src={activeOffice.image} 
                  alt={`${activeOffice.city} Office`} 
                  className="clc-stage__image" 
                />
                <div className="clc-stage__overlay">
                  <span className="clc-stage__type">{activeOffice.type}</span>
                </div>
              </div>

              <div className="clc-stage__details">
                <div className="clc-details__grid">
                  
                  {/* Contact Info */}
                  <div className="clc-details__info">
                    <h3 className="clc-details__city">{activeOffice.city}</h3>
                    <div className="clc-info-row">
                      <div className="clc-info-row__ic">{Icons.mapPin}</div>
                      <span>{activeOffice.address}</span>
                    </div>
                    <div className="clc-info-row">
                      <div className="clc-info-row__ic">{Icons.clock}</div>
                      <span>{activeOffice.hours}</span>
                    </div>
                    <div className="clc-info-row">
                      <div className="clc-info-row__ic">{Icons.phone}</div>
                      <a href={`tel:${activeOffice.phone.replace(/\s+/g, '')}`} className="clc-link">
                        {activeOffice.phone}
                      </a>
                    </div>

                    <div className="clc-actions">
                      <a href={activeOffice.mapsUrl} target="_blank" rel="noopener noreferrer" className="clc-btn clc-btn--primary">
                        Get Directions
                      </a>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="clc-facilities">
                    <h4 className="clc-facilities__title">On-Site Facilities</h4>
                    <div className="clc-facilities__list">
                      {activeOffice.facilities.map((fac, idx) => (
                        <div key={idx} className="clc-facility">
                          <div className="clc-facility__icon">{Icons[fac.icon]}</div>
                          <span className="clc-facility__text">{fac.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}