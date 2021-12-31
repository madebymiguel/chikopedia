import getAllSimplePokemon from "./getAllSimplePokemon";
import { SimplePokemon } from "../types/SimplePokemon";
import { ALL_SIMPLE_POKEMON_KEY } from "../variables/globalVariables";

export default function addToAllSimplePokemon(simplePokemon: SimplePokemon) {
  const allSimplePokemonSet = getAllSimplePokemon();
  allSimplePokemonSet.push(simplePokemon);
  sessionStorage.setItem(
    ALL_SIMPLE_POKEMON_KEY,
    JSON.stringify(allSimplePokemonSet)
  );
}
