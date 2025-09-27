import React, { useEffect, useState } from "react";

export default function Shelters() {
  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/shelters") // <-- Backend API
      .then((res) => res.json())
      .then((data) => {
        setShelters(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching shelters:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading shelters...</h2>;
  }

  return (
    <div className="shelters-page">
      <h1>Available Shelters</h1>
      <div className="shelter-list">
        {shelters.map((shelter) => (
          <div className="shelter-card" key={shelter.id}>
            <img src={shelter.image} alt={shelter.name} />
            <h2>{shelter.name}</h2>
            <p><strong>Address:</strong> {shelter.address}</p>
            <p><strong>Capacity:</strong> {shelter.capacity} people</p>
            <p><strong>Contact:</strong> {shelter.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
