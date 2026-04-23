import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import CircleLogoMark from './CircleLogoMark';
import { circleNavItems } from '../../data/circleContent';

const CircleShell = ({ currentKey = 'overview', children }) => {
  return (
    <div className="circle-shell">
      <div className="circle-ambient circle-ambient-a" />
      <div className="circle-ambient circle-ambient-b" />
      <div className="circle-ambient circle-ambient-c" />
      <div className="circle-noise" />

      <header className="circle-topbar">
        <Link className="circle-brand" to="/circle" aria-label="Go to ORA Circle overview">
          <CircleLogoMark />
        </Link>

        <div className="circle-topbar-actions">
          <Link className="circle-ghost-link" to="/">
            Back to ORA
          </Link>
          <Link className="circle-primary-link" to="/circle/join">
            Join Circle
            <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      <motion.nav
        className="circle-nav-rail"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {circleNavItems.map((item) => (
          <Link
            key={item.key}
            className={`circle-nav-pill${currentKey === item.key ? ' active' : ''}`}
            to={item.path}
          >
            {item.label}
          </Link>
        ))}
      </motion.nav>

      <main className="circle-content">{children}</main>
    </div>
  );
};

export default CircleShell;
