import { Pokemon } from "../types/pokemon/Pokemon";

// Sort pokemon of given list based on their id
export default function sortPokemon(pokemonArray: Pokemon[]) {
  const result = pokemonArray.sort((pokemon1, pokemon2) =>
    pokemon1.id > pokemon2.id ? 1 : -1
  );
  return result;
}
