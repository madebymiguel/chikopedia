import { Pokemon } from "../types/pokemon/Pokemon";
import { SimplePokemon } from "../types/SimplePokemon";

// Make the pokemon simplified so that it is lighter space-wise.
export default function simplifyPokemon(pokemon: Pokemon) {
  const simplifiedPokemon: SimplePokemon = {
    name: pokemon.name,
    id: pokemon.id,
    sprite: pokemon.sprites.front_default,
  };
  return simplifiedPokemon;
}
