import '../styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-section">
                        <h3 className="footer-section-title">Pradeep Groups</h3>
                        <p className="footer-description">
                            Building dreams into homes. Premium real estate solutions combined with excellence in design and craftsmanship.
                        </p>
                        <div className="footer-contact-info">
                            <p>
                                <span className="label">Contact Us</span>
                            </p>
                            <div className="contact-numbers">
                                <a href="tel:+919133102480">Pradeep Reddy: +91-9133102480</a><br/>
                                <a href="tel:+918500457382">Jagan Mohan: +91-8500457382</a><br/>
                                <a href="tel:+9188886006444">Vinay Reddy: +91-88886006444</a><br/>
                                <a href="tel:+919985777777">Narayana: +91-9985777777</a>
                            </div>
                            <p className="email-section">
                                <span className="label">Email</span><br/>
                                <a href="mailto:info@pradeepgroups.com">info@pradeepgroups.com</a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3 className="footer-section-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#whychoose">Why Choose</a></li>
                            <li><a href="#specifications">Specifications</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    {/* <div className="footer-section"> */}
                        {/* <h3 className="footer-section-title">Services</h3>
                        <ul className="footer-links">
                            <li><a href="#projects">Residential Properties</a></li>
                            <li><a href="#projects">Commercial Spaces</a></li>
                            <li><a href="#contact">Custom Design</a></li>
                            <li><a href="#contact">Consultation</a></li>
                        </ul>
                    </div> */}

                    {/* Legal & Social */}
                    
                </div>

                <div className="footer-divider"></div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        &copy; {currentYear} Pradeep Groups. All rights reserved.
                    </p>
                    <p className="footer-tagline">
                        Crafting homes, creating memories.
                    </p>
                    <p className="footer-designed">
                        Designed by Mohan Reddy
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
