import { useMemo } from "react";
import PokemonGridItem from "./PokemonGridItem";
import "../scss/PokemonGrid.scss";
import { SimplePokemon } from "../types/SimplePokemon";

export interface PokemonGridProps {
  allPokemon: SimplePokemon[];
  livingDex: boolean;
}

export default function PokemonGrid({
  allPokemon,
  livingDex,
}: PokemonGridProps) {
  const pokemonGridItems = useMemo(() => {
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
  }, [allPokemon]);

  return (
    <div className="pokemon-grid-container">
      <div className="pokemon-grid">{pokemonGridItems}</div>
    </div>
  );
}
