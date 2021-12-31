import getEvolutionChainStorage from "./getEvolutionChainStorage";
import { evolutionChainMap } from "../types/evolutionChainMap";

export default function getEvolutionChainFromSessionStorage(pokemonId: number) {
  const evolutionChains: evolutionChainMap = getEvolutionChainStorage();

  const evolutionChain = evolutionChains[pokemonId];

  return evolutionChain;
}
