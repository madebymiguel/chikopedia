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
  // return <div> {JSON.stringify(pokemon)} </div>
  //console.log("pokemon Prop value: ", pokemon);
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
  //console.log("all Pokemon actual value: ", mapped);

  return <div id="pokemon-grid">{mapped}</div>;
}
