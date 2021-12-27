import { PokemonEvolutionTreeNode } from "./PokemonEvolutionTreeNode";

export interface evolutoinChainMap {
  [pokemonId: number]: PokemonEvolutionTreeNode;
}
