import React from "react";
import "./ServicesSection.css";

// Import your images here
import aiImg from "../../assets/images/AiMlServices.png";
import softwareImg from "../../assets/images/softwareDevelopmentServices.png";
import teamImg from "../../assets/images/dedicatesTeams.png";

const services = [
  {
    title: "AI/ML Services",
    description: "Explore our AI and ML services to transform your business.",
    image: aiImg,
  },
  {
    title: "Software Development Services",
    description: "Explore our AI and ML services to transform your business.",
    image: softwareImg,
  },
  {
    title: "Dedicated Teams",
    description: "Explore our AI and ML services to transform your business.",
    image: teamImg,
  },
];

const ServicesSection = () => {
  return (
    <div className="services-section_main">
        <div className="container">
            <section className="services-section">
                <div className="services-header">
                    <h2>Services We Deliver</h2>
                    <p>
                    We use the latest, most reliable tech — from AI to blockchain — to build scalable,
                    secure, high-performance solutions tailored to your needs.
                    </p>
                </div>

                <div className="services-cards">
                    {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-image">
                        <img src={service.image} alt={service.title} />
                        </div>
                        <div className="service-info">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
  );
};

export default ServicesSection;
