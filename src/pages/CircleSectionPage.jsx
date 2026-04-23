import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Check, Sparkles } from 'lucide-react';
import CircleShell from '../components/circle/CircleShell';
import { circlePageMap } from '../data/circleContent';
import './Circle.css';

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const FilterRow = ({ block, activeFilters, setActiveFilters }) => {
  if (!block.filters?.length) {
    return null;
  }

  const active = activeFilters[block.title] || block.filters[0];

  return (
    <div className="circle-filter-row">
      {block.filters.map((filter) => (
        <button
          key={filter}
          className={`circle-filter-pill${active === filter ? ' active' : ''}`}
          onClick={() => setActiveFilters((current) => ({ ...current, [block.title]: filter }))}
          type="button"
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

const CardsBlock = ({ block }) => {
  return (
    <div className="circle-card-grid">
      {block.items.map((item) => (
        <motion.article className="circle-card" key={item.title} whileHover={{ y: -8 }}>
          {item.eyebrow ? <span className="circle-card-kicker">{item.eyebrow}</span> : null}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.meta?.length ? (
            <div className="circle-tag-row">
              {item.meta.map((tag) => (
                <span className="circle-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </motion.article>
      ))}
    </div>
  );
};

const ListBlock = ({ block }) => {
  return (
    <div className="circle-list-card">
      {block.items.map((item) => (
        <article className="circle-list-row" key={item.title}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          {item.meta ? <span>{item.meta}</span> : null}
        </article>
      ))}
    </div>
  );
};

const TimelineBlock = ({ block }) => {
  return (
    <div className="circle-timeline">
      {block.items.map((item) => (
        <article className="circle-timeline-card" key={item.title}>
          <span className="circle-timeline-step">{item.label}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
};

const ProfilesBlock = ({ block }) => {
  return (
    <div className="circle-card-grid">
      {block.items.map((item) => (
        <motion.article className="circle-profile-card" key={item.name} whileHover={{ y: -8 }}>
          <div className="circle-profile-avatar">{item.name.charAt(0)}</div>
          <h3>{item.name}</h3>
          <strong>{item.role}</strong>
          <p>{item.focus}</p>
          <span>{item.note}</span>
        </motion.article>
      ))}
    </div>
  );
};

const ArticleBlock = ({ block }) => {
  return (
    <div className="circle-article-card">
      <div className="circle-article-copy">
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {block.tags?.length ? (
        <div className="circle-tag-row">
          {block.tags.map((tag) => (
            <span className="circle-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const CarouselBlock = ({ block }) => {
  return (
    <div className="circle-carousel">
      {block.items.map((item) => (
        <motion.article className="circle-carousel-card" key={item.title} whileHover={{ y: -8 }}>
          <span className="circle-card-kicker">{item.eyebrow}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </motion.article>
      ))}
    </div>
  );
};

const ThreadBlock = ({ block }) => {
  return (
    <div className="circle-thread-list">
      {block.replies.map((reply) => (
        <article className="circle-thread-reply" key={`${reply.author}-${reply.content}`}>
          <div className="circle-thread-avatar">{reply.author.charAt(0)}</div>
          <div>
            <div className="circle-thread-meta">
              <strong>{reply.author}</strong>
              <span>{reply.role}</span>
            </div>
            <p>{reply.content}</p>
            <span className="circle-thread-footnote">{reply.meta}</span>
          </div>
        </article>
      ))}
    </div>
  );
};

const NetworkBlock = ({ block }) => {
  return (
    <div className="circle-network-card circle-network-card-page">
      <div className="circle-network-center">{block.center}</div>
      {block.items.map((item, index) => (
        <div className={`circle-network-node circle-network-node-${index + 1}`} key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const FAQBlock = ({ block }) => {
  return (
    <div className="circle-faq-list">
      {block.items.map((item) => (
        <details className="circle-faq-item" key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
};

const FormBlock = ({ block, drafts, setDrafts }) => {
  const draft = drafts[block.id] || {};

  const updateDraft = (field, value) => {
    setDrafts((current) => ({
      ...current,
      [block.id]: {
        ...current[block.id],
        [field]: value,
      },
    }));
  };

  return (
    <div className="circle-form-layout">
      <div className="circle-form-card">
        {block.fields.map((field) => (
          <label className="circle-form-field" key={field.name}>
            <span>{field.label}</span>
            {field.type === 'textarea' ? (
              <textarea
                placeholder={field.placeholder}
                value={draft[field.name] || ''}
                onChange={(event) => updateDraft(field.name, event.target.value)}
                rows={5}
              />
            ) : (
              <input
                placeholder={field.placeholder}
                value={draft[field.name] || ''}
                onChange={(event) => updateDraft(field.name, event.target.value)}
                type="text"
              />
            )}
          </label>
        ))}

        {block.options?.length ? (
          <div className="circle-option-group">
            {block.options.map((option) => {
              const fieldKey = `${block.id}-option`;
              const active = (draft[fieldKey] || block.options[0]) === option;

              return (
                <button
                  key={option}
                  className={`circle-option-pill${active ? ' active' : ''}`}
                  onClick={() => updateDraft(fieldKey, option)}
                  type="button"
                >
                  {option}
                </button>
              );
            })}
          </div>
        ) : null}

        {block.toggles?.length ? (
          <div className="circle-toggle-list">
            {block.toggles.map((toggle) => {
              const checked = draft[toggle.name] ?? toggle.defaultValue;

              return (
                <button
                  key={toggle.name}
                  className={`circle-toggle-row${checked ? ' active' : ''}`}
                  onClick={() => updateDraft(toggle.name, !checked)}
                  type="button"
                >
                  <span>{toggle.label}</span>
                  <span className="circle-toggle-knob">
                    <span />
                  </span>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="circle-preview-card">
        <span className="circle-card-kicker">Live Preview</span>
        <h3>{draft.title || draft.headline || draft.groupName || draft.name || 'Your post preview'}</h3>
        <p>
          {draft.content ||
            draft.body ||
            draft.question ||
            draft.anonymousQuestion ||
            draft.expertQuestion ||
            draft.groupPurpose ||
            'As users type, Circle transforms the input into a polished preview so they feel confident before publishing.'}
        </p>
        <div className="circle-preview-footer">
          <span>
            <Sparkles size={14} />
            Preview ready
          </span>
          <span>
            <Check size={14} />
            Safe to publish
          </span>
        </div>
      </div>
    </div>
  );
};

const renderBlock = (block, activeFilters, setActiveFilters, drafts, setDrafts) => {
  switch (block.type) {
    case 'feature':
      return (
        <div className="circle-feature-card">
          {block.label ? <span className="circle-card-kicker">{block.label}</span> : null}
          <h3>{block.title}</h3>
          <p>{block.description}</p>
          {block.points?.length ? (
            <ul className="circle-point-list">
              {block.points.map((point) => (
                <li key={point}>
                  <Check size={15} />
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      );
    case 'cards':
      return <CardsBlock block={block} />;
    case 'list':
      return <ListBlock block={block} />;
    case 'timeline':
      return <TimelineBlock block={block} />;
    case 'profiles':
      return <ProfilesBlock block={block} />;
    case 'article':
      return <ArticleBlock block={block} />;
    case 'carousel':
      return <CarouselBlock block={block} />;
    case 'thread':
      return <ThreadBlock block={block} />;
    case 'network':
      return <NetworkBlock block={block} />;
    case 'faq':
      return <FAQBlock block={block} />;
    case 'form':
      return <FormBlock block={block} drafts={drafts} setDrafts={setDrafts} />;
    default:
      return (
        <div className="circle-card">
          <Activity size={18} />
          <p>Unsupported block type: {block.type}</p>
        </div>
      );
  }
};

const CircleSectionPage = () => {
  const { pageKey } = useParams();
  const [activeFilters, setActiveFilters] = useState({});
  const [drafts, setDrafts] = useState({});
  const page = circlePageMap[pageKey];

  if (!page) {
    return <Navigate replace to="/circle" />;
  }

  return (
    <CircleShell currentKey={page.key}>
      <section className="circle-page-hero">
        <motion.div className="circle-page-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <span className="circle-eyebrow">{page.eyebrow}</span>
          <h1 className="circle-title">{page.title}</h1>
          <p className="circle-description">{page.description}</p>

          <div className="circle-tag-row">
            {page.chips.map((chip) => (
              <span className="circle-tag" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div className="circle-page-stats" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.08 }}>
          {page.stats.map((stat) => (
            <div className="circle-metric-card" key={stat.label}>
              <span className="circle-metric-value">{stat.value}</span>
              <span className="circle-metric-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {page.blocks.map((block) => (
        <motion.section className="circle-section" key={`${page.key}-${block.title}`} {...reveal}>
          <div className="circle-section-heading">
            <span className="circle-eyebrow">{page.label}</span>
            <h2>{block.title}</h2>
            {block.subtitle ? <p>{block.subtitle}</p> : null}
          </div>

          <FilterRow block={block} activeFilters={activeFilters} setActiveFilters={setActiveFilters} />

          {renderBlock(block, activeFilters, setActiveFilters, drafts, setDrafts)}
        </motion.section>
      ))}

      <motion.section className="circle-section circle-final-cta" {...reveal}>
        <div className="circle-section-heading">
          <span className="circle-eyebrow">Next in the ecosystem</span>
          <h2>Keep the journey connected.</h2>
        </div>

        <div className="circle-route-grid circle-route-grid-compact">
          {page.related.map((relatedKey) => {
            const relatedPage = circlePageMap[relatedKey];

            return (
              <Link className="circle-route-card" key={relatedPage.key} to={relatedPage.path}>
                <span className="circle-card-kicker">{relatedPage.eyebrow}</span>
                <h3>{relatedPage.label}</h3>
                <p>{relatedPage.description}</p>
                <span className="circle-route-link">
                  Open page
                  <ArrowRight size={15} />
                </span>
              </Link>
            );
          })}
        </div>
      </motion.section>
    </CircleShell>
  );
};

export default CircleSectionPage;
