import React, { useState } from "react";
import { Link } from "react-router-dom";  // only if you use <Link>

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'donor'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Account created successfully as ${formData.userType}!`);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">Join Us</h1>
          <p className="auth-subtitle">Create your account to make a difference</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>I want to be a *</label>
              <div className="user-type-selector">
                <label className="user-type-option">
                  <input
                    type="radio"
                    name="userType"
                    value="donor"
                    checked={formData.userType === 'donor'}
                    onChange={handleChange}
                  />
                  <span className="user-type-label">
                    <span className="user-type-icon">💝</span>
                    Donor
                  </span>
                </label>
                
                <label className="user-type-option">
                  <input
                    type="radio"
                    name="userType"
                    value="volunteer"
                    checked={formData.userType === 'volunteer'}
                    onChange={handleChange}
                  />
                  <span className="user-type-label">
                    <span className="user-type-icon">🤝</span>
                    Volunteer
                  </span>
                </label>
                
                <label className="user-type-option">
                  <input
                    type="radio"
                    name="userType"
                    value="admin"
                    checked={formData.userType === 'admin'}
                    onChange={handleChange}
                  />
                  <span className="user-type-label">
                    <span className="user-type-icon">👨‍💼</span>
                    Admin
                  </span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 234 567 8900"
              />
            </div>

            <div className="form-group">
              <label>Password *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
              />
            </div>

            <div className="form-group">
              <label>Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="••••••••"
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>I agree to the Terms and Conditions</span>
              </label>
            </div>

            <button type="submit" className="auth-btn">Create Account</button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <Link to="/login">Login here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
