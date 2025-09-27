import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">NGO Help</Link>
      <div className="links">
        <Link to="/shelters">Shelters</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
