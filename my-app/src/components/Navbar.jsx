import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import "../App.css";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          NGO <span className="logo-heart">❤</span>
        </Link>
        
        <div className={isOpen ? "nav-menu active" : "nav-menu"}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shelters" className="nav-link" onClick={() => setIsOpen(false)}>Shelters</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/login" className="nav-btn" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" className="nav-btn signup-btn" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </div>
        
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
