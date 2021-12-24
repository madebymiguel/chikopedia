export interface PokemonEvolutionNameTreeNode {
  pokemonName: string;
  nextPokemon: PokemonEvolutionNameTreeNode[] | null;
}
