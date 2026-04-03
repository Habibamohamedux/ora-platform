import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/common/CustomCursor';
import Home from './pages/Home';
import './pages/Home.css';
import Invest from './pages/Invest';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
 <Route path="/invest" element={<Invest />} />
      </Routes>
    </Router>
  </React.StrictMode>
);