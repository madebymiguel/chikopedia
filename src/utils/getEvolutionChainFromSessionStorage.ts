import { evolutionChainMap } from "../types/evolutionChainMap";
import getEvolutionChainStorage from "./getEvolutionChainStorage";

export default function getEvolutionChainFromSessionStorage(pokemonId: number) {
  const evolutionChains: evolutionChainMap = getEvolutionChainStorage();

  const evolutionChain = evolutionChains[pokemonId];

  return evolutionChain;
}
