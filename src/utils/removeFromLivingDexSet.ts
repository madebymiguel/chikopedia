import getLivingDexSetFromSessionStorage from "./getLivingDexSetFromSessionStorage";
import { LIVING_DEX_KEY } from "../variables/globalVariables";

// Turn off the living dex status for the specific pokemon of given pokemon index
// In other words, the specific pokemon is uncaught
export default function removeFromLivingDexSet(pokemonIndex: number) {
  const livingDexSet = getLivingDexSetFromSessionStorage();
  delete livingDexSet[pokemonIndex];
  localStorage.setItem(LIVING_DEX_KEY, JSON.stringify(livingDexSet));
}
