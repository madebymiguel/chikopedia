import { PokemonAbility } from "./PokemonAbility";
import { PokemonStat } from "./PokemonStat";
import { PokemonType } from "./PokemonType";

export interface Pokemon {
  abilities: PokemonAbility[]; // Ability[];
  base_experience: number;
  forms: any[]; // Form[];
  game_indices: any; // GameIndex;
  height: number;
  held_items: any[]; // Item[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[]; //Move[]
  name: string;
  order: number;
  past_types: unknown[]
  species: any; // Specie
  sprites: any; // Sprite
  stats: PokemonStat[]; // Stat[]
  types: PokemonType[];
  weight: number;
}
