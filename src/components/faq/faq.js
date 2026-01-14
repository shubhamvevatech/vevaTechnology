import { useState } from "react";
import "./faq.css";

const leftFaqs = [
  {
    question: "What are Shopify development services?",
    answer:
      "Shopify development services include store setup, theme customization, custom app integration, payment gateway configuration, performance optimization, and ongoing maintenance.",
  },
  {
    question: "Do you offer website redesign services?",
    answer:
      "Yes, we offer complete website redesign services focused on modern UI/UX, improved performance, better conversions, and mobile responsiveness.",
  },
  {
    question: "Can I hire someone to build my Shopify website?",
    answer:
      "Absolutely. You can hire our experienced Shopify developers to build, customize, and scale your online store according to your business needs.",
  },
  {
    question: "How much does it cost to develop an eCommerce website?",
    answer:
      "The cost depends on features, platform, and complexity. We offer flexible pricing based on your project requirements and business goals.",
  },
  {
    question: "What WordPress services do you provide?",
    answer:
      "We provide WordPress website development, theme customization, plugin development, speed optimization, security enhancements, and maintenance services.",
  },
];

const rightFaqs = [
  {
    question: "What is eCommerce website maintenance?",
    answer:
      "eCommerce maintenance covers regular updates, bug fixes, plugin management, content revisions, security patches, and performance monitoring to ensure smooth store operation.",
  },
  {
    question: "What is the cost of UI/UX design services?",
    answer:
      "UI/UX design costs vary based on project scope, number of screens, and complexity. We provide custom quotes tailored to your requirements.",
  },
  {
    question: "Do you convert Figma to WordPress?",
    answer:
      "Yes, we convert Figma designs into fully functional, pixel-perfect WordPress websites with clean code and responsive layouts.",
  },
  {
    question: "Do you convert Figma to Shopify?",
    answer:
      "Yes, our team specializes in converting Figma designs into high-performance Shopify themes with exact design accuracy.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
];

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        {question}
        <span className="icon">{open ? "−" : "+"}</span>
      </button>

      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-sec_bg">
        <div className="container">
            <section className="faq-section">
            <h2>Let Us To Be Your Helping Hand (FAQ)</h2>
                <div className="faq-grid">
                    <div className="faq-column">
                    {leftFaqs.map((item, index) => (
                        <FaqItem key={index} {...item} />
                    ))}
                    </div>

                    <div className="faq-column">
                    {rightFaqs.map((item, index) => (
                        <FaqItem key={index} {...item} />
                    ))}
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
};

export default FAQ;
