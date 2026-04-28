import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import './CircleCommunityRail.css';

const reveal = {
  initial: { opacity: 0, y: 42 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const sections = [
  {
    number: '02',
    eyebrow: 'Community Stories',
    title: 'Real Stories from Real Journeys',
    description:
      'User-generated stories that hold the beauty, mess, and tenderness of pregnancy in one place.',
    items: ['Pregnancy milestones', 'Challenges', 'Emotional moments'],
    sideLabel: 'Why it matters',
    sideCopy:
      'Stories help new mothers feel seen before they are ready to post a question. The emotional layer comes first.',
    ctas: [
      { label: 'Read Stories', to: '/circle/stories' },
      { label: 'Share Your Story', to: '/circle/share' },
    ],
    tone: 'rose',
  },
  {
    number: '03',
    eyebrow: 'Shared Experiences',
    title: 'Moments That Connect Us',
    description:
      'A space for the everyday moments people search for most when they want to feel less alone.',
    items: ['First symptoms', 'First scan', 'Emotional ups & downs', 'Daily routines'],
    sideLabel: 'Shared rhythm',
    sideCopy:
      'Organized experience tracks make it easier to move from scrolling to belonging, especially during uncertain weeks.',
    ctas: [{ label: 'Explore Experiences', to: '/circle/experiences' }],
    tone: 'blue',
  },
  {
    number: '04',
    eyebrow: 'Discussion Spaces',
    title: 'Open Conversations',
    description:
      'Structured discussion rooms for questions, reassurance, and practical life advice across the whole journey.',
    items: ['Health Questions', 'Emotional Support', 'Daily Life', 'Advice & Tips'],
    sideLabel: 'Conversation design',
    sideCopy:
      'The categories keep discussion warm and navigable instead of becoming one noisy, overwhelming feed.',
    ctas: [
      { label: 'Join Discussions', to: '/circle/discussions' },
      { label: 'Start a Conversation', to: '/circle/new-post' },
    ],
    tone: 'sage',
  },
  {
    number: '05',
    eyebrow: 'Anonymous Support',
    title: 'Speak Freely, Without Judgment',
    description:
      'A protected layer for sensitive questions, harder emotions, and thoughts people may not feel safe sharing publicly.',
    items: ['Ask anonymously', 'Share anonymously', 'Read without pressure'],
    sideLabel: 'Safe by design',
    sideCopy:
      'Anonymity lowers the barrier for honesty, which means more people can ask for help before fear turns into silence.',
    ctas: [
      { label: 'Ask Anonymously', to: '/circle/anonymous' },
      { label: 'View Anonymous Stories', to: '/circle/anonymous-feed' },
    ],
    tone: 'slate',
  },
  {
    number: '06',
    eyebrow: 'Expert Guidance',
    title: 'Guided by Professionals',
    description:
      'Community support stays grounded in trusted medical insight through verified answers and doctor-led conversations.',
    items: ['Doctor Q&A', 'Verified answers', 'Health advice'],
    sideLabel: 'Trusted layer',
    sideCopy:
      'Professional guidance can sit beside peer support, so reassurance feels warm without drifting away from evidence.',
    ctas: [
      { label: 'Ask an Expert', to: '/circle/experts' },
      { label: 'View Expert Answers', to: '/circle/expert-feed' },
    ],
    tone: 'rose',
  },
  {
    number: '07',
    eyebrow: 'Circle Connections',
    title: 'Find Your Support Network',
    description:
      'Give people ways to discover others in similar stages, build small groups, and stay connected beyond a single post.',
    items: ['Connect with similar stages', 'Follow users', 'Build support groups'],
    sideLabel: 'Community growth',
    sideCopy:
      'The best support systems form over time. This layer helps relationships continue after the first interaction.',
    ctas: [
      { label: 'Find Connections', to: '/circle/connect' },
      { label: 'Create a Group', to: '/circle/groups' },
    ],
    tone: 'blue',
  },
  {
    number: '08',
    eyebrow: 'Join The Circle',
    title: 'Be Part of Something Supportive',
    description:
      'Circle is built to connect, support, and empower every journey with spaces that feel human from the first tap.',
    items: ['Connect', 'Support', 'Empower'],
    sideLabel: 'Final invitation',
    sideCopy:
      'This closing block brings the full ecosystem together and invites people into a community that feels active, calm, and trustworthy.',
    ctas: [
      { label: 'Join Now', to: '/circle/join' },
      { label: 'Download App', to: '/app' },
    ],
    tone: 'sunrise',
    fullWidth: true,
  },
];

const CircleCommunityRail = () => {
  const { t } = useLanguage();
  const signals = t('circleRail.signals');
  const sectionsCopy = t('circleRail.sections');

  return (
    <section className="circle-community-rail">
      <motion.div className="circle-community-intro" {...reveal}>
        <div className="circle-community-intro__copy">
          <span>{t('circleRail.introLabel')}</span>
          <h3>{t('circleRail.introTitle')}</h3>
          <p>{t('circleRail.introBody')}</p>
        </div>

        <div className="circle-community-intro__signals" aria-hidden="true">
          {signals.map((signal) => (
            <article key={signal.title}>
              <strong>{signal.title}</strong>
              <span>{signal.text}</span>
            </article>
          ))}
        </div>
      </motion.div>

      <div className="circle-community-grid">
        {sections.map((section, index) => (
          // Layout, links, and ordering remain stable while the presentation copy is localized.
          <motion.article
            key={section.number}
            className={`circle-community-card circle-community-card--${section.tone}${
              section.fullWidth ? ' is-full-width' : ''
            }`}
            {...reveal}
            transition={{ ...reveal.transition, delay: Math.min(index * 0.04, 0.18) }}
          >
            <div className="circle-community-card__glow circle-community-card__glow--one" />
            <div className="circle-community-card__glow circle-community-card__glow--two" />

            <div className="circle-community-card__head">
              <span className="circle-community-card__number">{section.number}</span>
              <span className="circle-community-card__eyebrow">{sectionsCopy[index].eyebrow}</span>
            </div>

            <h4>{sectionsCopy[index].title}</h4>
            <p className="circle-community-card__description">{sectionsCopy[index].description}</p>

            <div className="circle-community-card__body">
              <div className="circle-community-card__block">
                <span>{t('circleRail.inside')}</span>
                <ul>
                  {sectionsCopy[index].items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="circle-community-card__block circle-community-card__block--soft">
                <span>{sectionsCopy[index].sideLabel}</span>
                <p>{sectionsCopy[index].sideCopy}</p>
              </div>
            </div>

            <div className="circle-community-card__actions">
              {section.ctas.map((cta, ctaIndex) => (
                <Link
                  key={cta.to}
                  to={cta.to}
                  className={`circle-community-card__cta${ctaIndex === 0 ? ' is-primary' : ''}`}
                >
                  {sectionsCopy[index].ctas[ctaIndex]}
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default CircleCommunityRail;
