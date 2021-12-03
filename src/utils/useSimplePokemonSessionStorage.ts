import { SimplePokemon } from "../types/SimplePokemon";
import { SIMPLE_KEY } from "../Variables/globalVariables";

const setPokemonStorage = (value: SimplePokemon[]) => {
  sessionStorage.setItem(SIMPLE_KEY, JSON.stringify(value));
};

export default function useSimplePokemonSessionStorage(
  allSimplePokemon: SimplePokemon[]
): [SimplePokemon[], (value: SimplePokemon[]) => void] {
  const stored = sessionStorage.getItem(SIMPLE_KEY);

  if (stored === null) {
    setPokemonStorage(allSimplePokemon);
  }

  const simplePokemonArray: SimplePokemon[] =
    stored === null ? allSimplePokemon : JSON.parse(stored);

  return [simplePokemonArray, setPokemonStorage];
}
