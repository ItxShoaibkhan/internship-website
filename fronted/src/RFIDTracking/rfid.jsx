import React from 'react';
import "./rfid.css"
// Update path as needed

const Rfid = () => {
  return (
    <>
      {/* Hero Section */}
   <div className="rfid-hero-section text-white">
  <h1 className='text-white'>SMART RFID TRACKING SYSTEMS FOR PEOPLE AND PERSONNEL MONITORING</h1>
  <a href="/contact-us" className="cta-button">CONTACT US</a>
</div>


     
        <section className="gps-info-section py-5">
        <div className="container-fluid p-5">
          <h2 className="rfid-info-block text-black ">
            Radio Frequency Identification (RFID) and Related Technologies
          </h2>
          <hr className="underline mx-auto" />
          <p className="mt-4 fs-5 text-muted">
           We provide cutting-edge RFID and related technologies to help organizations efficiently track and manage people in various environments. From hospitals and construction sites to large-scale events, our solutions ensure real-time visibility, enhanced security, and seamless movement control.
          </p>
          <p className="mt-3 fs-5  text-muted">
Using electromagnetic signals, RFID enables touch-free tracking without manual data entry or line-of-sight. It’s ideal for fast-paced settings demanding speed and precision.          </p>
        </div>
      </section>


       <section className="rfid-tech-section">
      <h2 className="rfid-tech-title">
        At IPEOPLE TRACKING, we provide tailored solutions powered by a range of proven technologies:
      </h2>

      <div className="rfid-tech-grid">
        <div className="tech-card">
          <h3>Active RFID</h3>
          <p>
With battery-powered tags that actively broadcast signals, Active RFID enables real-time personnel tracking across vast or complex areas. It's perfectly suited for time-sensitive operations like emergency response, construction oversight, and healthcare monitoring.          </p>
          <a href="/radio-frequency-identification-and-releted-technologies-rfid/active-rfid">Click here for more…</a>
        </div>

        <div className="tech-card">
          <h3>Passive RFID</h3>
          <p>
Without an onboard power supply, passive RFID tags rely on electromagnetic energy from readers to function. Their low cost and simplicity make them ideal for scalable deployments in access control, time and attendance systems, and proximity-based detection—especially in environments like schools, corporate offices, and event check-ins.

          </p>
          <a href="/radio-frequency-identification-and-releted-technologies-rfid/passive-rfid">Click here for more…</a>
        </div>

        <div className="tech-card">
          <h3>Near Field Communication (NFC)</h3>
          <p>
Near Field Communication (NFC) is a specialized form of RFID designed for secure, short-range data exchange—typically under 4 inches. It's widely used with smart devices and ID credentials for access control and presence detection. IPEOPLE TRACKING offers robust NFC-integrated solutions for environments where seamless, touchless identity verification is critical.          </p>
          <a href="/radio-frequency-identification-and-releted-technologies-rfid/near-field-communication-nfc">Click here for more…</a>
        </div>

        <div className="tech-card">
          <h3>Real-Time Location Systems (RTLS)</h3>
          <p>
Our Real-Time Location Systems (RTLS) integrate RFID with technologies like Wi-Fi, Bluetooth Low Energy (BLE), and Ultra-Wideband (UWB) to deliver continuous tracking and high-precision indoor location data. These solutions are widely adopted in hospitals, logistics hubs, and educational institutions where real-time visibility enhances safety and operational efficiency.          </p>
          <a href="/radio-frequency-identification-and-releted-technologies-rfid/real-time-location-systems-rtls">Click here for more…</a>
        </div>

        <div className="tech-card">
          <h3>RFID Wristbands and Wearables​</h3>
          <p>
IPEOPLE TRACKING provides RFID-enabled wristbands and wearables tailored for use in dynamic or sensitive environments. Whether for hospital patients, event attendees, students, or staff, these devices support zone-based monitoring, access validation, and quick location during emergencies—all while being durable, comfortable, and easy to implement.          </p>
          <a href="/radio-frequency-identification-and-releted-technologies-rfid/rfid-wristbands-bands">Click here for more…</a>
        </div>

      </div>
    </section>

<section className="gps-benefits-section">
  <div className="container text-center ">
    <h2 className='text-black'>Scalable Technology Infrastructure</h2>
 
</div>

<div>
    <ul className="benefits-list">
<li><strong>Ultra-High Frequency (UHF)</strong></li>
<p>Optimized for long-range detection and bulk tracking, UHF is best suited for open or semi-open environments such as warehouses, logistics centers, and outdoor facilities.
</p>
<li><strong>High Frequency (HF)</strong></li>
<p>Designed for secure, short-range communication, HF is commonly used in smart cards, ID badges, and payment systems requiring reliable proximity-based interaction.
</p>
<li><strong> Low Frequency (LF)</strong></li>
<p>With strong resistance to interference from metal and moisture, LF is ideal for access control and safety tracking in harsh or industrial environments.

</p>
 
    </ul>
  </div>
</section>

<section className="gps-benefits-section">
  <div className="container text-center">
    <h2>Benefits of RFID-Based People Tracking</h2>
    
</div>
<div>
    <ul className="benefits-list">


<li className='m-lg-0 text-start p-2'><strong>Innovation Through  Technology:</strong><h6 className='m-lg-0 p-2'> Fueled by ongoing research and development to deliver forward-thinking tracking solutions.</h6>
</li>
<li><strong>Reliable Performance:</strong><h6 className='m-lg-0 p-2'> Backed by stringent quality control and thorough product testing.</h6>
</li>
<li><strong>Customer-First Approach:</strong><h6 className='m-lg-0 p-2'> Expert support and guidance at every stage of your journey.</h6>
</li>
<h6 className='m-lg-0 p-2'>

We aim to simplify your operations and provide complete visibility into the movement and safety of individuals—whether you're managing a school, healthcare facility, factory, or large-scale event.
</h6>
<h6 className='m-lg-0 p-2'>
RFID and related technologies enable seamless, automated identification and tracking via electromagnetic signals—removing the need for manual data entry or line-of-sight scanning. This makes them especially effective in busy environments where efficiency, accuracy, and safety are critical.
</h6> 
    </ul>
  </div>
</section>

    <div className="rfid-contact-section ms-5 me-5 mb-5" >
  <h2>CONTACT US</h2>

  <h6>Looking to modernize your access control or real-time monitoring systems?</h6>
  
  <p>
    <a href="/contact-us" className="highlight">Contact iPeople Tracking </a>
   today for a free consultation, demo request, or custom solution design. Together, let’s build a smarter, safer, and more connected environment.
  </p>

  <a href="/contact-us" className="contact-cta-button">
    CONTACT US <span className="arrow">→</span>
  </a>
</div>

    </>
  );
};

export default Rfid;
