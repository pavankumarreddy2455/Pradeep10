import about from '../assets/about.jpeg';
import about1 from '../assets/images12.png';
import about2 from '../assets/image13.png';
import about3 from '../assets/images14.png';

function About() {
    return (
        <div className="aboutContainer">

            {/* Hero Section */}
            <div className="aboutHeroBanner">
                <div className="heroContent">
                    <h1 className="heroTitle">About Pradeep Builders & Developers</h1>
                    <p className="heroSubtitle">
                        Modern Living, Built Just For You
                    </p>
                </div>
            </div>

            {/* Company Overview */}
            <div className="companyOverview">
                <h2 className="sectionTitle">Who We Are</h2>
                <p className="overviewDescription">
                    Pradeep Builders & Developers is a trusted name in premium residential construction, 
                    committed to delivering quality homes that blend luxury, durability, and modern living. 
                    With a strong foundation built on engineering excellence and customer trust, we focus on 
                    constructing earthquake-resistant RCC framed structures using high-grade materials and 
                    industry-approved standards. Our projects reflect superior craftsmanship — from reinforced 
                    cement concrete structures and premium steel to teak wood doors, UPVC windows, vitrified 
                    flooring, branded electrical fittings, and high-quality plumbing systems. Every detail is 
                    carefully planned to ensure long-lasting strength, comfort, and aesthetic appeal.
                </p>

                <p className="overviewDescription">
                    Located at Sai Rajeswari Phase-II, Ameenpur, our flagship project “Pradeep Jubilant” 
                    offers thoughtfully designed 2BHK premium apartments with spacious layouts and 
                    modern amenities. We provide features such as 3-phase power supply, Mahindra Powerol 
                    generator backup, six-passenger lift, CCTV surveillance, overhead water tanks with 
                    bore and Manjeera water supply separation, modular kitchens with granite platforms, 
                    anti-skid bathroom flooring, and premium Asian Paint finishes. Our focus is not just 
                    on construction — but on building a secure, comfortable, and vibrant community.
                </p>

                <p className="overviewDescription">
                    At Pradeep Builders & Developers, we understand that a home is more than just walls 
                    and rooms — it is a reflection of your aspirations. Our mission is to combine 
                    innovation, sustainability, and practical design to create homes that enhance 
                    lifestyles. From premium materials to professional execution, from modern amenities 
                    to customer-first service, we ensure that every project delivers unmatched value 
                    and satisfaction. Your dream home truly awaits with us.
                </p>
            </div>

            {/* Vision Section */}
            <div className="missionVisionSection">
                <h2 className="sectionTitle">Our Vision</h2>
                <p className="overviewDescription">
                    To redefine urban living by delivering high-quality, sustainable, and 
                    innovation-driven residential projects that stand as benchmarks of 
                    excellence in construction and customer satisfaction.
                </p>

                <h2 className="sectionTitle">Our Mission</h2>
                <p className="overviewDescription">
                    To build structurally strong, aesthetically pleasing, and thoughtfully 
                    designed homes using premium materials, modern technologies, and 
                    transparent practices while maintaining long-term relationships with 
                    our customers.
                </p>
            </div>

            {/* Projects Section */}
            <div className="projectsSection">
                <h2 className="sectionTitle">Our Projects</h2>
                <p className="overviewDescription">
                    Our portfolio includes premium residential developments such as 
                    Pradeep Jubilant and Pradeep Riviera, along with successfully 
                    delivered projects like Pradeep Pride and Pradeep Park View. 
                    Each project reflects our commitment to quality construction, 
                    modern amenities, and customer-focused development.
                </p>
            </div>

        </div>
    );
}

export default About;