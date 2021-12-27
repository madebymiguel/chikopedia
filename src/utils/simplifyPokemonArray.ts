import { Pokemon } from "../types/pokemon/Pokemon";
import { SimplePokemon } from "../types/SimplePokemon";
import simplifyPokemon from "./simplifyPokemon";

export default function simplifyPokemonArray(pokemonArray: Pokemon[]) {
  const simplifiedPokemon: SimplePokemon[] = pokemonArray.map(simplifyPokemon);
  return simplifiedPokemon;
}
