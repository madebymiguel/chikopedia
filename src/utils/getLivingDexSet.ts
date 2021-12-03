import { LIVING_DEX_KEY } from "../variables/globalVariables";

export function getLivingDexSet() {
  const serializedLivingDexSet = sessionStorage.getItem(LIVING_DEX_KEY);

  const livingDexSet =
    serializedLivingDexSet === null ? {} : JSON.parse(serializedLivingDexSet);

  return livingDexSet;
}
