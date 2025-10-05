import { Link } from "react-router-dom";
import React, { useState } from "react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="footer-logo-icon">🤝</span>
            <h3>Helping Hands</h3>
          </div>
          <p>Dedicated to helping homeless and poor people with shelter, food, medical care, and opportunities for a better life. Together, we can make a difference.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/shelters">Find Shelters</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Get Involved</Link>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📧 info@helpinghands.org</p>
          <p>📞 +91 982376450</p>
          <p>📍 123 Hope Street<br />Baner, PUNE 411045</p>
        </div>
        
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Helping Hands. All rights reserved. Made with ❤ for humanity.</p>
      </div>
    </footer>
  );
};

export default Footer;