import { fetchPokemon } from "../apis/fetchPokemon";
import { SimplePokemon } from "../types/SimplePokemon";

export default async function getPokemonIndexFromStorage(
  search: string | number
) {
  if (search !== "") {
    const isString = typeof search === "string";
    const stored = sessionStorage.getItem("allSimplePokemon");
    if (stored !== null) {
      const storedData: SimplePokemon[] = JSON.parse(stored);
      const filteredStoredData = storedData.filter((e: SimplePokemon) =>
        isString ? e.name === search.toLowerCase() : e.id == search
      );
      if (filteredStoredData.length > 0) {
        return filteredStoredData[0].id;
      } else {
        const pokemonData = await fetchPokemon(search);
        if (Object.keys(pokemonData).length > 0) {
          return pokemonData.id;
        }
        return 0;
      }
    }
    return 0;
  }
  return 0;
}
