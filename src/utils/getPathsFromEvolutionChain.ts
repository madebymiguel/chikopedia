import { Chain } from "../types/evolutionChain/Chain";

export function getPathsFromEvolutionChain(
  chain: Chain,
  evolutionPathArray: string[][],
  currentPath: string[]
) {
  currentPath = currentPath.concat(chain.species.name);
  if (chain.evolves_to.length === 0) {
    evolutionPathArray = evolutionPathArray.concat([currentPath]);
    return evolutionPathArray;
  }

  if (chain.evolves_to.length > 0) {
    for (
      let pokemonInPath = 0;
      pokemonInPath < chain.evolves_to.length;
      pokemonInPath++
    ) {
      evolutionPathArray = getPathsFromEvolutionChain(
        chain.evolves_to[pokemonInPath],
        evolutionPathArray,
        currentPath
      );
    }
  }
  return evolutionPathArray;
}
