import { SimplePokemon } from "../types/SimplePokemon";
import { ALL_SIMPLE_POKEMON_KEY } from "../variables/globalVariables";
import getAllSimplePokemon from "./getAllSimplePokemon";

export default function addToAllSimplePokemon(simplePokemon: SimplePokemon) {
  const allSimplePokemonSet = getAllSimplePokemon();
  allSimplePokemonSet.push(simplePokemon);
  // setPokemonStorage(allSimplePokemonSet);
  sessionStorage.setItem(
    ALL_SIMPLE_POKEMON_KEY,
    JSON.stringify(allSimplePokemonSet)
  );
}
