import { getLivingDexSet } from "./getLivingDexSet";
import { LIVING_DEX_KEY } from "../variables/globalVariables";

export function removeFromLivingDexSet(pokemonIndex: number) {
  const livingDexSet = getLivingDexSet();
  delete livingDexSet[pokemonIndex];
  sessionStorage.setItem(LIVING_DEX_KEY, JSON.stringify(livingDexSet));
}
