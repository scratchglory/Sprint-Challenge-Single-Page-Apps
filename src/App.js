import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";

import styled from "styled-components";

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: dodgerblue;
  color: white;
  border: 2px solid yellow;
`;

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <Button href="/">Home</Button>
      <Button href="/character-list">Cast List</Button>
      <Button href="/location-list">Locations</Button>

      <Route path="/character-list" component={CharacterList} />
      <Route path="/location-list" component={LocationList} />
    </main>
  );
}
