import React from 'react';
import CircleSection from './CircleSection';
import circleImageTwo from '../../assests/Imgs/circle/circle_02.png';

const section = {
  number: '02',
  tone: 'green',
  kicker: 'Community Stories',
  title: 'Real Stories from Real Journeys',
  description:
    'Read and share user-generated stories about the realities of motherhood. From the highest highs to the toughest challenges, every story matters.',
  image: circleImageTwo,
  tags: ['Pregnancy Milestones', 'Challenges', 'Emotional Moments'],
  noteTitle: 'Your Voice',
  noteBody: 'Share your journey to inspire and support others.',
  ctas: [
    { text: 'Read Stories →', link: '/circle/stories', primary: true },
    { text: 'Share Your Story', link: '/circle/share', primary: false },
  ],
};

const CircleSection02 = () => <CircleSection section={section} index={1} />;

export default CircleSection02;
