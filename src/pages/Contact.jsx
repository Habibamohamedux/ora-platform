import React from 'react';
import Navbar from '../components/layout/Navbar';
import ContactHero from "../components/contact/contact-hero";
import ContactChannels from "../components/contact/contact-channels";
import ContactForm from "../components/contact/contact-form";
import ContactFaq from "../components/contact/contact-faq";
import ContactHours from "../components/contact/contact-hours";
import ContactTeam from "../components/contact/contact-team";
import ContactLocation from "../components/contact/contact-location";
import ContactCta from "../components/contact/contact-cta";
import "./Contact.css";

export default function Contact() {
  return (

    <main className="contact-page">
          <Navbar />
      <ContactHero />
      <ContactChannels />
      <ContactForm />
      <ContactFaq />
      <ContactHours />
      <ContactTeam />
      <ContactLocation />
      <ContactCta />
    </main>
  );
}
