import { EvolutionDetail } from "../types/evolutionChain/EvolutionDetail";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import { SimplePokemon } from "../types/SimplePokemon";
import {
  evolutionPath,
  SimplePokemonWithEvolutionDetail,
} from "../types/SimplePokemonWithEvolutionDetail";

export function getEvolutionPathsFromTree(
  pokemonEvolutionTree: PokemonEvolutionTreeNode,
  previousPokemon: evolutionPath = []
): evolutionPath[] {
  const pokemon: SimplePokemon = pokemonEvolutionTree.pokemon;

  const evolutionDetail: EvolutionDetail[] =
    pokemonEvolutionTree.evolutionDetail;

  const nextPokemonData = pokemonEvolutionTree.nextPokemon;

  const pokemonEvolutionData = {
    simplePokemon: pokemon,
    evolutionDetail: evolutionDetail,
  } as SimplePokemonWithEvolutionDetail;

  if (nextPokemonData === null || nextPokemonData.length === 0) {
    return [previousPokemon.concat(pokemonEvolutionData)];
  }

  return nextPokemonData
    .map((evolution) =>
      getEvolutionPathsFromTree(
        evolution,
        previousPokemon.concat(pokemonEvolutionData)
      )
    )
    .flat();
}
