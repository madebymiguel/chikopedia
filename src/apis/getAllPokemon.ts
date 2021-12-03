import { Pokemon } from "../types/Pokemon";

export default async function getAllPokemon(numberOfPokemon: number) {
  
  try {
    const allPokemonToFetch = [];
    for (let i = 1; i <= numberOfPokemon; i++) {
      allPokemonToFetch.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }
  
    const responses = await Promise.all(allPokemonToFetch);
    return await Promise.all<Pokemon>(responses.map((response) => response.json()));
  } catch (err) {
    console.log("Out of index limit for Pokedex, error is ", err);
    return [] as Pokemon[]; // expected behavior is still loading available pokemon, not return empty array
  }
}
