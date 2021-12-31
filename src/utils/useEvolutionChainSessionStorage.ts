import { evolutionChainMap } from "../types/evolutionChainMap";
import { EVOLUTION_CHAIN_KEY } from "../variables/globalVariables";

const setEvolutionChainStorage = (value: evolutionChainMap) => {
  sessionStorage.setItem(EVOLUTION_CHAIN_KEY, JSON.stringify(value));
};

export default function useEvolutionChainSessionStorage(
  evolutionChainArray: evolutionChainMap
): [evolutionChainMap, (value: evolutionChainMap) => void] {
  const stored = sessionStorage.getItem(EVOLUTION_CHAIN_KEY);

  if (stored === null) {
    setEvolutionChainStorage(evolutionChainArray);
  }

  const evolutionChainResultArray: evolutionChainMap =
    stored === null ? evolutionChainArray : JSON.parse(stored);

  return [evolutionChainResultArray, setEvolutionChainStorage];
}
