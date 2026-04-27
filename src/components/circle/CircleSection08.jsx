import React from 'react';
import CircleSection from './CircleSection';
import circleImageTwo from '../../assests/Imgs/circle/circle_08.png';

const section = {
  number: '08',
  tone: 'slate',
  kicker: 'Join The Circle',
  title: 'Be Part of Something Supportive',
  description:
    'Circle is built to connect, support, and empower every journey. From your first questions to your daily routines, you belong here.',
  image: circleImageTwo,
  tags: ['Connect', 'Support', 'Empower'],
  noteTitle: 'You belong',
  noteBody: 'A connected social system for every stage of motherhood.',
  ctas: [
    { text: 'Join Now →', link: '/circle/join', primary: true },
    { text: 'Download App', link: '/app', primary: false },
  ],
};

const CircleSection08 = () => <CircleSection section={section} index={7} />;

export default CircleSection08;
