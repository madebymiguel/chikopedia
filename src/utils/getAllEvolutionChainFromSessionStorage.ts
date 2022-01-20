import { evolutionChainMap } from "../types/evolutionChainMap";
import { EVOLUTION_CHAIN_KEY } from "../variables/globalVariables";

export default function getAllEvolutionChainFromSessionStorage() {
  const serializedEvolutionChains = sessionStorage.getItem(EVOLUTION_CHAIN_KEY);

  const evolutionChains: evolutionChainMap =
    serializedEvolutionChains === null
      ? {}
      : JSON.parse(serializedEvolutionChains);

  return evolutionChains;
}
