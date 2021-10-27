import React, { useState, useEffect } from "react";
import { Pokemon } from "../types/Pokemon";
import "../scss/pokemonGrid.scss";
// import { fetchPokemon } from "../apis/fetchPokemon";
import PokemonGridResults from "./PokemonGridResults";
import sortPokemon from "../utils/sortPokemon";

const POKEMON_LIMIT = 10;

export default function PokemonGrid() {
  const [allPokemon, setallPokemon] = useState<Pokemon[]>([]);
  const [finishedFetching, setFinishedFetching] = useState(false);

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
    <div id="pokemon-grid-container">
      {finishedFetching ? (
        <PokemonGridResults pokemon={allPokemon} />
      ) : (
        <span> Loading ... </span>
      )}
    </div>
  );
}
