import React from 'react';
import CircleSection from './CircleSection';
import circleImageThree from '../../assests/Imgs/circle/circle_03.png';

const section = {
  number: '03',
  tone: 'blue',
  kicker: 'Shared Experiences',
  title: 'Moments That Connect Us',
  description:
    'Explore grouped experiences shared by the community. Find comfort in knowing you are not alone in your symptoms, routines, and emotional ups and downs.',
  image: circleImageThree,
  tags: ['First Symptoms', 'First Scan', 'Daily Routines'],
  noteTitle: 'Find Connection',
  noteBody: 'Connect with mothers going through the exact same phase.',
  ctas: [
    { text: 'Explore Experiences →', link: '/circle/experiences', primary: true },
  ],
};

const CircleSection03 = () => <CircleSection section={section} index={2} />;

export default CircleSection03;
