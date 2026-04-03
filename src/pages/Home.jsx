import React from "react";
import "./Home.css";

import Navbar from '../components/layout/Navbar';
import HeroMascot from '../components/sections/HeroMascot';
const Home = () => {
    return (
        <>

            <Navbar />
            <HeroMascot />
        </>
      );
}

export default Home;