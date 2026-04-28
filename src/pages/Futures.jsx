import React from 'react';
import Navbar from '../components/layout/Navbar';
import Seo from '../components/seo/Seo';
import CareerHero from '../components/futures/CareerHero';
import LifeatOra from '../components/futures/LifeAtOra';
import InnovationEvents from '../components/futures/InnovationEvents';
import CareersNewsletter from '../components/futures/CareersNewsletter'; 
import CareerFuture from '../components/futures/CareerFuture';
import CareersAreas from '../components/futures/CareersAreas';
import Openpositions from '../components/futures/OpenPositions';
import EcosystemImpact from '../components/futures/EcosystemImpact';

import './Futures.css';

const Futures = () => {
  return (
    <> 
      <Seo
        title="Careers at ORA | Build the Future of Maternal Care"
        description="Explore careers at ORA and help build AI, clinical, wearable, and design systems that advance maternal and women's health."
        keywords={[
          'ORA careers',
          'health tech jobs',
          'women health innovation careers',
          'maternal health startup jobs',
        ]}
        schemaType="CollectionPage"
      />
      <Navbar />
      <CareerHero />
      <CareerFuture />
     <LifeatOra />
      <CareersAreas />
      <Openpositions />
      <InnovationEvents />
      <EcosystemImpact />
      <CareersNewsletter />
    </>
  );
};

export default Futures;
