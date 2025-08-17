// src/GeoTracking/contact.jsx
import React, { useState } from "react";
import { db } from "../firebase"; // import your firebase.js config
import { ref, push } from "firebase/database";
import "./contact.css"
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Saving...");

    try {
      const contactRef = ref(db, "contact_form");
      await push(contactRef, {
        ...formData,
        createdAt: Date.now(),
      });

      setStatus("✅ Message saved successfully!");
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to save message.");
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Your Name *
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Company Name
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </label>

        <label>
          Email *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Message *
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Send Message</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}
