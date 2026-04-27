import React from 'react';
import CircleSection from './CircleSection';
import circleImageFour from '../../assests/Imgs/circle/circle_04.png';

const section = {
  number: '04',
  tone: 'slate',
  kicker: 'Discussion Spaces',
  title: 'Open Conversations',
  description:
    'Join our community discussions categorized by Health Questions, Emotional Support, Daily Life, and Advice & Tips. Find the answers and support you need.',
  image: circleImageFour,
  tags: ['Health Questions', 'Emotional Support', 'Daily Life', 'Advice & Tips'],
  noteTitle: 'Open Dialogue',
  noteBody: 'A safe space to ask, share, and connect on every topic.',
  ctas: [
    { text: 'Join Discussions →', link: '/circle/discussions', primary: true },
    { text: 'Start a Conversation', link: '/circle/new-post', primary: false },
  ],
};

const CircleSection04 = () => <CircleSection section={section} index={3} />;

export default CircleSection04;
