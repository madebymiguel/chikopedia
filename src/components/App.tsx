import React from "react";
import "../scss/App.scss";
import Search from "./Search";
import PokemonGrid from "./PokemonGrid";
import Menu from "./Menu";

export default function App() {
  return (
    <div id="page">
      <div id = "header">
        <Search />
        <Menu />
      </div>
      
      <div id="main-section">
        {/* <PokemonGrid /> */}
      </div>
    </div>
  );
}
