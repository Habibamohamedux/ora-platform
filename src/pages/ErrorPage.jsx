import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import './ErrorPage.css';

const ErrorPage = ({
  eyebrow = 'Connection Interrupted',
  title = "We couldn't find this part of your journey.",
  message = "Something went off track, but you're not lost. ORA is still here to guide and support you every step of the way.",
}) => {
  const location = useLocation();

  return (
    <main className="ora-error-page">
      <Navbar />

      <section className="ora-error-hero" aria-labelledby="ora-error-title">
        <div className="ora-error-content">
          <p className="ora-error-eyebrow">{eyebrow}</p>
          <h1 id="ora-error-title">{title}</h1>
          <p className="ora-error-message">{message}</p>

          <div className="ora-error-actions" aria-label="Error page actions">
            <Link className="ora-error-button ora-error-button--primary" to="/">
              Home
            </Link>
            <Link className="ora-error-button" to="/circle">
              Circle
            </Link>
            <Link className="ora-error-button" to="/invest">
              Invest
            </Link>
            <Link className="ora-error-button" to="/trust">
              Trust
            </Link>
            <Link className="ora-error-button" to="/contact">
              Contact
            </Link>
            <Link className="ora-error-button" to="/privacy-policy">
              Privacy Policy
            </Link>
          </div>

          <p className="ora-error-path">
            Requested route <span>{location.pathname}</span>
          </p>
        </div>

        <div className="ora-error-visual" aria-hidden="true">
          <div className="ora-error-code">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </div>

          <div className="ora-error-signal">
            <span className="signal-dot signal-dot--start" />
            <span className="signal-line signal-line--a" />
            <span className="signal-step signal-step--up" />
            <span className="signal-line signal-line--b" />
            <span className="signal-step signal-step--down" />
            <span className="signal-line signal-line--c" />
            <span className="signal-dot signal-dot--end" />
          </div>

          <div className="ora-error-grid">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
