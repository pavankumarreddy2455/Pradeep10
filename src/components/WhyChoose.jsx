import React, { useState, useEffect } from 'react';
import gif from '../assets/build.gif';
import '../styles/WhyChoose.css';

function WhyChoose() {
    const [activeFeature, setActiveFeature] = useState(0);
    const [isAnimated, setIsAnimated] = useState(false);

    const features = [
        {
            title: "Premium Construction",
            description: "We use only the highest quality materials including M25 grade concrete and IS456 approved steel to ensure your home stands the test of time.",
            icon: "🏗️"
        },
        {
            title: "Luxury Amenities",
            description: "From infinity pools to state-of-the-art fitness centers, our properties offer world-class amenities that elevate your lifestyle.",
            icon: "🏊"
        },
        {
            title: "Smart Living",
            description: "Modern homes equipped with the latest technology including smart home automation, energy-efficient systems, and high-speed connectivity.",
            icon: "🏠"
        },
        {
            title: "Prime Locations",
            description: "Strategically located in Hyderabad's most sought-after areas with excellent connectivity to schools, hospitals, and business centers.",
            icon: "📍"
        },
        {
            title: "Trusted Builder",
            description: "With over 10 years of experience and 50+ completed projects, we've built a reputation for delivering excellence on time.",
            icon: "⭐"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setIsAnimated(true);
    }, []);

    return (
        <div className="why-choose-section">
            <div className="why-choose-header">
                <h1 className="section-title">Why Choose Pradeep Groups?</h1>
                <div className="section-divider"></div>
                <p className="section-subtitle">Discover what makes us the preferred choice for luxury living in Hyderabad</p>
            </div>

            <div className="features-content">
                <div className="feature-visual">
                    <div className="gif-container">
                        <img src={gif} alt="Construction Animation" className="feature-gif" />
                        <div className="gif-overlay">
                            <div className="pulse-dot"></div>
                        </div>
                    </div>
                    
                    <div className="feature-indicators">
                        {features.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === activeFeature ? 'active' : ''}`}
                                onClick={() => setActiveFeature(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="feature-info">
                    <div className={`feature-card ${isAnimated ? 'animate' : ''}`}>
                        <div className="feature-icon">
                            {features[activeFeature].icon}
                        </div>
                        <h3 className="feature-title">
                            {features[activeFeature].title}
                        </h3>
                        <p className="feature-description">
                            {features[activeFeature].description}
                        </p>
                    </div>

                    <div className="feature-highlights">
                        <div className="highlight-item">
                            <span className="highlight-icon">✓</span>
                            <span>Premium Quality Materials</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">✓</span>
                            <span>On-Time Delivery</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">✓</span>
                            <span>Transparent Pricing</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">✓</span>
                            <span>Excellent Customer Support</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features-quote">
                <blockquote>
                    "A house is made of walls and beams; a home is built with love and dreams."
                </blockquote>
                <cite>- Pradeep Groups</cite>
            </div>
        </div>
    );
}

export default WhyChoose;
