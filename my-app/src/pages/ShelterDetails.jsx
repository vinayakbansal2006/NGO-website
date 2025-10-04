import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../api/config";

const ShelterDetails = () => {
  const { id } = useParams();
  const [shelter, setShelter] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/shelters/${id}`)
      .then((res) => res.json())
      .then((data) => setShelter(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!shelter) return <p>Loading shelter details...</p>;

  return (
    <div>
      <h1>{shelter.name}</h1>
      <p>📍 {shelter.address}</p>
      <p>👥 Capacity: {shelter.capacity} people</p>
      <p>📞 {shelter.phone}</p>
      <p>{shelter.description}</p>
      <p>Services: {shelter.services.join(", ")}</p>
      <p>Manager: {shelter.manager}</p>
      <p>Status: {shelter.status}</p>
    </div>
  );
};

export default ShelterDetails;
