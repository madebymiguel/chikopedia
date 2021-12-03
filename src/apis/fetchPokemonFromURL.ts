import { Pokemon } from "../types/Pokemon";

export async function fetchPokemonFromURL(pokemonUrl: string) {
  const res = await fetch(pokemonUrl);
  const pokemonResult: Pokemon = await res.json();
  return pokemonResult;
}
