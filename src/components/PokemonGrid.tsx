import { useMemo } from "react";
import PokemonGridItem from "./PokemonGridItem";
import "../scss/PokemonGrid.scss";
import { SimplePokemon } from "../types/SimplePokemon";

export interface PokemonGridProps {
  allPokemon: SimplePokemon[];
  livingDex: boolean;
  backToLastHomeState: number;
  handleBackButtonState: (val: number) => void;
}

export default function PokemonGrid({
  allPokemon,
  livingDex,
  backToLastHomeState,
  handleBackButtonState,
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
          backToLastHomeState={backToLastHomeState}
          handleBackButtonState={handleBackButtonState}
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
