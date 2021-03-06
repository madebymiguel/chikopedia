import { EvolutionDetail } from "./evolutionChain/EvolutionDetail";
import { SimplePokemon } from "./SimplePokemon";

export interface PokemonEvolutionTreeNode {
  pokemon: SimplePokemon;
  evolutionDetail: EvolutionDetail[];
  nextPokemon: PokemonEvolutionTreeNode[] | null;
}
