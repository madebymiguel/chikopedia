import getAllEvolutionChainFromSessionStorage from "./getAllEvolutionChainFromSessionStorage";
import { evolutionChainMap } from "../types/evolutionChainMap";

// Return specific evolution chain based on given evolution id
export default function getEvolutionChainFromSessionStorage(
  evolutionId: number
) {
  const evolutionChains: evolutionChainMap =
    getAllEvolutionChainFromSessionStorage();

  const evolutionChain = evolutionChains[evolutionId];

  return evolutionChain;
}
