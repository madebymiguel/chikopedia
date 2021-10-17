import React from "react";
import { Pokemon } from "../types/Pokemon";
import PokemonGridItems from "./PokemonGridItems";

export interface PokemonGridResultsProps {
  pokemon: Pokemon[];
}

export default function PokemonGridResults(
  {pokemon}: PokemonGridResultsProps
) {
  // return <div> {JSON.stringify(pokemon)} </div>
  console.log("pokemon Prop value: " , pokemon);
  const mapped = pokemon.map((pokemonObject: Pokemon) => {
    return (
      <PokemonGridItems
        name={pokemonObject.name}
        index={pokemonObject.id}
        image={pokemonObject.sprites.front_default}
      />
    );
  });
  console.log("all Pokemon actual value: ", mapped);

  return <div>{mapped}</div>;
}
