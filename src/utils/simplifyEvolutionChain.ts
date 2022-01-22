import { Chain } from "../types/evolutionChain/Chain";
import { PokemonEvolutionNameTreeNode } from "../types/PokemonEvolutionNameTreeNode";

// Return simplified version of evolution chain tree from given Chain
// For example, the given chain is from API
export default function simplifyEvolutionChain(
  chain: Chain
): PokemonEvolutionNameTreeNode {
  const pokemonUrl = chain.species.url.split("/");

  const pokemonId = pokemonUrl[pokemonUrl.length - 2];
  const pokemonEvolutionDetail = chain.evolution_details;
  const nextPokemonData = chain.evolves_to;

  if (nextPokemonData.length === 0) {
    return {
      pokemonId: pokemonId,
      evolutionDetail: pokemonEvolutionDetail,
      nextPokemon: null,
    };
  }

  return {
    pokemonId: pokemonId,
    evolutionDetail: pokemonEvolutionDetail,
    nextPokemon: nextPokemonData.map(simplifyEvolutionChain),
  };
}
