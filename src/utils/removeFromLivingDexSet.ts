import { LIVING_DEX_KEY } from "../variables/globalVariables";
import { getLivingDexSet } from "./getLivingDexSet";

export function removeFromLivingDexSet(pokemonIndex: number) {
  const livingDexSet = getLivingDexSet();
  delete livingDexSet[pokemonIndex];
  sessionStorage.setItem(LIVING_DEX_KEY, JSON.stringify(livingDexSet));
}
