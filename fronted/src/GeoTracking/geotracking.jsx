import React from 'react';
import './geotracking.css';
import mapImg from '../assets/photo15.webp';
// Update path as needed

const GeoTracking = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>
              LOCATION-BASED TRACKING<br />
              TECHNOLOGIES FOR PEOPLE<br />
              TRACKING
            </h1>
            <a href="/contact-us" className="cta-button">
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      {/* Location Info Section */}
      <section className="location-section">
        <div className="location-container">
          {/* Left Text Card */}
          <div className="left-card">
            <h2>Location-Based Tracking Technologies</h2>
            <p>
              Advanced Location-Based Tracking Technologies are designed to meet the evolving
              needs of modern businesses by enabling real-time monitoring, management, and
              optimization of people’s movement and safety—indoors, outdoors, and across
              dynamic environments. These solutions provide unmatched precision and efficiency,
              making them ideal for industries such as healthcare, education, construction, and
              events where real-time personnel visibility is essential.
            </p>
            <p>
              Developed with a strong focus on innovation, dependability, and user-centered
              design, these technologies offer smart, scalable systems that easily adapt to
              changing operational demands. With rigorous quality assurance, continuous product
              advancement, and dedicated customer support, organizations can unlock the full
              potential of real-time location intelligence to enhance safety, streamline
              workflows, and drive informed decision-making.
            </p>
          </div>

          {/* Right Side with Image and Info Card */}
          <div className="right-side">
             <img src={mapImg} alt="Map Illustration" className="map-image" />
            <div className="info-card">
              <h3>What Is Location-Based Tracking Technologies?</h3>
              <p>
                Location-Based Tracking Technologies use real-time data from various infrastructure
                sources—such as satellites, wireless networks, and signal triangulation systems—to
                determine the exact or approximate location of individuals. These systems are
                central to improving security, safety, productivity, and logistics in people-centric
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

       <section className="tracking-section">
      <h2 className="section-heading">
        At IPEOPLE TRACKING, we provide tailored solutions powered by a range of proven technologies:
      </h2>

      <div className="cards-grid">
        <div className="tech-card">
          <h3>GPS (Global Positioning System)</h3>
          <p>
            Our GPS-enabled tracking solutions provide continuous, high-accuracy outdoor positioning. GPS is ideal for tracking employees, contractors, or field service personnel across vast or remote outdoor areas. It’s especially valuable for fleet management, outdoor events, and construction zones where real-time movement and location data can enhance safety and accountability.
          </p>
          <a href="/location-based-tracking-technologies/gps-global-positioning-system">Click here for more…</a>
        </div>

        <div className="tech-card">
          <h3>UWB (Ultra-Wideband)</h3>
          <p>
            UWB offers ultra-precise indoor tracking down to the centimeter. This high-bandwidth, low-latency technology is a game-changer in environments like hospitals, labs, or factories, where accurate indoor positioning is vital. We integrate UWB into systems that monitor the flow and interaction of individuals, minimizing errors and maximizing spatial awareness.
          </p>
          <a href="/location-based-tracking-technologies/uwb-ultra-wideband">Click here for more…</a>
        </div>

        <div className="tech-card">
          <h3>Wi-Fi Positioning</h3>
          <p>
            Our Wi-Fi-based tracking solutions leverage existing infrastructure to determine indoor positions using signal triangulation. Especially useful in office complexes, campuses, and retail environments, WPS enables discreet tracking without the need for dedicated sensors or tags.
          </p>
          <a href="/location-based-tracking-technologies/wi-fi-positioning">Click here for more…</a>
        </div>

        <div className="tech-card">
          <h3>Bluetooth Low Energy (BLE)</h3>
          <p>
            IPEOPLE TRACKING utilizes BLE beacons to support proximity-based tracking in real time. Our BLE solutions are scalable, power-efficient, and widely used for indoor people tracking in schools, warehouses, and convention centers. BLE also supports geofencing and presence detection features for smarter decision-making.
          </p>
          <a href="/location-based-tracking-technologies/bluetooth-low-energy-ble">Click here for more…</a>
        </div>

        <div className="tech-card">
          <h3>Zigbee</h3>
          <p>
            Zigbee is ideal for low-power, localized tracking. We provide Zigbee-enabled devices that support dense IoT environments and people monitoring solutions in smart buildings. It allows for secure, energy-efficient tracking in areas with high signal interference.
          </p>
          <a href="/location-based-tracking-technologies/zigbee">Click here for more…</a>
        </div>

        <div className="tech-card">
          <h3>Cellular Network-Based Tracking</h3>
          <p>
            For tracking wide geographic areas where GPS may not be viable, we offer solutions using cellular signal triangulation. This method provides reliable location estimation using mobile network infrastructure, supporting industries like logistics, public safety, and emergency response.
          </p>
          <a href="/location-based-tracking-technologies/cellular-network-based-tracking">Click here for more…</a>
        </div>
      </div>
    </section>
    <div className="contact-content">
  <h2>CONTACT US</h2>

  <h6>Ready to implement a Zigbee-based location tracking system tailored to your environment?</h6>
  
  <p>
    <a href="/contact-us" className="highlight">Contact iPeople Tracking </a>
    to schedule a consultation, learn more about our solutions, or speak with a specialist about your tracking needs.
  </p>

  <a href="/contact-us" className="contact-button">
    CONTACT US <span className="arrow">→</span>
  </a>
</div>

    </>
  );
};

export default GeoTracking;
