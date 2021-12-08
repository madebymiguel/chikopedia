import greyPokeball from "../assets/grey-pokeball.svg";
import redPokeball from "../assets/red-pokeball.svg";
import { addToLivingDexSet } from "./addToLivingDexSet";
import { removeFromLivingDexSet } from "./removeFromLivingDexSet";

export interface handlePokeballColorChangeProps {
  pokeball: string;
  index: number;
  setPokeball: React.Dispatch<React.SetStateAction<string>>;
}

export function handlePokeballColorChange({
  pokeball,
  index,
  setPokeball,
}: handlePokeballColorChangeProps) {
  // If a pokeball was selected, and we now toggle to remove it
  if (pokeball === redPokeball) {
    removeFromLivingDexSet(index);
    setPokeball(greyPokeball);
  } else {
    addToLivingDexSet(index);
    setPokeball(redPokeball);
  }
}
