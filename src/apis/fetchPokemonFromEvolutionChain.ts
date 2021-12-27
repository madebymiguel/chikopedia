// evolutionPathArray is 2d array and consist of 1st axis as possible paths of evolution chain of pokemon
// and 2nd axis as pokemon in the possible path of evolution chain
// ex. for the case of wurmple's evolution chain, it would look like:
// [
//   [wurmple, silcoon, beautifly],
//   [wurmple, cascoon, dustox]
// ]

import { PokemonEvolutionNameTreeNode } from "../types/PokemonEvolutionNameTreeNode";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import { SimplePokemon } from "../types/SimplePokemon";
import { fetchPokemon } from "./fetchPokemon";

export default async function fetchPokemonFromEvolutionChain(
  evolutionChainRoot: PokemonEvolutionNameTreeNode
): Promise<PokemonEvolutionTreeNode> {
  const pokemonName = evolutionChainRoot.pokemonName;

  //TODO: put evolution_details here
  const nextPokemonData = evolutionChainRoot.nextPokemon;

  const simplePokemonData = await fetchPokemon(pokemonName).then((pokemon) => {
    const simplePokemon: SimplePokemon = {
      id: pokemon.id,
      name: pokemon.name,
      sprite: pokemon.sprites.front_default,
    };
    return simplePokemon;
  });

  if (nextPokemonData === null || nextPokemonData.length === 0) {
    return { pokemon: simplePokemonData, nextPokemon: null };
  }

  return {
    pokemon: simplePokemonData,
    nextPokemon: await Promise.all(
      nextPokemonData.map(fetchPokemonFromEvolutionChain)
    ),
  };
}
