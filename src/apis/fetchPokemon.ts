import { Pokemon } from "../types/Pokemon";

export async function fetchPokemon(index: string | number) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const pokemonResult: Pokemon = await res.json();
    return pokemonResult;
  } catch (err) {
    return {} as Pokemon;
  }

}
