import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Invest.css';
import Navbar from '../components/layout/Navbar';
import HeroInvest from '../components/sections/HeroInvest';
import GlobalOpportunity from '../components/sections/GlobalOpportunity';
import TheGap from '../components/sections/TheGap';
import TheSolution from '../components/sections/TheSolution';
import ProductTechnology from '../components/sections/ProductTechnology';
import MarketPotential from '../components/sections/MarketPotential';
import BusinessModel from '../components/sections/BusinessModel';
gsap.registerPlugin(ScrollTrigger);

const Invest = () => {
    useEffect(() => {
        // FIX: Updated the GSAP targets to match your new "wrapper2" class name
        gsap.fromTo(".global-opportunity-wrapper2", 
            { 
              y: "20vh", 
              clipPath: "inset(0% 0% 0% 0%)" 
            }, 
            { 
                y: 0, 
                ease: "none",
                scrollTrigger: {
                    trigger: ".global-opportunity-wrapper2", // Updated here too
                    start: "top bottom", 
                    end: "top top",      
                    scrub: true,         
                }
            }
        );
    }, []);

    return (
        <div className="invest-page-container2">
            <Navbar />
            
            <section className="hero-parallax-container2">
                <HeroInvest />
            </section>

            {/* GSAP is now correctly targeting this div */}
            <div className="global-opportunity-wrapper2">
                <GlobalOpportunity />
                
            </div>
            
            <TheGap />
            <TheSolution />
            <ProductTechnology />
            <MarketPotential />
            <BusinessModel />
        </div>
    );
}

export default Invest;