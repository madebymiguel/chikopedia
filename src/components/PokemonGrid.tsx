import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { fetchPokemon } from "../apis/fetchPokemon";
import { Pokemon } from "../types/Pokemon";
import PokemonGridItem, { PokemonGridItemProps } from "./PokemonGridItem";
import "../scss/PokemonGrid.scss";

export default function PokemonGrid() {
  const POKEMON_LIMIT = 30;

  const [pokemons, setPokemons] = useState<Pokemon>();

  const getPokemon = (index: number) => {
    const res = fetchPokemon(index);
    res.then((pokemonObject) => {
      setPokemons(pokemonObject);
    });
    gridItem();
  };

  console.log(pokemons);

  const pokemonIteration = () => {
    for (let i = 1; i < POKEMON_LIMIT; i++) {
      getPokemon(i);
    }
  };

  const gridItem = () => {
    const gridContainer = document.getElementById("inner");
    const item = pokemons !== undefined && pokemons !== null && (
      <PokemonGridItem
        name={pokemons.name}
        index={pokemons.id}
        image={pokemons.sprites.front_default}
      />
    );
    if (item) {
      ReactDOM.render(item, gridContainer);
    }
  };

  return (
    <div id="pokemon-grid">
      Pokemon Grid
      <button onClick={() => pokemonIteration()}>Don't Click This!!</button>
      <div id="inner"></div>
    </div>
  );
}
