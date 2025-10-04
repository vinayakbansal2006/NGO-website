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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="container">
        <div className="contact-grid">
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
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

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Get In Touch</h2>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>123 Hope Street<br />City, State 12345</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📞</div>
              <h3>Call Us</h3>
              <p>+1 234 567 8900<br />Mon-Fri: 9AM - 6PM</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📧</div>
              <h3>Email Us</h3>
              <p>info@ngo.org<br />support@ngo.org</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">⏰</div>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
