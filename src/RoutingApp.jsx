import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import CmsLogin from './pages/admin/Login';
import CmsDashboard from './pages/admin/Dashboard';
import AdminLayout from './cms/layouts/AdminLayout';
import DoctorLayout from './cms/layouts/DoctorLayout';
import ManagerLayout from './cms/layouts/ManagerLayout';
import UserManagement from './cms/pages/admin/UserManagement';
import RolesAccess from './cms/pages/admin/RolesAccess';
import WebsiteCMS from './cms/pages/admin/WebsiteCMS';
import BlogManager from './cms/pages/admin/BlogManager';
import MediaLibrary from './cms/pages/admin/MediaLibrary';
import SEOManager from './cms/pages/admin/SEOManager';
import ContactInbox from './cms/pages/admin/ContactInbox';
import PushNotifications from './cms/pages/admin/PushNotifications';
import AdminReportsHub from './cms/pages/admin/AdminReportsHub';
import CmsSettings from './cms/pages/shared/Settings';
import {
  DoctorDashboard,
  PatientList,
  Appointments,
  AIAlerts,
  HealthData,
} from './cms/pages/doctor/DoctorPages';
import {
  ManagerDashboard,
  Analytics,
  MedicalStats,
  StaffDoctors,
  Reports,
} from './cms/pages/manager/ManagerPages';
import './pages/Circle.css';
import './pages/Home.css';
import './pages/OraLegalCenter.css';

const LEGAL_ROUTES = [
  '/privacy-policy',
  '/terms-of-use',
  '/cookie-policy',
  '/research-ethics',
  '/clinical-data-handling',
];

function RoutingApp() {
  const location = useLocation();
  const isCmsRoute = /^\/(admin|doctor|manager)(\/|$)/.test(location.pathname);
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/circle" element={<Circle />} />
      <Route path="/circle/:pageKey" element={<Navigate to="/circle" replace />} />
      <Route path="/invest" element={<Invest />} />
      <Route path="/trust" element={<Trust />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/legal" element={<Navigate to="/privacy-policy" replace />} />
      <Route path="/futures" element={<Futures />} />
      {LEGAL_ROUTES.map((path) => (
        <Route
          key={path}
          path={path}
          element={<OraLegalCenter slugOverride={path.slice(1)} />}
        />
      ))}

      <Route path="/admin/login" element={<CmsLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<CmsDashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="roles" element={<RolesAccess />} />
        <Route path="cms" element={<WebsiteCMS />} />
        <Route path="blog" element={<BlogManager />} />
        <Route path="media" element={<MediaLibrary />} />
        <Route path="seo" element={<SEOManager />} />
        <Route path="inbox" element={<ContactInbox />} />
        <Route path="notifications" element={<PushNotifications />} />
        <Route path="reports" element={<AdminReportsHub />} />
        <Route path="settings" element={<CmsSettings />} />
      </Route>

      <Route path="/doctor" element={<DoctorLayout />}>
        <Route index element={<Navigate to="/doctor/dashboard" replace />} />
        <Route path="dashboard" element={<DoctorDashboard />} />
        <Route path="patients" element={<PatientList />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="alerts" element={<AIAlerts />} />
        <Route path="health" element={<HealthData />} />
        <Route path="settings" element={<CmsSettings />} />
      </Route>

      <Route path="/manager" element={<ManagerLayout />}>
        <Route index element={<Navigate to="/manager/dashboard" replace />} />
        <Route path="dashboard" element={<ManagerDashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="medical" element={<MedicalStats />} />
        <Route path="staff" element={<StaffDoctors />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<CmsSettings />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );

  return (
    <>
      <CustomCursor />
      {isCmsRoute ? routes : <PageLoader>{routes}</PageLoader>}
      {!isCmsRoute && <SiteFooter />}
      {!isCmsRoute && <BackToTopButton />}
      {!isCmsRoute && <NotificationCookies />}
      <ScrollToTop />
    </>
  );
}

export default RoutingApp;
