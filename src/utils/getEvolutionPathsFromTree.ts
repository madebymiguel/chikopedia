import { evolutionPath } from "../types/evolutionChain/EvolutionChain";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import { SimplePokemon } from "../types/SimplePokemon";

export function getEvolutionPathsFromTree(
  pokemonEvolutionTree: PokemonEvolutionTreeNode,
  previousPokemon: evolutionPath = []
): evolutionPath[] {
  const pokemon: SimplePokemon = pokemonEvolutionTree.pokemon;

  const nextPokemonData = pokemonEvolutionTree.nextPokemon;

  if (nextPokemonData === null || nextPokemonData.length === 0) {
    return [previousPokemon.concat(pokemon)];
  }

  console.log("pokemon: ", pokemon);
  console.log("next pokemon data is ", nextPokemonData);

  return nextPokemonData
    .map((evolution) =>
      getEvolutionPathsFromTree(evolution, previousPokemon.concat(pokemon))
    )
    .flat();
}
