import React from "react";
import "./bluetooth.css";

export default function Bluetooth() {
  return (
    <>
      {/* Hero Section */}
   <section className="ble-hero-section">
  <div className="container-fluid">
    <div className="row align-items-stretch">
      
      {/* Left Text Column */}
      <div className="col-md-6 p-5 d-flex flex-column justify-content-center text-dark">
        <h1 className="fw-bold mb-4 text-white">
         Bluetooth Low Energy (BLE) for People Tracking
        </h1>
       
<a href="/contact-us" class="gps-btn">
      CONTACT US 
    </a>

      </div>

      {/* Right Image Column */}
     

    </div>
  </div>

</section>


      {/* Real-Time Location Info Section */}
      <section className="gps-info-section py-5">
        <div className="container-fluid px-5">
          <h2 className="text-center fw-bold mb-3 text-black">
            Real-Time Location Tracking with Bluetooth Low Energy (BLE)
          </h2>
          <hr className="underline mx-auto" />
          <p className="mt-4 fs-5 text-muted">
           Bluetooth Low Energy (BLE) is an efficient wireless technology designed for accurate, real-time tracking of individuals across both indoor and outdoor environments. By transmitting signals from BLE beacons to compatible receivers, it enables continuous monitoring while maintaining minimal power consumption.

          </p>
          <p className="mt-3 fs-5  text-muted">
           Thanks to its high precision and low energy usage, BLE offers a scalable and cost-effective solution for organizations seeking enhanced visibility and operational efficiency. Ideal for industries where knowing personnel locations is critical, BLE-based systems support faster decision-making, streamlined workflows, and stronger safety protocols.


          </p>
        </div>
      </section>
<section className="core-components-section py-5">
  <div className="core-wrapper px-4 px-md-5">
    <h2 className="core-title text-center fw-bold mb-2">Core Components</h2>
    <hr className="core-underline mx-auto mb-5" />

    <div className="row gx-4 gy-4 align-items-stretch">
      {/* Left Column - Hardware full height */}
      <div className="col-lg-6">
        <div className="core-box h-100">
          <h3>Hardware</h3>
          <ul>
            <li>
              <strong>BLE-enabled ID badges, wristbands, and lanyards</strong><br />
             Used for tracking individuals’ real-time location and movement in indoor environments. 
 <br />
              <a href="https://gaotek.com/category/iot/rfid-ble/ble-gateways-beacons-accessories">BLE Gateways, Beacons & Accessories</a> – Provides wearable BLE tags that transmit location data for tracking applications. 
            </li>
            <li>
              <strong>Stationary BLE readers and gateways
</strong><br />
             Collects signals from BLE wearables and relays data to local processing units. 
 <br />
              <a href="https://gaotek.com/category/iot/edge-computing-for-iots/device-edge">Device Edge</a> – Facilitates real-time data capture and local processing for BLE tracking networks. 
            </li>
            <li>
              <strong>Battery-efficient BLE beacons
</strong><br />
             Continuously broadcast BLE signals for proximity detection and zone-based tracking. 
 <br />
              <a href="https://gaotek.com/category/iot/iot-sensors/proximity-presence-sensors">Proximity & Presence Sensors</a> – Enables accurate indoor positioning using beacon signal strength. 
            </li>
            <li>
              <strong>Mobile devices with BLE scanning support
</strong><br />
              Used by security or staff personnel to identify and locate tagged individuals on the go. 
 <br />
              <a href="https://gaotek.com/category/electronics/pda-eda">PDA/EDA</a> –Handheld mobile devices with built-in BLE support for scanning and tracking in real-time. 
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column - Stack Software & Cloud */}
      <div className="col-lg-6 d-flex flex-column gap-4">
        <div className="core-box flex-fill">
          <h3>Software</h3>
          <ul>
<li>Centralized dashboard with real-time people tracking</li>
<li>Route history, zone assignment, and presence analytics</li>
<li>Configurable alert and notification engine</li>
<li>Role-based access to location data</li>
          </ul>
        </div>
        <div className="core-box flex-fill">
          <h3>Cloud Services</h3>
          <ul>
<li>Encrypted cloud storage and user management</li>
<li>Location-based analytics and custom reporting</li>
<li>Multi-site access with centralized control</li>
<li>API services for third-party system integration</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="gps-key-features-section py-5 mt-4 ms-5 me-5">
  <div className="features-wrapper px-4 px-md-5 text-center">
    <h2 className="features-title fw-bold mb-2">Key Features and Functionalities</h2>
    <hr className="features-underline mx-auto mb-4" />

    <ul className="features-list text-start mx-auto">
<li><strong>Energy-Efficient Performance:</strong> BLE devices have extended battery life, reducing maintenance needs.</li>
<li><strong>Real-Time Tracking:</strong> Monitor movement in high-traffic or sensitive areas with instant location updates.</li>
<li><strong>Geo-Fencing and Alerts:</strong> Trigger automatic alerts when personnel enter or exit designated areas.</li>
<li><strong>Multi-Zone Accuracy:</strong> Capable of tracking complex layouts such as hospitals, factories, and large campuses.</li>
<li><strong>Data Logging and Analytics:</strong> Capture movement history and usage metrics for audit and reporting.</li>
<li><strong>Scalable Architecture:</strong> Supports expansion from a few users to thousands across multiple locations.</li>
    </ul>
  </div>
</section>

<section className="gps-integration-section py-5 mt-4 ms-5 me-5">
  <div className="integration-wrapper px-4 px-md-5 text-center">
    <h2 className="integration-title fw-bold mb-2">Integrations And Ecosystem Compatibility</h2>
    <hr className="integration-underline mx-auto mb-4" />

    <h6 className="integration-subtitle text-muted mb-4 text-start">
These BLE-based tracking solutions are designed for seamless compatibility with existing enterprise systems, ensuring fast deployment and reliable performance.    </h6>

    <div className="integration-content text-start mx-auto">
      <h6 className="fw-bold m-lg-0">System Integrations</h6>
      <ul>
<li className="mt-3"><strong>IT Infrastructure:</strong> Integrates with servers, firewalls, and standard network configurations.</li>
<li><strong>Security Systems:</strong> Supports access control, video surveillance, and incident alert platforms.</li>
<li><strong>HR and Facility Management Tools:</strong> Enables real-time personnel tracking and zone-based access management.</li>
<li><strong>IoT Devices and Environmental Sensors:</strong> Works alongside temperature, motion, and air quality sensors for added contextual intelligence.</li>
      </ul>

      <h6 className="fw-bold mt-4 m-lg-0">Platform & Device Compatibility</h6>
      <ul>
<li className="mt-3"><strong>Open APIs:</strong> Easily connect with dashboards, analytics platforms, and third-party applications.</li>
<li><strong>Developer Tools and Documentation:</strong> Simplifies integration into existing workflows.</li>
<li><strong>Flexible Architecture:</strong> Supports both cloud-based and on-premise environments with minimal configuration.</li>
      </ul>

    </div>
  </div>
</section>

<section className="gps-benefits-section ">
  <div className="container text-center">
    <h2>Benefits</h2>
    <hr className="section-underline" />
</div>
<div>
    <ul className="benefits-list">
  <li><strong>Low Power Usage</strong></li>BLE’s energy-efficient design significantly extends the battery life of wearables and beacons, reducing maintenance cycles.
<li><strong>High Accuracy</strong></li>Provides precise location tracking down to a few meters—even in complex indoor environments.
<li><strong>Cost-Effective Deployment</strong></li>A scalable, budget-friendly solution that leverages existing infrastructure for faster ROI.
<li><strong>Rapid Setup</strong></li>Quick installation and smooth onboarding with minimal disruption to existing operations.
<li><strong>Future-Ready Architecture</strong></li>Designed for scalability and long-term compatibility with emerging technologies and growing organizational needs.
    </ul>
  </div>
</section>

<section className="gps-use-cases-section m-5">
  <div className="gps-container text-center">
    <h2 className="gps-section-title">Real-World Applications & Use Cases</h2>
    <div class="gps-case-studies-content">
    <hr className="section-underline" />
    <div>

    <ul className="gps-use-cases-list text-start ">
<li><strong>Hospitals & Clinics:</strong> Real-time staff location and proximity-based access control.</li>
<li><strong>Schools & Training Centers: </strong>Attendance and movement monitoring of students and faculty.</li>
<li><strong>Warehouses:</strong> Worker movement insights to optimize task distribution.</li>
<li><strong>Events:</strong> Session tracking, safety alerts, and attendance analytics.</li>
<li><strong>Construction Sites:</strong> Monitoring contractors in compliance-restricted areas.</li>
<li><strong>Correctional Facilities:</strong> Secure zone monitoring for staff and residents.</li>
    </ul>
    </div>
    <div class="ble-image">
      <img src="/image/photo51.webp" alt="City View" />
    </div>
  </div></div>
</section>

<section className="gps-industry-section ms-5 me-5">
  <div className="container text-center">
    <h2 className="gps-section-title">Industries We Serve</h2>
    <hr className="section-underline" />
    <ul className="gps-industry-grid text-start p-3 ">
<li>Healthcare and Emergency Services</li>
<li>Education and Campus Security</li>
<li>Manufacturing and Warehousing</li>
<li>Event Management and Conferences</li>
<li>Construction and Industrial Sites</li>
<li>Correctional Facilities and Public Safety</li>
    </ul>
  </div>
</section>



<section class="gps-case-studies-section">
  <div class="title-container">
    <h2>Case Studies</h2>
    <div class="divider"></div>
  </div>

  <div class="case-studies-content">
  
    <div class="gps-case-image">
      <img src="/image/photo5.webp" alt="City View" />
    </div>

   
    <div class="case-details">
      <div class="case-box">
        <h3>Los Angeles, CA </h3>
        <p>
         A logistics company in Los Angeles integrated BLE tags into warehouse employee uniforms. The system tracked staff in various fulfillment zones, improving task assignments and ensuring compliance with safety protocols. 
        </p>
      </div>

      <div class="case-box">
        <h3>New York City, NY </h3>
        <p>
          In a Manhattan-based research facility, BLE wristbands were deployed to monitor real-time staff presence in cleanrooms and labs. Access control integration allows instant lockdown during contamination events. 
        </p>
      </div>

      <div class="case-box">
        <h3>Montreal, QC, Canada </h3>
        <p>
          A senior living facility in Montreal utilized BLE badges for resident tracking and fall detection. Caregivers received real-time alerts, improving emergency response and reducing response time by nearly 40%. 
        </p>
      </div>
    </div>
  </div>
</section>

<section class="standards-section">
  <div class="standards-container">
    <h2>Relevant U.S. &amp; Canadian Industry Standards and Regulations</h2>

    <div class="standards-box">
      <div class="standards-list">
        <ul>
          <li><i class="icon">📌</i> <strong>FCC Part 15 - </strong> Low Power Device Compliance (USA)</li>
          <li><i class="icon">📌</i> <strong>HIPAA – </strong> Health Information Security Standards (USA)</li>
          <li><i class="icon">📌</i> <strong>OSHA 1926 –</strong>Construction Safety Standards (USA)</li>
        </ul>
        <ul>
          <li><i class="icon">📌</i> <strong>PIPEDA –</strong>Personal Information Protection Standards (Canada)
</li>
          <li><i class="icon">📌</i> <strong>CSA C22.2</strong>Wireless Equipment Safety Standards (Canada)
</li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section class="contact-section">
  <div class="contact-content">
    <h2>CONTACT US</h2>
    <p>
    <h6>Looking to implement BLE for smarter, safer, and more efficient people tracking?</h6>
      <a href="/contact-us" class="highlight">Contact IPEOPLE TRACKING  </a>
     today to schedule a consultation, explore tailored solutions, or ask our experts how we can help you reach your goals.
    </p>
    <a href="/contact-us" class="contact-button">
      CONTACT US <span class="arrow">→</span>
    </a>
  </div>
</section>






    </>
  );
}
