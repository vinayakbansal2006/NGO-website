import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    alert(`Login successful as ${formData.userType}!`);
    // In real app, you would authenticate here
    navigate('/');
  };

  return (
    <div className="auth-page login-page">
      <div className="auth-background"></div>
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-icon">🤝</div>
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Login to continue making a difference</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>I am a *</label>
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

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>

            <button type="submit" className="auth-btn">Login</button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;