import React, { useState } from "react";
import { Link } from "react-router-dom";  // only if you use <Link>


const ShelterDetails = () => {
  const { id } = useParams();
  
  const sheltersData = {
    1: {
      name: "Hope Haven Shelter",
      location: "Downtown, 123 Main St",
      capacity: 50,
      availableBeds: 12,
      contact: "+1 234 567 8901",
      email: "hopehaven@ngo.org",
      description: "Hope Haven is a full-service shelter providing temporary housing, meals, and support services. We offer a safe and welcoming environment for individuals and families.",
      facilities: ["24/7 Security", "Dining Hall", "Medical Room", "Laundry Facilities", "Common Areas", "Counseling Services"],
      timings: "Open 24/7",
      checkIn: "Check-in: 3:00 PM - 10:00 PM",
      rules: ["No alcohol or drugs", "Respect other residents", "Follow curfew times", "Keep assigned areas clean"]
    },
    2: {
      name: "Safe Harbor House",
      location: "Westside, 456 Oak Ave",
      capacity: 75,
      availableBeds: 8,
      contact: "+1 234 567 8902",
      email: "safeharbor@ngo.org",
      description: "Safe Harbor House is dedicated to providing emergency shelter and transitional housing with comprehensive support services.",
      facilities: ["Computer Lab", "Job Training Center", "Children's Play Area", "Kitchen", "Showers", "Storage Lockers"],
      timings: "Open 24/7",
      checkIn: "Check-in: 2:00 PM - 11:00 PM",
      rules: ["ID required for check-in", "Maximum stay 90 days", "Participate in programs", "No violence"]
    }
  };

  const shelter = sheltersData[id] || sheltersData[1];

  return (
    <div className="shelter-details-page">
      <div className="container">
        <button className="back-btn" onClick={() => window.history.back()}>
          ← Back to Shelters
        </button>
        
        <div className="details-header">
          <h1>{shelter.name}</h1>
          <div className="details-meta">
            <span className="available-badge">{shelter.availableBeds} beds available now</span>
          </div>
        </div>

        <div className="details-grid">
          <div className="details-main">
            <div className="details-section">
              <h2>About This Shelter</h2>
              <p>{shelter.description}</p>
            </div>

            <div className="details-section">
              <h2>Facilities & Amenities</h2>
              <div className="facilities-grid">
                {shelter.facilities.map((facility, index) => (
                  <div key={index} className="facility-item">
                    <span className="facility-check">✓</span> {facility}
                  </div>
                ))}
              </div>
            </div>

            <div className="details-section">
              <h2>Rules & Guidelines</h2>
              <ul className="rules-list">
                {shelter.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="details-sidebar">
            <div className="info-card">
              <h3>Contact Information</h3>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>{shelter.location}</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>{shelter.contact}</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>{shelter.email}</p>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3>Operating Hours</h3>
              <p>{shelter.timings}</p>
              <p className="check-in-time">{shelter.checkIn}</p>
            </div>

            <div className="info-card">
              <h3>Capacity</h3>
              <div className="capacity-info">
                <div className="capacity-item">
                  <span className="capacity-number">{shelter.capacity}</span>
                  <span className="capacity-label">Total Beds</span>
                </div>
                <div className="capacity-item">
                  <span className="capacity-number">{shelter.availableBeds}</span>
                  <span className="capacity-label">Available</span>
                </div>
              </div>
            </div>

            <button className="contact-shelter-btn">Contact Shelter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShelterDetails;
