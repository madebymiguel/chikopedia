import { PokemonLimit } from "../types/PokemonLimit";

export async function fetchPokemonLimit(index: string | number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${index}`);

  const pokemonResult: PokemonLimit = await res.json();
  return pokemonResult;
}
