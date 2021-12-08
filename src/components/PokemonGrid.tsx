import React, { useMemo } from "react";
import "../scss/PokemonGrid.scss";
import { SimplePokemon } from "../types/SimplePokemon";
import PokemonGridItemWithQuery from "./PokemonGridItemWithQuery";

export interface PokemonGridProps {
  isLoading: boolean;
  allPokemon: SimplePokemon[];
  livingDex: boolean;
}

export default function PokemonGrid({
  isLoading,
  allPokemon,
  livingDex,
}: PokemonGridProps) {
  const pokemonGridItems = useMemo(() => {
    if (isLoading) {
      return [];
    }

    return allPokemon.map((pokemonObject: SimplePokemon) => {
      return (
        <PokemonGridItemWithQuery
          pokemonObject={pokemonObject}
          livingDex={livingDex}
        />
      );
    });
  }, [allPokemon, isLoading]);

  return (
    <div id="pokemon-grid-container">
      {isLoading ? (
        <span> Loading ... </span>
      ) : (
        <div id="pokemon-grid">{pokemonGridItems}</div>
      )}
    </div>
  );
}
