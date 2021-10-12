import React, { useState, useEffect } from "react";
import { Pokemon } from "../types/Pokemon";
import "../scss/PokemonGrid.scss";
import { fetchPokemon } from "../apis/fetchPokemon";
import PokemonGridResults from "./PokemonGridResults";

export default function PokemonGrid() {
  const POKEMON_LIMIT = 10;

  const [allPokemon, setallPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    getAllPokemon();
    // console.log("pokemons^^");
  }, []);

  // useEffect(() => {
  //   getPokemonGridResults();
  // }, [allPokemon]);

  const getAllPokemon = () => {
    const allPokemonData: Pokemon[] = [];
    for (let i = 1; i <= POKEMON_LIMIT; i++) {
      const res = fetchPokemon(i);
      res.then((pokemon: Pokemon) => {
        allPokemonData.push(pokemon);
      });
    }
    const sortedPokemonData = sortPokemon(allPokemonData);
    setallPokemon(sortedPokemonData);
    console.log(allPokemonData);
    console.log("allPokemonData^^^");
    console.log(allPokemon);
    console.log("allPokemon^^^");
  };

  const sortPokemon = (pokemonArray: Pokemon[]) => {
    const result = pokemonArray.sort((pokemon1, pokemon2) =>
      pokemon1.id > pokemon2.id ? 1 : -1
    );
    return result;
  };

  console.log(allPokemon);
  console.log("allPokemon outside^^^");

  // const getPokemonGridResults = () => {
  //   console.log(allPokemon);
  //   console.log("allPokemon grid^^^");
  //   return <Results Pokemon={allPokemon} />;
  // };

  return (
    <div id="pokemon-grid">
      Pokemon Grid
      <div id="inner">
        <PokemonGridResults Pokemon={allPokemon} />
        {/* {getPokemonGridResults()} */}
      </div>
    </div>
  );
}
