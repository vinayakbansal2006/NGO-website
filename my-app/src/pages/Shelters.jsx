import React, { useState } from "react";
import { Link } from "react-router-dom";  // only if you use <Link>
import ShelterCard from "../components/ShelterCard";


const Shelters = () => {
  const shelters = [
    {
      id: 1,
      name: "Hope Haven Shelter",
      location: "Downtown, 123 Main St",
      capacity: 50,
      availableBeds: 12,
      contact: "+1 234 567 8901"
    },
    {
      id: 2,
      name: "Safe Harbor House",
      location: "Westside, 456 Oak Ave",
      capacity: 75,
      availableBeds: 8,
      contact: "+1 234 567 8902"
    },
    {
      id: 3,
      name: "Grace Community Center",
      location: "Eastside, 789 Pine Rd",
      capacity: 60,
      availableBeds: 15,
      contact: "+1 234 567 8903"
    },
    {
      id: 4,
      name: "New Beginnings Shelter",
      location: "Northside, 321 Elm St",
      capacity: 40,
      availableBeds: 5,
      contact: "+1 234 567 8904"
    },
    {
      id: 5,
      name: "Compassion House",
      location: "Southside, 654 Maple Dr",
      capacity: 80,
      availableBeds: 20,
      contact: "+1 234 567 8905"
    },
    {
      id: 6,
      name: "Helping Hands Shelter",
      location: "Central, 987 Cedar Ln",
      capacity: 55,
      availableBeds: 10,
      contact: "+1 234 567 8906"
    }
  ];

  return (
    <div className="shelters-page">
      <div className="page-header">
        <h1>Available Shelters</h1>
        <p>Find a safe place to stay near you</p>
      </div>
      
      <div className="container">
        <div className="shelters-grid">
          {shelters.map(shelter => (
            <ShelterCard key={shelter.id} shelter={shelter} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Shelters;
