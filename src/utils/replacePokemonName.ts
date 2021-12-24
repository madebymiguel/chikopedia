import { Pokemon } from "../types/pokemon/Pokemon";
import { pokemonNameExceptions } from "../variables/pokemonNameExceptions";

export default function replacePokemonName(pokemon: Pokemon) {
  const findPokemon = pokemonNameExceptions.filter((pokemonObject) => {
    if (pokemonObject.id == pokemon.id) {
      return pokemonObject;
    }
  });
  if (findPokemon.length > 0) {
    pokemon.name = findPokemon[0].name.toLowerCase();
  }
  return pokemon;
}
