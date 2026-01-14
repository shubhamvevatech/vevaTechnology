import React, { useEffect, useState } from "react";
import "./successMetrics.css";
import arrowIcon from '../../assets/images/arrowIcon.png';

const metrics = [
  { label: "Client Retention", value: 92, delay: 0 },
  { label: "Placement Rate", value: 96, delay: 400 },
  { label: "Team Stability", value: 97.7, delay: 800 },
];

const SuccessMetrics = () => {
  const [cycle, setCycle] = useState(0);

  // 🔁 Restart animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((prev) => prev + 1);
    }, 3500); // total cycle duration

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="metrics-section">
      <div className="metrics-container">

        {/* LEFT */}
        <div className="metrics-left">
          <span className="metrics-tag">▶▶ OUR SUCCESS METRICS</span>
          <h2>
            Rising Metrics <br /> Reflecting Excellence
          </h2>
          <p>
            With a focus on delivering top-tier talent and unmatched service
            quality, Optimar continues to achieve exceptional client retention,
            placement success, and team stability.
          </p>
        </div>

        {/* RIGHT */}
        <div className="metrics-right">
          <span className="metrics-small-title">• Our success metrics</span>

          {metrics.map((item, index) => (
            <div className="metric-row" key={`${cycle}-${index}`}>
              <div className="metric-header">
                <span>{item.label}</span>
                <strong>{item.value}%</strong>
              </div>

              <div className="metric-bar">
                <div
                  className="metric-progress"
                  style={{
                    "--target-width": `${item.value}%`,
                    animationDelay: `${item.delay}ms`,
                  }}
                >
                  <span className="metric-arrow">
                    <img src={arrowIcon} alt="Mail Icon" width="24" />
                  </span>
                </div>
              </div>

              {index === metrics.length - 1 && (
                <div className="metric-scale">
                  <span>0</span>
                  <span>20</span>
                  <span>40</span>
                  <span>60</span>
                  <span>80</span>
                  <span>100</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessMetrics;
