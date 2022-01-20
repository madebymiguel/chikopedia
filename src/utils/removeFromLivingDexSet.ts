import getLivingDexSetFromSessionStorage from "./getLivingDexSetFromSessionStorage";
import { LIVING_DEX_KEY } from "../variables/globalVariables";

export default function removeFromLivingDexSet(pokemonIndex: number) {
  const livingDexSet = getLivingDexSetFromSessionStorage();
  delete livingDexSet[pokemonIndex];
  localStorage.setItem(LIVING_DEX_KEY, JSON.stringify(livingDexSet));
}
