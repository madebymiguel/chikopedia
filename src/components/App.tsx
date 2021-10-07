import React from "react";
import "../scss/App.scss";
import Search from "./Search";
import PokemonGrid from "./PokemonGrid";

export default function App() {
  return (
    <div id="page">
      <div>Chikopedia</div>
      <Search />
      <div id="main-section">
        <PokemonGrid />
      </div>
    </div>
  );
}
