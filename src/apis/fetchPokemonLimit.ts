import { Pokemon } from "../types/Pokemon";
import { PokemonLimit } from "../types/PokemonLimit";

export async function fetchPokemonLimit(index: string | number) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${index}`);
    const pokemonResult: PokemonLimit = await res.json();
    return pokemonResult;
  } catch (err) {
    console.log("Pokemon Not Fount. Error is ", err);
    return {} as Pokemon;
  }
}
