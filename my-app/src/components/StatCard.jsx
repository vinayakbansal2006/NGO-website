import React, { useState } from "react";
import { Link } from "react-router-dom";  // only if you use <Link>


const StatCard = ({ number, label, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default StatCard;
