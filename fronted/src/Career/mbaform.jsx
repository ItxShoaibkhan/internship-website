import React, { useState } from 'react';
import './standardform.css';

const MbaForm = () => {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // 'success', 'error', or ''

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    setStatusType("pending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("http://localhost:5000/api/apply", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("✅ Application submitted successfully!");
        setStatusType("success");
        form.reset();
      } else {
        setStatus(result.message || "❌ Something went wrong.");
        setStatusType("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error submitting form.");
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
