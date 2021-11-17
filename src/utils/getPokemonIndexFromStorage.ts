import { SimplePokemon } from "../types/SimplePokemon";


export default function getPokemonIndexFromStorage(search: string | number) {
    console.log("search is: ", search);
    if (search !== "") {
      const stored = sessionStorage.getItem("allSimplePokemon");
      if (stored !== null) {
        const storedData: SimplePokemon[] = JSON.parse(stored);
        const filteredStoredData = storedData.filter(
          (e: SimplePokemon) => e.name === search
        );
        console.log("searched value is " + search);
        console.log(filteredStoredData, " is filtered");
        if (filteredStoredData.length > 0) {
          return filteredStoredData[0].id;
        }
      }
      return "";
    }
    return search;
  }