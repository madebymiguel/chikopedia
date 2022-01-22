import { useState } from "react";
import PokemonScroll from "./PokemonScroll";
import "../scss/PokemonScroll.scss";
import { SimplePokemon } from "../types/SimplePokemon";
import getPokemonScrollPositionFromSessionStorage from "../utils/getPokemonScrollPositionFromSessionStorage";
import {
  MAX_POKEMON,
  POKEMON_SCROLL_POSITION,
} from "../variables/globalVariables";

export interface PokemonScrollWithQueryProps {
  allPokemon: SimplePokemon[];
  livingDex: boolean;
  backToLastHomeState: number;
  handleBackButtonState: (val: number) => void;
}

export default function PokemonScrollWithQuery({
  allPokemon,
  livingDex,
  backToLastHomeState,
  handleBackButtonState,
}: PokemonScrollWithQueryProps) {
  // display 7 pokemon list (one main, 3 prev and 3 next pokemon)
  // show only the main pokemon sprite
  // arrow will switch the main pokemon as well as the pokemon previous and next to mai

  const MAX_SCROLL_POKEMON = 7;

  // use history to keep track of user's latest pokemon
  const pokemonScrollPosition = getPokemonScrollPositionFromSessionStorage();
  const [currentIndex, setCurrentIndex] = useState(pokemonScrollPosition);

  const handlePokemonScrollPosition = (index: number) => {
    sessionStorage.setItem(POKEMON_SCROLL_POSITION, JSON.stringify(index));
    setCurrentIndex(index);
  };

  const currentSprite = allPokemon[currentIndex - 1].sprite;

  const pokemonInScroll: SimplePokemon[] = [];

  for (
    let i = currentIndex - Math.round(MAX_SCROLL_POKEMON / 2);
    i < currentIndex + Math.floor(MAX_SCROLL_POKEMON / 2);
    i++
  ) {
    if (i >= 0 && i <= MAX_POKEMON - 1) {
      const currentPokemon = allPokemon[i];
      pokemonInScroll.push(currentPokemon);
    }
  }

  return (
    <PokemonScroll
      pokemonInScroll={pokemonInScroll}
      currentIndex={currentIndex}
      currentSprite={currentSprite}
      maxScrollPokemon={MAX_SCROLL_POKEMON}
      handlePokemonScrollPosition={handlePokemonScrollPosition}
      livingDex={livingDex}
      backToLastHomeState={backToLastHomeState}
      handleBackButtonState={handleBackButtonState}
    />
  );
}
