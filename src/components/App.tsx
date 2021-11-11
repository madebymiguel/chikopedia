import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../scss/App.scss";
import "../scss/Header.scss";
import Search from "./Search";
import PokemonGrid from "./PokemonGrid";
import Menu from "./Menu";
import Carousel from "./Carousel";
import sortPokemon from "../utils/sortPokemon";
import { Pokemon } from "../types/Pokemon";
import { fetchPokemon } from "../apis/fetchPokemon";
import useSessionStorage, { SimplePokemon } from "../utils/UseSessionStorage";

// 898 pokemon
const POKEMON_LIMIT = 50;

export default function App() {
  const [search, setSearch] = useState<string | number>("");

  const [allPokemon, setallPokemon] = useState<Pokemon[]>([]);

  const [pokemonStorage, setPokemonStorage] = useSessionStorage(
    displayPokemon(allPokemon)
  );
  const [finishedFetching, setFinishedFetching] = useState<boolean>(false);

  useEffect(() => {
    getAllPokemon();
  }, []);

  const getAllPokemon = () => {
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
        const simplifiedPokemon: SimplePokemon[] =
          displayPokemon(sortedPokemonData);
        setPokemonStorage(JSON.stringify(simplifiedPokemon));
        console.log("simplifiedPokemon", simplifiedPokemon);
        setFinishedFetching(true);
      });
  };

  function displayPokemon(pokemonArray: Pokemon[]) {
    const simplifiedPokemon: SimplePokemon[] = pokemonArray.map((pokemon) => {
      const name = pokemon.name;
      const id = pokemon.id;
      const sprite = pokemon.sprites.front_default;
      return { name, id, sprite };
    });
    return simplifiedPokemon;
  }

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
              allPokemon={JSON.parse(pokemonStorage)}
            />
          </Route>
          <Route
            path="/pokemon/:pokemonName"
            render={({ match }) => (
              <Carousel pokemonName={match.params.pokemonName} />
            )}
          />
          <Route
            path="/pokemon/:pokemonName"
            render={() => (
              <Carousel pokemonName={search} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}
