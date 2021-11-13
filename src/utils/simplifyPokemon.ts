import { Pokemon } from "../types/Pokemon";
import { SimplePokemon } from "../types/SimplePokemon";

export default function simplifyPokemon(pokemonArray: Pokemon[]) {
  const simplifiedPokemon: SimplePokemon[] = pokemonArray.map((pokemon) => {
    const name = pokemon.name;
    const id = pokemon.id;
    const sprite = pokemon.sprites.front_default;
    return { name, id, sprite };
  });
  return simplifiedPokemon;
}
