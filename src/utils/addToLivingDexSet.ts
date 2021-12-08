import { getLivingDexSet } from "./getLivingDexSet";
import { LIVING_DEX_KEY } from "../variables/globalVariables";

export function addToLivingDexSet(pokemonIndex: number) {
  const livingDexSet = getLivingDexSet();
  livingDexSet[pokemonIndex] = true;
  sessionStorage.setItem(LIVING_DEX_KEY, JSON.stringify(livingDexSet));
}
