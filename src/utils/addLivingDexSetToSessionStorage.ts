import getLivingDexSetFromSessionStorage from "./getLivingDexSetFromSessionStorage";
import { LIVING_DEX_KEY } from "../variables/globalVariables";

export default function addLivingDexSetToSessionStorage(pokemonIndex: number) {
  const livingDexSet = getLivingDexSetFromSessionStorage();
  livingDexSet[pokemonIndex] = true;
  localStorage.setItem(LIVING_DEX_KEY, JSON.stringify(livingDexSet));
}
