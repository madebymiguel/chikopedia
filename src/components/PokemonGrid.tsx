import { useMemo } from "react";
import PokemonGridItem from "./PokemonGridItem";
import "../scss/PokemonGrid.scss";
import { SimplePokemon } from "../types/SimplePokemon";
import LoadingComponent from "./LoadingComponent";

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
    <div className="pokemon-grid-container">
      {isLoading ? (
        <div className="loading-container">
          <LoadingComponent />
        </div>
      ) : (
        <div className="pokemon-grid">{pokemonGridItems}</div>
      )}
    </div>
  );
}
