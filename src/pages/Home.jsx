import React from "react";
import "./Home.css";
import Navbar from '../components/layout/Navbar';
import Seo from '../components/seo/Seo';
import HeroMascot from '../components/sections/HeroMascot';

const Home = () => {
    return (
        <main>
            <Seo
              title="ORA | AI Pregnancy & Fertility Companion"
              description="ORA is an AI-powered maternal health platform offering pregnancy guidance, fertility support, connected care, and personalized clinical intelligence."
              keywords={[
                'AI pregnancy companion',
                'fertility companion',
                'maternal care platform',
                'pregnancy support app',
              ]}
              includeOrganization
              includeWebSite
            />
            <Navbar />
            <HeroMascot />
        </main>
      );
}

export default Home;
