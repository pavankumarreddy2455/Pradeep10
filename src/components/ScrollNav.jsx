import React, { useState, useEffect } from 'react';
import '../styles/ScrollNav.css';

const ScrollNav = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            
            sections.forEach((section, index) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (index) => {
        const section = document.getElementById(sections[index].id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Scroll Indicator Dots */}
            <div className="scroll-dots">
                {sections.map((section, index) => (
                    <button
                        key={index}
                        className={`scroll-dot ${activeSection === index ? 'active' : ''}`}
                        onClick={() => scrollToSection(index)}
                        title={section.name}
                    >
                        <span className="scroll-dot-label">{section.name}</span>
                    </button>
                ))}
            </div>
        </>
    );
};

export default ScrollNav;
