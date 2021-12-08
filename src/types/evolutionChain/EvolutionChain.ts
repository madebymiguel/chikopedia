import { Chain } from "./Chain";

export interface EvolutionChain {
    id: number;
    baby_trigger_item: {name: string; url: string; };
    chain: Chain;
}