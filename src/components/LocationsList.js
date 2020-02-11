import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";

export default function LocationsList() {
  const [location, setLocation] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/?name=${search}`)
      .then(res => {
        setLocation(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [search]);

  return (
    <section>
      <h2>LOCATION</h2>
      <div className="search-bar">
        <Route
          path="/"
          render={props => (
            <SearchForm {...props} setSearch={setSearch} search={search} />
          )}
        />
      </div>

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
