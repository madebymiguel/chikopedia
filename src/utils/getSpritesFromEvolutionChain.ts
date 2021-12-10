import { Chain } from "../types/evolutionChain/Chain";

export function getSpritesFromEvolutionChain(
  chain: Chain,
  chainArray: string[]
) {
  if (chain.evolves_to.length === 0) {
    chainArray.push(chain.species.name);
  }

  if (chain.evolves_to.length > 0) {
    chainArray.push(chain.species.name);
    for (let i = 0; i < chain.evolves_to.length; i++) {
      getSpritesFromEvolutionChain(chain.evolves_to[i], chainArray);
    }
  }
  return chainArray;
}

// if (evolutionChain.chain.evolves_to.length > 0) {
//   chainArray.push(evolutionChain.chain.evolves_to[0].species.name);
//   if (evolutionChain.chain.evolves_to[0].evolves_to.length > 0) {
//     chainArray.push(
//       evolutionChain.chain.evolves_to[0].evolves_to[0].species.name
//     );
//   }
// }

// {
//   pokemon: wurmple,
//   evolutions: [
//     {pokemon: silcoon, evolutions: [{pokemon: beautifly}],
//     {pokemon: duskoon, evolutions: [{pokemon: dustox}]}
//   ]
// }

// export function getSpritesFromEvolutionChain({
//   pokemon,
//   evolutions,
// } : PokemonEvolutionTreeNode
// ): PokemonEvolutionTreeNode {
//   if (chain.evolves_to.length === 0) {
//     return { pokemon: chain.species.name, evolutions: null };
//   }
//   return { pokemon: chain.species.name, evolutions:
//     getSpritesFromEvolutionChain(chain.evolves_to, chainArray);
//   };
