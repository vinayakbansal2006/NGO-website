import React from "react";

export default function ShelterCard({ s }) {
  return (
    <article className="card">
      <img src={s.image} alt={s.name} />
      <div className="card-body">
        <h3>{s.name}</h3>
        <p>{s.address}</p>
        <p>Capacity: {s.capacity}</p>
        <a href={`tel:${s.phone}`} className="btn small">Call</a>
      </div>
    </article>
  );
}
