import addLivingDexSetToSessionStorage from "./addLivingDexSetToSessionStorage";
import removeFromLivingDexSet from "./removeFromLivingDexSet";
import greyPokeball from "../assets/grey-pokeball.svg";
import redPokeball from "../assets/red-pokeball.svg";

export interface handlePokeballColorChangeProps {
  pokeball: string;
  index: number;
  setPokeball: React.Dispatch<React.SetStateAction<string>>;
}

// Change the living dex status of specific pokemon
// whenever pokeball is clicked for the specific pokemon
export default function handlePokeballColorChange({
  pokeball,
  index,
  setPokeball,
}: handlePokeballColorChangeProps) {
  // If a pokeball was selected, and we now toggle to remove it
  if (pokeball === redPokeball) {
    removeFromLivingDexSet(index);
    setPokeball(greyPokeball);
  } else {
    addLivingDexSetToSessionStorage(index);
    setPokeball(redPokeball);
  }
}
