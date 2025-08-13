import React from "react";
import "./gyro.css";

export default function Gyro() {
  return (
    <>
      {/* Hero Section */}
 <section className="gyro-hero-section text-white d-flex align-items-center">
  <div className="gps-container py-5">
    <div className="row">
      {/* Left Text Column */}
      <div className="col-md-8 col-lg-6">
        <h1 className="display-4 fw-bold mb-4 text-start text-white">
       Gyroscope-Based Tracking for Accurate Motion Monitoring
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
Precision Movement and Orientation Tracking
  </h2>
          
          <p className="mt-4 fs-5 text-muted">
Gyroscope-based tracking systems provide exceptional accuracy in detecting movement and orientation, making them especially effective in dynamic environments. These systems are essential for high-precision applications where real-time monitoring of individuals is critical. By capturing angular velocity and orientation changes, they enable advanced behavioral analysis and enhance situational awareness.





          </p>
          <p className="mt-3 fs-5  text-muted">
This powerful technology is seamlessly integrated into modern sensor and wearable-based tracking solutions, delivering scalable, innovative, and reliable performance supported by expert technical guidance.







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
          <strong>Wearable devices equipped with high-precision MEMS gyroscopes
 </strong><br />
        enable angular velocity detection in wearables for improved orientation tracking and motion analysis.  <br />
          <a href="https://gaotek.com/category/iot/iot-sensors/motion-position-sensors/">
           Motion & Position Sensors
          </a>
        </li>
        <li>
          <strong>Multi-sensor units combining gyroscopes with accelerometers and magnetometers
</strong><br />
         support complex multi-axis motion tracking by integrating multiple sensing components for high-accuracy applications.   <br />
          <a href="https://gaotek.com/category/iot/iot-sensors/industrial-asset-monitoring-sensors/">
         Industrial & Asset Monitoring Sensors
          </a>
        </li>
        <li>
          <strong>Ergonomic form factors: smartwatches, wearable patches, belt clips
 </strong><br />
         provide lightweight, low-power wireless connectivity well-suited for compact wearable form factors in wide-area tracking. <br />
          <a href="https://gaotek.com/category/iot/lorawan-lpwan-low-power-wide-area-networks/lorawan-devices/">
       LoRaWAN End Devices
          </a>
        </li>
        <li>
          <strong>Durable casings with water and shock resistance
</strong><br />
           enhance durability and environmental protection for wearables used in rugged or high-contact environments.  <br />
          <a href="https://gaotek.com/category/iot/z-wave/z-wave-accessories/">
        Z-Wave Accessories
          </a>
        </li>

      </ul>
    </div>

    {/* Software */}
    <div className="core-box software-box flex-fill">
      <h3>Software</h3>
      <ul>
<li>Motion analytics platform with gyroscope-specific insights      </li>
<li>Rotation tracking, posture orientation, and movement profiling </li>
<li>Custom thresholds for alert generation </li>
<li>Role-based data access and analytics dashboards </li>
      </ul>
    </div>

    {/* Cloud Services */}
    <div className="core-box cloud-box flex-fill">
      <h3>Cloud Services</h3>
      <ul>
<li>Real-time cloud processing and data synchronization </li>
<li>Predictive analytics using gyroscopic data </li>
<li>Secure multi-tenant architecture for enterprise use </li>
<li>APIs for third-party integrations </li>
      </ul>
    </div>

  </div>
</section>

<section className="gps-industry-section ms-5 me-5">
  <div className="features-wrapper px-4 px-md-5 text-center">
    <h2 className="features-title fw-bold mb-2 text-black">Key Features and Functionalities</h2>
   

    <ul className="gps-industry-grid text-start p-3  gap-5">
<li>Real-time angular velocity and motion detection</li>
<li>High precision orientation tracking</li>
<li>Lightweight and low-power sensor modules</li>
<li>Seamless integration into wearables</li>
<li>Adjustable sensitivity settings for different environments</li>
<li>Historical data logging for activity analysis</li>
<li>Multi-sensor supports for complex deployments</li>
    </ul>
  </div>
</section>

<section className="gps-industry-section ms-5 me-5">
  <div className="integration-wrapper px-4 px-md-5 text-center">
    <h2 className="gps-section-title">Integrations and Ecosystem Compatibility</h2>
    
    

    
   <div className="gps-industry-grid text-start p-3 d-flex flex-column gap-5  ">
      
      <ul className="list-unstyled list-style-none ">

<li>Fully compatible with a broad range of IoT tracking platforms</li>
<li>Seamlessly integrates with technologies from leading providers in the field</li>
<li>Supports third-party APIs and middleware for flexible system integration</li>
<li>Operates with BLE beacons, UWB anchors, and GPS modules for versatile tracking setups</li>
      </ul>

    </div>
  </div>
</section>

<section className="gps-industry-section ms-5 me-5">
  <div className="container text-center">
    <h2>Benefits</h2>
   
</div>
<div>
    <ul className="gps-industry-grid text-start p-3  gap-5 " >
<li>Improved motion tracking accuracy</li>
<li>Enhanced situational awareness and safety</li>
<li>Real-time behavioral insights</li>
<li className="text-start">Scalable for both small and enterprise deployments</li>
<li className="text-start">Reduced operational costs through automation and precision</li>
<li>Easy deployment and minimal maintenance</li>


 
    </ul>
  </div>
</section>

<section className="gps-use-cases-section mt-4 ms-5 me-5">
  <div className="gps-container text-center">
    <h2 className="section-title">Real-World Applications & Use Cases</h2>
 <div class="gps-case-studies-content">
    
<ul className="use-cases-list p-5 m-lg-0">

<li className="text-black"><strong>Healthcare & Rehabilitation</strong></li>
Fall detection, gait analysis, and physical therapy monitoring.
<li className="text-black"><strong>Construction & Industrial Worksites</strong></li>
Track posture, repetitive strain, and sudden movement to ensure safety.
<li className="text-black"><strong>Smart Offices & Corporate Campuses</strong></li>
Optimize space usage and monitor ergonomic risks during long work hours.
<li className="text-black"><strong>Correctional & Security Facilities</strong></li>
Monitor detainee movement for behavioral analysis and safety.
<li className="text-black"><strong>Event Management & Public Spaces</strong></li>
Analyze crowd motion, manage security zones, and enhance logistics.

    </ul>
  </div>
    <div class="gyro-image">
      <img src="/image/photo79.png" alt="City View" />
    </div>
  </div>
</section>

<section className="gps-industry-section mt-4 ms-5 me-5">
  <div className="container text-centers">
    <h2 className="section-titles text-center text-black">Industries We Serve</h2>
   
    <ul className="gps-industry-grid p-5">
<li>Healthcare & Rehabilitation </li>
<li>Construction & Industrial Safety </li>
<li>Defense & Public Safety </li>
<li>Education & Smart Infrastructure</li> 
<li>Logistics & Hazardous Work Environments</li> 
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
        <h3 className="text-black">Dallas, Texas – Heavy Equipment Safety Monitoring
</h3>
        <p>
A logistics company adopted gyroscope-based wearables for forklift operators and field workers. The solution improved safety by tracking sudden orientation shifts, reducing incident response time by over 35%. 



        </p>
      </div>
      <div class="case-box mb-4">
        <h3 className="text-black">Seattle, Washington – Healthcare Staff Movement Analysis

</h3>
        <p>
A hospital implemented gyroscope-enhanced wearables to monitor staff posture and movement during long shifts. The system identified ergonomic risks and optimized workflows through actionable motion data. 



        </p>
      </div>
      <div class="case-box">
        <h3 className="text-black">Montreal, Quebec – Law Enforcement Training Evaluation

</h3>
        <p>
A police training facility integrated gyroscope tracking in wearable vests to capture movement and body rotation during simulations. The data helped instructors evaluate performance and minimize injury risk. 



        </p>
      </div>
    </div>

   
    <div class="gps-case-image">
      <img src="/image/photo35.webp" alt="City View" class="img-fluid rounded shadow" />
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

<li><i class="icon">📌</i><strong>ANSI Z359 </strong>  </li>
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
 for expert advice, personalized consultations, and end-to-end support. Our dedicated team is here to help you unlock the full potential of gyroscope-based tracking solutions.</p>
  <a href="/contact-us" class="contact-button">
      CONTACT US <span class="arrow">→</span>
    </a>
  </div>
</section>






    </>
  );
}
