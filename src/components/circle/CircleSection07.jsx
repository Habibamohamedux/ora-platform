import React from 'react';
import CircleSection from './CircleSection';
import circleImageThree from '../../assests/Imgs/circle/circle_07.png';

const section = {
  number: '07',
  tone: 'blue',
  kicker: 'Circle Connections',
  title: 'Find Your Support Network',
  description:
    'Connect with others in similar stages of motherhood. Follow users, build support groups, and grow your personal network of care and understanding.',
  image: circleImageThree,
  tags: ['Connect', 'Follow Users', 'Build Groups'],
  noteTitle: 'Community Bonds',
  noteBody: 'Your personal circle of support.',
  ctas: [
    { text: 'Find Connections →', link: '/circle/connect', primary: true },
    { text: 'Create a Group', link: '/circle/groups', primary: false },
  ],
};

const CircleSection07 = () => <CircleSection section={section} index={6} />;

export default CircleSection07;
