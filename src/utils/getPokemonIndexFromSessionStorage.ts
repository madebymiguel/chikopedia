import { fetchPokemon } from "../apis/fetchPokemon";
import { SimplePokemon } from "../types/SimplePokemon";
import fuzzySearchFromSessionStorage from "./fuzzySearchFromSessionStorage";

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
        // Might put this code block back if we do lazy loading
        // const pokemonData = isString
        //   ? await fetchPokemon(search.toLowerCase())
        //   : await fetchPokemon(search);
        // console.log(pokemonData, "is pokemon searched");
        // if (Object.keys(pokemonData).length > 0) {
        //   return pokemonData.id;
        // }
        // fuzzy search will happen here (as search input is not found in either session storage or api)
        const result = isString ? fuzzySearchFromSessionStorage(search) : 0;
        return result;
      }
    }
    return 0;
  }
  return 0;
}
