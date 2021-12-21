import { Chain } from "../types/evolutionChain/Chain";

export function getPathsFromEvolutionChain(
  chain: Chain,
  evolutionPathSet: Set<string>,
  currentPath: string[]
): Set<string> {
  const currentPokemonPath = currentPath.concat(chain.species.name);
  let currentEvolutionPathSet: Set<string> = evolutionPathSet;
  if (chain.evolves_to.length === 0) {
    currentEvolutionPathSet.add(JSON.stringify(currentPokemonPath));
    return currentEvolutionPathSet;
  }

  for (
    let pokemonInPath = 0;
    pokemonInPath < chain.evolves_to.length;
    pokemonInPath++
  ) {
    console.log(
      "get paths from evolution chain: ",
      getPathsFromEvolutionChain(
        chain.evolves_to[pokemonInPath],
        evolutionPathSet,
        currentPokemonPath
      )
    );

    getPathsFromEvolutionChain(
      chain.evolves_to[pokemonInPath],
      evolutionPathSet,
      currentPokemonPath
    ).forEach((path) => {
      currentEvolutionPathSet.add(path);
    });
  }

  console.log("current evolution path array: ", currentEvolutionPathSet);
  return currentEvolutionPathSet;
}
