import findOsaDistance from "./findOsaDistance";
import { SimplePokemon } from "../types/SimplePokemon";

// Using Damerau–Levenshtein distance algorithm
// check wikipedia for the details: https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance
export default function fuzzySearchFromSessionStorage(search: string): number {
  const stored = sessionStorage.getItem("allSimplePokemon");

  if (stored !== null) {
    const storedData: SimplePokemon[] = JSON.parse(stored);
    const filteredData: SimplePokemon[] = [];

    let pokemonWithMinimumDistanceId = 0;
    let minimumDistance = 10000;

    storedData.forEach((pokemon) => {
      const distance = findOsaDistance(search, pokemon.name);
      if (distance < minimumDistance) {
        pokemonWithMinimumDistanceId = pokemon.id;
        minimumDistance = distance;
      }
      if (pokemon.name.startsWith(search)) {
        filteredData.push(pokemon);
      }
    });

    // sketchy
    let filteredMinimumDistance = 100000;
    const filteredPokemonIdArray: number[] = [];
    const targetPokemonArray: { pokemon: SimplePokemon; distance: number }[] =
      [];

    if (filteredData.length > 0) {
      filteredData.forEach((possiblePokemon) => {
        storedData.forEach((targetPokemon) => {
          const distance = findOsaDistance(
            possiblePokemon.name,
            targetPokemon.name
          );
          if (distance <= filteredMinimumDistance) {
            targetPokemonArray.push({
              pokemon: targetPokemon,
              distance: distance,
            });
            filteredMinimumDistance = distance;
          }
        });
      });
      targetPokemonArray.forEach(({ pokemon, distance }) => {
        if (distance == filteredMinimumDistance) {
          filteredPokemonIdArray.push(pokemon.id);
        }
      });
    }

    const resultId =
      minimumDistance < filteredMinimumDistance
        ? pokemonWithMinimumDistanceId
        : filteredPokemonIdArray[
            Math.floor(Math.random() * filteredPokemonIdArray.length)
          ];
    return resultId;
  }
  return 0;
}
