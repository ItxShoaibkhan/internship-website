import React from "react";
import "./Header.css"; // custom styling for overlay and height

export default function Header() {
  const bgStyle = {
    background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/image/logo3.webp") center/cover no-repeat',
  };

  return (
    <header
      className="hero-header d-flex align-items-center justify-content-center text-white text-center"
      style={bgStyle}
    >
      <div className="container position-relative z-2">
        <h1 className="display-4 fw-bold text-white">Advanced People Tracking Solutions</h1>
      
        <a href="/contact-us" className="btn btn-info fw-semibold px-4 py-2 ">
          CONTACT US
        </a>
      </div>

      {/* Overlay — optional since gradient is applied in background */}
      <div className="overlay"></div>
    </header>
  );
}
