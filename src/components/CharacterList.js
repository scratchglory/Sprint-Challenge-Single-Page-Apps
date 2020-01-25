import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCast(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}

      {/* render cast */}
      {cast.map(char => {
        return (
          <CharacterCard
            key={char.id}
            img={char.image}
            name={char.name}
            species={char.species}
          />
        );
      })}
    </section>
  );
}
