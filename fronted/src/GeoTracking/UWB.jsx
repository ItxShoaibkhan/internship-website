import React from "react";
import "./UW.css";

export default function UltraWideBand() {
  return (
    <>
      {/* Hero Section */}
   <section className="uw-hero-section">
  <div className="container-fluid">
    <div className="row align-items-stretch">
      
      {/* Left Text Column */}
      <div className="col-md-6 p-5 d-flex flex-column justify-content-center text-dark">
        <h1 className="fw-bold mb-4 text-white text-start ms-5">
          UWB for High-Precision People Tracking in Real Time
        </h1>
       
<a href="/contact-us" class="gps-btn">
      CONTACT US 
    </a>

      </div>

      

    </div>
  </div>

</section>


      {/* Real-Time Location Info Section */}
      <section className="gps-info-section py-5">
        <div className="container-fluid px-5">
          <h2 className="text-center fw-bold mb-3 text-black">
            Precision Tracking with UWB Technology
          </h2>
          <hr className="underline mx-auto" />
          <p className="mt-4 fs-5 text-muted">
            Ultra-Wideband (UWB) for location-based tracking delivers sub-meter level accuracy by emitting short radio pulses across a wide frequency spectrum. Unlike other tracking technologies, UWB performs exceptionally well in complex and high-density indoor environments such as warehouses, hospitals, and construction sites, offering reliable and interference-resistant positioning.
          </p>
          <p className="mt-3 fs-5  text-muted">
            Its capability to deliver real-time, high-resolution spatial awareness makes UWB ideal for applications demanding enhanced safety, operational efficiency, and precise movement insights. UWB thrives in areas with metal obstructions, walls, or heavy electromagnetic interference—conditions where many other systems struggle.
          </p>
          <p className="mt-3 fs-5  text-muted">
            This technology is highly scalable, making it suitable for deployments ranging from compact facilities to extensive infrastructures. UWB tracking systems can be customized to meet specific operational requirements, helping organizations achieve smarter, safer, and more efficient environments.
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
              <strong>Wearable UWB badges, tags, and wristbands</strong><br />
              Used for real-time tracking of individuals in indoor environments with high precision. <br />
              <a href="https://gaotek.com/category/iot/iot-sensors/motion-position-sensors">Motion & Position Sensors</a> –  Enables accurate spatial tracking through UWB-based wearable sensors.
            </li>
            <li>
              <strong>Anchors and gateways for triangulation</strong><br />
             Installed at fixed points to receive UWB signals and calculate real-time positions using multilateration. <br />
              <a href="https://ipeopletracking.com/location-based-tracking-technologies/uwb-ultra-wideband">Wi-Fi HaLow Gateways/Routers</a> – Suitable for enabling low-power, wide-coverage connectivity for anchor deployments.
            </li>
            <li>
              <strong>Industrial-grade UWB sensors for harsh environments</strong><br />
             Designed for high-durability tracking in industrial and construction zones. <br />
              <a href="https://gaotek.com/category/iot/iot-sensors/industrial-asset-monitoring-sensors">Industrial & Asset Monitoring Sensors</a> – Supports UWB-enabled location monitoring in rugged environments.
            </li>
            <li>
              <strong>Mounting kits and power accessories</strong><br />
             Essential for deploying and powering UWB infrastructure across various tracking zones. <br />
              <a href="https://gaotek.com/category/iot/cellular-3g-4g-5g-for-iot-internet-of-things/cellular-iot-accessories">Cellular IoT Accessories</a> –  Provides robust and compatible accessory options for UWB system installations.
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column - Stack Software & Cloud */}
      <div className="col-lg-6 d-flex flex-column gap-4">
        <div className="core-box flex-fill">
          <h3>Software</h3>
          <ul>
            <li>Centralized tracking platform with 2D/3D real-time visualization</li>
            <li>Custom zone configuration and alerts</li>
            <li>Analytics dashboards with movement heatmaps</li>
            <li>Access control and audit trail functionality</li>
          </ul>
        </div>
        <div className="core-box flex-fill">
          <h3>Cloud Services</h3>
          <ul>
            <li>Secure cloud hosting with real-time data sync</li>
            <li>Redundant storage and disaster recovery</li>
            <li>RESTful APIs for third-party app integration</li>
            <li>Remote system updates and diagnostics</li>
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
      <li><strong>Sub-Meter Accuracy:</strong>  Delivers highly precise location data, often within 10–30 cm, ideal for safety-critical environments.</li>
      <li><strong>Real-Time Positioning:</strong>  Instantaneous updates for smooth tracking of people’s movement without lag.</li>
      <li><strong>Interference Resistance:</strong>  Operates reliably in environments with high electromagnetic interference or metallic structures.</li>
      <li><strong>3D Spatial Awareness:</strong> Tracks location in three dimensions, useful for multi-story buildings and complex floorplans.</li>
      <li><strong>Low Latency Alerts:</strong> Enables quick response through real-time notifications and geofencing triggers.</li>
      <li><strong>Secure Data Transmission:</strong>  Uses encrypted communication protocols to ensure data protection and privacy.</li>
    </ul>
  </div>
</section>

<section className="gps-integration-section py-5 mt-4 ms-5 me-5">
  <div className="integration-wrapper px-4 px-md-5 text-center">
    <h2 className="integration-title fw-bold mb-2">Integrations And Ecosystem Compatibility</h2>
    <div class="gps-case-studies-content">
     <hr className="integration-underline mx-auto mb-4" />


    <div className="integration-content text-start mx-auto">
      <h6 className="fw-bold m-lg-0">System Integrations</h6>
      <ul>
        <li className="mt-4">Integrates with <strong> GPS, BLE, RFID, and Wi-Fi</strong> for hybrid location tracking systems</li>
        <li>API connections with <strong> HR platforms, access control </strong>, and <strong>safety compliance software</strong>.</li>
        <li>Seamless sync with <strong>third-party applications </strong>and custom enterprise workflows.</li>
       
      </ul>

      <h6 className="fw-bold mt-4 m-lg-0">Platform & Device Compatibility</h6>
      <ul>
        <li className="mt-3">Operates across <strong>Android, iOS, and web-based platforms</strong></li>
        <li>Supports <strong>remote firmware updates</strong> and <strong>device management tools.</strong></li>
        <li>Compatible with <strong>custom dashboards</strong> <strong>on-premise</strong> or <strong>cloud hosting models.</strong></li>
      </ul>

    </div>
    <div class="uwb-image">
      <img src="/image/photo50.png" alt="City View" />
    </div></div>
  </div>
</section>

<section className="gps-benefits-section">
  <div className="gps-container text-center">
    <h2>Benefits of Choosing UWB with IPEOPLE TRACKING</h2>
    <hr className="section-underline" />
</div>
<div>
    <ul className="benefits-list p-4">
<li><strong>Precision That Makes a Difference:</strong> Track movements with ultra-high accuracy in sensitive environments.</li>
<li><strong>Reliable in Complex Spaces:</strong> Overcomes the limitations of traditional systems in industrial settings.</li>
<li><strong>Real-Time Operational Insights:</strong> Gain live visibility into people movement and space utilization.</li>
<li><strong>Enhanced Worker Safety:</strong> Define safety zones, send alerts, and support emergency response.</li>
<li><strong>Modular & Scalable:</strong> Start small and expand across large facilities with minimal infrastructure changes</li>.
    </ul>
  </div>
</section>

<section className="gps-use-cases-section">
  <div className="gps-container text-center">
    <h2 className="section-title ">Real-World Applications & Use Cases</h2>
   
    <p className="gps-section-description text-start p-3">
GPS-based people tracking is transforming how industries manage safety, mobility, and real-time visibility. These solutions are used across diverse environments to monitor personnel, automate compliance, and respond faster to incidents. Here’s where they make the biggest impact:    </p>

    <ul className="use-cases-list text-start" >
<li className="text-black"><strong>Construction Sites:</strong> Real-time tracking of workers for safety, compliance, and efficient labor deployment.</li>
<li className="text-black"><strong>School & College Campuses:</strong> Enhance student attendance tracking, campus safety, and pickup/drop-off accountability.</li>
<li className="text-black"><strong>Hospitals & Assisted Living Facilities:</strong> Monitor patients, seniors, and clinical staff to reduce risk and improve emergency responsiveness.</li>
<li className="text-black"><strong>Industrial Warehouses & Logistics Centers:</strong> Track employee movement in high-speed operations to reduce hazards and optimize task management.</li>
<li className="text-black"><strong>Corporate Offices & Campuses:</strong> Oversee employee flow, manage evacuation plans, and secure access zones.</li>
<li className="text-black"><strong>Event Venues:</strong> Monitor staff and crowd movements, optimize staffing, and respond to incidents instantly.</li>
<li className="text-black"><strong>Emergency & Disaster Response Teams:</strong> Enable coordination and tracking of field responders during rescue and recovery missions.</li>
<li className="text-black"><strong>Security & Facility Personnel:</strong> Ensure coverage, zone compliance, and automated shift tracking in large infrastructures.</li>

    </ul>
  </div>
</section>

<section className="gps-industry-section ms-5 me-5">
  <div className="container text-center">
    <h2 className="section-title">Industries We Serve</h2>
   
    <ul className="gps-industry-grid text-start">
<li>Healthcare & Assisted Living</li>
<li>Industrial Manufacturing & Warehousing</li>
<li>Government & Public Safety</li>
<li>Education & Campus Security</li>
<li>Event Management & Hospitality</li>
<li>Research & High-Security Facilities</li>
    </ul>
  </div>
</section>



<section class="case-studies-section">
  <div class="title-container">
    <h2>Case Studies</h2>
    <div class="divider"></div>
  </div>

  <div class="case-studies-content">
  
    <div class="gps-case-image">
      <img src="/image/photo2.webp" alt="City View" />
    </div>

   
    <div class="case-details">
      <div class="case-box">
        <h3>Houston, TX</h3>
        <p>
          A major industrial plant integrated UWB tracking for real-time worker positioning inside hazardous areas. The solution reduced response time during incident drills and helped maintain compliance with internal safety protocols through automated logging.
        </p>
      </div>

      <div class="case-box">
        <h3>San Diego, CA </h3>
        <p>
         A convention center implemented UWB wearables to manage thousands of staff across multiple exhibit halls. With real-time location analytics and movement heatmaps, the venue improved operational logistics and emergency readiness across large indoor zones. 
        </p>
      </div>

      <div class="case-box">
        <h3>Vancouver, BC, Canada </h3>
        <p>
         A hospital in Vancouver deployed UWB-based wearables to track movement of staff and patients within critical care and surgical units. The system enhanced visibility, improved patient handoff efficiency, and helped maintain strict hygiene zone compliance. 
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
          <li><i class="icon">📌</i> <strong>FCC Part 15 - </strong> UWB Device Compliance (USA)</li>
          <li><i class="icon">📌</i> <strong>OSHA 29 CFR 1910 – </strong> Worker Safety Standards (USA)</li>
          <li><i class="icon">📌</i> <strong>HIPAA - </strong>Healthcare Data Privacy Regulation (USA)</li>
        </ul>
        <ul>
          <li><i class="icon">📌</i> <strong>PIPEDA –</strong>  Personal Data Protection Regulation (Canada)</li>
          <li><i class="icon">📌</i> <strong>CAN/ULC-S304 – </strong> Intrusion Detection Systems Standard (Canada)</li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section class="contact-section">
  <div class="contact-content">
    <h2>CONTACT US</h2>
    
      <h6>Interested in UWB tracking for your organization?</h6>
      <p>Let iPeople Tracking help you design a customized, high-accuracy solution for your facility. <a className="highlighted" href="/contact-us"> Contact us</a> today for a consultation, live demo, or technical evaluation. Together, we’ll shape the future of indoor people tracking.</p>

    <a href="/contact-us" class="contact-button">
      CONTACT US <span class="arrow">→</span>
    </a>
  </div>
</section>






    </>
  );
}
