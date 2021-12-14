import { Pokemon } from "../types/pokemon/Pokemon";

export default async function getAllPokemonData(index: number) {
  const pokemonDataToFetch = [
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${index}`),
  ];

  const fetchedPokemonData = await Promise.all(pokemonDataToFetch);
  return await Promise.all(
    fetchedPokemonData.map((response) => response.json())
  );
}
