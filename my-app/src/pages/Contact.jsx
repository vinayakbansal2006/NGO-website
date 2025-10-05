import React, { useState } from "react";
import { Link } from "react-router-dom";  // only if you use <Link>

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 500);
  };

  return (
    <div className="contact-page">
      {/* Hero Header with Background */}
      <div className="page-header contact-header">
        <div className="page-header-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="section-badge">📧 Send Message</div>
            <h2>Drop Us a Line</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
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
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div className="form-group">
                  <label>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us more about how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={submitted}>
                {submitted ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="section-badge">📞 Contact Info</div>
            <h2>Reach Out</h2>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">📍</div>
              <div className="contact-info-text">
                <h3>Visit Us</h3>
                <p>123 Hope Street<br />New York, NY 10001<br />United States</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📞</div>
              <div className="contact-info-text">
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567<br />Mon-Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📧</div>
              <div className="contact-info-text">
                <h3>Email Us</h3>
                <p>info@helpinghands.org<br />support@helpinghands.org<br />volunteer@helpinghands.org</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">🌐</div>
              <div className="contact-info-text">
                <h3>Follow Us</h3>
                <div className="contact-social-links">
                  <a href="#" className="contact-social-btn">Facebook</a>
                  <a href="#" className="contact-social-btn">Twitter</a>
                  <a href="#" className="contact-social-btn">Instagram</a>
                  <a href="#" className="contact-social-btn">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;