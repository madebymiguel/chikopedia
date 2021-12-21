import { Chain } from "../types/evolutionChain/Chain";

export function getSpritesFromEvolutionChain(
  chain: Chain,
  evolutionPathArray: string[][],
  currentPath: string[]
) {
  currentPath.push(chain.species.name);
  if (chain.evolves_to.length === 0) {
    console.log(currentPath);
    console.log(evolutionPathArray);
    evolutionPathArray.push(currentPath);
  }

  if (chain.evolves_to.length > 0) {
    for (let i = 0; i < chain.evolves_to.length; i++) {
      getSpritesFromEvolutionChain(
        chain.evolves_to[i],
        evolutionPathArray,
        currentPath.slice(0, 2) // we would introduce height to make sure it parses properly with tree
      );
    }
  }
  return evolutionPathArray;
}
