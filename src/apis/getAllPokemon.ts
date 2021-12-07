import { Pokemon } from "../types/pokemon/Pokemon";

export default async function getAllPokemon(numberOfPokemon: number) {
  const allPokemonToFetch = [];
  for (let i = 1; i <= numberOfPokemon; i++) {
    allPokemonToFetch.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
  }

  const responses = await Promise.all(allPokemonToFetch);
  return await Promise.all<Pokemon>(
    responses.map((response) => response.json())
  );
}
