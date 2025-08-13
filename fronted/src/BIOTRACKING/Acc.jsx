import React from "react";
import "./acc.css";

export default function Accelerometer() {
  return (
    <>
      {/* Hero Section */}
 <section className="acc-hero-section text-white d-flex align-items-center">
  <div className="gps-container py-5">
    <div className="row">
      {/* Left Text Column */}
      <div className="col-md-8 col-lg-6">
        <h1 className="display-4 fw-bold mb-4 text-start text-white">
        Accelerometer-Based People Tracking Technology
        </h1>
       
        <a href="/contact-us" className="btn btn-primary btn-lg rounded-pill shadow">
          CONTACT US
        </a>
      </div>
    </div>
  </div>
</section>



      {/* Real-Time Location Info Section */}
      <section className="gps-info-section py-5">
        <div className="container-fluid p-5">
          <h2 className="text-center fw-bold mb-3 text-black">
Real-Time Human Motion Tracking with Accelerometers    </h2>
          
          <p className="mt-4 fs-5 text-muted">
Accelerometer-based tracking harnesses motion-sensing technology to monitor human activity and movement in real time. These systems rely on sensors that detect changes in velocity and orientation, enabling precise tracking without the need for GPS or external signals. This technology is ideal for indoor and hybrid environments, offering critical data for safety, performance, and health monitoring.




          </p>
          <p className="mt-3 fs-5  text-muted">
Accelerometer-based systems are widely adopted in industries requiring dependable activity detection and motion pattern analysis. Their integration into wearables and IoT solutions enables smarter environments, improved worker safety, and advanced behavioral insights.






          </p>

        </div>
      </section>
      
<section>
  <div className="core-columns d-flex flex-column flex-lg-row gap-4">
    
    {/* Hardware */}
    <div className="core-box flex-fill">
      <h3>Hardware</h3>
      <ul>
        <li>
          <strong>Wearable devices with integrated 3-axis accelerometers </strong><br />
        enable accurate detection of physical movement and orientation for real-time people tracking. <br />
          <a href="https://gaotek.com/category/iot/iot-sensors/motion-position-sensors/">
           Motion & Position Sensors
          </a>
        </li>
        <li>
          <strong>Lightweight, ergonomic form factors (clips, wristbands, badges)</strong><br />
         support compact and low-power connectivity in lightweight wearable designs for continuous monitoring.  <br />
          <a href="https://gaotek.com/category/iot/zigbee/zigbee-devices/">
           Zigbee End Devices
          </a>
        </li>
        <li>
          <strong>Rechargeable, long-life batteries </strong><br />
          provide power-efficient enhancements and battery management options ideal for long-duration wearable deployments.<br />
          <a href="https://gaotek.com/category/iot/nb-iot/nb-iot-accessories/">
       NB-IoT Accessories
          </a>
        </li>
        <li>
          <strong>Optional built-in sensors (gyroscope, magnetometer, altimeter)</strong><br />
           complement accelerometer data by integrating additional orientation and environmental sensing capabilities.  <br />
          <a href="https://gaotek.com/category/iot/iot-sensors/industrial-asset-monitoring-sensors/">
        Industrial & Asset Monitoring Sensors
          </a>
        </li>

      </ul>
    </div>

    {/* Software */}
    <div className="core-box software-box flex-fill">
      <h3>Software</h3>
      <ul>
<li>Real-time dashboards with motion tracking visualization </li>
<li>Configurable thresholds for alerts and notifications </li>
<li>Activity classification (walking, running, idle, falls) </li>
<li>Secure data access and audit logs </li>
      </ul>
    </div>

    {/* Cloud Services */}
    <div className="core-box cloud-box flex-fill">
      <h3>Cloud Services</h3>
      <ul>
<li>Encrypted data transmission and storage </li>
<li>Multi-user cloud dashboards </li>
<li>Machine learning models for behavioral pattern analysis </li>
<li>APIs for integration with enterprise software </li>
      </ul>
    </div>

  </div>
</section>

<section className="gps-key-features-section py-5 mt-4 ms-5 me-5">
  <div className="features-wrapper px-4 px-md-5 text-center">
    <h2 className="features-title fw-bold mb-2 text-black">Key Features and Functionalities</h2>
   <div class="gps-case-studies-content">

    <ul className="features-list text-start mx-auto p-5 m-lg-0">
<li><strong>Real-Time Motion Detection:</strong></li>
Continuously monitors acceleration and orientation.
<li><strong>Fall and Impact Alerts:</strong></li>
Automatically detects and reports sudden movement or drops.
<li><strong>Step Counting and Activity Recognition:</strong></li> Tracks movement intensity and patterns.
<li><strong>Fatigue and Posture Monitoring:</strong></li>
Supports health and ergonomic assessments.
<li><strong>Customizable Sensitivity Settings:</strong></li>
Tailors detection thresholds for different use cases.
    </ul>
     <div class="acc-image">
      <img src="/image/photo76.jpg" alt="City View" />
    </div>
  </div>
  </div>
</section>

<section className="gps-integration-section py-5 mt-4 ms-5 me-5">
  <div className="integration-wrapper px-4 px-md-5 text-center">
    <h2 className="integration-title fw-bold mb-2 text-black">Integrations and Ecosystem Compatibility</h2>
    
    

    <h6 className="integration-subtitle text-muted mb-4 text-start m-1 p-4">
Our smart wearable tracking solutions integrate seamlessly with:</h6>
   <div className="integration-content text-start mx-auto ">
      
      <ul>

<li><strong>Wearable Devices:</strong></li>
These solutions are seamlessly embedded into wristbands, shoes, vests, or ID badges, ensuring flexible deployment across use cases.
<li><strong>IoT Platforms: </strong></li>Fully compatible with cloud-based analytics and monitoring systems for real-time insights and control.
<li><strong>Location Technologies:</strong></li>
Designed to operate alongside GPS, BLE, and RFID for robust hybrid tracking capabilities.
<li><strong>Security Systems:</strong></li>
Easily integrates with alarms, surveillance, and access control systems to support automated safety protocols.
      </ul>

    </div>
  </div>
</section>

<section className="gps-benefits-section mt-4 ms-5 me-5">
  <div className="gps-container text-center">
    <h2>Benefits</h2>
   <div class="gps-case-studies-content">

<div>
    <ul className="benefits-list p-5" >
<li><strong>Accurate Indoor Tracking </strong>– Effective where GPS signals fail.</li>
<li><strong>Enhanced Safety </strong>– Detects and prevents hazardous motion or inactivity.</li>
<li><strong>Scalable Deployments </strong>– Easily integrated into new or existing workflows.</li>
<li><strong>Low Power Consumption </strong>– Designed for long-term, battery-powered operation.</li>
<li><strong>Data-Driven Insights </strong>– Improves decision-making through behavioral analytics.</li>


 
    </ul>
  </div>
   <div class="acc1-image">
      <img src="/image/photo77.webp" alt="City View" />
    </div>
  </div>
  </div>
</section>

<section className="gps-use-cases-section mt-4 ms-5 me-5">
  <div className="gps-container text-center">
    <h2 className="section-title">Real-World Applications & Use Cases</h2>
 <div class="gps-case-studies-content">
    
<ul className="use-cases-list p-5 m-lg-0">

<li className="text-black"><strong>Healthcare Facilities</strong></li>
Monitor patient mobility, detect falls, and assess recovery progress.
<li className="text-black"><strong>Construction & Industrial Sites</strong></li>
Track worker movements in hazardous zones for compliance and safety.
<li className="text-black"><strong>Educational Campuses</strong></li>
Ensure student safety, detect unauthorized zone entry, and track idle time.
<li className="text-black"><strong>Elder Care Centers</strong></li>
Receive alerts on inactivity or irregular movement for proactive care.
<li className="text-black"><strong>Correctional Institutions</strong></li>
Track resident activity to prevent incidents or unauthorized movement.

    </ul>

     <div class="acc2-image">
      <img src="/image/photo78.webp" alt="City View" />
    </div>
  </div>
  </div>
</section>

<section className="gps-industry-section mt-4 ms-5 me-5">
  <div className="container text-centers">
    <h2 className="section-titles text-center text-black">Industries We Serve</h2>
   
    <ul className="gps-industry-grid p-5">
<li>Healthcare & Patient Safety     </li>
<li>Construction & Heavy Industry </li>
<li>Education & Campus Safety </li>
<li>Security & Defense </li>
<li>Logistics & Workforce Monitoring</li> 
    </ul>
  </div>
</section>



<section class="case-studies-section">
  <div class="title-container text-center mb-5">
    <h2>Case Studies</h2>
    <div class="divider mx-auto"></div>
  </div>

  <div class="case-studies-content d-flex flex-column flex-lg-row align-items-start gap-4 px-4 px-lg-5">

   
    <div class="case-details flex-grow-1">
      <div class="case-box mb-4">
        <h3 className="text-black">Los Angeles, California – Manufacturing Plant Safety</h3>
        <p>
A manufacturing company implemented wearable accelerometers to track worker motion and detect falls or prolonged inactivity. The real-time alerts reduced response times and improved OSHA compliance, contributing to a safer work environment. 


        </p>
      </div>
      <div class="case-box mb-4">
        <h3 className="text-black">TOrlando, Florida – Elder Care Monitoring
</h3>
        <p>
In a network of elder care facilities, accelerometer-enabled wearables were deployed to monitor movement patterns and detect falls. Staff could intervene swiftly, ensuring better care outcomes and improved family confidence in the system. 


        </p>
      </div>
      <div class="case-box">
        <h3 className="text-black">Vancouver, British Columbia – School Campus Monitoring
</h3>
        <p>
An urban school system used wearable accelerometers to ensure safe movement across a large multi-building campus. The system helped identify idle time, unauthorized zone entry, and supported activity-based health tracking for students. 


        </p>
      </div>
    </div>

   
    <div class="gps-case-image">
      <img src="/image/photo5.webp" alt="City View" class="img-fluid rounded shadow" />
    </div>

  </div>
</section>


<section class="acc-standards-section mt-4 ms-5 me-5">
  <div class="acc-standards-container">
    <h2>Relevant U.S. &amp; Canadian Industry Standards and Regulations</h2>

    <div class="acc-standards-box">
      <div class="acc-standards-list">
        <ul>
<li><i class="icon">📌</i><strong>OSHA 1910 </strong>    

</li>

<li><i class="icon">📌</i><strong>ANSI/ASSE Z117.1 </strong>  </li>
<li><i class="icon">📌</i><strong>HIPAA</strong> </li>
        </ul>
        <ul>
          <li><i class="icon">📌</i><strong>FCC Part 15 </strong> </li>
          <li><i class="icon">📌</i><strong>PIPEDA </strong></li>
          <li><i class="icon">📌</i><strong>CAN/CSA-Z1002 </strong> </li>


        </ul>
      </div>
    </div>
  </div>
</section>




<section class="contact-section">
  <div class="contact-content">
    <h2>CONTACT US</h2>
    
      <h6>Looking to implement high-precision, motion-sensing solutions?</h6>
 <p>
      <a href="/contact-us" class="highlight"> Contact iPeople Tracking </a>
 today for expert guidance, tailored recommendations, or additional product details. </p>
  <a href="/contact-us" class="contact-button">
      CONTACT US <span class="arrow">→</span>
    </a>
  </div>
</section>






    </>
  );
}
