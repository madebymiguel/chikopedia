import { evolutoinChainMap } from "../types/evolutionChainMap";
import getEvolutionChainStorage from "./getEvolutionChainStorage";

export default function searchEvolutionChainFromSessionStorage(
  pokemonId: number
) {
  const evolutionChains: evolutoinChainMap = getEvolutionChainStorage();

  const evolutionChain = evolutionChains[pokemonId];

  return evolutionChain;
}
