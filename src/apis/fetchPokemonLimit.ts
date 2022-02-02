import { PokemonLimit } from "../types/PokemonLimit";
// pokemon?limit=1118&offset=0
export async function fetchPokemonLimit(currentGen: number, lastGen: number) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${currentGen}offset=${lastGen}`
  );

  const pokemonResult: PokemonLimit = await res.json();
  return pokemonResult;
}
