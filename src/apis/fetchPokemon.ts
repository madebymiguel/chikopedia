import { Pokemon } from "../types/pokemon/Pokemon";

export async function fetchPokemon(index: string | number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  const pokemonResult: Pokemon = await res.json();
  return pokemonResult;
}
