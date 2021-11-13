import { SimplePokemon } from "../types/SimplePokemon";

const key = "allSimplePokemon";

const setPokemonStorage = (value: SimplePokemon[]) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export default function useSimplePokemonSessionStorage(
  allSimplePokemon: SimplePokemon[]
): [SimplePokemon[], (value: SimplePokemon[]) => void] {
  const stored = sessionStorage.getItem(key);

  if (stored === null) {
    setPokemonStorage(allSimplePokemon);
  }

  const simplePokemonArray: SimplePokemon[] =
    stored === null ? allSimplePokemon : JSON.parse(stored);

  return [simplePokemonArray, setPokemonStorage];
}
