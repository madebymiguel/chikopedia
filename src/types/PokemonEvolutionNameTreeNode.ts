import { EvolutionDetail } from "./evolutionChain/EvolutionDetail";

export interface PokemonEvolutionNameTreeNode {
  pokemonId: string;
  evolutionDetail: EvolutionDetail[];
  nextPokemon: PokemonEvolutionNameTreeNode[] | null;
}
