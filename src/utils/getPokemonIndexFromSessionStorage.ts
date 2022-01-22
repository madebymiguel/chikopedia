import fuzzySearchFromSessionStorage from "./fuzzySearchFromSessionStorage";
import { SimplePokemon } from "../types/SimplePokemon";

// Return the specific index from the given search
// Expected outcomes are by following:
// 1) Exact match found in the storage
// 2) Typo-corrected result found in the storage
// 3) Predicted result that pokemon in the storage starts with the result
// Return 0 if not found
export default async function getPokemonIndexFromSessionStorage(
  search: string
) {
  if (search !== "") {
    const isString = isNaN(parseInt(search));
    const stored = sessionStorage.getItem("allSimplePokemon");

    if (stored !== null) {
      const storedData: SimplePokemon[] = JSON.parse(stored);
      const filteredStoredData = storedData.filter((e: SimplePokemon) =>
        isString ? e.name === search.toLowerCase() : e.id == parseInt(search)
      );
      if (filteredStoredData.length > 0) {
        return filteredStoredData[0].id;
      } else {
        const result = isString ? fuzzySearchFromSessionStorage(search) : 0;
        return result;
      }
    }
    return 0;
  }
  return 0;
}
