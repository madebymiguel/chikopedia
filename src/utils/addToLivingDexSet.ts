import { LIVING_DEX_KEY } from "../Variables/globalVariables";
import { getLivingDexSet } from "./getLivingDexSet";

export function addToLivingDexSet(pokemonIndex: number) {
    const livingDexSet = getLivingDexSet();
    livingDexSet[pokemonIndex] = true;
    sessionStorage.setItem(LIVING_DEX_KEY, JSON.stringify(livingDexSet));
  }