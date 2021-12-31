import simplifyPokemon from "./simplifyPokemon";
import { Pokemon } from "../types/pokemon/Pokemon";
import { SimplePokemon } from "../types/SimplePokemon";

export default function simplifyPokemonArray(pokemonArray: Pokemon[]) {
  const simplifiedPokemon: SimplePokemon[] = pokemonArray.map(simplifyPokemon);
  return simplifiedPokemon;
}
