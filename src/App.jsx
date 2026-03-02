import React from 'react';
import Contact from './components/Contact';
import About from './components/About';
import Projects from "./components/Projects";
import Specifications from './components/Specifications';
import WhyChoose from './components/WhyChoose';
import Footer from './components/Footer';
import ScrollNav from './components/ScrollNav';
import { Home as HomePage } from "./components/HomePage/Home";
import './App.css';
import './styles/Home.css';
import './styles/Contact.css';
import './styles/Projects.css';
import './styles/Footer.css';
import './styles/Specifications.css';
import './styles/WhyChoose.css';
import './styles/ScrollNav.css';
import './styles/ScrollContainer.css';

function App() {
    const sections = [
        { id: 'home', name: 'Home' },
        { id: 'projects', name: 'Projects' },
        { id: 'whychoose', name: 'Why Choose' },
        { id: 'about', name: 'About' },
        { id: 'specifications', name: 'Specifications' },
        { id: 'contact', name: 'Contact' }
    ];

    return (
        <div className="scroll-app">
            <ScrollNav sections={sections} />
            
            <main className="scroll-container">
                {/* Home Section */}
                <section id="home" className="scroll-section home-section">
                    <HomePage />
                </section>

                {/* Projects Section */}
                <section id="projects" className="scroll-section section-projects">
                    <Projects />
                </section>

                {/* Why Choose Section */}
                <section id="whychoose" className="scroll-section section-whychoose">
                    <WhyChoose />
                </section>

                {/* About Section */}
                <section id="about" className="scroll-section section-about">
                    <div className="section-content">
                        <About />
                    </div>
                </section>

                {/* Specifications Section */}
                <section id="specifications" className="scroll-section section-specifications">
                    <Specifications />
                </section>

                {/* Contact Section */}
                <section id="contact" className="scroll-section section-contact">
                    <Contact />
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
