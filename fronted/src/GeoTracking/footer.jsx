// Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Column */}
        <div className="footer-col">
          <img src="/image/logo.webp" alt="iPeople Tracking Logo" className="footer-logo" />
          <p className="footer-title">iPeople Tracking</p>
          <p className="footer-text">Empowering Organizations Through Intelligent Tracking</p>
        </div>

        {/* Middle Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Important Links</h3>
          <ul className="footer-links">
            <li><a href="#">Geotracking</a></li>
            <li><a href="#">RFID Tracking</a></li>
            <li><a href="#">Biotracking</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Head Office USA</h3>
          <p className="footer-subtitle">iPeople Tracking</p>
          <p className="footer-address">
            <i className="fas fa-location-arrow"></i> 1530 Wilson Boulevard Suite 650, Arlington, VA 22209
          </p>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Copyright © iPeople Tracking | Powered by iPeople Tracking</p>
      </div>
    </footer>
  );
}
