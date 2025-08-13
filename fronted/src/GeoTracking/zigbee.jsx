import React from "react";
import "./zigbee.css";

export default function Zigbee() {
  return (
    <>
      {/* Hero Section */}
   <section className="zig-hero-section">
  <div className="container-fluid">
    <div className="row align-items-stretch">
      
      {/* Left Text Column */}
      <div className="col-md-6 p-5 d-flex flex-column justify-content-center text-dark">
        <h1 className="fw-bold mb-4 text-white text-start m-4">
        Zigbee for Location-Based Tracking Technologies
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
        <div className="container-fluid p-5 ">
          <h2 className="text-center fw-bold mb-3 text-black">
          Zigbee-Based Real-Time People Tracking
          </h2>
          <hr className="underline mx-auto" />
          <p className="mt-4 fs-5 text-muted">
Zigbee is a wireless mesh network protocol specifically designed for low-power, low-data-rate applications, making it highly effective for real-time people tracking. Its ability to support seamless communication between multiple nodes enables strong coverage, reliability, and scalability across various environments.


          </p>
          <p className="mt-3 fs-5  text-muted">
Ideal for large campuses or multi-building facilities, Zigbee enables efficient tracking of individuals across different zones without relying on cellular networks. With features such as self-healing, adaptive networking, and high availability even in complex physical settings, Zigbee ensures consistent performance, valuable data insights, and simplified scalability for robust tracking systems.


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
              <strong>Zigbee-based ID badges, wearable tags, and sensor nodes
</strong><br />
             Used to monitor the presence, location, and activity of individuals in indoor environments. 
  <br />
              <a href="https://gaotek.com/category/iot/zigbee/zigbee-devices">Zigbee End Devices</a> –   Includes wearables and smart nodes designed for seamless Zigbee-based tracking applications. 
            </li>
            <li>
              <strong>Fixed Zigbee access points and anchor nodes
</strong><br />
          Installed at strategic locations to communicate with Zigbee wearables and relay positioning data. 
 <br />
              <a href="https://gaotek.com/category/iot/zigbee/zigbee-gateways-hubs">Zigbee Gateways/Hubs</a> –   Acts as centralized data collection points for Zigbee-based people tracking systems. 
            </li>
            <li>
              <strong>Central gateways and network routers
</strong><br />
             Facilitates aggregation and forwarding of Zigbee data to localized or centralized networks. 

 <br />
              <a href="https://gaotek.com/category/fiber-optics/enterprise-network">Enterprise Network</a> –  S Provides robust infrastructure for managing Zigbee communications across facilities.  
            </li>
            <li>
              <strong>Optional edge devices for localized data processing

</strong><br />
Processes Zigbee signals at the edge for faster response times and localized analytics. 
 <br />
              <a href="https://gaotek.com/category/iot/edge-computing-for-iots/on-premises-edge/">On Premise Edge</a> –   Delivers real-time data handling capabilities near the source for enhanced system efficiency. 
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column - Stack Software & Cloud */}
      <div className="col-lg-6 d-flex flex-column gap-4">
        <div className="core-box flex-fill">
          <h3>Software</h3>
          <ul>
<li>Cloud-connected dashboard for live location tracking </li>
<li>Configurable user roles, alerts, and geofencing tools</li> 
<li>Map-based visualization with custom zones and rules </li>
<li>Historical location logs and compliance reporting features </li>
          </ul>
        </div>
        <div className="core-box flex-fill">
          <h3>Cloud Services</h3>
          <ul>
<li>Secure cloud storage and data encryption </li>
<li>Web-based access to analytics and reporting tools</li> 
<li>Remote system configuration and diagnostics </li>
<li>API support for third-party application integration</li> 
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="gps-key-features-section py-5 mt-4 ms-5 me-5 ">
  <div className="features-wrapper px-4 px-md-5 text-center">
    <h2 className="features-title fw-bold mb-2">Key Features and Functionalities</h2>
    <hr className="features-underline mx-auto mb-4" />

    <ul className="features-list text-start mx-auto">
<li><strong>Mesh Networking: </strong>Ensures wide area coverage and resilience through self-healing node connections.</li>
<li><strong>Low Power Consumption: </strong> Prolonged battery life for wearable tags, minimizing maintenance.</li>
<li><strong>Scalable Architecture: </strong> Easily expanded by adding new nodes without reconfiguring the system.</li>
<li><strong>Secure Communication: </strong> AES-128 encryption helps protect sensitive tracking data.</li>
<li><strong>Location Accuracy: </strong> Provides room-level or zone-level precision, especially effective indoors.</li>
<li><strong>Interference Resistance: </strong> Designed to perform well in crowded radio frequency environments.</li>
    </ul>
  </div>
</section>

<section className="gps-integration-section py-5 mt-4 ms-5 me-5">
  <div className="integration-wrapper px-4 px-md-5 text-center">
    <h2 className="integration-title fw-bold mb-2">Integrations and Ecosystem Compatibility</h2>
     <hr className="integration-underline mx-auto mb-4" />

    <h6 className="integration-subtitle text-muted mb-4 text-start m-1 p-4">
Zigbee-based people tracking solutions are designed for seamless interoperability with a wide range of enterprise systems and IoT environments. Built on open standards, they ensure future-ready flexibility and efficient deployment.    </h6>

   <div className="integration-content text-start mx-auto">
      <h6 className="fw-bold m-lg-0">Compatible Systems & Devices</h6>
      <ul>
<li className="mt-3"><strong>Facility Security Infrastructure</strong></li>
<p>Integrates with access control systems, video surveillance platforms, and alarm networks for enhanced safety management.</p>
<li><strong>Environmental Monitoring Sensors</strong></li>
<p>Supports combined tracking and environmental condition monitoring, including temperature, humidity, and air quality.</p>
<li><strong>HR and Workforce Management Platforms</strong></li>
<p>Enables automated attendance logging, zone compliance enforcement, and personnel movement tracking.</p>
<li><strong>IoT Devices & Smart Building Technologies</strong></li>
<p>Interoperable with other Zigbee-certified devices, including lighting, HVAC, and occupancy sensors.</p>
<li><strong>Cloud & On-Premises Deployments</strong></li>
<p>Compatible with centralized, local, or hybrid environments, offering flexible data management and real-time processing.</p>
      </ul>

      <h6 className="fw-bold mt-4 m-lg-0">Integration Support</h6>
      <ul>
<li className="mt-3"><strong> Open Protocols & APIs</strong></li>
<p>Simplifies custom system integration and ensures compatibility across platforms.</p>
<li><strong>Future-Proof Architecture</strong></li>
<p>Designed to scale with growing organizational needs and evolving tech ecosystems.</p>
      </ul>

    </div>
  </div>
</section>

<section className="gps-benefits-section mt-4 ms-5 me-5">
  <div className="container text-center">
    <h2>Benefits</h2>
    <hr className="section-underline" />
</div>
<div>
    <ul className="benefits-list p-3" >
<li><strong>Highly Reliable Coverage</strong></li>
<p>Zigbee’s mesh network architecture minimizes blind spots and ensures strong, consistent signal performance throughout facilities.</p>
<li><strong>Efficient Deployment</strong></li>
<p>Requires significantly less infrastructure compared to Wi-Fi or cellular systems, making setup faster and more straightforward.</p>
<li><strong>Affordable Scalability</strong></li>
<p>Supports step-by-step system expansion, ideal for organizations with evolving tracking needs and budget constraints.</p>
<li><strong>Real-Time Operational Insights</strong></li>
<p>Provides immediate visibility into movement, presence, and zone activity for faster decision-making.</p>
<li><strong>Regulatory Compliance Support</strong></li>
<p>Helps organizations meet safety and workforce accountability requirements by logging personnel activity in sensitive or restricted areas.</p>
 
    </ul>
  </div>
</section>

<section className="gps-use-cases-section mt-4 ms-5 me-5">
  <div className="gps-container text-center">
    <h2 className="section-title">Real-World Applications & Use Cases</h2>
    <div class="gps-case-studies-content">
    <hr className="section-underline" />
    

<ul className="use-cases-list">

<li className="text-black"><strong>Hospitals and Care Centers</strong></li>
Track patients, staff, and medical equipment to improve emergency response and zone compliance.
<li className="text-black"><strong>Educational Campuses</strong></li>
Monitor student attendance, ensure staff presence, and support emergency evacuation drills.
<li className="text-black"><strong>Industrial and Manufacturing Facilities</strong></li>
Enhance worker safety in high-risk zones and ensure compliance through automated zone monitoring.
<li className="text-black"><strong>Event Venues and Convention Centers</strong></li>
Manage crowd flow, optimize staff placement, and track personnel during large-scale events.
<li className="text-black"><strong>Warehousing and Logistics Hubs</strong></li>
Monitor workforce activity, improve task assignments, and maintain safety in fast-paced environments.<br/>
<strong className="text-black">Government and Corporate Facilities</strong>

    </ul>

    <div class="zig-image">
      <img src="/image/photo52.png" alt="City View" />
    </div>
  </div></div>
</section>

<section className="gps-industry-section mt-4 ms-5 me-5">
  <div className="container text-center">
    <h2 className="gps-section-title ">Industries We Serve</h2>
    <hr className="section-underline" />
    <ul className="gps-industry-grid text-start">
<li>Healthcare & Assisted </li>
<li>Logistics & Supply Cha</li>
<li>Education & School Saf</li>
<li>Manufacturing & Produc</li>
<li>Government & Defense Facilities</li>
<li>Commercial & Corporate Offices</li>
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
        <h3>Chicago, IL </h3>
        <p>
A healthcare network in Chicago implemented Zigbee-based location tracking for staff and patients across multiple facilities. The system reduced response time during emergencies and optimized staffing levels in critical care units.</p>       </div>

      <div class="case-box">
        <h3>Dallas, TX </h3>
        <p>
A manufacturing firm in Dallas used Zigbee sensors to enforce safety zones and improve timekeeping on the shop floor. The solution helped identify workflow bottlenecks and improved compliance with safety standards. </p>      </div>

      <div class="case-box">
        <h3>Toronto, ON, Canada  </h3>
        <p>
A downtown Toronto university deployed Zigbee badges for tracking student attendance in classrooms and labs. This improved scheduling efficiency and allowed faculty to manage class occupancy under post-pandemic capacity regulations. </p>      </div>
    </div>
  </div>
</section>

<section class="standards-section">
  <div class="standards-container">
    <h2>Relevant U.S. &amp; Canadian Industry Standards and Regulations</h2>

    <div class="standards-box">
      <div class="standards-list">
        <ul>
<li><i class="icon">📌</i><strong>FCC Part 15 </strong> – Low Power Wireless Device Compliance (USA)</li>
<li><i class="icon">📌</i><strong>HIPAA</strong> – Patient Privacy and Security Guidelines (USA)</li>
<li><i class="icon">📌</i><strong>OSHA</strong> – General Industry Standards (USA)</li>
        </ul>
        <ul>
        <li><i class="icon">📌</i><strong>CSA C22.2</strong> –  Wireless Equipment Safety Code (Canada)</li>
          <li><i class="icon">📌</i><strong>PIPEDA</strong> – Personal Information Protection Guidelines (Canada)</li>

        </ul>
      </div>
    </div>
  </div>
</section>


<section class="contact-section">
  <div class="contact-content">
    <h2>CONTACT US</h2>
    
      <h6>Ready to implement a Zigbee-based location tracking system tailored to your environment?</h6>
 <p>
      <a href="/contact-us" class="highlight"> Contact iPeople Tracking </a>
to schedule a consultation, learn more about our solutions, or speak with a specialist about your tracking needs.    </p>
    <a href="/contact-us" class="contact-button">
      CONTACT US <span class="arrow">→</span>
    </a>
  </div>
</section>






    </>
  );
}
