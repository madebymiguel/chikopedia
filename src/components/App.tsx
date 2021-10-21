import React, { useState } from "react";
import "../scss/App.scss";
import "../scss/Header.scss";
import Search from "./Search";
import PokemonGrid from "./PokemonGrid";
import Menu from "./Menu";
import Carousel from "./Carousel";

export default function App() {
  const [search, setSearch] = useState("" as string | number);
  //const search = useState("");
  return (
    <div id="page">
      <div id="header">
        <Search search={search} setSearch={setSearch} />
        <Menu />
      </div>

      {/* <PokemonGrid /> */}

      <Carousel pokemonName={search} />
    </div>
  );
}
