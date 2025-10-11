import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
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
    navigate('/');
  };

  return (
    <div className="auth-page signup-page">
      <div className="auth-background"></div>
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-icon">✨</div>
            <h1 className="auth-title">Join Helping Hands</h1>
            <p className="auth-subtitle">Create your account and start making a difference today</p>
          </div>

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
                    <span>Donor</span>
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
                    <span>Volunteer</span>
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
                    <span>Admin</span>
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
                placeholder="Priya Rai"
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
                placeholder="Priyarai@Gmail.com"
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
                placeholder="+91 7345678900"
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