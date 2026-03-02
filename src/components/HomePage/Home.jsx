import React from 'react';
import logo from '../../assets/logo.png';
import homeBg from '../../assets/home.webp';

export function Home() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero-section">
            <div className="hero-background">
                <div className="hero-overlay"></div>
                <img src={homeBg} alt="Luxury Property" className="hero-image" />
            </div>
            
            <div className="hero-content">
                <div className="hero-logo">
                    <img src={logo} alt="Pradeep Groups Logo" className="hero-logo-img" />
                </div>
                
                <div className="hero-text">
                    <h1 className="hero-title">
                        PRADEEP <span>GROUPS</span>
                    </h1>
                    <p className="hero-subtitle">
                        Building Dreams, Creating Homes
                    </p>
                    <p className="hero-description">
                        Experience luxury living with our premium real estate solutions. 
                        We transform your vision into reality with exceptional craftsmanship 
                        and unparalleled attention to detail.
                    </p>
                </div>
                
                {/* <div className="hero-stats">
                    <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Projects Completed</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">1000+</div>
                        <div className="stat-label">Happy Families</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">10+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                </div> */}
                
                <div className="hero-actions">
                    <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                        Explore Projects
                    </button>
                    <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                        Contact Us
                    </button>
                </div>
            </div>
            
            <div className="hero-scroll">
                <div className="scroll-indicator">
                    <span>Scroll Down</span>
                    <div className="scroll-arrow"></div>
                </div>
            </div>
        </div>
    );
}
