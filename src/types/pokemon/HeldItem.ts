import { HeldItemVersionDetails } from "./HeldItemVersionDetails";

export interface PokemonHeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: HeldItemVersionDetails[];
}
