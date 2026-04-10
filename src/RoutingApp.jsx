import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CustomCursor from './components/common/CustomCursor';
import Home from './pages/Home';
import Invest from './pages/Invest';
import Trust from './pages/Trust';
import Futures from './pages/Futures';
import OraLegalCenter from './pages/OraLegalCenter';

// Component-specific CSS
import './pages/Home.css';
import './pages/OraLegalCenter.css';

function RoutingApp() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/legal" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="/:slug" element={<OraLegalCenter />} />
        <Route path="/futures" element={<Futures />} />
      </Routes>
    </>
  );
}

// THIS is the exact line your error was complaining about being missing!
export default RoutingApp;