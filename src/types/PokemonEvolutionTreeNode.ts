export interface PokemonEvolutionTreeNode {
  pokemon: string;
  evolutions: PokemonEvolutionTreeNode[] | null;
}

// {
//   pokemon: wurmple,
//   evolutions: [
//     {pokemon: silcoon, evolutions: [{pokemon: beautifly}],
//     {pokemon: duskoon, evolutions: [{pokemon: dustox}]}
//   ]
// }
