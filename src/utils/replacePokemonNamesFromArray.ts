import { SimplePokemon } from "../types/SimplePokemon";
import { pokemonNameExceptions } from "../variables/pokemonNameExceptions";
import { POKEMON_LIMIT } from "../variables/globalVariables";

// Change the name of pokeom in the list into lower case
export default function replacePokemonNamesFromArray(
  pokemonArray: SimplePokemon[]
) {
  pokemonNameExceptions.forEach((pokemon) => {
    if (POKEMON_LIMIT > pokemon.id) {
      pokemonArray[pokemon.id - 1].name = pokemon.name.toLowerCase();
    }
  });
  return pokemonArray;
}
