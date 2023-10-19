import React, { useState } from 'react';
import Checkbox from './Checkbox/Checkbox'; // Update the path accordingly

function EmployeeRegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    qualifications: {
      highSchool: false,
      higherSecondary: false,
      graduation: false,
      postGraduation: false,
      other: false,
    },
  });

  const handleCheck = (name, checked) => {
    setFormData({
      ...formData,
      qualifications: {
        ...formData.qualifications,
        [name]: checked,
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully');
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      qualifications: {
        highSchool: false,
        higherSecondary: false,
        graduation: false,
        postGraduation: false,
        other: false,
      },
    });
    alert('Form reset successfully');
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', color: 'green', textDecoration: 'underline', textAlign: 'center' }}>Employee Registration Form</h1>
      <div style={{ border: '2px solid black', background: 'cyan', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              minLength="5"
              required
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              minLength="5"
              required
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label>Email ID:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label>Mobile Number:</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              minLength="10"
              required
            />
          </div>
          <div>
            <label>Qualifications:</label>
            <div>
              <Checkbox
                name="High School (10th)"
                checked={formData.qualifications.highSchool}
                onCheck={handleCheck}
              />
            </div>
            <div>
              <Checkbox
                name="Higher Secondary (12th)"
                checked={formData.qualifications.higherSecondary}
                onCheck={handleCheck}
              />
            </div>
            <div>
              <Checkbox
                name="Graduation (Bachelors)"
                checked={formData.qualifications.graduation}
                onCheck={handleCheck}
              />
            </div>
            <div>
              <Checkbox
                name="Post Graduation (Masters)"
                checked={formData.qualifications.postGraduation}
                onCheck={handleCheck}
              />
            </div>
            <div>
              <Checkbox
                name="other"
                checked={formData.qualifications.other}
                onCheck={handleCheck}
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button type="submit">Submit</button>
            <button type="button" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeRegistrationForm;
