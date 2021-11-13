import React from "react";
import "../scss/pokemonGrid.scss";
import PokemonGridResults from "./PokemonGridResults";
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
