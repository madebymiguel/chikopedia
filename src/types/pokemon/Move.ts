import { MoveVersionGroupDetails } from "./MoveVersionGroupDetails";

export interface PokemonMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: MoveVersionGroupDetails[];
}
