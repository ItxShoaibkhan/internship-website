import React, { useState } from 'react';
import './standardform.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    position: '',
    resume: null,
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    setMessage('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) return setError('⚠️ All fields are required.');
      form.append(key, value);
    });

    try {
      const response = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        body: form,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Server error');
      }

      setMessage('✅ Application submitted successfully!');
      setError('');
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        country: '',
        position: '',
        resume: null,
      });
      document.getElementById('resume').value = ''; // manually clear file input
    } catch (err) {
      console.error('Submission failed:', err);
      setError('❌ Failed to submit application. Try again later.');
      setMessage('');
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
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country Name*</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Applying for Position*</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            required
            onChange={handleChange}
          >
            <option value="">—Please choose an option—</option>
            <option value="Market Research">Market Research & Product Acquisition Intern</option>
            <option value="HR">HR Administration & Recruitment Intern</option>
            <option value="Lead Discovery">Market Intelligence & Lead Discovery Intern</option>
            <option value="WordPress">WordPress Web Development</option>
            <option value="Graphics">Digital Graphics & Visual Media Intern</option>
            <option value="Video Design">Creative Video Design Intern</option>
            <option value="Marketing">Online Marketing & Strategy Intern</option>
            <option value="Writing">AI-Assisted Tech Content Writing</option>
            <option value="Web Content">Web Content Management Intern</option>
            <option value="Email">Email Campaign Management Intern</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="resume">Upload Resume*</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">SUBMIT APPLICATION</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
