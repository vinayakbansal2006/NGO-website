import { Link } from "react-router-dom";
import React, { useState } from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About NGO</h3>
          <p>Dedicated to helping homeless and poor people with shelter, food, medical care, and opportunities for a better life.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/shelters">Shelters</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📧 info@ngo.org</p>
          <p>📞 +1 234 567 8900</p>
          <p>📍 123 Hope Street, City</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 NGO. All rights reserved. Made with ❤ for humanity</p>
      </div>
    </footer>
  );
};

export default Footer;
