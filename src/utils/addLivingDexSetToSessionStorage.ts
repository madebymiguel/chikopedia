import getLivingDexSetFromSessionStorage from "./getLivingDexSetFromSessionStorage";
import { LIVING_DEX_KEY } from "../variables/globalVariables";

// Turn on the living dex status for given pokemonindex
// in other words, the pokemon with given pokemonindex is caught.
export default function addLivingDexSetToSessionStorage(pokemonIndex: number) {
  const livingDexSet = getLivingDexSetFromSessionStorage();
  livingDexSet[pokemonIndex] = true;
  localStorage.setItem(LIVING_DEX_KEY, JSON.stringify(livingDexSet));
}
