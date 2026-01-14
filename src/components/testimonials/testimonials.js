import React from "react";
import "./testimonials.css";

const testimonials = [
  {
    text: "Exceptional quality at a reasonable price! Samyotech delivers exactly what they promise.",
    name: "Emma R.",
    location: "London, UK",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    text: "I needed a solution quickly, and Samyotech delivered on time with zero hassle.",
    name: "Mark T.",
    location: "Sydney, Australia",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    text: "I am beyond impressed with the quality and professionalism of Samyotech.",
    name: "Sarah L.",
    location: "Toronto, Canada",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
];

const Testimonials = () => {
  return (
      <section className="testimonial-section">
        <div className="container">
      {/* HEADER */}
      <div className="testimonial-header">
        <h2>
          Success Stories from our Clients
          <span></span>
        </h2>
        <p>Customer Testimonials</p>
      </div>

      {/* SLIDER */}
      <div className="testimonial-slider">
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div className="testimonial-card" key={index}>
              <span className="quote">“</span>
              <p className="testimonial-text">{item.text}</p>

              <div className="testimonial-footer">
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.location}</span>
                </div>
                <img src={item.avatar} alt={item.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Testimonials;
