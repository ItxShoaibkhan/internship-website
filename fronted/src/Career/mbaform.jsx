import React, { useState } from 'react';
import './standardform.css';
import { db } from '../firebase';
import { ref, push } from 'firebase/database';

const MbaForm = () => {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // 'success', 'error', or 'pending'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    setStatusType("pending");

    const form = e.target;
    const formData = new FormData(form);

    // Convert resume file to Base64
    const file = formData.get("resume");
    let resumeBase64 = "";
    if (file && file.size > 0) {
      resumeBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);
        reader.readAsDataURL(file);
      });
    }

    try {
      // Push data to Firebase Realtime Database
      const contactRef = ref(db, "mba_applications");
      await push(contactRef, {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        country: formData.get("country"),
        position: formData.get("position"),
        resume: resumeBase64,
        createdAt: Date.now(),
      });

      setStatus("✅ Application submitted successfully!");
      setStatusType("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to save application.");
      setStatusType("error");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Complete the form below to apply and get started!</h2>

      {status && (
        <p className={`form-status ${statusType}`}>
          {status}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name*</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address*</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country Name*</label>
          <input type="text" id="country" name="country" required />
        </div>

        <div className="form-group">
          <label htmlFor="position">Applying for Position*</label>
          <select id="position" name="position" required>
            <option value="">—Please choose an option—</option>
            <option value="Online-Marketing-SEO-Analyst-Intern">Online-Marketing-SEO-Analyst-Intern</option>
            <option value="Lead Acquisition & Market Insights Intern">Lead Acquisition & Market Insights Intern</option>
            <option value="Talent Recruitment & HR Strategy Intern">Talent Recruitment & HR Strategy Intern</option>
            <option value="Strategic Hiring & HR Partnership">Strategic Hiring & HR Partnership</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="resume">Upload Resume*</label>
          <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
        </div>

        <button type="submit" className="submit-btn">SUBMIT APPLICATION</button>
      </form>
    </div>
  );
};

export default MbaForm;
