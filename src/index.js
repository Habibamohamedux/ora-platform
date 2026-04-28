import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Add this import!
import './index.css';
import RoutingApp from './RoutingApp';
import { LanguageProvider } from './i18n/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <RoutingApp />
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);
