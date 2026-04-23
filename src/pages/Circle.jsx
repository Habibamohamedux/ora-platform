import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  BookOpen,
  HeartPulse,
  Link2,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  Users,
} from 'lucide-react';
import CircleShell from '../components/circle/CircleShell';
import { circleEcosystemLinks, circlePageMap } from '../data/circleContent';
import './Circle.css';

const previewKeys = ['stories', 'experiences', 'discussions', 'anonymous', 'experts', 'connect'];

const iconMap = {
  stories: BookOpen,
  experiences: HeartPulse,
  discussions: MessageCircle,
  anonymous: ShieldCheck,
  experts: Stethoscope,
  connect: Users,
};

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const Circle = () => {
  const [activePreview, setActivePreview] = useState('stories');
  const activePage = circlePageMap[activePreview];
  const ActiveIcon = iconMap[activePreview] || Activity;

  return (
    <CircleShell currentKey="overview">
      <section className="circle-hero">
        <motion.div
          className="circle-hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="circle-eyebrow">ORA Circle</span>
          <h1 className="circle-title">You’re not alone. You’re connected to care, insight, and each other.</h1>
          <p className="circle-description">
            Circle is ORA’s community layer for maternal care: a beautifully connected experience where stories,
            support, expertise, and belonging all work together instead of living in separate silos.
          </p>

          <div className="circle-hero-actions">
            <Link className="circle-primary-link circle-button-large" to="/circle/join">
              Join Circle
              <ArrowRight size={18} />
            </Link>
            <Link className="circle-secondary-link circle-button-large" to="/circle/stories">
              Explore Stories
            </Link>
          </div>

          <div className="circle-metric-grid">
            <div className="circle-metric-card">
              <span className="circle-metric-value">13</span>
              <span className="circle-metric-label">connected pages</span>
            </div>
            <div className="circle-metric-card">
              <span className="circle-metric-value">EN / AR</span>
              <span className="circle-metric-label">bilingual-ready foundation</span>
            </div>
            <div className="circle-metric-card">
              <span className="circle-metric-value">1 ecosystem</span>
              <span className="circle-metric-label">stories, threads, experts, groups</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="circle-hero-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="circle-hero-panel-top">
            <span className="circle-panel-label">Live Preview</span>
            <div className="circle-signal">
              <span className="circle-signal-dot" />
              Connected
            </div>
          </div>

          <div className="circle-preview-stage">
            <div className="circle-preview-icon">
              <ActiveIcon size={22} />
            </div>
            <div>
              <h2>{activePage.label}</h2>
              <p>{activePage.description}</p>
            </div>
          </div>

          <div className="circle-preview-stats">
            {activePage.stats.map((stat) => (
              <div key={stat.label} className="circle-preview-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="circle-preview-selector">
            {previewKeys.map((key) => {
              const preview = circlePageMap[key];
              const Icon = iconMap[key] || Activity;

              return (
                <button
                  key={key}
                  className={`circle-preview-chip${activePreview === key ? ' active' : ''}`}
                  onMouseEnter={() => setActivePreview(key)}
                  onFocus={() => setActivePreview(key)}
                  type="button"
                >
                  <Icon size={16} />
                  {preview.label}
                </button>
              );
            })}
          </div>

          <Link className="circle-inline-link" to={activePage.path}>
            Open {activePage.label}
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </section>

      <motion.section className="circle-section" {...reveal}>
        <div className="circle-section-heading">
          <span className="circle-eyebrow">Community Stories Preview</span>
          <h2>Stories that feel editorial, lived-in, and impossible to ignore.</h2>
        </div>

        <div className="circle-card-grid circle-card-grid-three">
          {circlePageMap.stories.blocks[1].items.map((item) => (
            <motion.article className="circle-story-card" key={item.title} whileHover={{ y: -10 }}>
              <span className="circle-card-kicker">{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="circle-tag-row">
                {item.meta?.map((tag) => (
                  <span key={tag} className="circle-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <Link className="circle-inline-link" to="/circle/stories">
          View all stories
          <ArrowRight size={15} />
        </Link>
      </motion.section>

      <motion.section className="circle-section" {...reveal}>
        <div className="circle-section-heading">
          <span className="circle-eyebrow">Shared Experiences Preview</span>
          <h2>Moments mapped across the pregnancy journey with feeling built into the interface.</h2>
        </div>

        <div className="circle-timeline">
          {circlePageMap.experiences.blocks[0].items.map((item) => (
            <div className="circle-timeline-card" key={item.title}>
              <span className="circle-timeline-step">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section className="circle-section circle-section-split" {...reveal}>
        <div className="circle-section-heading">
          <span className="circle-eyebrow">Discussion Spaces Preview</span>
          <h2>Open conversations with real momentum, fast replies, and clear pathways into expert insight.</h2>
        </div>

        <div className="circle-list-card">
          {circlePageMap.discussions.blocks[1].items.map((item) => (
            <article className="circle-list-row" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span>{item.meta}</span>
            </article>
          ))}
        </div>

        <div className="circle-side-stack">
          <div className="circle-highlight-card">
            <span className="circle-card-kicker">Anonymous Support Highlight</span>
            <h3>Speak freely when the question feels too tender for your name.</h3>
            <p>
              Anonymous support gives users protected posting, clear safety language, and a moderation system that
              feels present without feeling harsh.
            </p>
            <Link className="circle-inline-link" to="/circle/anonymous">
              Explore anonymous mode
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="circle-highlight-card circle-highlight-card-strong">
            <span className="circle-card-kicker">Expert Guidance Highlight</span>
            <h3>Verified doctors stay close to the community conversation.</h3>
            <p>
              Circle doesn’t isolate expert knowledge. It threads it directly into questions, answers, and story-based
              learning.
            </p>
            <Link className="circle-inline-link" to="/circle/experts">
              Meet the experts
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section className="circle-section circle-section-split" {...reveal}>
        <div className="circle-section-heading">
          <span className="circle-eyebrow">Connections / Network Preview</span>
          <h2>The ecosystem works because each space feeds the next one naturally.</h2>
        </div>

        <div className="circle-network-card">
          <div className="circle-network-center">ORA Circle</div>
          {circleEcosystemLinks.map((link, index) => (
            <div className={`circle-network-node circle-network-node-${index + 1}`} key={link.title}>
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </div>
          ))}
        </div>

        <div className="circle-connection-list">
          {circleEcosystemLinks.map((link) => (
            <div className="circle-connection-item" key={link.title}>
              <div className="circle-connection-icon">
                <Link2 size={18} />
              </div>
              <div>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section className="circle-section circle-final-cta" {...reveal}>
        <div className="circle-section-heading">
          <span className="circle-eyebrow">Join Circle</span>
          <h2>A full product architecture, live in code, ready to keep growing.</h2>
          <p>
            Every page below is routed and designed as part of the same community system so we can keep iterating step
            by step without losing the big picture.
          </p>
        </div>

        <div className="circle-route-grid">
          {Object.values(circlePageMap).map((page) => (
            <Link className="circle-route-card" to={page.path} key={page.key}>
              <span className="circle-card-kicker">{page.eyebrow}</span>
              <h3>{page.label}</h3>
              <p>{page.description}</p>
              <span className="circle-route-link">
                Open page
                <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </motion.section>
    </CircleShell>
  );
};

export default Circle;
