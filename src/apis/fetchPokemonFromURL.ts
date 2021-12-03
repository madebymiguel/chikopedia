import { Pokemon } from "../types/Pokemon";

export async function fetchPokemonFromURL(pokemonUrl: string) {
  try {
    const res = await fetch(pokemonUrl);
    const pokemonResult: Pokemon = await res.json();
    return pokemonResult;
  } catch (err) {
    console.log("Pokemon Not Fount. Error is ", err);
    return {} as Pokemon;
  }
}
