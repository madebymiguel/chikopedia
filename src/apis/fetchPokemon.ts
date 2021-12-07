import { Pokemon } from "../types/Pokemon";

export async function fetchPokemon(index: string | number) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const pokemonResult: Pokemon = await res.json();
    return pokemonResult;
  } catch (err) {
    console.log("Pokemon Not Fount. Error is ", err);
    return {} as Pokemon; // will work on expected error behavior -- maybe make some pseudo pokemon for error page, like missing no.
  }
}
