import React from "react";
import "../scss/PokemonGrid.scss";
import PokemonGridItems from "./PokemonGridItems";
import { SimplePokemon } from "../types/SimplePokemon";

export interface PokemonGridResultsProps {
  pokemon: SimplePokemon[];
}

export default function PokemonGridResults({
  pokemon,
}: PokemonGridResultsProps) {
  const mapped = pokemon.map((pokemonObject: SimplePokemon) => {
    return (
      <PokemonGridItems
        key={pokemonObject.id}
        name={pokemonObject.name}
        index={pokemonObject.id}
        image={pokemonObject.sprite}
      />
    );
  });

  return <div id="pokemon-grid">{mapped}</div>;
}
