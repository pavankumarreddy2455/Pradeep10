import React from 'react';
import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/project3.jpeg';
import '../styles/Projects.css';

function Project(){
    const projects = [
        {
            title: "Pradeep Pride Residency",
            location: "Beeramguda, Hyderabad",
            type: "Luxury Apartments",
            status: " Construction Completed",
            completion: "100%",
            image: project1,
            description: "Experience luxury and serenity at Pradeep Pride Residency, where premium living meets unparalleled comfort. Strategically located in the vibrant heart of the city, this exclusive development features thoughtfully designed residences with breathtaking panoramic views.",
            features: [
                "Infinity pool and fitness center",
                "Beautifully landscaped gardens",
                "24/7 security and surveillance",
                "Underground parking",
                "Clubhouse and recreational facilities"
            ],
            highlights: {
                units: "15 Apartments",
                price: "₹85 Lakhs Onwards"
            }
        },
        {
            title: "Pradeep Pride",
            location: "Kondapur, Hyderabad",
            type: "Premium Villas",
            status: "Ready to Move",
            completion: "100%",
            image: project2,
            description: "Discover exclusive living at Pradeep Pride, Kondapur - where luxury meets tranquility in one of Hyderabad's most sought-after locations. These premium villas offer spacious living areas with modern architecture and world-class amenities.",
            features: [
                "Private garden and terrace",
                "Modern kitchen with premium fittings",
                "24/7 security with CCTV surveillance",
                "Clubhouse and swimming pool",
                "Children's play area and park",
                "Power backup and water supply"
            ],
            highlights: {
                area: "1.5 Acres",
                units: "12 Exclusive Villas",
                price: "₹2.5 Crores Onwards"
            }
        },
        {
            title: "Advika LakshmiHomes",
            location: "Mallempet, Hyderabad", 
            type: "Smart Homes",
            status: "Ready to Move",
            completion: "100%",
            image: project2,
            description: "An unmatched investment in lifestyle, comfort, and sustainability. Advika Lakshmi Homes combines cutting-edge smart home technology with eco-conscious design, offering residents a sophisticated living experience with modern automation at their fingertips.",
            features: [
                "Smart home automation",
                "Green roofing and solar integration",
                "Rainwater harvesting systems",
                "Electric vehicle charging stations",
                "Energy-efficient appliances"
            ],
            highlights: {
               
                units: "15 Apartments", 
                price: "₹65 Lakhs Onwards"
            }
        },
        {
            title: "Riveria Residency",
            location: "Ameenpur, Hyderabad",
            type: "Premium Residences",
            status: "project Completed",
            completion: "100",
            image: project3,
            description: "Welcome to The Grand Residency, where luxury meets convenience in the heart of the city. This prestigious development features spacious residences with modern designs, high-end finishes, and breathtaking Riveria Residency.",
            features: [
                "Resort-style amenities",
                "State-of-the-art fitness center",
                "Serene spa facilities",
                "Community events and activities",
                "Children's play area"
            ],
            highlights: {
                area: "3.2 Acres",
                units: "150 Apartments",
                price: "₹95 Lakhs Onwards"
            }
        },
        {
            title: "Pradeep Residency",
            location: "Suchitra, Hyderabad",
            type: "Family Homes",
            status: "Under Construction", 
            completion: "100%",
            image: project1,
            description: "Welcome to The Grand Residency, where luxury meets convenience in the heart of the city. This prestigious development features spacious residences with modern designs, high-end finishes, and breathtaking Suchitra Residency.",
            features: [
                "Resort-style amenities",
                "State-of-the-art fitness center",
                "Serene spa facilities",
                "Community events and activities",
                "Children's play area"
            ],
            highlights: {
                area: "2.0 Acres",
                units: "100 Apartments",
                price: "₹55 Lakhs Onwards"
            }
        }
    ];

    return(
        <div className="projects-section">
            <div className="projects-header">
                <h1 className="section-title">Our Projects</h1>
                <div className="section-divider"></div>
                <p className="section-subtitle">Discover our premium residential developments that redefine luxury living in Hyderabad</p>
                
                <div className="projects-stats">
                    <div className="stat-item">
                        <div className="stat-number">5</div>
                        <div className="stat-label">Ongoing Projects</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Customer Satisfaction</div>
                    </div>
                </div>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-badge">
                                <span className="badge-status">{project.status}</span>
                                <span className="badge-type">{project.type}</span>
                            </div>
                            <div className="project-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: `${project.completion}%`}}></div>
                                </div>
                                <span className="progress-text">{project.completion} Complete</span>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-location">
                                    <span className="location-icon">📍</span>
                                    <span>{project.location}</span>
                                </div>
                            </div>
                            <p className="project-description">{project.description}</p>
                            
                            {/* Amenities */}
                            {project.amenities && (
                                <div className="project-amenities">
                                    <h4>Amenities</h4>
                                    <div className="amenities-grid">
                                        {project.amenities.map((amenity, idx) => (
                                            <div key={idx} className="amenity-item">
                                                <span className="amenity-icon">{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            {/* Features */}
                            <div className="project-features">
                                <h4>Key Features</h4>
                                <div className="features-list">
                                    {project.features.slice(0, 3).map((feature, idx) => (
                                        <div key={idx} className="feature-item">
                                            <span className="feature-icon">✓</span>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                    {project.features.length > 3 && (
                                        <div className="feature-more">
                                            <span>+{project.features.length - 3} more features</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;
