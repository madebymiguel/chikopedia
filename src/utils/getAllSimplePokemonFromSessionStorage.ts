import { SimplePokemon } from "../types/SimplePokemon";
import { ALL_SIMPLE_POKEMON_KEY } from "../variables/globalVariables";

// Return current stored list of simplified pokemon
export default function getAllSimplePokemonFromSessionStorage() {
  const serializedAllSimplePokemon = sessionStorage.getItem(
    ALL_SIMPLE_POKEMON_KEY
  );

  const allSimplePokemonSet: SimplePokemon[] =
    serializedAllSimplePokemon === null
      ? {}
      : JSON.parse(serializedAllSimplePokemon);

  return allSimplePokemonSet;
}
