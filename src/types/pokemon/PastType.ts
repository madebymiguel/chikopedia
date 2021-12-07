import { PokemonType } from "./Type";

export interface PokemonPastType {
  generation: {
    name: string;
    url: string;
  };
  types: PokemonType[];
}
