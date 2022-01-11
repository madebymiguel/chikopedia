import { SimplePokemon } from "../types/SimplePokemon";
import findOsaDistance from "./findOsaDistance";

export default function fuzzySearchFromSessionStorage(search: string): number {
  const stored = sessionStorage.getItem("allSimplePokemon");

  if (stored !== null) {
    const storedData: SimplePokemon[] = JSON.parse(stored);
    const pokemonWithMinimumDistance = storedData.reduce((prev, next) => {
      return findOsaDistance(search, prev.name) <
        findOsaDistance(search, next.name)
        ? prev
        : next;
    });
    return pokemonWithMinimumDistance.id;
  }
  return 0;
}
