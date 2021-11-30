const key = "livingDex";

export function getLivingDexSet() {
  const serializedLivingDexSet = sessionStorage.getItem(key);

  const livingDexSet =
    serializedLivingDexSet === null ? {} : JSON.parse(serializedLivingDexSet);

  return livingDexSet;
}

export function addToLivingDexSet(pokemonIndex: number) {
  const livingDexSet = getLivingDexSet();
  livingDexSet[pokemonIndex] = true;
  sessionStorage.setItem(key, JSON.stringify(livingDexSet));
}

export function removeFromLivingDexSet(pokemonIndex: number) {
  const livingDexSet = getLivingDexSet();
  delete livingDexSet[pokemonIndex];
  sessionStorage.setItem(key, JSON.stringify(livingDexSet));
}
