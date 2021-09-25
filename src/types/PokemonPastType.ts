import { PokemonType } from "./PokemonType";

export interface PokemonPastType {
  generation: {
    name: string;
    url: string;
  };
  types: PokemonType[];
}
