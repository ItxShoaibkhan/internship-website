import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message || "Submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your Name *
          <input type="text" name="name" required onChange={handleChange} />
        </label>
        <label>
          Company Name
          <input type="text" name="company" onChange={handleChange} />
        </label>
        <label>
          Email ID *
          <input type="email" name="email" required onChange={handleChange} />
        </label>
        <label>
          Phone Number
          <input type="tel" name="phone" onChange={handleChange} />
        </label>
        <label>
          Your Question *
          <textarea name="message" required onChange={handleChange}></textarea>
        </label>
        <label>
          Which is bigger, 13 or 9?
          <input type="text" name="captcha" required onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
