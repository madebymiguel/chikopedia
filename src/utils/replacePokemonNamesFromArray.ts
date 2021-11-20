import { pokemonNameExceptions } from "../Variables/pokemonNameExceptions";
import { SimplePokemon } from "../types/SimplePokemon";

export default function replacePokemonName(pokemonArray: SimplePokemon[]) {
  pokemonNameExceptions.forEach((pokemon) => {
    pokemonArray[pokemon.id - 1].name = pokemon.name.toLowerCase();
  });
  return pokemonArray;
}
