import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CustomCursor from './components/common/CustomCursor';
import PageLoader from './PageLoader'; 
import ScrollToTop from "./ScrollToTop";
import BackToTopButton from './components/common/BackToTopButton';
import Home from './pages/Home';
import Invest from './pages/Invest';
import Trust from './pages/Trust';
import Futures from './pages/Futures';
import Insights from './pages/Insights';
import OraLegalCenter from './pages/OraLegalCenter';
import Circle from './pages/Circle';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import NotificationCookies from './components/common/NotificationCookies';
import SiteFooter from './components/layout/SiteFooter';
import './pages/Circle.css';
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/circle" element={<Circle />} />
          <Route path="/circle/:pageKey" element={<Navigate to="/circle" replace />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/ecosystem" element={<Navigate to="/" replace />} />
          <Route path="/intelligence" element={<Navigate to="/invest" replace />} />
          <Route path="/clinical" element={<Navigate to="/trust" replace />} />
          <Route path="/companion" element={<Navigate to="/" replace />} />
          <Route path="/pulse" element={<Navigate to="/invest" replace />} />
          <Route path="/origin" element={<Navigate to="/" replace />} />
          <Route path="/guidance" element={<Navigate to="/insights" replace />} />
          <Route path="/legal" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/futures" element={<Futures />} />
          <Route path="/:slug" element={<OraLegalCenter />} /> 
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </PageLoader>
      <SiteFooter />
      <BackToTopButton />
      <NotificationCookies />
      <ScrollToTop />
    </>
  );
}

export default RoutingApp;
