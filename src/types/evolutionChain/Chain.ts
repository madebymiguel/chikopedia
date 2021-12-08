import { EvolutionDetail } from "./EvolutionDetail";

export interface Chain {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: { name: string; url: string };
}
