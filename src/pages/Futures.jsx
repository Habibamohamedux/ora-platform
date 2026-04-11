import React from 'react';
import Navbar from '../components/layout/Navbar';
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