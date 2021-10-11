import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { fetchPokemon } from "../apis/fetchPokemon";
import { fetchPokemonLimit } from "../apis/fetchPokemonLimit";
import { Pokemon } from "../types/Pokemon";
import { PokemonGridComponent } from "../types/PokemonGridComponent";
import { PokemonGridItem } from "../types/PokemonGridItem";
import PokemonGridItems from "./PokemonGridItems";
import "../scss/PokemonGrid.scss";
import { PokemonLimit } from "../types/PokemonLimit";

export default function PokemonGrid() {
  const POKEMON_LIMIT = 10;

  // const [allPokemons, setAllPokemons] = useState<PokemonLimit>();
  // const [pokemonGrid, setPokemonGrid] = useState<PokemonGridComponent>();
  // const [pokemonGridItems, setPokemonGridItems] = useState<PokemonGridItems>();

  const allPokemonData = [] as Pokemon[];
  const [pokemons, setallPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    getAllPokemon();
    console.log(pokemons);
    console.log("pokemons");
  }, []);

  const getAllPokemon = () => {
    const res = fetchPokemonLimit(POKEMON_LIMIT);
    res.then((allPokemon) => {
      allPokemon.results.forEach((pokemonLimitItem) => {
        const pokemonData = fetchPokemonData(pokemonLimitItem.url);
        pokemonData.then((pokemon) => {
          // const tempPokemon = [...pokemons];
          // console.log(tempPokemon);
          // console.log("tempfirst^^^");
          // tempPokemon.push(pokemon);
          // setallPokemonData(tempPokemon);
          // console.log(tempPokemon);
          // console.log("tempsecond^^^");
          // console.log(pokemons);
          // console.log("pokemons^^^");
          allPokemonData.push(pokemon);
        });
      });
    });
    setallPokemonData(allPokemonData);
    // console.log(allPokemonData);
  };

  const getPokemonGridResults = () => {
    console.log("here");
    console.log(pokemons);
    console.log("here2");
    const grid = pokemons.map((pokemon: Pokemon) => {
      return (
        <PokemonGridItems
          name={pokemon.name}
          index={pokemon.id}
          image={pokemon.sprites.front_default}
        />
      );
    });
    console.log(grid);
    console.log("grid^^^");
    return grid;
  };

  //const allPokemonGridData = getPokemonGridResults();

  const fetchPokemonData = async (pokemonUrl: string) => {
    const res = await fetch(pokemonUrl);
    const pokemonResult: Pokemon = await res.json();
    return pokemonResult;
  };

  return (
    <div id="pokemon-grid">
      Pokemon Grid
      {/* <button onClick={() => getPokemonGridResults()}>
        Don't Click This!!
      </button> */}
      <div id="inner"> {getPokemonGridResults()}</div>
      {/* <PokemonGridComponent /> */}
    </div>
  );
}
