import React from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api/config";

const ShelterCard = ({ shelter }) => {
  const navigate = useNavigate();

  return (
    <div className="shelter-card">
      <div className="shelter-image">
         <img
        src={shelter.image}   // <-- add this
        // alt={shelter.name}    // good practice
        style={{ width: "100%", height: "auto" }} // optional styling
      />
        <div className="shelter-badge">
          {shelter.capacity} beds available
        </div>
      </div>  
      <div className="shelter-content">
        <h3 className="shelter-name">{shelter.name}</h3>
        <p className="shelter-location">📍 {shelter.location}</p>
        <p className="shelter-capacity">
          👥 Capacity: {shelter.capacity} people
        </p>
        <p className="shelter-contact">📞 {shelter.contact}</p>
        <button
          className="shelter-btn"
          onClick={() => navigate(`/shelter/${shelter.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ShelterCard;
