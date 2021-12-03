import { PokemonAbility } from "./PokemonAbility";
import { PokemonForm } from "./PokemonForm";
import { PokemonStat } from "./PokemonStat";
import { PokemonType } from "./PokemonType";
import { PokemonGameIndex } from "./PokemonGameIndex";
import { PokemonHeldItem } from "./PokemonHeldItem";
import { PokemonMove } from "./PokemonMove";
import { PokemonPastType } from "./PokemonPastType";
import { PokemonSprites } from "./PokemonSprites";

export interface Pokemon {
  abilities: PokemonAbility[]; // Ability[];
  base_experience: number;
  forms: PokemonForm[]; // Form[];
  game_indices: PokemonGameIndex[]; // GameIndex;
  height: number;
  held_items: PokemonHeldItem[]; // Item[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[]; //Move[]
  name: string;
  order: number;
  past_types: PokemonPastType[];
  species: { name: string; url: string }; // Specie
  sprites: PokemonSprites; // Sprite
  stats: PokemonStat[]; // Stat[]
  types: PokemonType[];
  weight: number;
}
