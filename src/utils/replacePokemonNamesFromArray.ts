import { pokemonNameExceptions } from "../Variables/pokemonNameExceptions";
import { SimplePokemon } from "../types/SimplePokemon";
import { POKEMON_LIMIT } from "../Variables/globalVariables";

export default function replacePokemonName(pokemonArray: SimplePokemon[]) {
  pokemonNameExceptions.forEach((pokemon) => {
    if (POKEMON_LIMIT > pokemon.id) {
      pokemonArray[pokemon.id - 1].name = pokemon.name.toLowerCase();
    }
  });
  return pokemonArray;
}
