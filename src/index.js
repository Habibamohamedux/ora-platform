import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Add this import!
import './index.css';
import RoutingApp from './RoutingApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutingApp />
    </BrowserRouter>
  </React.StrictMode>
);