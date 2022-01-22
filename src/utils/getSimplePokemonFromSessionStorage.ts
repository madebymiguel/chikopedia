import getAllSimplePokemonFromSessionStorage from "./getAllSimplePokemonFromSessionStorage";
import { SimplePokemon } from "../types/SimplePokemon";

// Return the specific simplified pokemon based on given id
// return null if not found
export default function getSimplePokemonFromSessionStorage(pokemonId: number) {
  const allSimplePokemonSet: SimplePokemon[] =
    getAllSimplePokemonFromSessionStorage();

  for (let i = 0; i < allSimplePokemonSet.length; i++) {
    const simplePokemon = allSimplePokemonSet[i];
    if (simplePokemon.id === pokemonId) {
      return simplePokemon;
    }
  }

  return null;
}
