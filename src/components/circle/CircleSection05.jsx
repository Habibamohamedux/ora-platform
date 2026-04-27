import React from 'react';
import CircleSection from './CircleSection';
import circleImageFive from '../../assests/Imgs/circle/circle_05.png';

const section = {
  number: '05',
  tone: 'pink',
  kicker: 'Anonymous Support',
  title: 'Speak Freely, Without Judgment',
  description:
    'Sometimes it is easier to open up when no one knows your name. Safely share your deepest worries, ask sensitive questions, and find support anonymously.',
  image: circleImageFive,
  tags: ['Zero Judgment', 'Safe Space', 'Total Privacy'],
  noteTitle: 'No Pressure',
  noteBody: 'Your identity stays hidden while your voice is heard.',
  ctas: [
    { text: 'Ask Anonymously →', link: '/circle/anonymous', primary: true },
    { text: 'View Anonymous Stories', link: '/circle/anonymous-feed', primary: false },
  ],
};

const CircleSection05 = () => <CircleSection section={section} index={4} />;

export default CircleSection05;
