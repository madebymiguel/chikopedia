import { Pokemon } from "../types/Pokemon";

export default function getAllPokemon(numberOfPokemon: number) {
  const allPokemonToFetch = [];
  for (let i = 1; i <= numberOfPokemon; i++) {
    allPokemonToFetch.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
  }

  return Promise.all(allPokemonToFetch).then((responses) =>
    Promise.all<Pokemon>(responses.map((response) => response.json()))
  );
}
