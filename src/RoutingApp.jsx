import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CustomCursor from './components/common/CustomCursor';
import PageLoader from './PageLoader'; 
import ScrollToTop from "./ScrollToTop";
import Home from './pages/Home';
import Invest from './pages/Invest';
import Trust from './pages/Trust';
import Futures from './pages/Futures';
import OraLegalCenter from './pages/OraLegalCenter';
import Circle from './pages/Circle';
import CircleSectionPage from './pages/CircleSectionPage';
import ErrorPage from './pages/ErrorPage';
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
          <Route path="/circle" element={<Circle />} />
          <Route path="/circle/:pageKey" element={<CircleSectionPage />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/legal" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/futures" element={<Futures />} />
          <Route path="/:slug" element={<OraLegalCenter />} /> 
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </PageLoader>
               <ScrollToTop />
    </>
  );
}

export default RoutingApp;
