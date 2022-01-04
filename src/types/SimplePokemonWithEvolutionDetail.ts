import { EvolutionDetail } from "./evolutionChain/EvolutionDetail";
import { SimplePokemon } from "./SimplePokemon";

export type evolutionPath = SimplePokemonWithEvolutionDetail[];
export interface SimplePokemonWithEvolutionDetail {
  simplePokemon: SimplePokemon;
  evolutionDetail: EvolutionDetail[];
}
