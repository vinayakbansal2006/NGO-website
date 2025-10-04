import React from "react";
import { useNavigate } from "react-router-dom";

const ShelterCard = ({ shelter }) => {
  const navigate = useNavigate();

  return (
    <div className="shelter-card">
      <div className="shelter-image">
        <div className="shelter-badge">
          {shelter.capacity - shelter.currentOccupancy} beds available
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
