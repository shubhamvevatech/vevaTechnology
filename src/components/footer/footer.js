import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [active, setActive] = useState(null);

  const toggle = (key) => {
    setActive(active === key ? null : key);
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">
          <h2>veva technology.</h2>
          <p>
            Founded in 2016, Veva Technology is a fast-growing IT solutions
            company delivering innovative, scalable, and secure digital
            products to clients across multiple industries worldwide.
          </p>
          <a href="mailto:info@vevatechnology.com">
            📧 info@vevatechnology.com
          </a>
        </div>

        {/* OFFERINGS */}
        <div className="footer-col">
          <h4 onClick={() => toggle("offerings")}>
            OFFERINGS
            <span className="accordion-icon">
              {active === "offerings" ? "−" : "+"}
            </span>
          </h4>

          <ul className={active === "offerings" ? "open" : ""}>
            <li>Web Application Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Custom Software Solutions</li>
            <li>Cloud & DevOps Services</li>
            <li>AI & Automation Solutions</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4 onClick={() => toggle("company")}>
            COMPANY
            <span className="accordion-icon">
              {active === "company" ? "−" : "+"}
            </span>
          </h4>

          <ul className={active === "company" ? "open" : ""}>
            <li>About Us</li>
            <li>Our Work</li>
            <li>Careers</li>
            <li>Blog & Insights</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* LOCATION */}
        <div className="footer-col">
          <h4 onClick={() => toggle("location")}>
            GLOBAL LOCATIONS
            <span className="accordion-icon">
              {active === "location" ? "−" : "+"}
            </span>
          </h4>

          <div className={`location ${active === "location" ? "open" : ""}`}>
            <h5>INDIA</h5>
            <p>
              401-A ,4th Floor President Tower Madhumilan Square, RNT Road Indore (M.P.) 452001
            </p>
            <p className="phone">📞 +91 9XXXX XXXXX</p>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>All Rights Reserved © Veva Technology 2016–2025</p>
        <div className="links">
          <a href="/">Privacy Policy</a>
          <span>|</span>
          <a href="/">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
