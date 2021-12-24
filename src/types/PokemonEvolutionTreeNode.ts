import { SimplePokemon } from "./SimplePokemon";

export interface PokemonEvolutionTreeNode {
  pokemon: SimplePokemon;
  nextPokemon: PokemonEvolutionTreeNode[] | null;
}
