import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  RouteComponentProps,
  match,
} from "react-router-dom";
import "../scss/App.scss";
import "../scss/Header.scss";
import Search from "./Search";
import PokemonGrid from "./PokemonGrid";
import Menu from "./Menu";
import Carousel from "./Carousel";
import sortPokemon from "../utils/sortPokemon";
import { Pokemon } from "../types/Pokemon";
import { fetchPokemon } from "../apis/fetchPokemon";

const POKEMON_LIMIT = 10;

export default function App() {
  const [search, setSearch] = useState<string | number>("");

  const [allPokemon, setallPokemon] = useState<Pokemon[]>([]);
  const [finishedFetching, setFinishedFetching] = useState<boolean>(false);

  // {
  //   match,
  // }: RouteComponentProps<{ pokemonName: string }>
  // const { pokemonid }: MatchParams = match.params;

  useEffect(() => {
    getAllPokemon();
  }, []);

  const getAllPokemon = () => {
    // const allPokemonData: Pokemon[] = [];
    const allPokemonToFetch = [];
    for (let i = 1; i <= POKEMON_LIMIT; i++) {
      allPokemonToFetch.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }

    Promise.all(allPokemonToFetch)
      .then(function (responses) {
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then(function (data) {
        const sortedPokemonData = sortPokemon(data);
        setallPokemon(sortedPokemonData);
        setFinishedFetching(true);
      });
  };

  return (
    <Router>
      <div id="page">
        <div id="header">
          <Link to="/">
            <h1>Chikopedia</h1>
          </Link>
          <Search search={search} setSearch={setSearch} />
          <Menu />
        </div>
        <Switch>
          <Route exact path="/">
            <PokemonGrid
              finishedFetching={finishedFetching}
              allPokemon={allPokemon}
            />
          </Route>
          <Route
            path="/pokemon/:pokemonName"
            render={(props) => <Carousel {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
