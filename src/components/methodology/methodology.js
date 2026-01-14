import React from "react";
import "./Methodology.css";

const steps = [
  {
    step: "01",
    title: "Discover & Assess",
    desc:
      "We analyze your operations, data, and workflows to identify high-impact opportunities where AI and automation can save time, cost, and effort.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Design the AI Solution",
    desc:
      "We design a tailored automation blueprint covering AI models, logic flows, system integrations, and user experience.",
    icon: "🤖",
  },
  {
    step: "03",
    title: "Build & Implement",
    desc:
      "Our team develops and deploys the solution using AI, ML, APIs, and scalable software architecture.",
    icon: "💻",
  },
  {
    step: "04",
    title: "Test & Optimize",
    desc:
      "We conduct accuracy testing, performance checks, and workflow validation to ensure reliable automation.",
    icon: "⚙️",
  },
  {
    step: "05",
    title: "Deploy & Support",
    desc:
      "We launch the solution, train your team, and provide continuous monitoring, upgrades, and support.",
    icon: "🚀",
  },
];

const Methodology = () => {
  return (
    <section className="methodology-section">
      <div className="container">
        <h2 className="methodology-title">
          Our Proven Development Methodology
        </h2>

        <p className="methodology-subtitle">
          At <strong>Veva Technology</strong>, we adopt a results-focused software development approach. Our structured 5-step methodology guarantees precision, scalability, and reliability from concept to successful deployment.
        </p>

        <div className="methodology-grid">
          {steps.map((item, index) => (
            // <div
            //   key={index}
            //   className={`methodology-card ${
            //     index % 2 === 1 ? "down" : "up"
            //   }`}
            // >
            <div
              key={index}
              className={`methodology-card ${index % 2 === 1 ? "down" : "up"} fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >

              <span className="step-number">{item.step}</span>

              <div className="icon-box">
                <span className="icon">{item.icon}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
