import React, { useState } from 'react';
import axios from "axios";
import { db } from '../firebase';
import { ref, push } from 'firebase/database';
import './standardform.css';


const AIForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    position: '',
    resume: null
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setMessage('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.country || !formData.position) {
      setError("⚠️ All fields are required.");
      return;
    }

    try {
      // Save form data to Firebase Realtime Database
      await push(ref(db, "AI_applications"), {
        fullName: formData.fullName,
        email: formData.email,
        country: formData.country,
        position: formData.position,
        resume: formData.resume ? formData.resume.name : "No file uploaded"
      });

      setMessage("✅ Application submitted successfully!");
      setFormData({
        fullName: '',
        email: '',
        country: '',
        position: '',
        resume: null
      });
      document.getElementById('resume').value = '';
    } catch (err) {
      setError("❌ Submission failed. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Complete the form below to apply and get started!</h2>

      {message && <div className="success-msg">{message}</div>}
      {error && <div className="error-msg">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name*</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address*</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country Name*</label>
          <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="position">Applying for Position*</label>
          <select id="position" name="position" value={formData.position} onChange={handleChange} required>
            <option value="">—Please choose an option—</option>
            <option value="ai-content">AI-Enhanced Web Content Specialist Intern</option>
            <option value="video-ai">Creative Video & AI Automation Intern</option>
            <option value="ai-talent">AI Talent Acquisition Specialist</option>
            <option value="product-sourcing">AI-Driven Product Sourcing Specialist</option>
            <option value="content-creator">Generative AI Product Content Creator</option>
            <option value="visual-comm">AI Graphics & Visual Communication Intern</option>
            <option value="wordpress-dev">AI-Augmented WordPress Web Developer</option>
            <option value="biz-partner">AI-driven Business Partnerships Intern</option>
            <option value="tech-writer">AI-driven Technical Writing Intern</option>
            <option value="research">AI-Based Content Creation & Research Internship</option>
            <option value="email-marketing">AI-Powered Email Marketing Campaigns</option>
            <option value="seo-marketing">AI-driven SEO & Marketing Internship</option>
            <option value="market-leads">AI-driven Market Insights & Lead Generation Intern</option>
            <option value="hr-partner">HR Partner-Recruitment Intern</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="resume">Upload Resume* (.pdf, .doc, .docx)</label>
          <input type="file" id="resume" name="resume" onChange={handleChange} accept=".pdf,.doc,.docx" required />
        </div>

        <button type="submit" className="submit-btn">SUBMIT APPLICATION</button>
      </form>
    </div>
  );
};

export default AIForm;
