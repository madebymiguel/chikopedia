import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
    <BrowserRouter>
      <div id="page">
        <div id="header">
          <Search search={search} setSearch={setSearch} />
          <Menu />
        </div>
        <Switch>
          <Route path="/">
            <PokemonGrid />
          </Route>
          <Route path={`pokemon/${search}`}>
            <div>hello</div>
            {/* <Carousel pokemonName={search} /> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
