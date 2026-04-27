import React from 'react';
import CircleSection from './CircleSection';
import circleImageOne from '../../assests/Imgs/circle/circle_01.png';

const section = {
  number: '06',
  tone: 'green',
  kicker: 'Expert Guidance',
  title: 'Guided by Professionals',
  description:
    'Get reliable answers and health advice directly from verified doctors. Clear, compassionate, and trustworthy medical insight when you need it.',
  image: circleImageOne,
  tags: ['Doctor Q&A', 'Verified Answers', 'Health Advice'],
  noteTitle: 'Trusted Care',
  noteBody: 'Real answers from medical professionals.',
  ctas: [
    { text: 'Ask an Expert →', link: '/circle/experts', primary: true },
    { text: 'View Expert Answers', link: '/circle/expert-feed', primary: false },
  ],
};

const CircleSection06 = () => <CircleSection section={section} index={5} />;

export default CircleSection06;
