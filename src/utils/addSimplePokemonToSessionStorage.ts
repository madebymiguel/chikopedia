import getAllSimplePokemonFromSessionStorage from "./getAllSimplePokemonFromSessionStorage";
import { SimplePokemon } from "../types/SimplePokemon";
import { ALL_SIMPLE_POKEMON_KEY } from "../variables/globalVariables";

export default function addSimplePokemonToSessionStorage(
  simplePokemon: SimplePokemon
) {
  const allSimplePokemonSet = getAllSimplePokemonFromSessionStorage();
  allSimplePokemonSet.push(simplePokemon);
  sessionStorage.setItem(
    ALL_SIMPLE_POKEMON_KEY,
    JSON.stringify(allSimplePokemonSet)
  );
}
