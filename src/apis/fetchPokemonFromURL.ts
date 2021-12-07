import { Pokemon } from "../types/pokemon/Pokemon";

export async function fetchPokemonFromURL(pokemonUrl: string) {
  const res = await fetch(pokemonUrl);
  const pokemonResult: Pokemon = await res.json();
  return pokemonResult;
}
