import React from "react";
import "./sensor.css";

export default function Sensor() {
  return (
    <>
      {/* Hero Section */}
 <section className="sensor-hero-section text-white d-flex align-items-center">
  <div className="gps-container py-5">
    <div className="row">
      {/* Left Text Column */}
      <div className="col-md-8 col-lg-6">
        <h1 className="display-4 fw-bold mb-4 text-start text-white">
         Smart Wearables for Intelligent People Tracking Solutions
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
Transforming Safety and Mobility with Smart Wearables     </h2>
          
          <p className="mt-4 fs-5 text-muted">
Smart wearables—including smartwatches and fitness trackers—are revolutionizing how movement, health, and safety are monitored in real time. These compact devices feature embedded sensors like GPS, accelerometers, and gyroscopes, enabling continuous tracking of location, activity, and physical condition. Their seamless integration and constant connectivity make them ideal for use in fast-paced settings such as hospitals, schools, and construction zones.



          </p>
          <p className="mt-3 fs-5  text-muted">
By incorporating these technologies into scalable, user-friendly systems, organizations can boost operational visibility, meet compliance requirements, and enhance on-site safety with ease.





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
          <strong>Smartwatches and fitness bands equipped with GPS, BLE, and Wi-Fi tracking</strong><br />
         are ideal for enabling short-range BLE-based connectivity and location services in wearable tracking solutions. <br />
          <a href="https://gaotek.com/category/iot/rfid-ble/ble-gateways-beacons-accessories/">
           BLE Gateways, Beacons & Accessories
          </a>
        </li>
        <li>
          <strong>Accelerometers and gyroscopes</strong><br />
         provide accurate movement and orientation data for wearables in real-time monitoring applications. <br />
          <a href="https://gaotek.com/category/iot/iot-sensors/motion-position-sensors/">
           Motion & Position Sensors
          </a>
        </li>
        <li>
          <strong>Heart rate and temperature sensors</strong><br />
          support continuous health monitoring by capturing physiological data from wearable devices.<br />
          <a href="https://gaotek.com/category/iot/iot-sensors/biometric-and-health-sensors/">
          Biometric and Health Sensors
          </a>
        </li>
        <li>
          <strong>Vibration and alert features</strong><br />
          components facilitate localized processing and response for tactile alerts in smart wearables. <br />
          <a href="https://gaotek.com/category/iot/edge-computing-for-iots/device-edge/">
           Device Edge 
          </a>
        </li>

        <li>
          <strong>Durable, waterproof designs suitable for extended use</strong><br />
          offer robust, low-power wearable integration for reliable performance in various environmental conditions. <br />
          <a href="https://gaotek.com/category/iot/nb-iot/nb-iot-end-devices/">
          NB-IoT End Devices
          </a>
        </li>
      </ul>
    </div>

    {/* Software */}
    <div className="core-box software-box flex-fill">
      <h3>Software</h3>
      <ul>
<li>        Mobile and desktop dashboards for live monitoring </li>
<li>Customizable alerts and geofencing </li>
<li>Role-based access and real-time data visualization </li>
      </ul>
    

    {/* Cloud Services */}
    <div className="core-box cloud-box flex-fill">
      <h3>Cloud Services</h3>
      <ul>
<li>        Secure cloud-based storage and processing           </li>
<li>API integration with HR, security, and operations platforms </li>
<li>Scalable infrastructure for enterprise deployment </li>
      </ul>
    </div>
    </div>

  </div>
</section>

<section className="gps-industry-section ms-5 me-5">
  <div className="features-wrapper px-4 px-md-5 text-center">
    <h2 className="gps-section-title">Key Features and Functionalities</h2>
   

    <ul className="gps-industry-grid text-start p-3 d-flex flex-column gap-5">
<li>Real-Time Location Tracking             </li>
<li>Health & Vital Signs Monitoring</li>
<li>Motion and Activity Detection</li>
<li>SOS or Panic Button for Emergencies</li>
<li>Two-Way Communication</li>
<li>Custom Alert Settings & Thresholds</li>
<li>Battery Optimization for Extended Usage</li>
    </ul>
  </div>
</section>

<section className="gps-industry-section ms-5 me-5">
  <div className="integration-wrapper px-4 px-md-5 text-center">
    <h2 className="gps-section-title">Integrations and Ecosystem Compatibility</h2>
    
  
      
      <ul className="gps-industry-grid text-start p-3 d-grid gap-5 ">

<li>RFID and BLE Tracking Systems               </li>
<li>Cloud-Based Dashboards and Mobile Apps</li>
<li>Hospital Information Systems (HIS)</li>
<li>Enterprise Resource Planning (ERP) Systems</li>
<li>IoT Networks and Sensors</li>
      </ul>

    </div>

</section>

<section className="gps-industry-section ms-5 me-5">
  <div className="container text-center">
    <h2>Benefits</h2>
   
</div>
<div>
    <ul className="gps-industry-grid text-start p-3 d-grid gap-5 "  >
<li>Improved Worker and Patient Safety              </li>
<li className="text-start">Instant Access to Health and Movement Data</li>
<li>Efficient Workforce Management</li>
<li className="text-start">Real-Time Alerts and Faster Emergency Response</li>
<li>Scalable for Growing Organizational Needs</li>
<li>Quick Deployment & Easy-to-Use Interfaces</li>


 
    </ul>
  </div>
</section>

<section className="gps-use-cases-section mt-4 ms-5 me-5">
  <div className="gps-container text-center">
    <h2 className="section-title">Real-World Applications & Use Cases</h2>
 <div class="gps-case-studies-content">
    
<ul className="use-cases-list p-5 m-lg-0">

<li className="text-black"><strong>Healthcare & Elderly Care</strong></li>
Track patient movement, detect health issues early, and respond quickly to emergencies.
<li className="text-black"><strong>Construction & Industrial Worksites</strong></li>
Monitor worker safety, detect inactivity, and ensure zone compliance.
<li className="text-black"><strong>Education & Student Safety</strong></li>
Improve attendance monitoring and enable emergency location tracking.
<li className="text-black"><strong>Event Management & Security</strong></li>
Coordinate staff during large public events and enhance incident response.
<li className="text-black"><strong>Warehousing & Logistics</strong></li>
Monitor workforce presence, shift compliance, and safety in operational zones.
<li className="text-black"><strong>Government, Military & Emergency Response</strong></li>
Enhance situational awareness and accountability during deployments or evacuations.

    </ul>

    <div class="sensor-image">
      <img src="/image/photo75.jpg" alt="City View" />
    </div>
  </div>
  </div>
</section>

<section className="gps-industry-section mt-4 ms-5 me-5">
  <div className="container text-centers">
    <h2 className="gps-section-title text-center text-black">Industries We Serve</h2>
   
    <ul className="gps-industry-grid p-5">
<li>Healthcare & Elder Care </li>
<li>Construction & Industrial Safety</li> 
<li>Education & Campus Management </li>
<li>Event Security </li>
<li>Government & Emergency Services </li>
<li>Logistics & Transportation </li>
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
        <h3 className="text-black">Houston, Texas – Construction Zone Monitoring</h3>
        <p>
A leading infrastructure firm implemented smartwatches to track laborers across large construction zones. The solution enabled geofencing, automated attendance, and enhanced on-site safety with SOS features, reducing emergency response times by 30%. 

        </p>
      </div>
      <div class="case-box mb-4">
        <h3 className="text-black">Toronto, Ontario – Campus Security Enhancement</h3>
        <p>
A Canadian university integrated smart wearables across its sprawling campus. Security staff and medical teams used real-time tracking and emergency features to ensure fast response during events and optimize patrol routines. 

        </p>
      </div>
      <div class="case-box">
        <h3 className="text-black">Chicago, Illinois – Hospital Staff Monitoring</h3>
        <p>
A major hospital chain adopted wearable fitness bands to track staff movement and health metrics. The system ensured staff presence in critical zones, supported shift optimization, and flagged health alerts for quick intervention. 

        </p>
      </div>
    </div>

   
    <div class="gps-case-image">
      <img src="/image/photo5.webp" alt="City View" class="img-fluid rounded shadow" />
    </div>

  </div>
</section>


<section class="standards-section">
  <div class="standards-container">
    <h2>Relevant U.S. &amp; Canadian Industry Standards and Regulations</h2>

    <div class="standards-box">
      <div class="standards-list">
        <ul>
<li><i class="icon">📌</i><strong>OSHA 1910 -</strong>    (Occupational Safety and Health Standards)

</li>

<li><i class="icon">📌</i><strong>HIPAA </strong> –   (Health Insurance Portability and Accountability Act)</li>
<li><i class="icon">📌</i><strong>FCC Part 15 </strong> –  (RF Emissions Compliance)</li>
        </ul>
        <ul>
          <li><i class="icon">📌</i><strong>CAN/CSA-Z1002-12 </strong> –  (Canadian Workplace Hazard Identification)</li>
          <li><i class="icon">📌</i><strong>CAN/CSA-Z1002-12 </strong> –  (Canadian Workplace Hazard Identification)</li>


        </ul>
      </div>
    </div>
  </div>
</section>




<section class="contact-section">
  <div class="contact-content">
    <h2>CONTACT US</h2>
    
      <h6>Looking for the right smart wearable solution for your environment?</h6>
 <p>
      <a href="/contact-us" class="highlight"> Contact iPeople Tracking </a>
 with our experts for tailored guidance, live demos, or integration support.
 </p>
  <a href="/contact-us" class="contact-button">
      CONTACT US <span class="arrow">→</span>
    </a>
  </div>
</section>






    </>
  );
}
