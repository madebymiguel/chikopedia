import React, { useState, useEffect } from "react";
import { Pokemon } from "../types/Pokemon";
import "../scss/pokemonGrid.scss";
// import { fetchPokemon } from "../apis/fetchPokemon";
import PokemonGridResults from "./PokemonGridResults";
import sortPokemon from "../utils/sortPokemon";
import { SimplePokemon } from "../utils/UseSessionStorage";

export interface PokemonGridProps {
  finishedFetching: boolean;
  allPokemon: SimplePokemon[];
}

export default function PokemonGrid({
  finishedFetching,
  allPokemon,
}: PokemonGridProps) {
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
