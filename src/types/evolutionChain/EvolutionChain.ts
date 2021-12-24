import { SimplePokemon } from "../SimplePokemon";
import { Chain } from "./Chain";

export type evolutionPath = SimplePokemon[];
export interface EvolutionChain {
  id: number;
  baby_trigger_item: { name: string; url: string };
  chain: Chain;
}
