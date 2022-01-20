import getAllEvolutionChainFromSessionStorage from "./getAllEvolutionChainFromSessionStorage";
import { evolutionChainMap } from "../types/evolutionChainMap";

export default function getEvolutionChainFromSessionStorage(pokemonId: number) {
  const evolutionChains: evolutionChainMap =
    getAllEvolutionChainFromSessionStorage();

  const evolutionChain = evolutionChains[pokemonId];

  return evolutionChain;
}
