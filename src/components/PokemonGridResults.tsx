import React from "react";
import { Pokemon } from "../types/Pokemon";
import PokemonGridItems from "./PokemonGridItems";

export interface PokemonGridResultsProps {
  Pokemon: Pokemon[];
}

export default function PokemonGridResults(
  allPokemon: PokemonGridResultsProps
) {
  console.log(allPokemon);
  console.log("allPokemonResults^^^");

  const mapped = allPokemon.Pokemon.map((pokemon: Pokemon) => {
    return (
      <PokemonGridItems
        name={pokemon.name}
        index={pokemon.id}
        image={pokemon.sprites.front_default}
      />
    );
  });
  console.log(mapped);
  console.log("mapped^^");

  return <div>{mapped}</div>;
}
