import getAllEvolutionChainFromSessionStorage from "./getAllEvolutionChainFromSessionStorage";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import { EVOLUTION_CHAIN_KEY } from "../variables/globalVariables";

// Save the pokemon's evolution chain whenever pokemon is accessed
export default function addEvolutionChainToSessionStorage(
  pokemonEvolutionId: number,
  evolutionChain: PokemonEvolutionTreeNode
) {
  const evolutionChains = getAllEvolutionChainFromSessionStorage();
  evolutionChains[pokemonEvolutionId] = evolutionChain;

  sessionStorage.setItem(EVOLUTION_CHAIN_KEY, JSON.stringify(evolutionChains));
}
