import { Chain } from "../types/evolutionChain/Chain";
import { PokemonEvolutionNameTreeNode } from "../types/PokemonEvolutionNameTreeNode";

export function simplifyEvolutionChain(
  chain: Chain
): PokemonEvolutionNameTreeNode {
  const pokemonName = chain.species.name;
  // TODO: remembers the evolution_details for the evolution methods to become current pokemon
  // e.g) we do not remember pichu to pikachu in pichu, but we remember that in pikachu (that is how poke-api works)
  // Then, put the evolution_details in PokemonEvolutionNameTreeNode

  const nextPokemonData = chain.evolves_to;

  if (nextPokemonData.length === 0) {
    return { pokemonName: pokemonName, nextPokemon: null };
  }

  return {
    pokemonName: pokemonName,
    nextPokemon: nextPokemonData.map(simplifyEvolutionChain),
  };
}
