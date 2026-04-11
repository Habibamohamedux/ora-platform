import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CustomCursor from './components/common/CustomCursor';
import PageLoader from './PageLoader'; // <-- Import the new single-file component here
import Home from './pages/Home';
import Invest from './pages/Invest';
import Trust from './pages/Trust';
import Futures from './pages/Futures';
import OraLegalCenter from './pages/OraLegalCenter';
import './pages/Home.css';
import './pages/OraLegalCenter.css';

function RoutingApp() {
  return (
    <>
      <CustomCursor />
      {/* Wrap the Routes directly inside PageLoader */}
      <PageLoader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/legal" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/futures" element={<Futures />} />
          <Route path="/:slug" element={<OraLegalCenter />} /> 
        </Routes>
      </PageLoader>
    </>
  );
}

export default RoutingApp;