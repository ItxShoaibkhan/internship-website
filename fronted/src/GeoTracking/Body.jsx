import React from "react";
import "./body.css";

export default function Body() {
  return (
    <>
      {/* Tracking Section */}
      <section className="tracking-section">
        <div className="tracking-container text-start">
          <h1>Empowering Organizations Through Intelligent Tracking</h1>
          <p>
            In today’s dynamic environments, knowing where people are—whether for
            safety, compliance, or operational efficiency—is mission-critical.
            From healthcare and industrial sites to schools and large venues,
            modern tracking technologies are transforming how organizations
            operate, safeguard individuals, and optimize resources.
          </p>

          <p>Intelligent people tracking enables:</p>
          <ul>
            <li>Real-time visibility of personnel</li>
            <li>Automated compliance monitoring</li>
            <li>Faster emergency response</li>
            <li>Smarter workforce and visitor management</li>
          </ul>

          <p>
            Designed for seamless integration, these systems empower better
            decisions and safer spaces through actionable location data.
          </p>
        </div>
      </section>

      {/* Core IoT Systems Section */}
      <section className="core-iot-section">
        <h2 className="section-title">Our Core IoT Systems</h2>
        <div className="card-container">
          <div className="iot-card">
            <img src="/image/gps.webp" alt="Location Icon" />
            <h3>Location-Based Tracking Technologies</h3>
            <p>
              We utilize advanced GPS, Wi-Fi triangulation, Bluetooth Low Energy (BLE), and Ultra-Wideband (UWB) systems to enable real-time, location-aware tracking across indoor and outdoor environments. Whether monitoring personnel within a large facility or tracking movements across campuses, our location-based technologies deliver unmatched accuracy and responsiveness.
            </p>
            <button>Learn More</button>
          </div>

          <div className="iot-card">
            <img src="/image/rfid.webp" alt="RFID Icon" />
            <h3>Radio Frequency Identification (RFID) and Related Technologies</h3>
            <p>
              Our RFID solutions use active and passive tags to facilitate efficient and automated identification of individuals in controlled environments. We also integrate complementary technologies like NFC and BLE for extended use cases.
            </p>
            <button>Learn More</button>
          </div>

          <div className="iot-card">
            <img src="/image/wat.webp" alt="Wearables Icon" />
            <h3>Sensor & Wearable-Based Technologies</h3>
            <p>
              We offer sensor-embedded wearable devices that monitor real-time movement, location, and biometric signals such as heart rate or temperature. These wearables are particularly effective in healthcare, manufacturing, and logistics.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="value-section">
        <h2 className="section-title">What Sets Us Apart</h2>
        <div className="value-card-container">
          <div className="value-card">
            <h3>Next-Gen Technology</h3>
            <p className="text-start p-2">Our solutions are powered by the latest in IoT, AI, and cloud architecture.</p>
          </div>
          <div className="value-card">
            <h3>Custom Integration</h3>
            <p className="text-start p-2">We tailor every deployment to meet your exact infrastructure and workflow.</p>
          </div>
          <div className="value-card">
            <h3>Unmatched Support</h3>
            <p className="text-start p-2">Our technical and advisory teams are with you at every stage—pre-sale to post-implementation.</p>
          </div>
          <div className="value-card">
            <h3>Industry Expertise</h3>
            <p className="text-start p-2">From healthcare to security and logistics, we understand the nuances of your field.</p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <h2 className="section-title">Industries We Serve</h2>
        <div className="industries-grid">
          <div className="industry-card">
            <img src="/image/photo16.webp" alt="Healthcare" />
            <p>Healthcare & Elderly Care</p>
          </div>
          <div className="industry-card">
            <img src="/image/photo17.webp" alt="Logistics" />
            <p>Logistics & Transportation</p>
          </div>
          <div className="industry-card">
            <img src="/image/photo18.webp" alt="Construction" />
            <p>Construction & Industrial Sites</p>
          </div>
          <div className="industry-card">
            <img src="/image/photo19.webp" alt="Education" />
            <p>Education & Campus Security</p>
          </div>
          <div className="industry-card">
            <img src="/image/photo20.webp" alt="Event Management" />
            <p>Event Management & Public Safety</p>
          </div>
          <div className="industry-card">
            <img src="/image/photo21.webp" alt="Government" />
            <p>Government & Defense</p>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section ms-5 mt-4  mb-5 me-5">
        <div className="commitment-container text-center">
          <h2>Commitment to Innovation & Reliability</h2>
          <p className="text-start">
            Technology should <strong>empower—not complicate</strong> your workflow. That’s why every solution is designed with:
          </p>
          <ul className="text-start">
            <li>Simplicity and user-friendliness</li>
            <li>Flexibility for future growth</li>
            <li>Long-term operational value</li>
          </ul>
          <p className="text-start">
            You’re not just investing in a system—you’re gaining a reliable partner in safety, innovation, and operational efficiency.
          </p>
        </div>
      </section>

      {/* IoT Partner Section */}
      <section className="iot-partner-section">
        <div className="iot-partner-container">
          <div className="iot-partner-text">
            <h2>Trusted IoT Partner with <br /> Global Recognition</h2>
            <p className="text-start">
              This organization has earned recognition as both an “IoT Expert” and a “Gold Partner” by two
              leading global technology innovators in the fields of B2B tech and BLE/RFID solutions.
            </p>
            <p className="text-start">
              The company is also proud to be a sponsor of a leading innovation-driven event.
            </p>
            <p className="explore text-start">Explore more at:</p>
            <div className="iot-badges">
              <div>
                <h5 className="check text-start">✔</h5>
                <strong>GAO Tek TekSummit</strong>
              </div>
              <div>
                <h5 className="check text-start">✔</h5>
                <strong>GAO RFID TekSummit</strong>
              </div>
            </div>
          </div>
          <div className="iot-partner-image">
            <img src="/image/photo22.jpeg" alt="IoT Globe" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>CONTACT US</h2>
          <h6>Let’s connect and turn your vision into reality.</h6>
          <p>
            <a href="/contact-us" className="highlight">Contact iPeople Tracking</a>
            for a free consultation, product inquiry, or dedicated support.
          </p>
          <a href="/contact-us" className="contact-button">
            CONTACT US <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </>
  );
}