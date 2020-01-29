import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  //   console.log(residents);
  return (
    <section className="location-list">
      <div className="location-card">
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
        <p>
          Residents:
          {residents.map(person => {
            // console.log(person);
          })}
        </p>
      </div>
    </section>
  );
}
