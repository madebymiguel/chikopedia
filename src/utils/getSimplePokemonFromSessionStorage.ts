import getAllSimplePokemonFromSessionStorage from "./getAllSimplePokemonFromSessionStorage";
import { SimplePokemon } from "../types/SimplePokemon";

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
