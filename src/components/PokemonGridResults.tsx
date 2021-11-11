import React from "react";
import { Pokemon } from "../types/Pokemon";
import PokemonGridItems from "./PokemonGridItems";
import "../scss/PokemonGrid.scss";
import { SimplePokemon } from "../utils/UseSessionStorage";

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
