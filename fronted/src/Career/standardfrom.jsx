// ApplicationForm.jsx
import React, { useState } from 'react';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref, push } from 'firebase/database';
import { db, storage } from '../firebase'; // make sure firebase.js exports db and storage
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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setMessage('');
    setError('');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, country, position, resume } = formData;

    // Validate all fields
    if (!fullName || !email || !country || !position || !resume) {
      setError('⚠️ All fields are required.');
      return;
    }

    setMessage('Submitting...');
    setError('');

    try {
      // Upload resume to Firebase Storage
       await push(ref(db, "Standard_applications"), {
             fullName: formData.fullName,
             email: formData.email,
             country: formData.country,
             position: formData.position,
             resume: formData.resume ? formData.resume.name : "No file uploaded"
           });

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
      document.getElementById('resume').value = ''; // clear file input
    } catch (err) {
      console.error("Firebase error:", err);
      setError('❌ Failed to submit application. Check console.');
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
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country Name*</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Applying for Position*</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
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
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">SUBMIT APPLICATION</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
