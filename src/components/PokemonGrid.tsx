import React, { useState, useEffect } from "react";
import { Pokemon } from "../types/Pokemon";
import "../scss/pokemonGrid.scss";
// import { fetchPokemon } from "../apis/fetchPokemon";
import PokemonGridResults from "./PokemonGridResults";
import sortPokemon from "../utils/sortPokemon";
import { SimplePokemon } from "../types/SimplePokemon";

export interface PokemonGridProps {
  isLoading: boolean;
  allPokemon: SimplePokemon[];
}

export default function PokemonGrid({
  isLoading,
  allPokemon,
}: PokemonGridProps) {
  return (
    <div id="pokemon-grid-container">
      {!isLoading ? (
        <PokemonGridResults pokemon={allPokemon} />
      ) : (
        <span> Loading ... </span>
      )}
    </div>
  );
}
