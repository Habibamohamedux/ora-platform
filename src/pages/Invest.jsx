import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Invest.css';

// Component Imports
import Navbar from '../components/layout/Navbar';
import HeroInvest from '../components/sections/HeroInvest';
import GlobalOpportunity from '../components/sections/GlobalOpportunity';
import TheGap from '../components/sections/TheGap';
import TheSolution from '../components/sections/TheSolution';
import ProductTechnology from '../components/sections/ProductTechnology';
import MarketPotential from '../components/sections/MarketPotential';
import BusinessModel from '../components/sections/BusinessModel';
import JointheFuture from '../components/sections/JointheFuture';

gsap.registerPlugin(ScrollTrigger);

const Invest = () => {
    const canvasRef = useRef(null);
    const sheetRef = useRef(null);
    const containerRef = useRef(null);

    // 1. Smooth Sliding Sheet Logic
    useEffect(() => {
        gsap.to(sheetRef.current, {
            y: "-100vh",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=100%",
                scrub: true,
                pin: true,
                anticipatePin: 1,
            }
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    // 2. Global Particle Background Logic (Updated for Glass Effect & Size Animation)
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrame;
        
        const resize = () => { 
            canvas.width = window.innerWidth; 
            canvas.height = sheetRef.current.scrollHeight; 
        };
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                
                // Bigger and more varied sizes (between 10px and 35px)
                this.baseSize = Math.random() * 25 + 10;
                this.size = this.baseSize;
                
                // Slower, floaty movement
                this.speedX = Math.random() * 0.3 - 0.15;
                this.speedY = Math.random() * 0.3 - 0.15;
                
                // Higher visibility opacity (0.4 to 0.9)
                this.opacity = Math.random() * 0.5 + 0.4;
                
                // Animation variables for the breathing/pulsing effect
                this.angle = Math.random() * Math.PI * 2;
                this.pulseSpeed = Math.random() * 0.02 + 0.01;
            }
            
            update() {
                this.x += this.speedX; 
                this.y += this.speedY;
                
                // Animate the size to make them grow and shrink smoothly
                this.angle += this.pulseSpeed;
                // Fluctuates size by up to 30% of its base size
                this.size = this.baseSize + Math.sin(this.angle) * (this.baseSize * 0.3);

                // Screen wrapping with buffer based on new larger sizes
                if (this.x > canvas.width + this.size) this.x = -this.size;
                if (this.x < -this.size) this.x = canvas.width + this.size;
                if (this.y > canvas.height + this.size) this.y = -this.size;
                if (this.y < -this.size) this.y = canvas.height + this.size;
            }
            
            draw() {
                if (this.size <= 0) return; // Prevent negative radius errors
                
                ctx.beginPath(); 
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); 
                
                // Create Radial Gradient for the "Glass Orb" look
                const gradient = ctx.createRadialGradient(
                    this.x - this.size * 0.3, this.y - this.size * 0.3, this.size * 0.1, // Offset inner circle for lighting
                    this.x, this.y, this.size // Outer circle
                );
                
                // Inner highlight (white reflection)
                gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.8})`);
                // Mid pink tint
                gradient.addColorStop(0.4, `rgba(201, 64, 96, ${this.opacity * 0.5})`);
                // Faded pink outer edge
                gradient.addColorStop(1, `rgba(201, 64, 96, ${this.opacity * 0.05})`);

                ctx.fillStyle = gradient;
                ctx.fill();
                
                // Add a subtle white rim to sell the glass aesthetic
                ctx.lineWidth = 1;
                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.6})`;
                ctx.stroke();
            }
        }
        
        const init = () => { 
            particles = [];
            // Reduced count to 60 to prevent clutter, since particles are now much larger
            for (let i = 0; i < 60; i++) particles.push(new Particle()); 
        };
        
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            animationFrame = requestAnimationFrame(animate);
        };
        
        window.addEventListener('resize', resize);
        resize(); 
        init(); 
        animate();
        
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div className="invest-page-container2" ref={containerRef}>
            <Navbar />
            
            {/* BACKGROUND LAYER */}
            <section className="hero-parallax-container2">
                <HeroInvest />
            </section>

            {/* SLIDING SHEET LAYER */}
            <div className="global-content-wrapper" ref={sheetRef}>
                
                {/* Background Styles inside the sheet */}
                <div className="ora-animated-bg"></div>
                <canvas ref={canvasRef} className="global-particles-canvas" />

                {/* Content */}
                <div className="relative-content-z">
                    <GlobalOpportunity />
                    <TheGap />
                    <TheSolution />
                    <ProductTechnology />
                    <MarketPotential />
                    <BusinessModel />
                    <JointheFuture />
                </div>
            </div>
        </div>
    );
}

export default Invest;