import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <CharacterList />
      <LocationList />
    </main>
  );
}
