import React from 'react';
import Navbar from '../components/layout/Navbar';
import LifeatOra from '../components/futures/LifeAtOra';
import CareersNewsletter from '../components/futures/CareersNewsletter'; 
import './Futures.css';

const Futures = () => {
  return (
    <> 
      <Navbar />
     <LifeatOra />
      <CareersNewsletter />

    </>
  );
};

export default Futures;