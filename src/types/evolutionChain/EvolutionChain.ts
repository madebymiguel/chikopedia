import { Chain } from "./Chain";
import { SimplePokemon } from "../SimplePokemon";

export type evolutionPath = SimplePokemon[];
export interface EvolutionChain {
  id: number;
  baby_trigger_item: { name: string; url: string };
  chain: Chain;
}
