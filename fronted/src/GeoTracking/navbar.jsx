
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid px-4">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src="/image/logo1.webp" alt="Logo" height="60" />
        </a>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item dropdown custom-dropdown">
             <li className="nav-item">
  <a className="nav-link" href="/location-based-tracking-technologies">
    Geotracking
  </a>
</li>

              <ul className="dropdown-menu b-blue">
                <li>
                  <a className="dropdown-item" href="/location-based-tracking-technologies/gps-global-positioning-system">
                    GPS (Global Positioning System)
                  </a>
                </li>
                <li><a className="dropdown-item" href="/location-based-tracking-technologies/uwb-ultra-wideband">UWB (Ultra-Wideband)</a></li>
                <li><a className="dropdown-item" href="/location-based-tracking-technologies/wi-fi-positioning">Wi-Fi Positioning</a></li>
                <li><a className="dropdown-item" href="/location-based-tracking-technologies/bluetooth-low-energy-ble">Bluetooth Low Energy (BLE)</a></li>
                <li><a className="dropdown-item" href="/location-based-tracking-technologies/zigbee">Zigbee</a></li>
                <li><a className="dropdown-item" href="/location-based-tracking-technologies/cellular-network-based-tracking">Cellular Network-Based Tracking</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown custom-dropdown">
             <li className="nav-item">
              <a className="nav-link " href="/radio-frequency-identification-and-releted-technologies-rfid" >
                RFID Tracking
              </a></li>
              <ul className="dropdown-menu b-blue">
                <li>
                  <a className="dropdown-item" href="/radio-frequency-identification-and-releted-technologies-rfid/active-rfid">
                    Active RFID
                  </a>
                </li>
                <li><a className="dropdown-item" href="/radio-frequency-identification-and-releted-technologies-rfid/passive-rfid">Passive RFID</a></li>
                <li><a className="dropdown-item" href="/radio-frequency-identification-and-releted-technologies-rfid/near-field-communication-nfc">Near Field Communication (NFC)</a></li>
                <li><a className="dropdown-item" href="/radio-frequency-identification-and-releted-technologies-rfid/real-time-location-systems-rtls">RTLS (Real-Time Location System)</a></li>
                <li><a className="dropdown-item" href="/radio-frequency-identification-and-releted-technologies-rfid/rfid-wristbands-bands">RFID Wristbands/Bands</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown custom-dropdown">
            <li className="nav-item">
              <a className="nav-link dropdown" href="/sensor-and-wearable-based-tracking-technologies" >
                Biotracking
              </a></li>
            
            <ul className="dropdown-menu b-blue">
                <li>
                  <a className="dropdown-item" href="/sensor-and-wearable-based-tracking-technologies/smart-wearables-smartwatches-fitness-trackers">
                  smart-wearables (smartwatches,fitness,trackers)
                  </a>
                </li>
                <li><a className="dropdown-item" href="/sensor-and-wearable-based-tracking-technologies/accelerometer-based-tracking">Accelerometer-Based Tracking</a></li>
                <li><a className="dropdown-item" href="/sensor-and-wearable-based-tracking-technologies/gyroscope-based-tracking">Gyroscope-Based Tracking</a></li>
                <li><a className="dropdown-item" href="/sensor-and-wearable-based-tracking-technologies/smart-shoes">Smart shoes</a></li>
                <li><a className="dropdown-item" href="/sensor-and-wearable-based-tracking-technologies/infrared-sensors">Infrared Sensors</a></li>
                <li><a className="dropdown-item" href="/sensor-and-wearable-based-tracking-technologies/ultrasonic-positioning-systems">Ultrasonic Positioning Systems</a></li>
              </ul>
              </li>

            <li className="nav-item dropdown custom-dropdown">
            <li className="nav-item">
              <a className="nav-link dropdown" href="/about-us">About Us</a>
            </li></li>
<li className="nav-item dropdown custom-dropdown">
            <li className="nav-item ">
              <a className="nav-link dropdown" href="/career" >
                Career
              </a></li>
               <ul className="dropdown-menu b-blue">
                <li>
                  <a className="dropdown-item" href="/career/standard-internship-positions">
                  STANDARD INTERSHIP<br/> POSITIONS
                  </a>
                </li>
                <li><a className="dropdown-item" href="/career/mba-masters-internship-positions">
                MBA/MASTER'S INTERSHIP <br/>POSITIONS
                </a></li>
                <li><a className="dropdown-item" href="/career/ai-enhanced-internship-opportunities">
                AI-Enhanced INTERSHIP<br/> OPPORTUNITIES</a></li>
              </ul>
            </li>

            <li className="nav-item">
                <Link to="/contact-us" className="btn contact-btn">
    Contact Us
  </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
