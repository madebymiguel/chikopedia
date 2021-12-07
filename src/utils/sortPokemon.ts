import { Pokemon } from "../types/Pokemon";

export default function sortPokemon(pokemonArray: Pokemon[]) {
  const result = pokemonArray.sort((pokemon1, pokemon2) =>
    pokemon1.id > pokemon2.id ? 1 : -1
  );
  return result;
}
