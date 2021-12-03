import { Pokemon } from "../types/Pokemon";
import { pokemonNameExceptions } from "../Variables/pokemonNameExceptions";

export default function replacePokemonName(pokemon: Pokemon) {
  const findPokemon = pokemonNameExceptions.filter((pokemonObject) => {
    if (pokemonObject.id == pokemon.id) {
      return pokemonObject;
    }
  });
  if (findPokemon.length > 0) {
    pokemon.name = findPokemon[0].name.toLowerCase();
    console.log("pokemon.name", pokemon.name);
  }
  return pokemon;
}
