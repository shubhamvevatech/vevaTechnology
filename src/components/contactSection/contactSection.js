import React, { useState } from "react";
import "./contactSection.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactSection = () => {
  const [phone, setPhone] = useState("");
  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        {/* LEFT PANEL */}
        <div className="contact-left">
          <h3>We have Patience, Passion and Numbers too!</h3>

          <div className="stats-grid">
            <div className="stat-card">
              <h4>12+</h4>
              <p>Years of experience</p>
            </div>

            <div className="stat-card">
              <h4>850+</h4>
              <p>Mobile apps delivered</p>
            </div>

            <div className="stat-card">
              <h4>120+</h4>
              <p>Dedicated + remote developer</p>
            </div>

            <div className="stat-card">
              <h4>100%</h4>
              <p>Passion + delivery score</p>
            </div>
          </div>

          <div className="featured">
            <p>Featured on</p>
            <div className="badges">
              <span>Clutch</span>
              <span>GoodFirms</span>
              <span>Upwork</span>
              <span>DesignRush</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="contact-right">
          <h2>Create a Product with a Team that Delivers.</h2>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Enter your full name" />
              <input type="email" placeholder="Enter your email" />
            </div>

            {/* <div className="form-row">
              <input type="text" placeholder="+44" />
              <input type="text" placeholder="Enter your country" />
            </div> */}

            <div className="form-row phone-row">
              <PhoneInput
                country={"gb"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                enableSearch
                placeholder="Mobile number"
              />
              <input type="text" placeholder="Enter your country" />
            </div>

            <div className="form-row">
              <select>
                <option>Select your service</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>UI/UX Design</option>
              </select>

              <select>
                <option>Select your project budget</option>
                <option>$5k - $10k</option>
                <option>$10k - $25k</option>
                <option>$25k+</option>
              </select>
            </div>

            <textarea placeholder="Brief about the project"></textarea>

            <label className="checkbox">
              <input type="checkbox" />
              I have read and agree to the
              <span> Terms and Conditions </span>
              and
              <span> Privacy Policy</span>.
            </label>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
