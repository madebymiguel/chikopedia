import { useState } from "react";
import PokemonGridItem from "./PokemonGridItem";
import greyPokeball from "../assets/grey-pokeball.svg";
import redPokeball from "../assets/red-pokeball.svg";
import { getLivingDexSet } from "../utils/getLivingDexSet";
import { removeFromLivingDexSet } from "../utils/removeFromLivingDexSet";
import { addToLivingDexSet } from "../utils/addToLivingDexSet";
import { SimplePokemon } from "../types/SimplePokemon";

export interface PokemonGridItemWithQueryProps {
  pokemonObject: SimplePokemon;
  livingDex: boolean;
}

export default function PokemonGridItemWithQuery({
  pokemonObject,
  livingDex,
}: PokemonGridItemWithQueryProps) {
  const livingDexStorage = getLivingDexSet();

  const [pokeball, setPokeball] = useState(
    livingDexStorage[pokemonObject.id] ? redPokeball : greyPokeball
  );

  function handlePokeballColorChange() {
    // If a pokeball was selected, and we now toggle to remove it
    if (pokeball === redPokeball) {
      removeFromLivingDexSet(pokemonObject.id);
      setPokeball(greyPokeball);
    } else {
      addToLivingDexSet(pokemonObject.id);
      setPokeball(redPokeball);
    }
  }

  return (
    <PokemonGridItem
      key={pokemonObject.id}
      name={pokemonObject.name}
      index={pokemonObject.id}
      image={pokemonObject.sprite}
      livingDex={livingDex}
      pokeball={pokeball}
      handlePokeballColorChange={handlePokeballColorChange}
    />
  );
}
