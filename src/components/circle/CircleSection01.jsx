import React from 'react';
import CircleSection from './CircleSection';
import circleImageOne from '../../assests/Imgs/circle/circle_01.png';

const section = {
  number: '01',
  tone: 'pink',
  kicker: 'For Mothers',
  title: 'A social space that feels soft enough to enter.',
  description:
    'ORA Circle gives mothers a place to show up without performing. Stories, questions, fears, small wins, and quiet moments can all live in one human rhythm.',
  image: circleImageOne,
  tags: ['Pregnancy', 'Postpartum', 'Fertility'],
  noteTitle: 'Soft entry',
  noteBody: 'Stories before advice. Questions without pressure.',
};

const CircleSection01 = () => <CircleSection section={section} index={0} />;

export default CircleSection01;
