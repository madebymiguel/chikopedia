import { LIVING_DEX_KEY } from "../variables/globalVariables";

// Return current stored list of pokemon caught
export default function getLivingDexSetFromSessionStorage() {
  const serializedLivingDexSet = localStorage.getItem(LIVING_DEX_KEY);

  const livingDexSet =
    serializedLivingDexSet === null ? {} : JSON.parse(serializedLivingDexSet);

  return livingDexSet;
}
