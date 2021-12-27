import { evolutoinChainMap } from "../types/evolutionChainMap";
import { EVOLUTION_CHAIN_KEY } from "../variables/globalVariables";

const setEvolutionChainStorage = (value: evolutoinChainMap) => {
  sessionStorage.setItem(EVOLUTION_CHAIN_KEY, JSON.stringify(value));
};

export default function useEvolutionChainSessionStorage(
  evolutionChainArray: evolutoinChainMap
): [evolutoinChainMap, (value: evolutoinChainMap) => void] {
  const stored = sessionStorage.getItem(EVOLUTION_CHAIN_KEY);

  if (stored === null) {
    setEvolutionChainStorage(evolutionChainArray);
  }

  const evolutionChainResultArray: evolutoinChainMap =
    stored === null ? evolutionChainArray : JSON.parse(stored);

  return [evolutionChainResultArray, setEvolutionChainStorage];
}
