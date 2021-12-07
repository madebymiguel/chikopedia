import { PokemonSpecies } from "../types//pokemonSpecies/PokemonSpecies";

export async function fetchPokemon(index: string | number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${index}`);
  const pokemonResult: PokemonSpecies = await res.json();
  return pokemonResult;
}
