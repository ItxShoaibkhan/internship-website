import React from "react";
import "./GpsTrackingHero.css";

export default function GpsTrackingHero() {
  return (
    <>
      {/* Hero Section */}
   <section className="gps-hero-section">
  <div className="gps-container-fluid">
    <div className="row align-items-stretch">
      
      {/* Left Text Column */}
      <div className="col-md-6 p-5 d-flex flex-column justify-content-center text-dark">
        <h1 className="fw-bold mb-4 text-white  text-start ms-5">
          Smart GPS Tracking Solutions for Real-Time People Monitoring
        </h1>
    
<a href="/contact-us" className="gps-btn" >
      CONTACT US 
    </a>

      </div>

    

    </div>
  </div>

</section>


      {/* Real-Time Location Info Section */}
<section className="gps-info-section py-5 ">
  <div className="container-fluid px-5">
    <div className="gps-info-box p-5">
      <h2 className="text-center fw-bold mb-3 text-black">
        Real-Time Location Tracking with GPS Technology
      </h2>
      
      <p className="mt-4 fs-5">
        GPS-powered solutions are designed to track the real-time location of individuals across
        large geographic areas with exceptional accuracy and reliability. By leveraging satellite
        signals, GPS-based location tracking technologies offer precise positioning that is vital
        for industries requiring safety assurance, operational control, and actionable location intelligence.
      </p>
      <p className="mt-3 fs-5">
        These systems are particularly well-suited for applications in sectors such as construction,
        logistics, field services, and public safety. Built on advanced capabilities and
        quality-assured devices, GPS tracking solutions provide scalable and dependable tools that
        help organizations create smarter, safer, and more efficient environments—supported by expert
        guidance and continuous technological innovation.
      </p>
    </div>
  </div>
</section>


<section className="core-components-section">
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
              <strong>GPS-enabled smart wearables (badges, wristbands, ID cards)</strong><br />
              Used to continuously monitor and transmit individual locations in real time. <br />
              <a href="https://gaotek.com/category/iot/satellite-for-iot-internet-of-things/satellite-trackers-devices">GPS IoT Trackers/Devices</a> – Ideal for wearable integration in people tracking applications.
            </li>
            <li>
              <strong>Ruggedized GPS receivers for outdoor environments</strong><br />
              Designed for reliable location tracking in construction sites, large campuses, or extreme weather conditions. <br />
              <a href="https://gaotek.com/category/iot/cellular-3g-4g-5g-for-iot-internet-of-things/cellular-iot-devices">Cellular IoT Devices</a> – Ensures outdoor connectivity and durable operation.
            </li>
            <li>
              <strong>Compact and portable trackers for individual monitoring</strong><br />
              Useful for tracking employees, students, or patients on the move. <br />
              <a href="https://gaotek.com/category/iot/nb-iot/nb-iot-end-devices">NB-IoT End Devices</a> – Offers energy-efficient and wide-area GPS connectivity.
            </li>
            <li>
              <strong>Long-lasting rechargeable or swappable battery units</strong><br />
              Crucial for uninterrupted performance in long-term tracking deployments. <br />
              <a href="https://gaotek.com/category/iot/rfid-ble/ble-gateways-beacons-accessories">BLE Gateways, Beacons & Accessories</a> – Includes accessories and power options suited for low-energy GPS tracking wearables.
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column - Stack Software & Cloud */}
      <div className="col-lg-6 d-flex flex-column gap-4">
        <div className="core-box software-box flex-fill">
          <h3>Software</h3>
          <ul>
            <li>Centralized tracking dashboards with interactive maps</li>
            <li>Geo-fencing alerts and route history playback tools</li>
            <li>Role-based access control and reporting features</li>
            <li>Mobile app for field-based monitoring and alerts</li>
          </ul>
        </div>
        <div className="core-box cloud-box flex-fill">
          <h3>Cloud Services</h3>
          <ul>
            <li>Real-time data synchronization and backup</li>
            <li>API-based integration with third-party platforms</li>
            <li>Secure, scalable cloud infrastructure for 24/7 uptime</li>
            <li>Data encryption and compliance support</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="gps-key-features-section py-5 mt-4 ms-5 me-5">
  <div className="features-wrapper px-4 px-md-5 text-center">
    <h2 className="features-title fw-bold mb-2">Key Features and Functionalities</h2>
  

    <ul className="features-list text-start mx-auto p-5 m-lg-0">
      <li><strong>Live Tracking:</strong> Monitor precise movements in real-time using satellite signals</li>
      <li><strong>Geo-Fencing:</strong> Set boundaries and receive alerts when users exit designated zones</li>
      <li><strong>Movement History:</strong> Access detailed route histories for analysis and auditing</li>
      <li><strong>Emergency Alerts:</strong> Built-in panic buttons for instant distress signals</li>
      <li><strong>Battery Monitoring:</strong> Track device power levels to ensure continuous operation</li>
      <li><strong>Location Sharing:</strong> Optional real-time sharing with approved stakeholders</li>
    </ul>
  </div>
</section>

<section className="gps-integration-section py-5 mt-5 ms-5 me-5">
  <div className="integration-wrapper px-4 px-md-5 text-center">
    <h2 className="integration-title fw-bold mb-2">Integrations And Ecosystem Compatibility</h2>
   

    <h6 className="integration-subtitle text-muted mb-4 text-start p-3">
      Our GPS tracking solutions are designed for seamless integration and broad compatibility across devices, platforms, and enterprise systems.
    </h6>

    <div className="integration-content text-start mx-auto">
      <h6 className="fw-bold m-lg-0">System Integrations</h6>
      <ul>
        <li className="mt-4"><strong>API Integration</strong> with HR platforms, security systems, and enterprise resource planning (ERP) tools</li>
        <li><strong>Incident Response & Facility Management Systems</strong> integration for automated alerts and location-based actions</li>
        <li><strong>Sensor & Biometric Device Compatibility</strong> with wearable tech, smart badges, and health monitoring equipment</li>
        <li><strong>Technology Interoperability</strong> with BLE, RFID, and UWB systems for multi-layered tracking</li>
      </ul>

      <h6 className="fw-bold mt-5 m-lg-0">Platform & Device Compatibility</h6>
      <ul>
        <li className="mt-4">Operates across <strong>Android, iOS, and web-based platforms</strong></li>
        <li>Supports <strong>remote device management</strong>, including firmware updates and configuration</li>
        <li>Compatible with <strong>custom firmware</strong> and centralized cloud-based dashboards</li>
      </ul>

      <p className="mt-3">
        Supports <strong>GPS and assisted-GPS (A-GPS)</strong> modes for improved urban environment performance
      </p>
    </div>
  </div>
</section>

<section className="gps-benefits-section">
  <div className="gps-container text-center">
    <h2>Benefits</h2>
    
</div>
<div class="gps-case-studies-content">
  

 
<div>
    <ul className="gps-benefits-list">
      <li>Enhanced employee safety and visitor accountability</li>
      <li>Optimized workflow and personnel allocation</li>
      <li>Compliance with safety and labor regulations</li>
      <li>Improved crisis response and evacuation readiness</li>
      <li>Minimal infrastructure requirements for deployment</li>
    </ul>
  </div>
  <div class="gp-image">
      <img src="/image/photo49.jpg" alt="City View" />
    </div>
  </div>
</section>

<section className="gps-use-cases-section">
  <div className="gps-container text-center">
    <h2 className="gps-section-title">Real-World Applications & Use Cases</h2>
    
    <p className="gps-section-description text-start p-3">
      GPS-based people tracking is transforming how industries manage safety, mobility, and real-time visibility. These solutions are used across diverse environments to monitor personnel, automate compliance, and respond faster to incidents. Here’s where they make the biggest impact:
    </p>

    <ul className="use-cases-list text-start">
      <li className="text-black"><strong>Construction Sites:</strong> </li> Real-time tracking of workers for safety, compliance, and efficient labor deployment.
      <li className="text-black"><strong>School & College Campuses:</strong> </li>
      Enhance student attendance tracking, campus safety, and pickup/drop-off accountability.
      <li className="text-black"><strong>Hospitals & Assisted Living Facilities:</strong> </li>
      Monitor patients, seniors, and clinical staff to reduce risk and improve emergency responsiveness.
      <li className="text-black"><strong>Industrial Warehouses & Logistics Centers:</strong> </li>
      Track employee movement in high-speed operations to reduce hazards and optimize task management.
      <li className="text-black"><strong>Corporate Offices & Campuses:</strong></li>
       Oversee employee flow, manage evacuation plans, and secure access zones.
      <li className="text-black"><strong>Event Venues:</strong> </li>
      Monitor staff and crowd movements, optimize staffing, and respond to incidents instantly.
      <li className="text-black"><strong>Emergency & Disaster Response Teams:</strong></li>
       Enable coordination and tracking of field responders during rescue and recovery missions.
      <li className="text-black"><strong>Security & Facility Personnel:</strong></li>
       Ensure coverage, zone compliance, and automated shift tracking in large infrastructures.
    </ul>
  </div>
</section>

<section className="gps-industries-sections">
  <div className="gps-container text-centers">
    <h2 className="section-titles text-black text-center">Industries We Serve</h2>

    <ul className="gps-industry-grid p-3 ">
      <li>Healthcare & Assisted Living</li>
      <li>Construction & Industrial Sites</li>
      <li>Education & School Campuses</li>
      <li>Government & Emergency Services</li>
      <li>Events & Hospitality</li>
      <li>Logistics & Transportation</li>
    </ul>
  </div>
</section>





<section class="gps-case-studies-section">
  <div class="title-container">
    <h2>Case Studies</h2>
    
  </div>

  <div class="gps-case-studies-content">
  
    <div class="gps-case-image">
      <img src="/image/photo2.webp" alt="City View" />
    </div>

   
    <div class="case-details">
      <div class="case-box">
        <h3 className="text-black">Chicago, IL</h3>
        <p>
          A GPS tracking system was deployed across multiple construction
          sites to monitor subcontractor movement, ensure safety compliance,
          and optimize work hours. The integration led to improved operational
          transparency and a 20% drop in unauthorized zone entry.
        </p>
      </div>

      <div class="case-box">
        <h3 className="text-black">Atlanta, GA</h3>
        <p>
          An educational institution adopted GPS-enabled wearables to monitor
          student presence within school boundaries. The system improved
          student accountability, reduced absenteeism, and helped ensure safe
          pickups and drop-offs through geo-fencing.
        </p>
      </div>

      <div class="case-box">
        <h3 className="text-black">Toronto, ON, Canada</h3>
        <p>
          A senior care facility in Toronto implemented GPS trackers in
          wearables for dementia patients. With geo-fencing and emergency
          alerts, the solution significantly reduced the risk of wandering and
          enhanced staff responsiveness during critical incidents.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="gps-standards-section">
  <div class="gps-standards-container">
    <h2>Relevant U.S. &amp; Canadian Industry Standards and Regulations</h2>

    <div class="gps-standards-box">
      <div class="gps-standards-list text-start">
        <ul>
          <li><i class="icon">📌</i> <strong>OSHA 1910</strong> (Occupational Safety and Health Standards – USA)</li>
          <li><i class="icon">📌</i> <strong>HIPAA</strong> (Health Insurance Portability and Accountability Act – USA)</li>
          <li><i class="icon">📌</i> <strong>FCC GPS Equipment Compliance</strong> – USA</li>
        </ul>
        <ul>
          <li><i class="icon">📌</i> <strong>PIPEDA</strong> (Personal Information Protection and Electronic Documents Act – Canada)</li>
          <li><i class="icon">📌</i> <strong>CAN/ULC-S319</strong> (Intrusion Detection Systems – Canada)</li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section class="contact-section">
  <div class="contact-content">
    <h2>CONTACT US</h2>
    <p>
      <a href="/contact-us" class="highlight">Contact us </a>
      to learn how GPS-powered tracking can transform your workforce management.
      From real-time alerts to secure data access, we offer expert guidance every step of the way.
    </p>
    <a href="/contact-us" class="contact-button">
      CONTACT US <span class="arrow">→</span>
    </a>
  </div>
</section>






    </>
  );
}
