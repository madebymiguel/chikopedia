import { PokemonLimitItem } from "./PokemonLimitItem";

export interface PokemonLimit {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonLimitItem[];
}
