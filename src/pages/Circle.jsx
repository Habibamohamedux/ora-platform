import React from 'react';
import Navbar from '../components/layout/Navbar';
import Seo from '../components/seo/Seo';
import CircleHero from '../components/circle/circle-hero';
import CircleFind from '../components/circle/circle-find';
import CircleConversations from '../components/circle/circle-conversations';
import CircleCheckin from '../components/circle/circle-checkin';
import CircleSection01 from '../components/circle/CircleSection01';
import CircleSection02 from '../components/circle/CircleSection02';
import CircleSection03 from '../components/circle/CircleSection03';
import CircleSection04 from '../components/circle/CircleSection04';
import CircleSection05 from '../components/circle/CircleSection05';
import CircleSection06 from '../components/circle/CircleSection06';
import CircleSection07 from '../components/circle/CircleSection07';
import CircleSection08 from '../components/circle/CircleSection08';
import CircleCommunitySection2 from '../components/circle/circle-community-section2';
import CircleSharedSection3 from '../components/circle/circle-shared-section3';
import CircleDiscussionsSection4 from '../components/circle/circle-discussions-section4';
import CircleAnonymousSection5 from '../components/circle/circle-anonymous-section5';
import CircleExpertSection6 from '../components/circle/circle-expert-section6';
import CircleConnectionsSection7 from '../components/circle/circle-connections-section7';
import CircleFinalCtaSection8 from '../components/circle/circle-final-cta-section8';
import CircleCommunityRail from '../components/circle/CircleCommunityRail';
import './Circle.css';

const Circle = () => {
  return (
    <main className="circle-page">
      <Seo
        title="ORA Circle | Community Support for Pregnancy and Postpartum"
        description="Join ORA Circle to connect with mothers, partners, and verified doctors for trusted community support during pregnancy, postpartum, and maternal wellbeing."
        keywords={[
          'pregnancy community',
          'postpartum support',
          'maternal wellbeing community',
          'doctor verified support',
        ]}
        schemaType="CollectionPage"
      />
      <Navbar />
      <CircleHero />
      <CircleFind />
      <CircleConversations />
      <CircleCheckin />

      <section className="circle-stack">
        <CircleSection01 />
        <CircleSection02 />
        <CircleCommunitySection2 />
        <CircleSection03 />
        <CircleSharedSection3 />
        <CircleSection04 />
        <CircleDiscussionsSection4 />
        <CircleSection05 />
        <CircleAnonymousSection5 />
        <CircleSection06 />
        <CircleExpertSection6 />
        <CircleSection07 />
        <CircleConnectionsSection7 />
        <CircleSection08 />
        <CircleFinalCtaSection8 />
      </section>

      <CircleCommunityRail />
    </main>
  );
};

export default Circle;
