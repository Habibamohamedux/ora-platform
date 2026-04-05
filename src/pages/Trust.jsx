import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Trust.css';
import Navbar from '../components/layout/Navbar';


const Trust = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;

        gsap.fromTo(section, 
            { opacity: 0, y: 50 }, 
            {
                opacity: 1, 
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="trust-page">
            <Navbar />
            <section className="trust-section" ref={sectionRef}>
                <h1 className="trust-title">Trust & Transparency at ORA</h1>
                <p className="trust-description">
                    At ORA, we understand that trust is the foundation of our relationship with you. We are committed to being transparent about how we collect, use, and protect your data. Our privacy policy outlines our practices in detail, ensuring that you have full control over your information. We adhere to the highest ethical      standards in all our research and operations, and we are dedicated to maintaining the confidentiality and security of your data. Your trust is our priority, and we strive to earn it every day through our actions and policies.
                </p>
                <div className="trust-points">
                    <div className="trust-point">
                        <h2>Data Protection</h2>
                        <p>We implement robust security measures to safeguard your data from unauthorized access and breaches.</p>
                    </div>
                    <div className="trust-point">
                        <h2>Ethical Standards</h2>
                        <p>Our research and operations are guided by strict ethical principles to ensure the well-being and rights of all participants.</p>
                    </div>
                    <div className="trust-point">
                        <h2>Transparency</h2>
                        <p>We are committed to being open about our data practices and policies, providing you with clear information about how your data is used.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Trust;


