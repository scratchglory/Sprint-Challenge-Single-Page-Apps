import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

const List = styled.section`
  //   display: flex;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [cast, setCast] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(res => {
        setCast(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [search]);

  return (
    //    <h2>TODO: `array.map()` over your state here!</h2>

    <List className="character-list">
      <div className="search-bar">
        <Route
          path="/"
          render={props => (
            <SearchForm {...props} setSearch={setSearch} search={search} />
          )}
        />
      </div>

      {/* render cast */}
      {cast.map(char => {
        return (
          <CharacterCard
            key={char.id}
            image={char.image}
            name={char.name}
            species={char.species}
          />
        );
      })}
    </List>
  );
}
