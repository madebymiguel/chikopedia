import React from "react";
import "../scss/PokemonGrid.scss";
import PokemonGridItems from "./PokemonGridItems";
import { SimplePokemon } from "../types/SimplePokemon";

export interface PokemonGridResultsProps {
  pokemon: SimplePokemon[];
  livingDex: boolean;
}

export default function PokemonGridResults({
  pokemon,
  livingDex,
}: PokemonGridResultsProps) {
  const mapped = pokemon.map((pokemonObject: SimplePokemon) => {
    return (
      <PokemonGridItems
        key={pokemonObject.id}
        name={pokemonObject.name}
        index={pokemonObject.id}
        image={pokemonObject.sprite}
        livingDex={livingDex}
      />
    );
  });

  return <div id="pokemon-grid">{mapped}</div>;
}
