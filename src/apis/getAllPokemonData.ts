import { Pokemon } from "../types/pokemon/Pokemon";

export default async function getAllPokemonData(index: number) {
  const pokemonDataToFetch = [];

  pokemonDataToFetch.push(fetch(`https://pokeapi.co/api/v2/pokemon/${index}`));
  pokemonDataToFetch.push(
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${index}`)
  );

  const fetchedPokemonData = await Promise.all(pokemonDataToFetch);
  return await Promise.all(
    fetchedPokemonData.map((response) => response.json())
  );
}
