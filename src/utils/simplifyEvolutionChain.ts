import { Chain } from "../types/evolutionChain/Chain";
import { PokemonEvolutionNameTreeNode } from "../types/PokemonEvolutionNameTreeNode";

export function simplifyEvolutionChain(
  chain: Chain
): PokemonEvolutionNameTreeNode {
  const pokemonName = chain.species.name;

  const nextPokemonData = chain.evolves_to;

  if (nextPokemonData.length === 0) {
    return { pokemonName: pokemonName, nextPokemon: null };
  }

  return {
    pokemonName: pokemonName,
    nextPokemon: nextPokemonData.map(simplifyEvolutionChain),
  };
}
