import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        setLocation(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <h2>LOCATION</h2>
      {location.map(place => {
        return (
          <LocationCard
            key={place.id}
            name={place.name}
            type={place.type}
            dimension={place.dimension}
            residents={place.residents}
          />
        );
      })}
    </section>
  );
}
