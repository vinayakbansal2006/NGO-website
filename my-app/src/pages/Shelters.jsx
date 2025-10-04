import React, { useEffect, useState } from "react";
import ShelterCard from "../components/ShelterCard";
import { API_BASE_URL } from "../api/config";

const Shelters = () => {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/shelters`)
      .then((res) => res.json())
      .then((data) => setShelters(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="shelters-page">
      <div className="page-header">
        <h1>Available Shelters</h1>
        <p>Find a safe place to stay near you</p>
      </div>

      <div className="container">
        <div className="shelters-grid">
          {shelters.length > 0 ? (
            shelters.map((shelter) => (
              <ShelterCard key={shelter.id} shelter={shelter} />
            ))
          ) : (
            <p>Loading shelters...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shelters;
