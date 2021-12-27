import { SimplePokemon } from "../types/SimplePokemon";
import { ALL_SIMPLE_POKEMON_KEY } from "../variables/globalVariables";

const setPokemonStorage = (value: SimplePokemon[]) => {
  sessionStorage.setItem(ALL_SIMPLE_POKEMON_KEY, JSON.stringify(value));
};

export default function useSimplePokemonSessionStorage(
  allSimplePokemon: SimplePokemon[]
): [SimplePokemon[], (value: SimplePokemon[]) => void] {
  const stored = sessionStorage.getItem(ALL_SIMPLE_POKEMON_KEY);

  if (stored === null) {
    setPokemonStorage(allSimplePokemon);
  }

  const simplePokemonArray: SimplePokemon[] =
    stored === null ? allSimplePokemon : JSON.parse(stored);

  return [simplePokemonArray, setPokemonStorage];
}
