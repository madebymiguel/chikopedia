import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../scss/App.scss";
import "../scss/Header.scss";
import Search from "./Search";
import Menu from "./Menu";
import PokemonGridWithQuery from "./PokemonGridWithQuery";
import CarouselWithQuery from "./CarouselWithQuery";

export default function App() {
  const [search, setSearch] = useState<string | number>("");
  const [pokedexStyle, setPokedexStyle] = useState<string>("grid");
  const [livingDex, setLivingDex] = useState<boolean>(false);
  return (
    <Router>
      <div id="page">
        <header id="header">
          <Link to="/">
            <h1>Chikopedia</h1>
          </Link>
          <Search search={search} setSearch={setSearch} />
          <Menu pokedexStyle={pokedexStyle} setPokedexStyle = {setPokedexStyle} livingDex={livingDex} setLivingDex={setLivingDex} />
        </header>
        <Switch>
          <Route exact path="/">
            <PokemonGridWithQuery />
          </Route>
          <Route
            path="/pokemon/:pokemonName"
            render={({ match }) => (
              <CarouselWithQuery pokemonName={match.params.pokemonName} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}
