import { SimplePokemon } from "../types/SimplePokemon";
import getAllSimplePokemon from "./getAllSimplePokemon";

export default function searchPokemonFromSessionStorage(pokemonId: number) {
  const allSimplePokemonSet: SimplePokemon[] = getAllSimplePokemon();

  for (let i = 0; i < allSimplePokemonSet.length; i++) {
    const simplePokemon = allSimplePokemonSet[i];
    if (simplePokemon.id === pokemonId) {
      return simplePokemon;
    }
  }

  return null;
}
