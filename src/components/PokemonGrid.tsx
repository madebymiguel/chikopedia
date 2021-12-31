import { useMemo } from "react";
import PokemonGridItem from "./PokemonGridItem";
import "../scss/PokemonGrid.scss";
import { SimplePokemon } from "../types/SimplePokemon";

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
        <PokemonGridItem
          key={pokemonObject.id}
          name={pokemonObject.name}
          index={pokemonObject.id}
          image={pokemonObject.sprite}
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
