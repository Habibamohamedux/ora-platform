import React from 'react';
import Navbar from '../components/layout/Navbar';
import Seo from '../components/seo/Seo';
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
      <Seo
        title="Contact ORA | Support, Partnerships, and Clinical Collaboration"
        description="Contact ORA for product support, clinical collaboration, partnership inquiries, legal questions, and maternal health platform guidance."
        keywords={[
          'contact ORA',
          'maternal health support',
          'clinical collaboration',
          'health technology partnerships',
        ]}
        schemaType="ContactPage"
      />
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
