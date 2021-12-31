import { PokemonEvolutionTreeNode } from "./PokemonEvolutionTreeNode";

export interface evolutionChainMap {
  [pokemonId: number]: PokemonEvolutionTreeNode;
}
