import React from 'react';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact-section">
            <div className="contact-header">
                <h1 className="section-title">Contact Our Team</h1>
                <div className="section-divider"></div>
                <p className="section-subtitle">Connect with our leadership for premium real estate solutions</p>
            </div>

            <div className="contact-main-content">
                <div className="team-showcase">
                    <div className="showcase-header">
                        <h2>Leadership Team</h2>
                        <p>Meet the visionaries behind Pradeep Groups' success</p>
                    </div>
                    
                    <div className="directors-grid">
                        <div className="director-card featured">
                            {/* <div className="director-avatar">👔</div> */}
                            <div className="director-info">
                                <h4>Pradeep Reddy</h4>
                                <p>Founder & Managing Director</p>
                                <div className="director-contact">
                                    <a href="tel:+919133102480">+91-9133102480</a>
                                </div>
                            </div>
                        </div>
                        <div className="director-card">
                            {/* <div className="director-avatar"></div> */}
                            <div className="director-info">
                                <h4>Jagan Mohan Reddy</h4>
                                <p>Co-Founder & Director</p>
                                <div className="director-contact">
                                    <a href="tel:+918500457382">+91-8500457382</a>
                                </div>
                            </div>
                        </div>
                        <div className="director-card">
                            <div className="director-info">
                                <h4>Vinay Reddy</h4>
                                <p>Director - Operations</p>
                                <div className="director-contact">
                                    <a href="tel:+9188886006444">+91-88886006444</a>
                                </div>
                            </div>
                        </div>
                        <div className="director-card">
                            {/* <div className="director-avatar"></div> */}
                            <div className="director-info">
                                <h4>Narayana</h4>
                                <p>Director</p>
                                <div className="director-contact">
                                    <a href="tel:+919985777777">+91-9985777777</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="contact-cta">
                    <div className="cta-content">
                        <h2>Ready to Build Your Dream?</h2>
                        <p>Join our family of happy homeowners and experience the Pradeep Groups difference</p>
                        <div className="cta-buttons">
                            <a href="tel:+919133102480" className="cta-primary">
                                <span className="cta-icon">📞</span>
                                Call Now
                            </a>
                            <a href="mailto:info@pradeepgroups.com" className="cta-secondary">
                               
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
