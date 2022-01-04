import { EvolutionDetail } from "./evolutionChain/EvolutionDetail";

export interface PokemonEvolutionNameTreeNode {
  pokemonName: string;
  evolutionDetail: EvolutionDetail[];
  nextPokemon: PokemonEvolutionNameTreeNode[] | null;
}
